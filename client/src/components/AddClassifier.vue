<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1>Add a Classifier</h1>
      </v-flex>
    </v-layout>
    <br><br>
    <v-layout row justify-center>
      <v-flex xs3 offset-xs1>
        <input
        type="file"
        @change="onFileSelected"
        accept ="file/*"
        />
      </v-flex>
      <v-flex xs1>
        <v-btn
          dark
          class="orange darken-3"
          @click="uploadFile"
        >UPLOAD</v-btn>
      </v-flex>
      <v-flex xs2 offset-xs1>
        <v-btn
          dark
          class="orange darken-3"
          @click="create"
        >ADD</v-btn>
      </v-flex>
    </v-layout>
    <br><br>
    <v-layout>
      <v-flex>
        <p id="error"> {{ errorMessage }}</p>
        <p id="correct"> {{ correctMessage }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import CreateClassifierService from '@/services/CreateClassifierService'
const config = require('../config/config')

export default {
  data () {
    return {
      errorMessage: '',
      correctMessage: '',
      selectedFile: null
    }
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
      if (this.selectedFile !== null) {
        this.errorMessage = ''
        this.correctMessage = 'Zip file attached. Can now add a classifier'
      }
    },

    uploadFile () {
      if (this.selectedFile === null) {
        this.errorMessage = 'Please select a .zip file first'
      } else {
        // post zip file
        const fd = new FormData()
        fd.append('zipfile', this.selectedFile, this.selectedFile.name)
        axios.post(`http://${config.ip}:8081/uploadZipFile`, fd)
          .then(res => {
            console.log(res)
          })
        this.correctMessage = 'Zip file uploaded. Can now train the classifier'
      }
    },

    create () {
      if (this.selectedFile !== null) {
        this.errorMessage = ''
        this.correctMessage = 'Added a new classifier.'
        const msg = CreateClassifierService.createClassifier()
        console.log(msg)
      } else {
        this.errorMessage = 'Upload a classifier first!'
      }
    }
  }
}
</script>

<style scoped>
#error {
  color: red;
}
#correct {
  color: green;
}
</style>
