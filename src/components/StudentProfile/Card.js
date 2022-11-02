/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { StudentContext } from './context/context';
import { Link } from 'react-router-dom';
const Card = () => {
  const { studentUser } = React.useContext(StudentContext);
  const [{ img, StudentName, FeeStatus, bio, CollegeId, EmailId }] =
    studentUser;
  console.log(bio);
  console.log(StudentName);
  return (
    <section className="studentCard">
      <header>
        <img src={img} alt={StudentName} />
        <div>
          <h4>{StudentName}</h4>
          <p>@{'Student'}</p>
        </div>
        <Link className="message" to="/chatwithstudent">
          Message
          <i className="fab fa-whatsapp"></i>
        </Link>
      </header>
      <p className="bio row row-cols-2 text-start">{bio} </p>
      <div className="links">
        <p>
          <i className="far fa-id-card "></i>{' '}
          <span className="ms-2">{CollegeId || '000000'}</span>
        </p>
        <p>
          <i className="fas fa-dollar-sign mx-1"></i>{' '}
          <span className="ms-2">{FeeStatus ? 'Paid' : 'Due'}</span>
        </p>
        <a href={`https://${bio}`} className="text-dark">
          <i className="fas fa-link"></i>
          <span className="ms-2">{EmailId}</span>
        </a>
      </div>
    </section>
  );
};
export default Card;
