const EmailText = ({ label, type, name, values, handleChange, handleBlur, error, touched }) => {
    return (
        <>
            <label htmlFor="exampleInputEmail1" className="form-label text-primary inputMail">{label}</label>
            <input type={type} name={name} value={values} onChange={handleChange} onBlur={handleBlur} placeholder='Enter the Email address' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            {error && touched ? (<p className='text-danger'>{error}</p>) : null}
        </>
    )
}

export default EmailText