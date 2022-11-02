require('dotenv').config();
const Student = require('../../models/student');
const Faculty = require('../../../DataBases/models/faculty');
const Login = require('../../models/login');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

module.exports = function (router) {
  router.get('/student', authenticateToken, function (req, res) {
    Student.find({}, (err, student) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!student) {
          res.json({
            success: false,
            message: 'No records found.',
          });
        } else {
          res.json({ success: true, student: student });
        }
      }
    });
  });

  router.post('/student', authenticateToken, function (req, res) {
    let note = new Student(req.body);
    note.save(function (err, note) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(note);
    });
  });

  router.get('/student/:id', authenticateToken, function (req, res) {
    Student.find({ CollegeId: req.params.id }, (err, student) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!student) {
          res.json({ success: false, message: 'No student found.' });
        } else {
          res.json({ success: true, student: student });
        }
      }
    });
  });

  router.put('/updateStudent/:id', authenticateToken, (req, res) => {
    if (!req.params.id) {
      res.json({ success: false, message: 'No student id provided' });
    } else {
      Student.findOne({ CollegeId: req.params.id }, (err, student) => {
        if (err) {
          res.json({ success: false, message: 'Not a valid student id' });
        } else {
          student.StudentName = req.body.StudentName;
          student.CollegeId = req.body.CollegeId;
          student.EmailId = req.body.EmailId;
          student.PhoneNo = req.body.PhoneNo;
          student.FeeStatus = req.body.FeeStatus;
          student.CGPA = req.body.CGPA;
          // student.English = req.body.English;
          // student.Science = req.body.Science;
          // student.Maths = req.body.Maths;
          // student.History = req.body.History;
          // student.French = req.body.French;
          // student.bio = req.body.bio;

          // student.TotalNoOfSubjects = req.body.TotalNoOfSubjects;
          // student.cricket = req.body.cricket;
          // student.kabadi = req.body.kabadi;
          // student.badminton = req.body.badminton;
          // student.basketball = req.body.basketball;
          // student.hockey = req.body.hockey;

          // student.img = req.body.img;
          // student.classStrength = req.body.classStrength;
          // student.class = req.body.class;
          // student.NoOfSports = req.body.NoOfSports;

          // student.Overall_Attendence_percentage =
          //   req.body.Overall_Attendence_percentage;
          // student.AJanFebMarch = req.body.AJanFebMarch;
          // student.AAprMayJun = req.body.AAprMayJun;
          // student.AJulyAugSept = req.body.AJulyAugSept;
          // student.AOctNov = req.body.AOctNov;
          // student.ADec = req.body.ADec;
          // student.Notification1 = req.body.Notification1;
          // student.Notification2 = req.body.Notification2;
          // student.Notification3 = req.body.Notification3;
          // student.Notification4 = req.body.Notification4;
          // student.Notification5 = req.body.Notification5;
          student.save((err) => {
            if (err) {
              res.json({ success: false, message: err });
            } else {
              res.json({ success: true, message: 'student Updated!' });
            }
          });
        }
      });
    }
  });

  router.delete('/deletestudent/:id', authenticateToken, (req, res) => {
    // check id ID was provided in parameters
    if (!req.params.id) {
      res.json({ success: false, message: 'No id provided ' }); //Return error message
    } else {
      // Check if id is found in database
      Student.findOne({ _id: req.params.id }, (err, student) => {
        // Check if error was found
        if (err) {
          res.json({ success: false, message: 'Invalid Id' }); //Return error message
        } else {
          // Remove the student from database
          student.remove((err) => {
            if (err) {
              res.json({ success: false, message: err }); //Return error message
            } else {
              res.json({ success: true, message: 'Student deleted!' }); //Return success message
            }
          });
        }
      });
    }
  });

  // Teachers DB Get Request
  router.get('/faculty', async (req, res) => {
    try {
      const faculty = await Faculty.find({});
      res.status(200).json(faculty);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });

  // Get by Id
  router.get('/faculty/:id', async (req, res) => {
    const id = req.params;
    try {
      const faculty = await Faculty.findById(id);
      res.status(200).json(faculty);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });

  // Post Request
  router.post('/postFaculty', async (req, res) => {
    const {
      facultyName,
      facultyId,
      classNo,
      selectedFile,
      facultyEmail,
      phone,
    } = req.body;

    const faculty = new Faculty({
      facultyName,
      facultyId,
      classNo,
      selectedFile,
      facultyEmail,
      phone,
    });

    try {
      await faculty.save();

      res.json({ faculty });
      console.log(faculty);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  });

  // Put Request

  // create mongose method to update a existing record into collection
  router.put('/updateFaculty/:id', async (req, res) => {
    let id = req.params.id;
    // const {
    //   facultyName,
    //   facultyId,
    //   classNo,
    //   selectedFile,
    //   facultyEmail,
    //   phone,
    // } = req.body;

    // const faculty = new Faculty({
    //   facultyName,
    //   facultyId,
    //   classNo,
    //   selectedFile,
    //   facultyEmail,
    //   phone,
    // });

    await Faculty.findByIdAndUpdate(
      id,
      {
        facultyName: req.body.facultyName,
        facultyId: req.body.facultyId,
        classNo: req.body.classNo,
        selectedFile: req.body.selectedFile,
        facultyEmail: req.body.facultyEmail,
        phone: req.body.phone,
      },
      function (err, newfaculty) {
        if (err) {
          res.sendStatus(409).json({ message: 'not updated' });
        } else {
          res.json({ newfaculty });
        }
      }
    );
  });

  // Delete Request
  router.delete('/deleteFaculty/:id', (req, res) => {
    if (!req.params.id) {
      res.json({ success: false, message: 'No id provided' });
    } else {
      Faculty.findOne({ _id: req.params.id }, (err, faculty) => {
        if (err) {
          res.json({ success: false, message: 'Invalid id' });
        } else {
          faculty.remove((err) => {
            if (err) {
              res.json({ success: false, message: err });
            } else {
              res.json({ success: true, message: 'Faculty record deleted' });
            }
          });
        }
      });
    }
  });

  // Admin DB

  router.post('/changepassword', async (req, res) => {
    const { token, newpassword } = req.body;
    try {
      const admin = jwt.verify(token, 'Sohel@secretKey');
      console.log(admin);
      const _id = admin.id;
      await Login.updateOne(
        { _id },
        {
          $set: { password: newpassword },
        }
      );
      res.json({ status: 'ok' });
    } catch (error) {
      res.json({ status: 'error', message: 'not the admin' });
    }
  });

  router.post(
    '/login',
    [
      check('userName', 'Name should be atleast 5 charecters').isLength({
        min: 5,
      }),
    ],
    [
      check('password', 'Password is Required').isLength({
        min: 1,
      }),
    ],
    function (req, res) {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array()[0].msg });
      }
      Login.findOne(
        { userName: req.body.userName, password: req.body.password },
        (err, login) => {
          if (err) {
            res.status(400).json({
              error: 'Username doesnot match',
            });
          }

          if (login === null) {
            res.json({ success: false, message: 'Login Failed !!!!' });
          } else if (
            login.userName === req.body.userName &&
            login.password === req.body.password
          ) {
            const { userName } = login;
            const logindata = { id: login._id, userName: userName };

            const token = jwt.sign(logindata, 'Sohel@secretKey');

            return res.json({
              success: true,
              data: token,
              message: 'Login Successful',
            });
          }
        }
      );
    }
  );

  router.post('/addadmin', authenticateToken, function (req, res) {
    let note = new Login(req.body);
    note.save(function (err, note) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(note);
    });
  });
  router.put('/login', (req, res) => {
    if (!req.body._id) {
      res.json({ success: false, message: 'No login id provided' });
    } else {
      Login.findOne({ _id: req.body._id }, (err, login) => {
        if (err) {
          res.json({ success: false, message: 'Not a valid login id' });
        } else {
          login.userName = req.body.userName;
          login.password = req.body.password;
          login.save((err) => {
            if (err) {
              res.json({ success: false, message: err });
            } else {
              res.json({ success: true, message: 'login record Updated!' });
            }
          });
        }
      });
    }
  });

  router.delete('/login/:id', (req, res) => {
    if (!req.params.id) {
      res.json({ success: false, message: 'No id provided' });
    } else {
      Login.findOne({ _id: req.params.id }, (err, login) => {
        if (err) {
          res.json({ success: false, message: 'Invalid id' });
        } else {
          login.remove((err) => {
            if (err) {
              res.json({ success: false, message: err });
            } else {
              res.json({ success: true, message: 'Login record deleted' });
            }
          });
        }
      });
    }
  });

  router.get('/login', function (req, res) {
    Login.find({}, (err, login) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!login) {
          res.json({ success: false, message: 'No login records found' });
        } else {
          res.json({ success: true, login: login });
        }
      }
    });
  });
};

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  console.log('Hi SOhel@12345');
  console.log(token);
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'Sohel@secretKey', (err, logindata) => {
    if (err) {
      return res.json({ msg: 'wrong admin' });
    }
    // res.sendStatus(403)
    // req.logindata = logindata;
    next();
  });
}
