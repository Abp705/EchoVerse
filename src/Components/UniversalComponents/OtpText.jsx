import OtpInput from "react-otp-input"

const OtpText = ({otp,setOtp})=>{
  return (
    <>
     <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputType='tel'
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input  {...props} />}
        />
    </>
  )
}

export default OtpText
