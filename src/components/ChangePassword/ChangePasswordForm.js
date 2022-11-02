import { Field, reduxForm } from 'redux-form';
import '../LoginPage/sign.css';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <label className="control-label text-primary">{}</label>
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
  // password
  if (!values.password) {
    errors.password = 'Please Enter the New password';
  } else if (values.password.length < 5) {
    errors.password = 'Min be 5 characters ';
  }

  // confirm password

  if (!values.confirmpassword) {
    errors.confirmpassword = 'Please Provide Password';
  } else if (values.confirmpassword.length < 5) {
    errors.confirmpassword = 'Min be 5 characters';
  } else if (values.password !== values.confirmpassword) {
    errors.password = 'Both passwords must match';
    errors.confirmpassword = 'Both passwords must match';
  }

  return errors;
};

let Changepassword = (props) => {
  const { handleSubmit, pristine, submitting, reset, setError } = props;

  return (
    <div className="ChangePassword">
      <div className="login-page1">
        <div className="form1 bg-white text-center">
          <div>
            <h2>Update Password</h2>
          </div>
          <form onSubmit={handleSubmit} className="bg-white text-center">
            <div className="form-group">
              <Field
                name="password"
                component={renderField}
                label="Password"
                type="text"
                id="sohel"
                className=" 1rem p-3"
              />
            </div>
            <div className="form-group">
              <Field
                name="confirmpassword"
                component={renderField}
                label="Confirm Password"
                className=" 1rem p-3"
              />
            </div>

            <br />
            <p>{setError}</p>
            <div className="form-group row">
              <div className="col-5">
                <button type="submit" className="subButton btn btn-danger">
                  Submit
                </button>
              </div>
              <div className="col-5">
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
    </div>
  );
};

Changepassword = reduxForm({
  form: 'contact',
  validate,
})(Changepassword);

export default Changepassword;
