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
      <RouterLink class="link" to="/de">Decrypt</RouterLink>
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
import { RouterLink } from "vue-router";

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
        .post("https://stokis.vercel.app/api/en", {
          str: this.inputPlainText,
          geser: this.inputGeser,
        })
        .then((response) => {
          this.dataResponse = response.data;
        })
        .then((error) => {
          this.error = error;
        });
    },
  },
  components: {
    RouterLink,
  }
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
.input-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
.input-section h2 {
  margin: 20px 0;
  font-size: 36px;
  color: darkorange;
}
#formInput {
  display: flex;
  flex-direction: row;
  box-shadow: inset rgba(0, 0, 0, 0.1);
}
.inputDiv {
  display: flex;
  flex-direction: column;
}
.inputPlainText {
  padding: 10px 20px;
  width: 500px;
  outline: none;
  border: 0.2px solid #333;
  border-bottom: 0;
  border-right: 0;
  border-radius: 8px 0 0 0;
}
.inputGeser {
  padding: 10px 20px;
  outline: none;
  border: 0.2px solid #333;
  border-right: 0;
  border-radius: 0 0 0 8px;
}
.submit {
  padding: 0 10px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  border: 0.5px solid #333;
  border-radius: 0 8px 8px 0;
  background: skyblue;
  transition: all ease-in-out 0.4s;
}
.submit:hover {
  cursor: pointer;
  background: darkturquoise;
}
.link {
  margin-top: 8px;
  text-decoration: none;
}
.output {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.text-output {
  text-align: center;
}
.text-output h3 {
  margin-bottom: 20px;
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
  .text-output {
    margin-bottom: 20px;
  }
}
</style>
