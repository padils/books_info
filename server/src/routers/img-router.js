const express = require('express')

const ImgControls = require('../controls/img-controls')

const router = express.Router()
const {upload} = require('../fileImg/upload')

router.post('/img/create/:id', upload.single('image'), ImgControls.createImg)
router.get('/img/:id', ImgControls.getImg)
router.delete('/img/:id', ImgControls.deleteImg)

module.exports = router
