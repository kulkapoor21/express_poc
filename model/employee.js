import { Schema, model } from 'mongoose'

const employeeSchema = Schema({
    employeeId:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    position:{
        type: String,
        required: false,
    },
    department:{
        type: String,
        required: false,
    },
},
{
    versionKey: false
})


const employeeModel = model('employeeSchema', employeeSchema, 'employeeCollection')
export default employeeModel