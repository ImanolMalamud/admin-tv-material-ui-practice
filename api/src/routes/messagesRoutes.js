const { Router } = require("express")
const controlers = require("../controllers/Controllers")
const { Message } = require("../db")

const router = Router()

router.post("/", async (req, res) => {
  const body = req.body

  try {
    const messageInfo = await controlers.msgCreate(body)
    res.status(201).send(messageInfo)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.get("/", async (req, res) => {
  try {
    const allMessages = await controlers.getAllMessages()

    if (allMessages.length === 0) return res.send("No messages in db")
    res.json(allMessages)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id
    const { isActive } = req.body

    // Find the item by UUID
    const item = await Message.findOne({ where: { id } })

    if (!item) {
      return res.status(404).json({ message: "Item not found" })
    }

    // Update the isActive property
    await item.update({ isActive })

    return res.json(item)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Server error" })
  }
})

module.exports = router
