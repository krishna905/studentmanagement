import React from 'react';
import { useState } from 'react';
import { StudentContext } from './context/context';
const Search = () => {
  const [user, setUser] = useState('');
  const { error, searchStudentUser, isLoading } =
    React.useContext(StudentContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      const ID = Number(user);
      searchStudentUser(ID);
    }
  };
  return (
    <section className="section">
      <div className="section-center searchbox mt-4">
        {error.show && (
          <div className="errorMessage mt-3 ">
            <p className="fw-bold">{error.msg}!!!!</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="enter Student Id "
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {!isLoading && (
              <button type="submit" className="btn">
                search
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;
