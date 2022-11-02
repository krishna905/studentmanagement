import React from 'react';
import { StudentContext } from '../StudentProfile/context/context';
import Pie from './Charts/Pie';
import Column from './Charts/Column';
import Bar from './Charts/Bar';
import Doughnut from './Charts/Doughnut';
const Repos = () => {
  const { studentUser } = React.useContext(StudentContext);

  const [{ Overall_Attendence_percentage }] = studentUser;

  let Sports = [];
  let sportscount = 0;
  let Submarks = [];
  let subjectcount = 0;
  let Attendancedata = [];
  let Attendancecount = 0;
  let TotalMarks = 0;
  let SportsMarks = 0;
  for (const key in studentUser) {
    // console.log(`Key is ${key}`);
    for (let i in studentUser[key]) {
      // console.log(`${i}: ${studentUser[key][i]}`);
      // for Sports
      switch (i) {
        case 'cricket':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            SportsMarks += studentUser[key][i];
            Sports[sportscount] = { label: i, value: studentUser[key][i] };
            sportscount += 1;
            break;
          }

        case 'kabadi':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            SportsMarks += studentUser[key][i];
            Sports[sportscount] = { label: i, value: studentUser[key][i] };
            sportscount += 1;
            break;
          }
        case 'badminton':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            SportsMarks += studentUser[key][i];
            Sports[sportscount] = { label: i, value: studentUser[key][i] };
            sportscount += 1;
            break;
          }
        case 'basketball':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            SportsMarks += studentUser[key][i];
            Sports[sportscount] = { label: i, value: studentUser[key][i] };
            sportscount += 1;
            break;
          }
        case 'hockey':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            SportsMarks += studentUser[key][i];
            Sports[sportscount] = { label: i, value: studentUser[key][i] };
            sportscount += 1;
            break;
          }

        //SubMarks

        case 'English':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            TotalMarks += studentUser[key][i];
            Submarks[subjectcount] = { label: i, value: studentUser[key][i] };
            subjectcount += 1;
            break;
          }
        case 'Science':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            TotalMarks += studentUser[key][i];
            Submarks[subjectcount] = { label: i, value: studentUser[key][i] };
            subjectcount += 1;
            break;
          }
        case 'Maths':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            TotalMarks += studentUser[key][i];
            Submarks[subjectcount] = { label: i, value: studentUser[key][i] };
            subjectcount += 1;
            break;
          }
        case 'History':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            TotalMarks += studentUser[key][i];
            Submarks[subjectcount] = { label: i, value: studentUser[key][i] };
            subjectcount += 1;
            break;
          }
        case 'French':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            TotalMarks += studentUser[key][i];
            Submarks[subjectcount] = { label: i, value: studentUser[key][i] };
            subjectcount += 1;
            break;
          }
        // Attendance
        case 'AJanFebMarch':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            Attendancedata[Attendancecount] = {
              label: 'Jan-March',
              value: studentUser[key][i],
            };
            Attendancecount += 1;
            break;
          }
        case 'AAprMayJun':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            Attendancedata[Attendancecount] = {
              label: 'Apr-Jun',
              value: studentUser[key][i],
            };
            Attendancecount += 1;
            break;
          }
        case 'AJulyAugSept':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            Attendancedata[Attendancecount] = {
              label: 'July-Sept',
              value: studentUser[key][i],
            };
            Attendancecount += 1;
            break;
          }
        case 'AOctNov':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            Attendancedata[Attendancecount] = {
              label: 'Oct-Nov',
              value: studentUser[key][i],
            };
            Attendancecount += 1;
            break;
          }
        case 'ADec':
          if (studentUser[key][i] === 0 || studentUser[key][i] == null) {
            break;
          } else {
            Attendancedata[Attendancecount] = {
              label: 'Dec',
              value: studentUser[key][i],
            };
            Attendancecount += 1;
            break;
          }

        default:
        // console.log(sportscount);
      }
    }
  }
  // console.log(`Sports Marks are ${typeof SportsMarks}`);
  // console.log(`Total Marks are ${TotalMarks}`);
  // console.log(typeof Overall_Attendence_percentage);

  // Preparing the chart data
  let CompareStudent = [
    {
      label: 'Sports',
      value: String(SportsMarks),
    },
    {
      label: 'Marks',
      value: String(TotalMarks),
    },
    {
      label: 'Attendance',
      value: String(Overall_Attendence_percentage),
    },
  ];
  // let CompareStudent = [
  //   {
  //     label: 'SportsMarks',
  //     value: { SportsMarks },
  //   },
  //   {
  //     label: 'TotalMarks',
  //     value: { TotalMarks },
  //   },
  //   {
  //     label: 'AggregateAttendance',
  //     value: { Overall_Attendence_percentage },
  //   },
  // ];

  function Sortdata(a, b) {
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    return 0;
  }
  Sports.sort(Sortdata);
  Submarks.sort(Sortdata);
  // console.log(Sports);
  // console.log(JSON.stringify(Sports));
  // console.log(Submarks);
  // console.log(JSON.stringify(Submarks));

  return (
    <section className="section chart-div">
      <div className="section-center section-chart-center ">
        <Pie data={Sports} />
        <Column data={Submarks} />

        <Doughnut data={CompareStudent} />
        <Bar data={Attendancedata} />
      </div>
    </section>
  );
};
export default Repos;
