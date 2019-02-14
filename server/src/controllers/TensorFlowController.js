const imageDirectory = 'src/uploads/'
const fs = require('fs')
let classifierName = ''

module.exports = {
  classify (req, res) {
    try {
      // read the current classifier to be added in the script
      fs.readFile('src/current_classifier.txt', 'utf8', function(err, data) {
        if (err) throw err
        classifierName = data
        console.log('Classifier name 1: ' + classifierName)
      })

      setTimeout(function() {
        fs.readdir(imageDirectory, (err, files) => {    
          console.log('Classifier name 2: ' + classifierName)
          
          let img = ''
          length = files.length
          img = files[length-1] // get the latest uploaded image
  
          let imageUrl = ' ../../uploads/' + img
          let scriptCommand = 'sh src/run.sh ' + classifierName + ' ' + imageUrl
 console.log(scriptCommand);
          // executing a shell script that executes a python script (TF part)
          const exec = require('child_process').exec
          exec(scriptCommand, function(code, stdout, stderr) {
            console.log('Classifying...')
            console.log(stdout)
            res.send({
              message: stdout // output
            })
            
            console.log('Classifying done!')
          })
        })
      }, 2000)
    } catch (err) {
      throw err
    }
  }
}
