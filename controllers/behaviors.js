import { Behavior } from "../models/behavior.js"
import { Gorilla } from "../models/gorilla.js"

function index(req, res){
  console.log('Listing Behaviors!');
  Behavior.find({})
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

// function create(req, res) {
//   Gorilla.create(req.body)
//   .then(gorilla => {
//     res.redirect('/gorillas')
//   })
//   .catch(err => {
//     res.redirect('/')
//     console.log(err);
//   })
// }

export {
  index,
  newBehavior as new,
  // create,

}