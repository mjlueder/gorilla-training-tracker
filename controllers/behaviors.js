import { Behavior } from "../models/behavior.js"
import { Gorilla } from "../models/gorilla.js"

function index(req, res){
  // console.log('Listing Behaviors!');
  Behavior.find({})
  .populate("gorilla")
  .populate("keeper")
  .then(behaviors => {
    res.render('behaviors/index', {
      behaviors,
      title: 'Training Behaviors'
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function newBehavior(req, res) {
  Gorilla.find({})
  .then(gorillas => {
    res.render('behaviors/new', {
      title: 'Add New Behavior',
      gorillas
    })
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  console.log('creating new behavior!');
  console.log(req.body)
  console.log(req.user.profile._id);
  req.body.keeper = req.user.profile._id
  Behavior.create(req.body)
  .then(behavior => {
    res.redirect('/behaviors')
  })
  .catch(err => {
    res.redirect('/')
    console.log(err);
  })
}

function show(req, res) {
  Behavior.findById(req.params.id)
  .populate('gorilla')
  .populate('keeper')
  .then(behavior => {
    res.render('behaviors/show', {
      title: 'Behavior Details',
      behavior
    })
  })
  .catch(err => {
    res.redirect('/')
    console.log(err);
  })
}

export {
  index,
  newBehavior as new,
  create,
  show,

}