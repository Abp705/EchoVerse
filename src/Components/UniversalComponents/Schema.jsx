import * as yup from 'yup'




 const signInSchema = yup.object({
    email: yup.string().email().required("Please enter your Email"),
    password: yup.string().min(8, "password must have 8 characters")
        .matches(/[0-9]/, "password have at least one digit")
        .matches(/[a-z]/, "must have lowercase")
        .matches(/[A-Z]/, "must have uppercase")
        .required("Please enter your Password")
})

export const initialvalues = {
    name:'',
    email:'',
    password:'',
    phone:'',
    role:'',
    gender:'',
    address:''
}

export default signInSchema