<template>
  <v-container>
    <v-layout
    row
    justify-center
   >
    <v-flex xs4>
      <v-btn
      dark
      class="orange darken-3 button"
      to="login"
      >NORMAL USER
      </v-btn>
    </v-flex>
    <v-flex xs4>
      <v-btn
      dark
      class="orange darken-3 button"
      to="loginAdmin"
      >ADMIN USER
      </v-btn>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default{
}
</script>

<style scoped>

.button {
  height: 10vh;
  width: 17vw;
  font-size: 20px;
}

#button_label {
  font-size: 15px;
  font-family: "Times New Roman", Times, serif;
}

</style>
