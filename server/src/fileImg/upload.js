const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads')
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        '-' +
        Date.now() +
        '.' +
        file.mimetype.slice(file.mimetype.indexOf('/') + 1)
    )
  },
})

const upload = multer({storage: storage})

module.exports.upload = upload
