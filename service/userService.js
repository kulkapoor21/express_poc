import { userModel, validateLoginUser } from '../model/user.js'
import { compare, genSalt, hash } from 'bcrypt'
import JWT from 'jsonwebtoken'

export default class userService {
  static loginUser = async (loginBody) => {
    try {
      const { email, password } = loginBody
      const user = await userModel.findOne({ email })
      if (!user) {
        throw new Error(`User Not Found`)
      }
      const isValidPassword = await compare(password, user.password)
      if (!isValidPassword) {
        throw new Error(`Invalid Credential`)
      }
      const token = JWT.sign({email: user.email, id: user._id},process.env.SECRET_KEY)
      return {user,token}
    } catch (err) {
      throw new Error(`Couldn't fetch user: ${err}`)
    }
  }

  static registerUser = async (registerBody) => {
    try {
      const { username, email, password } = registerBody
      const { error } = validateLoginUser.validate(registerBody)
      if (error) {
        throw new Error(`Validation error: ${error.details[0].message}`)
      }
      const existingUser = await userModel.findOne({ email })
      if (existingUser) {
        throw new Error(`User already exists!`)
      }
      const salt = await genSalt(10)
      const hashPassword = await hash(password, salt)
      const newUser = {
        username,
        email,
        password: hashPassword,
      }
      const user = await new userModel(newUser).save()
      const token = JWT.sign({email: user.email, id: user._id},process.env.SECRET_KEY)
      return {user,token}
    } catch (err) {
      throw new Error(`Unable to Register User: ${err}`)
    }
  }
}
