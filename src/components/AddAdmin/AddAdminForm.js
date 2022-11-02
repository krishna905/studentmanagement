import { Field, reduxForm } from 'redux-form';
import './sign.css';
import React from 'react';
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label className="control-label text-primary">{/* {label} */}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          className="form-control"
          autoComplete="off"
        />

        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  // Name
  if (!values.Name) {
    errors.Name = 'Please Enter the Admin Name';
  } else if (values.Name.length < 5 || values.Name.length > 30) {
    errors.Name = 'Min be 5 characters';
  }
  // userName
  if (!values.userName) {
    errors.userName = 'Please Enter the Admin UserName';
  } else if (values.userName.length < 5 || values.userName.length > 30) {
    errors.userName = 'Min be 5 characters';
  }

  // Password

  if (!values.Password) {
    errors.Password = 'Please Provide Password';
  } else if (values.Password.length < 5) {
    errors.Password = 'Min be 5 characters';
  }

  return errors;
};

let AddAdminPage = (props) => {
  const { handleSubmit, pristine, submitting, reset, setError } = props;

  return (
    <div className="SignIn ">
      <div className="login-page1">
        <div className="form1 bg-white text-center">
          <div>
            <h3>ADD ADMIN</h3>
            <p>Please enter your New Admin Details.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white text-center">
            <div className="form-group">
              <Field
                name="Name"
                component={renderField}
                label="UserName"
                type="text"
                id="sohel"
                className=" 1rem p-3"
              />
            </div>
            <div className="form-group">
              <Field
                name="userName"
                component={renderField}
                label="username"
                type="text"
                id="sohel"
                className=" 1rem p-3"
              />
            </div>
            <div className="form-group">
              <Field
                name="Password"
                label="password"
                className=" 1rem p-3"
                component={renderField}
              />
            </div>
            <p>{setError}</p>
            <div className="form-group row">
              <div className="col-5">
                <button
                  type="submit"
                  className=" subButton btn btn-danger button"
                >
                  Submit
                </button>
              </div>
              <div className="col-5">
                <button
                  type="button"
                  disabled={pristine || submitting}
                  onClick={reset}
                  className="btn btn-warning resButton mx-5 button"
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
    </div>
  );
};

AddAdminPage = reduxForm({
  form: 'contact',
  validate,
})(AddAdminPage);

export default AddAdminPage;
