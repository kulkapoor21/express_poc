import { connect } from 'mongoose'

const connectDb = async () => {
  try {
    await connect( process.env.MONGODB_URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    })
    console.log('Db Connected')
  } catch (err) {
    console.log('Db Error: ', err)
  }
}

export default connectDb
