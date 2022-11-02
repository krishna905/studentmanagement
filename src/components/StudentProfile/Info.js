import React from 'react';
import { StudentContext } from '../StudentProfile/context/context';

const UserInfo = () => {
  const { studentUser } = React.useContext(StudentContext);
  const [
    { TotalNoOfSubjects, CGPA, NoOfSports, Overall_Attendence_percentage },
  ] = studentUser;
  // console.log(`studentuser is ${CGPA}`);

  const students = [
    {
      id: 1,
      icon: <i className="fas fa-book fa-2x"></i>,
      label: 'Subjects',
      value: TotalNoOfSubjects,
      color: 'pink',
    },
    {
      id: 2,
      icon: <i className="fas fa-graduation-cap fa-2x"></i>,
      label: 'CGPA',
      value: CGPA,
      color: 'green',
    },
    {
      id: 3,
      icon: <i className="fas fa-running fa-2x"></i>,
      label: 'Sports',
      value: NoOfSports,
      color: 'purple',
    },
    {
      id: 4,
      icon: <i className="far fa-calendar-alt fa-2x"></i>,
      label: 'Attendance%',
      value: Overall_Attendence_percentage,
      color: 'yellow',
    },
  ];

  return (
    <section className="infoCards1 section">
      <div className="infoCards2 container-fluid section-center">
        {students.map((student) => {
          return (
            <article className="carditem bg-dark" key={student.id}>
              <span className={`${student.color}`}>{student.icon}</span>
              <div>
                <h3>{student.value}</h3>
                <p>{student.label}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default UserInfo;
