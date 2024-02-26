import React from 'react'
import { useFormik } from 'formik'
import { initialvalues } from '../UniversalComponents/Schema'
import signInSchema from '../UniversalComponents/Schema'
import EmailText from '../UniversalComponents/EmailText'
import PasswordText from '../UniversalComponents/PasswordText'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {

    const navigate = useNavigate


    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialvalues,
        validationSchema: signInSchema,
        onSubmit: async (values, action) => {
            console.log(values)
            navigate(`/otp/${values.email}`)

        }
    })

    // async function signIn(values, action) {

    // }




    return (
        <>
            <div className='signin-background'>
                <div className='signin-position'>
                    <div className='fs-4 fw-bold text-primary'>
                        SignIn to Leader Legacy
                    </div>
                    <div className='signin-div-background'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInpuName" className="form-label">Name</label>
                                <input id='name' type='text' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} touched={touched.name} error={errors.name} className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                < EmailText name='email' label="Enter Email" type='email' values={values.email} handleChange={handleChange} handeleBlur={handleBlur} error={errors.email} touched={touched.email} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                < PasswordText name='password' label='Enter Password' type='password' values={values.password} handleBlur={handleBlur} handleChange={handleChange} error={errors.password} touched={touched.password} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input id='phone' type="phone" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} error={errors.phone} touched={touched.phone} className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <input id='role' type="role" name='role' value={values.role} onChange={handleChange} onBlur={handleBlur} error={errors.role} touched={touched.role} className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Gender</label>
                                <input id='gender' type='gender' name='gender' value={values.gender} onChange={handleChange} onBlur={handleBlur} error={errors.gender} touched={touched.gender} className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Address address</label>
                                <input id='address' type="address" name='address' value={values.address} onChange={handleChange} onBlur={handleBlur} error={errors.address} touched={touched.address} className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
