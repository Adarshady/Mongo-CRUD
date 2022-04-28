const {error} = validation(req.body);
  
if (error) {
  return res.status(422).send(error.details);
} else {
  User.save();
  console.log('data is saved');
  return res.status(201).json({ message:'data is saved'})
}