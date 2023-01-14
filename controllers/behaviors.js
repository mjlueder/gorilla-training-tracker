import { Behavior } from "../models/behavior.js"

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
  // create,

}