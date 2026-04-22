import { useState } from "react";

const Register = () => {
  const [agency, setAgency] = useState("yes");

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex justify-center items-center">
      
      {/* Card */}
      <div className="w-[360px] bg-white p-6 rounded-xl shadow-sm">

        <h1 className="text-2xl font-bold mb-6">
          Create your <br /> PopX account
        </h1>

        {/* Input Fields */}
        <div className="space-y-5">

          <div className="inputBox">
            <label>Full Name*</label>
            <input type="text" placeholder="Marry Doe" />
          </div>

          <div className="inputBox">
            <label>Phone number*</label>
            <input type="text" placeholder="Marry Doe" />
          </div>

          <div className="inputBox">
            <label>Email address*</label>
            <input type="email" placeholder="Marry Doe" />
          </div>

          <div className="inputBox">
            <label>Password*</label>
            <input type="password" placeholder="Marry Doe" />
          </div>

          <div className="inputBox">
            <label>Company name</label>
            <input type="text" placeholder="Marry Doe" />
          </div>

          {/* Radio */}
          <div>
            <p className="text-sm mb-2">Are you an Agency?*</p>

            <div className="flex gap-6 items-center">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={agency === "yes"}
                  onChange={() => setAgency("yes")}
                  className="accent-purple-600"
                />
                Yes
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={agency === "no"}
                  onChange={() => setAgency("no")}
                  className="accent-purple-600"
                />
                No
              </label>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="w-full mt-8 py-3 rounded-lg text-white font-semibold 
        bg-gradient-to-r from-purple-600 to-purple-500">
          Create Account
        </button>

      </div>
    </div>
  );
};

export default Register;