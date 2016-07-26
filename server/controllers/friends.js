var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function sendResults(res) {
  return (err, result) => { res.json(err? {error: err}: result); }
}

function FriendsController(){
  this.index    = (req,res) => { Friend.find({}, sendResults(res)) };
  this.show     = (req,res) => {
    Friend.findOne({_id: req.params.id}, sendResults(res)) 
  };
  this.create   = (req,res) => {
    var friend = new Friend({
      name: req.body.name,
      birthday: req.body.birthday
    });
    friend.save(sendResults(res))
  };
  this.update   = (req,res) => {
    Friend.update(
      {_id: req.params.id},
      {$set: {
        name: req.body.name,
        birthday: req.body.birthday
      }},
      sendResults(res)
    )
  };
  this.delete   = (req,res) => { 
    Friend.remove({_id: req.params.id}, 
      (err) => { res.json( err? {error: err} : {}); }
    ) 
  };
}
module.exports = new FriendsController(); // what does this export?