import React from 'react';
import AdminNavbar from '../AdminDashboard/NAVBAR/AdminNavbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../StudentProfile/Footer';
import './about.css';
import logo from '../../images/img/image2.png';
import p1 from '../../images/img/image9.jpg';
import p2 from '../../images/img/image1.jpg';
import p3 from '../../images/img/image7.jpg';
import p4 from '../../images/img/image6.jpg';
import p5 from '../../images/img/image8.jpg';
import c1 from '../../images/img/image4.jpg';
import c2 from '../../images/img/image3.jpg';
import c3 from '../../images/img/image5.jpg';

const About = (props) => {
  return (
    <div>
      <AdminNavbar />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7" id="feat_cont1">
            <h2 className="featurette-heading" style={{ color: '#000567' }}>
              The Oxford Schools
              <span className="text">
                {' '}
                embark on the mission of creating an edifice of exemplary
                learning
              </span>
            </h2>
            <p className="lead">
              The Oxford English School, affiliated to the Council of The Indian
              School Certificate Examinations, New Delhi was established in the
              year 1996-97.
            </p>
          </div>

          <div className="col-md-5">
            <div className="image" id="img-t">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                src={logo}
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="true"
              />
            </div>
            <title>Placeholder</title>
            {/* <rect width="100%" height="100%" fill="#eee"></rect> */}
            {/* <text x="50%" y="50%" fill="#aaa" dy=".3em"></text> */}
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row">
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className=""
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className=""
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className="active"
                aria-current="true"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item">
                <img src={c1} width="100%" height="100%" alt="s" />
              </div>
              <div className="carousel-item active carousel-item-start">
                <img src={c2} width="100%" height="100%" alt="s" />
              </div>
              <div className="carousel-item carousel-item-next carousel-item-start">
                <img src={c3} width="100%" height="100%" alt="s" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row justify-content-center">
          <div className="col-md-auto auto1">
            <img className="feat2-img" src={p1} alt="s" />
            <div className="img-des">
              <div className="desp">
                <h5 className="feat2-head">Admissions</h5>
                Admissions Procedures are mentioned in the document. Also check
                out for the end date of admissions. Please reach out the office
                to know more...
                <br />
                <br />
                <a className="btn btn-secondary btn-sm" id="btn" href="s">
                  View details »
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-auto auto1">
            <img className="feat2-img" src={p2} alt="s" />
            <div className="img-des">
              <div className="desp">
                <h5 className="feat2-head">Extra-Curricular</h5>
                Apart from education we also teach extra-curricular subjects
                that will rejuvenate them and the support to seek their
                passion...
                <br />
                <br />
                <a className="btn btn-secondary btn-sm" id="btn" href="s">
                  View details »
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-auto auto1">
            <img className="feat2-img" src={p3} alt="s" />
            <div className="img-des">
              <div className="desp">
                <h5 className="feat2-head">Holistic-Education</h5>
                We provide holistic education with moral wellbeing that will
                make the students sharp and concenterate on their goal by yoga &
                Meditation...
                <br />
                <br />
                <a
                  className="btn btn-secondary btn-sm"
                  id="btn"
                  href="s"
                  alt="s"
                >
                  View details »
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">
              Sow the seeds in the right place...
            </h2>
            <div className="lead">
              <p />
              Acknowledging that education plays a pivotal role in shaping young
              impressionable minds, we are equipped with highly qualified staff
              adept in pedagogical approaches.
              <p />
              We are committed to provide holistic education with optimal use of
              infra-structure and resources. We believe in all-round development
              of children and give ample importance to personality development
              and growth of students as invaluable individuals.
            </div>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={p4} width="400px" height="300px" id="p4" alt="s" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Chairman's Message</h2>
            <div className="lead">
              <p />
              Education is the premise of progress. We strive relentlessly to
              nurture accountable, responsible and futuristic citizens wrapped
              with ethical and moral values. We provide a wholesome environment
              enabling children to permeate into varied spheres be it cultural,
              sports, the learning that goes beyond the realm of academics.
              <p />
              Sri SNVL NARASIMHA RAJU Chairman,
              <br />
              The Oxford Educational Institutions
            </div>
          </div>
          <div className="col-md-5">
            <img src={p5} width="400px" height="300px" alt="s" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="col">
          <h2 className="featurette-heading">Contact Us</h2>
          <div className="text-center">
            <p>THE OXFORD ENGLISH SCHOOL (ICSE/ISC)</p>
            <p />
            C.A. Site No. 40, 1st Phase, J.P. Nagar, Bangalore - 560 078,
            KARNATAKA, INDIA <p />
            ICSE Office No: 080-61754501/080-61754522/080-61754508
            <p /> Email: icseprincipal@theoxford.edu / oxfordicse@yahoo.co.in
            website : www.theoxford.edu
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>
      <Footer />
    </div>
  );
};
export default About;
