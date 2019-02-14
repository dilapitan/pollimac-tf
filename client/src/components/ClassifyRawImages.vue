<template>
  <v-container>

    <h1>Upload Raw Image</h1>
    <br>

    <v-layout row wrap>
      <v-flex>
        <p class="red--text"> {{ errorMessage }}</p>
        <p class="green--text"> {{ correctMessage }}</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <input
        type="file"
        @change="onFileSelected"
        accept ="image/*"
        />

        <v-btn
          dark
          class="orange darken-3"
          @click="uploadImage"
        >Upload</v-btn>
        <v-btn
          dark
          class="orange darken-3"
          @click="classifyImage"
        >Classify</v-btn>

        <!-- <v-btn
          dark
          class="orange darken-3"
          @click="savePdf"
        >Save</v-btn> -->
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs4 offset-xs4>
        <img id="prevImg" :src="imageUrl">
      </v-flex>
    </v-layout>

    <div id="pdf">
      <v-layout
        v-for="(output, i) in outputs" :key="i">
        <v-flex class="test" xs4>
          <img id="outputImage" :src="output.image">
        </v-flex>
        <v-flex class="test">
          <div class="amber lighten-4" v-for="(classification, j) in output.classifications" :key="j" xs4>
            <h3>{{ classification }}</h3>
          </div>
        </v-flex>
        <v-flex class="test" xs4>
          <p>Filename of image uploaded: </p>
          <h3> {{ output.imageName }}</h3>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'
import TensorFlowService from '@/services/TensorFlowService'
const config = require('../config/config')
export default {
  data () {
    return {
      selectedFile: null,
      classifications: [],
      imageUrl: '',
      errorMessage: '',
      correctMessage: '',
      image: '',
      imageName: '',
      outputs: []
    }
  },
  methods: {
    onFileSelected (event) { // for image preview
      this.selectedFile = event.target.files[0]
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(this.selectedFile)
      this.classifications = []
    },

    uploadImage () { // upload an image using axios
      if (this.selectedFile !== null) {
        const fd = new FormData()
        fd.append('image', this.selectedFile, this.selectedFile.name)
        axios.post(`http://${config.ip}:8081/uploadImage`, fd)
          .then(res => {
            console.log(res)
          })
        this.correctMessage = 'Image uploaded. Can now classify'
        this.errorMessage = ''
      } else {
        this.errorMessage = 'Please upload an image first'
      }
    },

    async classifyImage () {
      // render the results
      if (this.correctMessage !== '') {
        const message = await TensorFlowService.classify()
        const splitted = (message.data.message).split('\n')
        const length = (splitted.length) - 1
        for (let i = 0; i < (length); i++) {
          this.classifications.push(splitted[i])
        }

        this.image = this.imageUrl
        const output = {
          image: this.image,
          classifications: this.classifications,
          imageName: this.selectedFile.name
        }
        this.outputs.push(output)
        this.imageUrl = '' // clear the image preview
        this.correctMessage = ''
      } else {
        this.errorMessage = 'Please upload an image first'
      }
    }
  }
}
</script>

<style scoped>
#prevImg {
  height: 150px;
  border-bottom: solid 5px orange;
}

#outputImage {
  height: 150px;
}

.test {
  border: solid 2px black;
}
</style>
