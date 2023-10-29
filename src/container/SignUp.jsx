import React from "react";
import { Logo } from "../assets"

function SignUp() {
  return (
    <div className="w-full py-6">
      <img
        src={Logo}
        alt="Logo"
        className="object-contain w-32 opacity-50 h-auto"
      />
      <div className="w-full flex flex-col items-center justify-center py-8">
        <p className="py-12 text-2xl text-primaryText">Join With Us! 🤩</p>

        <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary
        shadow-md flex flex-col items-center justify-center gap-8">

            {/* email */}

            {/* password */}

            {/* alert section */}

            {/* login button */}

            {/* account text section */}

            {/* or section */}

            {/* sign in with google */}

            {/* or section */}

            {/* sign in with github */}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
