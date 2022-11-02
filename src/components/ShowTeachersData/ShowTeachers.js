import React from 'react';
import axios from 'axios';
import Navbar from '../StudentProfile/Navbar';
import Footer from '../StudentProfile/Footer';

import { useState, useEffect } from 'react';
function ShowTeachers() {
  useEffect(() => {
    LoadData();
  }, []);
  const [teachersdata, setTeacherData] = useState([]);

  const LoadData = async () => {
    const result = await axios.get('http://localhost:5001/api/faculty', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    setTeacherData(result.data.faculty);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className=" section">
        <h2 className="text-center text-dark">Faculty DataBase</h2>
        <div className="changecardsize1 row row-cols-3 section-center ">
          {teachersdata &&
            teachersdata.map((data_is) => (
              <div
                className="card border border-light mx-auto my-5  changecardsize2"
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
                    <span>{data_is.facultyName}</span>
                  </h2>
                  <div className="">
                    <div className="d-flex">
                      <h5 className="card-text"> ID:</h5>
                      <h5 className="card-text ms-5">{data_is.facultyId}</h5>
                    </div>
                    <div className="d-flex">
                      <h5 className="card-text">Dept:</h5>
                      <h5 className="card-text ms-4 ">{data_is.department}</h5>
                    </div>
                    <div className="d-flex">
                      <h5 className="card-text">Class:</h5>
                      <h5 className="card-text ms-4">{data_is.class}</h5>
                    </div>
                    <div className="d-flex">
                      <h5 className="card-text">Email: &nbsp;</h5>
                      <h5 className="card-text ms-2">{data_is.facultyEmail}</h5>
                    </div>
                  </div>

                  <div className="row row-cols-md-3 row-cols-1 arrangecardbuttons mt-4 ">
                    <button className="btn btn-success fw-bolder mt-auto col-md-3">
                      View
                    </button>
                    <a
                      className="btn btn-primary fw-bolder mt-auto col-md-3"
                      data-bs-toggle="modal"
                      href="#exampleModalToggle"
                      role="button"
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
                                Edit
                              </p>
                            </h5>
                            <button
                              type="button"
                              className="btn-close bg-light"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body bg-dark"></div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Button trigger modal --> */}
                    <button
                      type="button"
                      className="btn btn-danger fw-bolder mt-auto col-md-3"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
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

export default ShowTeachers;
