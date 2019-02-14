const multer = require('multer')
const path = require('path')

module.exports = {
  uploadImage (req, res) {
    // Set storage path
    const storage = multer.diskStorage({
      destination: 'src/uploads/',
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
    })

    //  upload
    const upload = multer({
      storage: storage
    }).single('image')

    upload(req, res, (err) => {
      if (err) {
        throw err
      }
      else {
        res.send(req.file)
      }
    })
  }
}
