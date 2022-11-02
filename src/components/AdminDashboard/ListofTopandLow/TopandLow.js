import React from 'react';
import Top5 from './Top5';
import Low5 from './Low5';
import { StudentContext } from '../../StudentProfile/context/context';
function TopandLow() {
  const { allStudents } = React.useContext(StudentContext);
  return (
    <section className="section">
      <div className="section-center cardandnotifications">
        {allStudents && <Top5 data={allStudents}></Top5>}
        {allStudents && <Low5 data={allStudents}></Low5>}
      </div>
    </section>
  );
}

export default TopandLow;
