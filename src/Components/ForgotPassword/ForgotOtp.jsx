import React from 'react'
import { useState,useEffect } from 'react'
import OtpText from '../UniversalComponents/OtpText'
import { useParams } from 'react-router-dom'

export default function ForgotOtp() {


    const [otp, setOtp] = useState('')
    const [second, setSecond] = useState(60)
    const {email} = useParams

    async function otpSubmit() {
      alert(otp)
    }

    async function resendOtp() {
        setSecond(60)
    }

    // timer for resend otp
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (second > 0) {
                setSecond(second - 1);
            }
            if (second === 0) {
                clearInterval(myInterval)
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    // automatic otp send
    useEffect(() => {
        if (otp.length === 4) {
            setTimeout(() => {
                otpSubmit()
            }, 100);
        }
    }, [otp])
  return (
    <>
     <div className='otp'>
                <div className='otpbackground'>
                    <div className='fw-bold'>
                        Enter the Otp send to
                    </div>
                    <div className='fs-6 fw-bold text-primary'>
                        {email}
                    </div>
                    <div>
                        <OtpText otp={otp} setOtp={setOtp} />
                    </div>
                    {second > 0 ? <p className='text-primary fs-6'>Resend otp afer {second} seconds</p> : <button className="btn btn-outline-success text-dark fw-bold ms-2 " onClick={resendOtp}>Resend Otp</button>}
                    <div >
                        {second === 0 ? <p className='text-primary fs-6'>Resend otp</p> : <button onClick={otpSubmit} className="btn btn-outline-success text-dark fw-bold ms-2 ">Submit otp</button>}

                    </div>
                </div>
            </div>
    </>
  )
}
