const classifiersDir = 'src/classifiers/'
const fs = require('fs')

module.exports = {
  listClassifiers (req, res) {
    // giving all the classifiers available to the user
    fs.readdir(classifiersDir, (err, files) => {
      let len = files.length
      res.send({
        classifiers: files
      })
    })
  }
}