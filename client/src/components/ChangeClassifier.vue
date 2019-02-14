<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        Current Classifier: <h3> {{ currentClassifier }}</h3>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-select
          :items="lists"
          label="Select a classifier"
          v-model="e1"
          single-line
          append-icon="v"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
         <v-btn
         @click="submit"
         >Submit</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <br>
        <p id="error"> {{ errorMessage }} </p>
        <p id="correct"> {{ correctMessage }} </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import ChangeClassifierService from '@/services/ChangeClassifierService'
import ListClassifiersService from '@/services/ListClassifiersService'
const config = require('../config/config')
export default {
  data () {
    return {
      currentClassifier: '',
      lists: [],
      e1: '',
      errorMessage: '',
      correctMessage: ''
    }
  },
  async mounted () { // show current classifier | list all classifiers
    const classifier = await ChangeClassifierService.showCurrentClassifier()
    this.currentClassifier = classifier.data.currentClassifier

    const classifiers = await ListClassifiersService.listClassifiers()
    this.lists = classifiers.data.classifiers
  },
  methods: {
    submit () {
      if (this.e1 === '') {
        this.errorMessage = 'Did not select any classifier!'
      } else if (this.e1 === this.currentClassifier) {
        this.errorMessage = 'Already current classifier!'
      } else {
        const output = {
          message: this.e1
        }
        // posting the selected classifier | to be written in file
        axios.post(`http://${config.ip}:8081/changeClassifier`, output)
          .then(res => {
            console.log(res)
          })
        this.errorMessage = ''
        this.currentClassifier = this.e1
        this.correctMessage = 'Changed the classifier to ' + this.currentClassifier
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
