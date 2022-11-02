import React, { useEffect } from 'react';
// import loadingImage from '../../images/preloader.gif';
import { useState } from 'react';
import EditStudentDetailPage from './EditStudentDetailPage';
import Navbar from '../StudentProfile/Navbar';
import { Link } from 'react-router-dom';
import { StudentContext } from '../StudentProfile/context/context';
import axios from 'axios';
import Footer from '../StudentProfile/Footer';

function GetRequest() {
  const { searchStudentUser } = React.useContext(StudentContext);

  const [Datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Loaddata();
  }, []);

  const Loaddata = async () => {
    setLoading(true);
    console.log(localStorage.getItem('token'));
    const response = await axios.get('http://localhost:5001/api/student', {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    });

    setDatas(response.data.student);
    console.log('Hello bros');
    console.log(Datas);
  };

  const [studentID, setStudentID] = useState(0);

  const gotoProfile = (ID) => {
    searchStudentUser(Number(ID));
  };

  const getStudentData = async (ID) => {
    await searchStudentUser(Number(ID));
  };

  const deleteStudentRecord = (ID) => {
    setStudentID(ID);
  };
  const deleteStudentRecord1 = (ID) => {
    let id = studentID;
    axios
      .delete(`http://localhost:5001/api/deletestudent/${id}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((response) => {
        if (response != null) {
          console.log(loading);
          setLoading(false);
          Loaddata();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    // if (loading) {
    //   return (
    //     <main>
    //       <Navbar />
    //       <img src={loadingImage} className="loading-img" alt="loding" />
    //     </main>
    //   );
    // }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="section">
        <h2 className="text-center text-dark">Student DataBase</h2>
        <div className="changecardsize1 row row-cols-3 section-center ">
          {Datas &&
            Datas.map((data_is) => (
              <div
                className="card border border-dark mx-auto my-5  changecardsize2"
                style={{ width: 500 }}
                key={data_is._id}
              >
                <div className="d-flex ">
                  <img
                    src="oxford.png"
                    alt=""
                    className=" img-fluid "
                    style={{ width: 60 }}
                  />
                  <h3 className="mx-3 my-2 changemyfont">Oxford School</h3>
                </div>

                <img
                  src={data_is.img}
                  className="card-img-top mx-auto h-100 img-fluid "
                  alt="student Pic"
                  style={{ width: 100 }}
                />
                <div className="card-body d-flex flex-column">
                  <h2 className="card-text mx-auto">
                    <span>{data_is.StudentName}</span>
                  </h2>
                  <div className="">
                    <div className="d-flex">
                      <h5 className="card-text">College Id:</h5>
                      <h5 className="card-text ms-2">{data_is.CollegeId}</h5>
                    </div>
                    <div className="d-flex">
                      <h5 className="card-text">Email:</h5>
                      <h5 className="card-text ms-5">{data_is.EmailId}</h5>
                    </div>
                    <div className="d-flex">
                      <h5 className="card-text">PhoneNo:</h5>
                      <h5 className="card-text ms-3">{data_is.PhoneNo}</h5>
                    </div>
                    <div className="d-flex">
                      <h5 className="card-text">class: &nbsp;</h5>
                      <h5 className="card-text ms-5">{data_is.class}</h5>
                    </div>
                  </div>

                  <div className="row row-cols-md-3 row-cols-1 arrangecardbuttons mt-4 ">
                    <Link
                      onClick={() => gotoProfile(data_is.CollegeId)}
                      to="/dashboard"
                      className="btn btn-success fw-bolder mt-auto col-md-3"
                    >
                      View
                    </Link>
                    <a
                      className="btn btn-primary fw-bolder mt-auto col-md-3"
                      data-bs-toggle="modal"
                      href="#exampleModalToggle"
                      role="button"
                      onClick={() => getStudentData(data_is.CollegeId)}
                    >
                      Edit
                    </a>
                    <div
                      className="modal fade"
                      id="exampleModalToggle"
                      aria-hidden="true"
                      aria-labelledby="exampleModalToggleLabel"
                      tabIndex="-1"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalToggleLabel"
                            >
                              Edit Details
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p className=" text-danger my-auto">
                              {' '}
                              Are you sure, You want to Edit ?
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              className="btn btn-warning"
                              data-bs-target="#exampleModalToggle2"
                              data-bs-toggle="modal"
                              data-bs-dismiss="modal"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal 2222 */}
                    <div
                      className="modal fade"
                      id="exampleModalToggle2"
                      aria-hidden="true"
                      aria-labelledby="exampleModalToggleLabel2"
                      tabIndex="-1"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered bg-dark"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                      >
                        <div className="modal-content bg-dark">
                          <div className="modal-header bg-dark">
                            <h5
                              className="modal-title"
                              id="exampleModalToggleLabel2"
                            >
                              <p
                                className="mx-auto h2"
                                style={{ color: '#f1356d' }}
                              >
                                Edit Student Details
                              </p>
                            </h5>
                            <button
                              type="button"
                              className="btn-close bg-light"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              onClick={() => {
                                Loaddata();
                              }}
                            ></button>
                          </div>
                          <div className="modal-body">
                            <EditStudentDetailPage
                              studentdata={data_is._id}
                            ></EditStudentDetailPage>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Button trigger modal --> */}
                    <button
                      type="button"
                      className="btn btn-danger fw-bolder mt-auto col-md-3"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() =>
                        // deleteStudentRecord(data_is.CollegeId, data_is, e)
                        deleteStudentRecord(data_is._id)
                      }
                    >
                      DEL
                    </button>

                    {/* Delete Model */}
                    <div
                      className="modal fade"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Delete Student
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <h4 className="text-danger">
                              Are You sure You want to Delete the Student ?
                            </h4>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-primary d-none"
                            >
                              Save changes
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                              onClick={() => deleteStudentRecord1(data_is._id)}
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default GetRequest;
