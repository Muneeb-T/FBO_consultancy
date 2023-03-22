import Paper from '../../components/paper/Paper';
import { Formik, Form } from 'formik';
import Field from '../../components/formik/FormField';
import Button from '../../components/buttons/Button';
import * as Yup from 'yup';
import './Login.css';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  confirmPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const loginInitialValues = {
  email: '',
  password: '',
};
const signUpInitialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const Login = ({ page, open, setOpen }) => {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setFade((prev) => !prev);
  }, [open]);

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  const handleSwitchPage = ({ page }) => {
    setOpen((prev) => {
      return { ...prev, page };
    });
  };

  return (
    <div
      className={classNames('login-page', {
        'fade-in': fade,
        'fade-out': !fade,
      })}
      onClick={handleClose}>
      <Paper
        backgroundColor="white"
        shadow
        className="paper"
        onClick={(e) => e.stopPropagation()}>
        <div className="close">
          <AiFillCloseCircle
            className="close-icon"
            onClick={handleClose}
          />
        </div>
        <div className="form-header">
          <p>{page === 'signup' ? 'Sign Up' : 'Login'}</p>
        </div>
        <Formik
          initialValues={
            page === 'signup' ? signUpInitialValues : loginInitialValues
          }
          validationSchema={page === 'signup' ? SignupSchema : LoginSchema}
          onSubmit={(values) => {
            console.log(values);
          }}>
          {(form) => (
            <Form>
              <Field
                name="email"
                as="input"
                label="Email address"
                placeholder="Email"
                type="text"
                form={form}
              />
              <Field
                label="Password"
                name="password"
                as="input"
                type="password"
                placeholder="Password"
                form={form}
              />
              {page === 'signup' && (
                <Field
                  label="Confirm Password"
                  name="confirmPassword"
                  as="input"
                  type="password"
                  placeholder="Confirm password"
                  form={form}
                />
              )}
              <Button
                text={page === 'signup' ? 'Sign up' : 'Login'}
                theme="green"
                type="submit"
                style={{ width: '100%' }}
              />
            </Form>
          )}
        </Formik>

        <div className="forgot-password">
          {page == 'login' && <p>Forgot password ?</p>}
          {page == 'signup' ? (
            <p onClick={() => handleSwitchPage({ page: 'login' })}>
              Already have account ?
            </p>
          ) : (
            <p onClick={() => handleSwitchPage({ page: 'signup' })}>
              Create new account ?
            </p>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default Login;
