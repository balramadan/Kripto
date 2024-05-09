<template>
    <div class="container-input">
      <div class="mini-header">
        <h2>Dynamic Caesar Cipher</h2>
      </div>
      <div class="input-section">
        <h2>Encrypt</h2>
        <form id="formInput" @submit.prevent="encrypt">
          <div class="inputDiv">
            <input
              class="inputPlainText"
              type="text"
              v-model.lazy="inputPlainText"
              placeholder="Masukkan plain text"
            />
            <input
              class="inputGeser"
              type="number"
              v-model.lazy="inputGeser"
              placeholder="Masukkan angka geser"
            />
          </div>
          <input class="submit" type="submit" value="Encrypt" />
        </form>
      </div>
      <div class="output">
        <div class="text-output">
          <h3>Plain Text:</h3>
          <span> {{ inputPlainText }} </span>
        </div>
        <div v-if="dataResponse" class="text-output">
          <h3>Hasil Encrypt:</h3>
          <span> {{ dataResponse.enkripsi_text }} </span>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  import { createAlova } from "alova";
  import GlobalFetch from "alova/GlobalFetch";
  
  export default {
    data() {
      return {
        inputPlainText: "",
        inputGeser: "",
        dataResponse: [],
        error: [],
      };
    },
    methods: {
      async encrypt() {
        await axios
          .post("https://testinggolang.vercel.app/api/en", {
            str: this.inputPlainText,
            geser: this.inputGeser,
          })
          .then((response) => {
            this.dataResponse = response.data;
          })
          .then((error) => {
            this.error = error;
          });
  
        // const alovaInstance = createAlova({
        //   requestAdapter: GlobalFetch(),
        // });
  
        // const response = await alovaInstance.Post(
        //   "https://testinggolang.vercel.app/api/en",
        //   {
        //     str: this.inputPlainText,
        //     geser: this.inputGeser,
        //   }
        // );
  
        // response.then(response => {
        //   console.log(response);
        // })
  
        // response.catch(error => {
        //   console.log(error);
        // })
      },
    },
  };
  </script>
  <style>
  .container-input {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .mini-header {
    text-align: center;
    margin: 20px 0;
    font-size: 10px;
    color: #333;
    opacity: 40%;
  }
  
  @media only screen and (max-width: 640px) {
    .inputPlainText {
      width: 250px;
    }
    .submit {
      font-size: 14px;
    }
    .output {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  </style>
  