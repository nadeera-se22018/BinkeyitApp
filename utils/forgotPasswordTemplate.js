const forgotPasswordTemplate = ({ name, otp })=>{
    return `
    <div>
        <p>Dear ${name},</p>
        <p>You requested a password reset. Please use the following OTP code to reset your password.</p>
        <div style="background:#f0f0f0; padding:15px; font-size:24px; font-weight:bold; width: fit-content; margin: 10px 0; border-radius: 5px;">
            ${otp}
        </div>
        <p>This OTP is valid for 1 hour only. Enter this OTP on the Binkeyit website to proceed with resetting your password.</p>
        <br/>
        <p>Thanks,</p>
        <p>Binkeyit</p>
    </div>
    `
}

export default forgotPasswordTemplate;