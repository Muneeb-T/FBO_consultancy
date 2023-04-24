import Paper from '../../components/paper/Paper';
import { Formik, Form } from 'formik';
import Field from '../../components/formik/FormField';
import Button from '../../components/buttons/Button';
import * as Yup from 'yup';
import './Login.css';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiEnvelope, BiLock } from 'react-icons/bi';
import API from '../../api';
import Loader from '../../components/loader/Loader';
import { toast } from 'react-toastify';

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

const Login = ({ open, setOpen, setUser }) => {
  const initialValues = loginInitialValues;
  const validationSchema = LoginSchema;

  const [fade, setFade] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFade((prev) => !prev);
  }, [open]);

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const url = '/auth/login';
      const { data } = await API.post(url, values);
      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
      toast.success(data.message, {
        position: 'bottom-center',
        className: 'success-toast',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      handleClose();
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error.message ||
        'Something went wrong';
      toast.error(message, {
        position: 'bottom-center',
        className: 'error-toast',
        autoClose: 100000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {
        <Loader
          bgOpacity={10}
          loading={loading}
        />
      }
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
            <p>Login</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {(form) => (
              <Form>
                <Field
                  name="email"
                  as="input"
                  label="Email address"
                  placeholder="Email"
                  type="text"
                  form={form}
                  labelIcon={<BiEnvelope />}
                />
                <Field
                  label="Password"
                  name="password"
                  as="input"
                  type="password"
                  placeholder="Password"
                  form={form}
                  labelIcon={<BiLock />}
                />
                <Button
                  text="Login"
                  theme="green"
                  type="submit"
                  disabled={loading}
                  style={{ width: '100%' }}
                />

                <div className="forgot-password">
                  <p>Forgot password ?</p>
                </div>
              </Form>
            )}
          </Formik>
        </Paper>
      </div>
    </>
  );
};

export default Login;
