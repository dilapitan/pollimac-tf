<template>
  <div class="root">
  <v-layout>
    <v-flex xs8 offset-xs2>
      <img id="icon" src="../assets/icon.png">
      <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div-->
      <h1 id="title">POLLIMAC TF</h1>
      <p id="title_label">a pollen image classifier using TensorFlow</p>
    </v-flex>
  </v-layout>
  <v-layout
    row
    justify-center
   >
    <v-flex xs6>
      <v-btn
      dark
      class="orange darken-3 button"
      to="UserGuide"
      >USER GUIDE
      </v-btn>
      <p id="button_label">Documentation</p>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
  font-size: 100px;
  color: black;
  text-align: center;
}

#title_label {
  font-size:30px;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
}

#button_label {
  font-size: 15px;
  font-family: "Times New Roman", Times, serif;
}

#icon {
  float:left;
}

.button {
  height: 10vh;
  width: 17vw;
  font-size: 20px;
}
</style>
