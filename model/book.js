import { Schema, model } from 'mongoose'
const bookSchema = Schema({
    id:{
        type: Number,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: false,
    },
    price:{
        type: Number,
        required: true,
    },
},
{
    versionKey: false
})


const bookModel = model('bookSchema', bookSchema, 'bookCollection')
export default bookModel