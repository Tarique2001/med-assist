import React from 'react'
import SignUpDoctor from './SignUpDoctor'
import SignupPatient from './SignupPatient'

const SignUpDisplay = () => {
    return (
        <div className="px-80 py-10">
            <SignUpDoctor />
            <SignupPatient />
            <h4 className="text-xl">otp system</h4>
        </div>
    )
}

export default SignUpDisplay
