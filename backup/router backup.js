(insert,(req,res)=>{

});


// router.get('/add', (req, res) => {
//   res.render('add-user');
// });

// router.post('/add', (req, res) => {

//   const stud = new StudentModel();
//   stud.stdid=req.body.stdid;
//   stud.stdname=req.body.stdname;
//   stud.stdemail=req.body.stdemail;
//   stud.save=(err, docs) => {
//     if(!err) {
//       res
//     }
//   }

//   console.log(req.body);
//   // res.render('add-student');
// });

// user.save((err) => {
//   // console.log(req.body);
//   const { error, docs } = validation(req.body);
//   // console.log(error);
//   if (!err && !error) {
//     res.status(201).json({ message: 'Data Saved' });
//   } else {
//     // console.log(err);
//     res.status(404).json({ error });
//   }
// });

// user.save((err) => {
// //   // console.log(req.body);

// // //  const error = validation(req.body);
// // //  console.log(error);

// //   if (!err) {
// //     console.log(!err);
// //     res.status(201).json({ message: 'Data Saved' });
// //   } else {
// //     // if (docs) {
// //     // res.status(404).json(docs);
// //     // }
// //     res.status(404).json({ err });
// //   }
// });

// router.put('/:id', (req, res) => {
//   const user = req.body;
//   Users.updateMany(user._id, (err, doc) => {
//     if (!err) {
//       ({ first_name: req.body.first_name });
//       res.status(200).json(doc);
//     } else {
//       res.status(404).json({ message: 'User Id not found' });
//     }
//   });
// });