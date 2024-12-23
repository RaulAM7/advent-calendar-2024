// montamos el express router
const express = require('express')
const router = express.Router()


router.use(express.static(__dirname + './views'))

router.get("/advent", (req, res) => {
    const viewsIndex = __dirname + "/views/index.html"
    res.sendFile(viewsIndex)
})


module.exports = router