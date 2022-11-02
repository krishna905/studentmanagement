import React, { useEffect } from 'react';
import { StudentContext } from '../../StudentProfile/context/context';
const SchoolInfo = () => {
  const { allStudents } = React.useContext(StudentContext);
  useEffect(() => {
    console.log('inside 01SchoolInfo');
    console.log(allStudents);
  });
  const students = [
    {
      id: 1,
      icon: <i className="fa fa-user-o fa-2x"></i>,
      label: 'Students',
      value: 25,
      color: 'pink',
    },
    {
      id: 2,
      icon: <i className="fa fa-chalkboard-teacher fa-2x"></i>,
      label: 'Teacher',
      value: 5,
      color: 'green',
    },
    {
      id: 3,
      icon: <i className="fas fa-running fa-2x"></i>,
      label: 'Sports',
      value: 5,
      color: 'purple',
    },
    {
      id: 4,
      icon: <i className="far fa-calendar-alt fa-2x"></i>,
      label: 'Attendance',
      value: '80%',
      color: 'yellow',
    },
  ];

  return (
    <section className="infoCards1 section">
      <div className="infoCards2 container-fluid section-center">
        {allStudents &&
          students.map((student) => {
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

export default SchoolInfo;
