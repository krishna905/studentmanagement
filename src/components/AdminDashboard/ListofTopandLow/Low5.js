import React from 'react';
const Low5 = (data) => {
  console.log('inside Low5');
  let allStudentslow = JSON.parse(JSON.stringify(data.data));
  console.log(allStudentslow);
  console.log(data);
  function compare(a, b) {
    if (a.CGPA < b.CGPA) {
      return -1;
    }
    if (a.CGPA > b.CGPA) {
      return +1;
    }
    return 0;
  }
  allStudentslow.sort(compare);
  allStudentslow.splice(5);

  return (
    <section className="LowPerformers">
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">CLG ID</th>
              <th scope="col">Name</th>
              <th scope="col" className="">
                CGPA
              </th>
              <th scope="col">Attendace</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          {allStudentslow.map((student) => (
            <tbody key={student._id}>
              <tr>
                <th>{student.CollegeId}</th>
                <td>{student.StudentName}</td>
                <td className="">{student.CGPA}/10</td>
                <td className="">{student.Overall_Attendence_percentage}%</td>
                <td>
                  <button className="btn btn-danger">Msg</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};
export default Low5;
