import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gorillaSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  sex: {
    type: String,
    enum: ['Male', 'Female']
  },
  group: { 
    type: String,
    enum: ['Family', 'Bachelor']
  },
  family: String,
  image: String,
}, {
  timestamps: true
})

const Gorilla = mongoose.model('Gorilla', gorillaSchema)

export {
  Gorilla
}
