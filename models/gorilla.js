import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gorillaSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  group: { 
    type: String,
    enum: ['Family', 'Bachelor']
  }
}, {
  timestamps: true
})

const Gorilla = mongoose.model('Gorilla', gorillaSchema)

export {
  Gorilla
}
