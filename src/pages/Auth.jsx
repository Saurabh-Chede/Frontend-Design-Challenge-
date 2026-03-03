import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Star } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { SiMeta } from "react-icons/si";

const Auth = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all required fields");
      return;
    }

    // Fake authentication
    localStorage.setItem("auth", "true");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen relative flex bg-linear-to-br from-black via-teal-900 to-orange-500">
      {/* LOGO */}
      <div className="flex absolute p-4 gap-2">
        <div className="w-10 flex justify-center items-center relative h-10 rounded-full bg-teal-600">
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
        <h1 className="text-white text-2xl font-bold">aps</h1>
      </div>

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 relative text-white p-16">
        <div className="z-10 max-w-lg mt-30">
          <h1 className="text-4xl font-bold leading-tight">
            Expert level Cybersecurity <br />
            in <span className="text-teal-400">hours</span> not weeks.
          </h1>

          <div className="mt-10 space-y-4 text-gray-200">
            <p>
              <Check className="inline-block" size={15} color="green" />{" "}
              Effortlessly spider and map targets to uncover hidden security
              flaws
            </p>
            <p>
              <Check className="inline-block" size={15} color="green" /> Deliver
              high-quality, validated findings in hours, not weeks.
            </p>
            <p>
              <Check className="inline-block" size={15} color="green" />{" "}
              Generate professional enterprise-grade security reports
              automatically.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-sm inline-flex items-center gap-1 text-gray-300">
              <Star size={15} color="teal" fill="teal" /> Trustpilot
            </p>
            <p className="font-semibold">
              Rated 4.5/5.0{" "}
              <span className="text-xs text-gray-100/50 ml-1">
                (100k + review)
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl mt-10 p-8">
          <h2 className="text-2xl font-semibold text-center mb-2">
            {isLogin ? "Login" : "Sign up"}
          </h2>

          <p className="text-sm text-center text-gray-500 mb-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-teal-600 font-medium"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="First name*"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last name*"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (8+ characters)*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {!isLogin && (
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input type="checkbox" className="mt-1" />
                <p>I agree to Terms & Conditions and Privacy Policy</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-full transition"
            >
              {isLogin ? "Login" : "Create account"}
            </button>
          </form>

          {/* Social Buttons */}
          <div className="mt-6 flex justify-between gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-full hover:opacity-90 transition">
              <FaApple size={18} />
              Apple
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 bg-white border py-2 rounded-full hover:bg-gray-50 transition">
              <svg width="18" height="18" viewBox="0 0 48 48">
                {" "}
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.86-6.86C35.61 2.44 30.21 0 24 0 14.64 0 6.73 5.48 2.69 13.44l8.06 6.26C12.68 13.33 17.88 9.5 24 9.5z"
                />{" "}
                <path
                  fill="#4285F4"
                  d="M46.1 24.5c0-1.64-.15-3.22-.43-4.75H24v9h12.47c-.54 2.9-2.18 5.36-4.65 7.04l7.18 5.59C43.98 37.27 46.1 31.43 46.1 24.5z"
                />{" "}
                <path
                  fill="#FBBC05"
                  d="M10.75 28.26a14.5 14.5 0 010-8.52l-8.06-6.26A23.94 23.94 0 000 24c0 3.82.92 7.43 2.69 10.52l8.06-6.26z"
                />{" "}
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.91-5.79l-7.18-5.59c-2 1.34-4.56 2.13-8.73 2.13-6.12 0-11.32-3.83-13.25-9.2l-8.06 6.26C6.73 42.52 14.64 48 24 48z"
                />{" "}
              </svg>
              Google
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-full hover:opacity-90 transition">
              <SiMeta size={18} />
              Meta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
