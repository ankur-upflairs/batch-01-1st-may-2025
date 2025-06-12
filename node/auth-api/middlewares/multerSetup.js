const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + '-' +file.originalname
    cb(null,  fileName)
  },
  limits: 10 * 10 *1024
  
})

module.exports.upload = multer({ storage: storage })
