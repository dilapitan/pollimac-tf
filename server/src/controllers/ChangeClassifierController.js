const fs = require('fs')

module.exports = {
  async changeClassifier(req, res) {
    // writing the selected classifier in a file
    try {
      const proposedClassifier = await (req.body)
      const proposedClassifierDir = 'src/current_classifier.txt'
      fs.writeFile(proposedClassifierDir, proposedClassifier.message, function(err) {
        if (err) {
          throw err
        }
        res.send('done!')  
      })
    } catch (err) {
      res.send(err)
    }
  },

  showCurrentClassifier(req, res) {
    try {
      // read the file to know the current classifier
      fs.readFile('src/current_classifier.txt', 'utf8', function(err, data) {
        if (err) throw err
        let currentClassifier = ''
        res.send({
          currentClassifier: data 
        })
      })
    } catch (err) {
      res.send(err)
    }
  }
}