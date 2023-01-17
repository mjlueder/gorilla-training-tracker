import { Gorilla } from "../models/gorilla.js"
import { Behavior } from "../models/behavior.js"

function index(req, res){
  Gorilla.find({})
  .then(gorillas => {
    res.render('gorillas/index', {
      gorillas,
      title: 'Gorillas'
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  Gorilla.create(req.body)
  .then(gorilla => {
    res.redirect('/gorillas')
  })
  .catch(err => {
    res.redirect('/')
    console.log(err);
  })
}

function show(req, res){
  Gorilla.findById(req.params.id)
  .then(gorilla => {
    Behavior.find({ gorilla: req.params.id })
    .populate("keeper")
    .then(behaviors => {
      console.log(behaviors);
      res.render('gorillas/show', {
        title: 'Gorilla',
        gorilla,
        behaviors,
      })
    })
  })
}

function newGorilla(req, res) {
  res.render('gorillas/new', {
    title: 'Add a Gorilla'
  })
}

export {
  index,
  create,
  show,
  newGorilla as new,
}