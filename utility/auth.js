import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]
    if (token) {
      const user = jwt.verify(token, process.env.SECRET_KEY)
      req.userId = user._id
      next()
    } else {
      res.status(401).json('Unauthorized User')
    }
  } catch (err) {
    res.status(401).json(`Unauthorized User: ${err.message}`)
  }
}

export default auth
