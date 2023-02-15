const { Message } = require("../db")

const msgCreate = async body => {
  const { id, chanel, data } = body

  if (!chanel || !data) {
    throw new Error("Faltan datos")
  }

  // Los datos integer del body llegan como string en realidad. Les hago parseInt por eso.
  let newMessage = await Message.create({
    id: id,
    chanel: chanel,
    data: data,
  })

  // stringify para que se loguee mas lindo
  // console.log("newMessage: \n", JSON.stringify(newMessage, null, 2));

  return newMessage
}

const getAllMessages = async () => {
  const messages = await Message.findAll()

  return messages
}

module.exports = {
  msgCreate,
  getAllMessages,
}
