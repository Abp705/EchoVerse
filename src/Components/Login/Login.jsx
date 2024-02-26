import { useFormik } from 'formik'
import React from 'react'
import signInSchema from '../UniversalComponents/Schema'
import EmailText from '../UniversalComponents/EmailText'
import PasswordText from '../UniversalComponents/PasswordText'

export default function Login() {

  const initialvalues = {
    email: '',
    password: ""
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialvalues,
    validationSchema: signInSchema,
    onSubmit: async (values, action) => {
      console.log(values)
    }

  })

  // async function login(values, action) {
  //   console.log(values)

  // }

  return (
    <>
      <div className='login-background'>
        <div className="container-fluid login-position">
          <div className='fs-4 fw-bold text-primary'>login to </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              < EmailText name='email' label='Enter Email' type='email' values={values.email} handleChange={handleChange} handleBlur={handleBlur} error={errors.email} touched={touched.email} />
              <div id="emailHelp" className="form-text text-primary">Sign in with a  different  Atlassian account</div>
            </div>
            <div className="mb-3">
              < PasswordText name='password' label='Enter Password' type='password' values={values.password} handleChange={handleChange} handleBlur={handleBlur} error={errors.password} touched={touched.password} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
