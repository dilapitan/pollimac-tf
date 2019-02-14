<template>
 <v-layout>
  <v-flex xs6 offset-xs3>
    <panel title="Classify an image via:">
     <br>
     <v-layout row justify-center>
        <v-flex xs6>
          <v-btn
          dark
          class="orange darken-3 button"
          to="ClassifyRawImages"
          >RAW IMAGE
          </v-btn>
          <p id="button_label">Upload an image</p>
        </v-flex>
      </v-layout>
    </panel>
    <br><br>
    <v-layout>
      <v-flex>
        <h1 class="orange--text darken-3"> Current Classifier: </h1>
        <p> {{ currentClassifier }} </p>
      </v-flex>
    </v-layout>
  </v-flex>
 </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import ChangeClassifierService from '@/services/ChangeClassifierService'
export default {
  data () {
    return {
      currentClassifier: ''
    }
  },
  async mounted () { // show current classifier
    const classifier = await ChangeClassifierService.showCurrentClassifier()
    this.currentClassifier = classifier.data.currentClassifier
  },
  components: {
    Panel
  }
}
</script>

<style scoped>

.button {
  height: 8vh;
  width: 13vw;
  font-size: 18px;
}

#button_label {
  font-size: 15px;
  font-family: "Times New Roman", Times, serif;
}

p {
  font-size: 5vh;
}
</style>
