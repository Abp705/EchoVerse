import React from 'react'
import { useFormik } from 'formik'
import PasswordText from '../UniversalComponents/PasswordText'
import * as yup from 'yup'

export default function ForgotPassword() {


    const forgetPasswordSchema = yup.object({
        password: yup.string().min(8, "password must have 8 characters")
        .matches(/[0-9]/, "password have at least one digit")
        .matches(/[a-z]/, "must have lowercase")
        .matches(/[A-Z]/, "must have uppercase")
        .required("Please enter your Password")
    })
    
    const initialvalue = {
        password: ""
    }

    const { values, errors, handleBlur, handleSubmit, handleChange, touched, } = useFormik({
        initialValues: initialvalue,
        validationSchema:forgetPasswordSchema,
        onSubmit: async (values, action) => {
            console.log(values, action)

        }
    })

  return (
    <>  
      <div className='forgetlogin'>
                <div className='forgetLoginBackground'>
                    <p className='fs-4 text-primary' >Reset password form</p>
                    <div>
                        Enter Existing Email
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                        < PasswordText name='password' label='Enter Password' type='password' values={values.password} handleChange={handleChange} handleBlur={handleBlur} error={errors.password} touched={touched.password} />
                        </div>
                       <div className='ms-5'>
                       <button type='submit' className="btn btn-outline-success text-dark fw-bold ms-2 ">Submit</button>
                       </div>
                    </form>
                </div>
            </div>
    </>
  )
}
