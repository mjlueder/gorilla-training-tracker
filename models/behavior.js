import mongoose from 'mongoose'

const Schema = mongoose.Schema

const entrySchema = new Schema({
  content: String,
  date: Date,
})

const behaviorSchema = new Schema({
  behavior: { type: String, required: true },
  gorilla: { type: Schema.Types.ObjectId, ref: 'Gorilla', required: true },
  keeper: { type: Schema.Types.ObjectId, ref: 'Profile' },
  status: { 
    type: String,
    enum: ['Shaping', 'Maintenance', 'Regressed']
  },
  comment: String,
  image: String,
  entries: [entrySchema],
}, {
  timestamps: true
})

const Behavior = mongoose.model('Behavior', behaviorSchema)

export {
  Behavior
}
