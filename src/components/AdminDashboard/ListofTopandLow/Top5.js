import React from 'react';
const Top5 = (data) => {
  console.log('inside top5');
  console.log(data);
  let allStudentstop = JSON.parse(JSON.stringify(data.data));
  console.log(allStudentstop);
  function compare(a, b) {
    if (a.CGPA > b.CGPA) {
      return -1;
    }
    if (a.CGPA > b.CGPA) {
      return +1;
    }
    return 0;
  }
  allStudentstop.sort(compare);
  allStudentstop.splice(5);

  return (
    <section className="TopPerformers">
      <div className="table-responsive">
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
          {allStudentstop.map((student) => (
            <tbody key={student._id}>
              <tr>
                <th>{student.CollegeId}</th>
                <td>{student.StudentName}</td>
                <td className="">{student.CGPA}/10</td>
                <td className="">{student.Overall_Attendence_percentage}%</td>
                <td>
                  <button className="btn btn-warning">Msg</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};
export default Top5;
