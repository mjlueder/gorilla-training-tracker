import { Behavior } from "../models/behavior.js"
import { Gorilla } from "../models/gorilla.js"

function index(req, res){
  console.log("Query", req.query);
  Behavior.find({})
  .populate("gorilla")
  .populate("keeper")
  .then(behaviors => {
    console.log(behaviors);
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

function edit(req, res) {
  Behavior.findById(req.params.id)
  .populate('gorilla')
  .populate('keeper')
  .then(behavior => {
    Gorilla.find({})
    .then(gorillas => {
      res.render('behaviors/edit', {
        title: 'Edit Behavior',
        behavior,
        gorillas
      })
    })
  })
  .catch(err => {
    res.redirect('/')
    console.log(err);
  })
}

function update(req, res) {
  Behavior.findById(req.params.id)
  .then(behavior => {
    if(behavior.keeper.equals(req.user.profile._id)) {
      behavior.updateOne(req.body)
      .then(() => {
        res.redirect(`/behaviors/${behavior._id}`)
      })
    } else {
      throw new Error("User is not authorized")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/behaviors')
  })
}

function deleteBehavior(req, res) {
  Behavior.findById(req.params.id)
  .then(behavior => {
    if (behavior.keeper.equals(req.user.profile._id)) {
      behavior.delete()
      .then(() => {
        res.redirect('/behaviors')
      })
    } else {
      throw new Error('User is not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/behaviors')
  })
}

export {
  index,
  newBehavior as new,
  create,
  show,
  edit,
  update,
  deleteBehavior as delete,
}