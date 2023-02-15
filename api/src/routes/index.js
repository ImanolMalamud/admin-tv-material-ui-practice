const { Router } = require("express")
const messagesRoutes = require("./messagesRoutes")

const router = Router()

router.use("/messages", messagesRoutes)

module.exports = router
