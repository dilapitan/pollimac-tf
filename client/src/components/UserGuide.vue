<template>
  <v-container id="container">
    <v-layout column xs6 offset-xs2 class="pl-4">
      <v-flex>
        <h1>Documentation</h1>
      </v-flex>
      <br>
      <v-flex>
        <h2>Classification of pollen images</h2>
        <p>
          Classification using can be thru <b>raw images</b>
        </p>
        <h3>Raw images</h3>
        <p> The classify is created using Google's TensorFlow for Poets. Having the accuracy of <b>98.06%</b> in classifying images.
        <p>
          Using raw image as an input, simply upload an image for the app to classify what species it is.
        </p>

        <h2>Admin</h2>
        <p>
          Admin can do the following: <b>add</b> a new classifier and <b>change</b> the current classifier
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default{
}
</script>

<style scoped>
#container {
  text-align: left;
}

h1 {
 font-size: 50px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 20px;
}

p {
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
}
</style>
