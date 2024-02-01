import UserService from '../service/userService.js'

export default class userController {
  static login = async (req, res) => {
    try {
      const user = await UserService.loginUser(req.body)
      res.status(200).json(user)
    } catch (err) {
      if (err.message.includes("User Not Found")) {
        res.status(404).send(err.message)
      } else if (err.message.includes("Invalid Credentials")) {
        res.status(401).send(err.message)
      } else {
        console.error(err.message)
        res.status(500).send({ error: err.message })
      }
    }
  }

  static register = async (req, res) => {
    try {
      const user = await UserService.registerUser(req.body)
      res.status(200).json(user)
    } catch (err) {
      if (
        err.message.includes("Validation error") ||
        err.message.includes("User already exists!")
      ) {
        res.status(400).send(err.message)
      } else {
        res.status(500).json({ error: err.message })
      }
    }
  }
}
