const fs = require('fs')
const zipFileDirectory = 'src/zipfiles/'

let classifierName = ''
module.exports = {
  createClassifier(req, res) {
    // upload a offline-created classifier and extract the zip in the 'classifiers' folder
    fs.readdir(zipFileDirectory, (err, files) => {
      let zf = '' // zip file
      let length = files.length 
      zf = files[length-1] // retrieving the latest uploaded zip file
    
      let zip_file_dir = 'src/zipfiles/' + zf
      let scriptCommand = 'unzip ' + zip_file_dir + ' -d src/classifiers'
  
      const exec = require('child_process').exec
      exec(scriptCommand, function(code, stdout, stderr) {
        console.log("Uploaded a new classifier")
        res.send({
          msg: 'Done'
        })
      })
    })
  }
}
