import React from 'react'
import EmailText from '../UniversalComponents/EmailText'
import { useFormik } from 'formik'

export default function ForgotLoginId() {

    const initialvalue = {
        email: ""
    }

    const { values, errors, handleBlur, handleSubmit, handleChange, touched, } = useFormik({
        initialValues: initialvalue,
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
                            < EmailText name='email' label='Enter Email' type='email' values={values.email} handleChange={handleChange} handleBlur={handleBlur} error={errors.email} touched={touched.email} />
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
