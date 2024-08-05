import './App.css';
import { useFormik } from 'formik';

function App() {
      const validate = (values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'First Name is required';
        }

        if (!values.lastName) {
          errors.lastName = 'Last Name is required';
        }

        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email format';
        }

        if (!values.password) {
          errors.password = 'Password is required';
        }

        return errors;
      };

     const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",

      },
      validate,
      onSubmit: (values) => {
        alert('Form submitted successfully!', values);
      },
    });


  return (
    <>
      <div className='main-component'>
        <div className='intro'>
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. 
             Watching scripted tutorials is great, but understanding how 
             developers think is invaluable.</p>
        </div>
        <div className='sign-up'>
          <div className='pricing'>
            <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
          </div>
          <div className='signUp-Form'>
            <form onSubmit={formik.handleSubmit}>
              <input 
                id='firstName' 
                type="text" 
                name='firstName' 
                placeholder='First Name'
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
               {formik.touched.firstName && formik.errors.firstName && (
                <div className='error-message' >{formik.errors.firstName}</div>
                )}

              <input 
                id='lastName' 
                type="text" 
                name='lastName' 
                placeholder='Last Name' 
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className='error-message' >{formik.errors.lastName}</div>
              )}

              <input 
                id='email' 
                type="email" 
                name='email' 
                placeholder='Email Address'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='error-message' >{formik.errors.email}</div>
                )}

              <input 
                id='password' 
                type="password" 
                name='password' 
                placeholder='Password'
                onChange={formik.handleChange}
                value={formik.values.password} 
              />
              {formik.touched.password && formik.errors.password && (
                <div className='error-message' >{formik.errors.password}</div>
                )}

              <button id='claim-btn' type='submit'>Claim your free trial</button>
            </form>
            <p className='TandC'>
              By clicking the button, you are agreeing to our 
              <span> Terms and Services</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
