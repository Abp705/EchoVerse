const PasswordText = ({ label, type, name, values, handleChange, handleBlur, error, touched }) => {
    return (
        <>
            <label htmlFor="exampleInputPassword1" className="form-label text-primary inputPassword">{label}</label>
            <input type="password" name='password' value={values} onChange={handleChange} onBlur={handleBlur} placeholder='Enter the Password' className="form-control" id="exampleInputPassword1" />
            {error && touched ? (<p className='text-danger'>{error}</p>) : null}
        </>
    )
}

 export default PasswordText