import React from 'react';
import { StudentContext } from './context/context';

const Followers = () => {
  const { studentUser } = React.useContext(StudentContext);
  const [
    {
      Notification1,
      Notification2,
      Notification3,
      Notification4,
      Notification5,
      StudentName,
    },
  ] = studentUser;

  return (
    <div className="nameis">
      <div className="studentsScore">
        <article>
          <img src="notifiction.png" alt={StudentName} />
          <div>
            <h4>Notofication 1</h4>
            <a href={'n'} className="text-dark">
              {Notification1}
            </a>
          </div>
        </article>
        <article>
          <img src="notifiction.png" alt={StudentName} />
          <div>
            <h4>Notofication 2</h4>
            <a href={'n'} className="text-dark">
              {Notification2}
            </a>
          </div>
        </article>
        <article>
          <img src="notifiction.png" alt={StudentName} />
          <div>
            <h4>Notofication 3</h4>
            <a href={'n'} className="text-dark">
              {Notification3}
            </a>
          </div>
        </article>
        <article>
          <img src="notifiction.png" alt={StudentName} />
          <div>
            <h4>Notofication 4</h4>
            <a href={'n'} className="text-dark">
              {Notification4}
            </a>
          </div>
        </article>
        <article>
          <img src="notifiction.png" alt={StudentName} />
          <div>
            <h4>Notofication 5</h4>
            <a href={'n'} className="text-dark">
              {Notification5}
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};
export default Followers;
