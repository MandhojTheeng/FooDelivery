// import React, { useState } from "react";
// import "./LoginPopup.css";
// import { assets } from "../../assets/frontend_assets/assets";

// const LoginPopup = ({ setShowLogin }) => {
//   const [currState, setCurrState] = useState("Sign Up");

//   return (
//     <div className="login-popup">
//       <form className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currState}</h2>
//           <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
//         </div>
//         <div className="login-popup-inputs">
//           {currState === "Sign Up" && <input type="text" placeholder="Enter your name" required />}
//           <input type="email" placeholder="Enter your email" required />
//           <input type="password" placeholder="Enter your password" required />
//         </div>
//         <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
//         <div className="login-popup-condition">
//           <label>
//             <input type="checkbox" required />
//             By continuing, I agree to the terms of use & privacy policy.
//           </label>
//         </div>
//         {currState === "Login" ? (
//           <p>
//             Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
//           </p>
//         ) : (
//           <p>
//             Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;



import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("You must agree to the terms before continuing.");
      return;
    }
    console.log(currState, formData);
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" role="button" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <label htmlFor="terms">
            <input
              type="checkbox"
              id="terms"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              required
            />
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

