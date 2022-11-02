import { Field, reduxForm } from 'redux-form';
import React, { useState } from 'react';
import './StudentEditForm/Studentform.css';
import { StudentContext } from '../StudentProfile/context/context';

const renderField = ({
  input,
  label,
  type,
  objvalue,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label className="control-label">{label}</label>
      <div>
        <input
          {...input}
          placeholder={objvalue}
          type={type}
          className="form-control"
          // value={objvalue}
        />

        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

const renderFeeError = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

const renderTextArea = ({
  input,
  label,
  type,
  objvalue,
  meta: { touched, error, warning },
}) => (
  <div>
    <label htmlFor="Textarea">{label}</label>
    <div>
      <textarea
        {...input}
        className="form-control"
        placeholder={label}
        // value={objvalue}
        type={type}
        rows="3"
      ></textarea>

      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const validate = (values) => {
  const errors = {};
  // StudentName
  if (!values.StudentName) {
    errors.StudentName = 'Please Enter the Student Name';
  } else if (values.StudentName.length < 5 || values.StudentName.length > 30) {
    errors.StudentName = 'Min be 5 characters Max be 30 charecters';
  } else if (!/^[A-Za-z]+$/i.test(values.StudentName)) {
    errors.StudentName = 'Enter only Alphabets';
  }

  // College ID

  if (!values.CollegeID) {
    errors.CollegeID = 'Please Enter the College Id';
  } else if (/^[A-Za-z]+$/i.test(values.CollegeID)) {
    errors.CollegeID = 'Invalid College Id ex:922229';
  } else if (!/^[0-9]{6}$/i.test(values.CollegeID)) {
    errors.CollegeID = 'Invalid College Id ex:922229';
  }

  // Email ID

  if (!values.EmailID) {
    errors.EmailID = 'Please Enter the Email Id';
  } else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i.test(values.EmailID)
  ) {
    errors.EmailID = 'Invalid Email Id Ex: Team7@gmail.com';
  }

  // Select
  if (!values.FeeStatus) {
    errors.FeeStatus = 'Required radio';
  }

  //FeeType dropdown
  if (!values.FeeType) {
    errors.FeeType = 'Required dropdown';
  }

  // PhoneNumber
  if (!values.PhoneNumber) {
    errors.PhoneNumber = 'Please Enter the Mobile Number';
  } else if (/^[A-Za-z]+$/i.test(values.PhoneNumber)) {
    errors.PhoneNumber = 'Please Enter Appropriate Mobile Number';
  } else if (!/^[6-9]\d{9}$/i.test(values.PhoneNumber)) {
    errors.PhoneNumber = 'Please Enter the Indian Mobile Number';
  }

  // Comments
  if (!values.Comments) {
    errors.Comments = 'Please Enter Comments';
  }

  return errors;
};

let EditStudentForm = (props) => {
  const { studentUser } = React.useContext(StudentContext);
  const [{ StudentName, CollegeId, EmailId, PhoneNo, bio }] = studentUser;
  const { handleSubmit, pristine, submitting, reset } = props;
  const [selected, setSelected] = useState('');
  const Notpaid = ['Free Seat', 'Fee Defaulter'];
  const Paid = ['Scholarship', 'Normal Admission', 'Donation'];
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  let arrtype = null;
  let options = null;
  if (selected === 'Paid') {
    arrtype = Paid;
  } else if (selected === 'NotPaid') {
    arrtype = Notpaid;
  }
  if (arrtype) {
    options = arrtype.map((el) => <option key={el}>{el}</option>);
  }
  const renderFeesTypeSelector = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
  }) => {
    return (
      <div>
        <select {...input} className="form-control">
          <option className="" value="none">
            Select Type of Payment
          </option>
          {options}
          ))
        </select>

        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    );
  };

  return (
    <div className="formBackground">
      <div className="StudentForm rounded-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Field
              name="StudentName"
              component={renderField}
              label="Student Name"
              placeholder="Sohel"
              objvalue={StudentName}
              type="text"
              id="sohel"
            />
          </div>
          <div className="form-group">
            <Field
              name="CollegeID"
              component={renderField}
              label="College Id"
              objvalue={CollegeId}
            />
          </div>
          <div className="form-group">
            <Field
              name="EmailID"
              component={renderField}
              label="Email Id"
              type="text"
              objvalue={EmailId}
            />
          </div>
          <div>
            <label>Fee Status</label>
            <div className="checkBoxPad">
              <label>
                <Field
                  name="FeeStatus"
                  component="input"
                  type="radio"
                  value="Paid"
                  className="radio-button"
                  onChange={changeSelectOptionHandler}
                />{' '}
                Paid
              </label>{' '}
              <label>
                <Field
                  name="FeeStatus"
                  component="input"
                  type="radio"
                  value="NotPaid"
                  className="radio-button"
                  onChange={changeSelectOptionHandler}
                />{' '}
                Not Paid
              </label>{' '}
              <Field name="FeeStatus" component={renderFeeError} />
            </div>
          </div>

          <div className="form-group">
            <Field
              className="fees-type-dropdown"
              component={renderFeesTypeSelector}
              name="FeeType"
              type="select"
            ></Field>
          </div>

          <div className="form-group">
            <Field
              name="PhoneNumber"
              component={renderField}
              label="PhoneNumber"
              objvalue={PhoneNo}
              type="text"
            />
          </div>

          <div className="form-group">
            <Field
              name="Comments"
              component={renderTextArea}
              label="Comments"
              type="textarea"
              objvalue={bio}
            />
          </div>
          <br />
          <div className="form-group row">
            <div className="col-2">
              <button type="submit" className="subButton">
                Submit
              </button>
            </div>
            <div className="col-10">
              <button
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
                className="btn btn-warning resButton"
              >
                Reset
              </button>
            </div>
            <br />
            <br />
            <div>{'       '}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

EditStudentForm = reduxForm({
  form: 'contact',
  validate,
})(EditStudentForm);

export default EditStudentForm;
