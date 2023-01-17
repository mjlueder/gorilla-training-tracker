import { Gorilla } from "../models/gorilla.js"

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
    res.render('gorillas/show', {
      title: 'Gorilla',
      gorilla
    })
  })
}

export {
  index,
  create,
  show,
}