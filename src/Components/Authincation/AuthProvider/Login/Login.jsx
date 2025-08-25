import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Authmainprovider } from "../Authincation";


const Login = () => {
    
    const { signInUser } = useContext(Authmainprovider)
    const [errors, seterrors] = useState("")
    const navigate = useNavigate()
      const location = useLocation();  // ✅ Added this
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        signInUser(email, password)
            .then(() => {
                Swal.fire("Success!", "Login Successful", "success");
                e.target.reset();
                seterrors('')
                navigate(from, { replace: true });

            })
            .catch(() => {
                Swal.fire("Error!", "Email & Password didn't match", "error");
            });
    };

    // const handleGoogle = () => {
    //     googleAuth()
    //         .then(() => navigate("/"))
    //         .catch((error) => console.error(error));
    // };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-orange-100 p-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
            >
                {/* Animated background blobs */}
                <motion.div
                    className="absolute -top-16 -left-16 w-40 h-40 bg-purple-300 rounded-full opacity-50 mix-blend-multiply animate-pulse pointer-events-none"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-16 -right-16 w-56 h-56 bg-pink-300 rounded-full opacity-40 mix-blend-multiply animate-bounce pointer-events-none"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center drop-shadow-lg">
                    Welcome Back
                </h2>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"

                            placeholder="Email Address"
                            className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition ${errors.email ? "border-red-400" : "border-gray-200"
                                }`}
                        />
                        {errors.email && (
                            <p className="text-xs text-red-500 mt-1 absolute left-2 -bottom-5">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            name="password"

                            placeholder="Password"
                            className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition ${errors.password ? "border-red-400" : "border-gray-200"
                                }`}
                        />
                        <span className="text-purple-500 text-start flex mt-2 ml-2 text-xs font-semibold hover:underline cursor-pointer">
                            Forgot Password?
                        </span>
                        {errors.password && (
                            <p className="text-xs text-red-500 mt-1 absolute left-2 -bottom-5">
                                {errors.password}
                            </p>
                        )}
                    </div>


                    <button
                        type="submit"
                        className="w-full py-3 cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform"
                    >
                        Login
                    </button>
                </form>

                <div className="flex justify-center mt-4 text-sm text-gray-500">
                    <span>
                        Don't have an account?{" "}
                        <Link to='/signup'><span className="text-purple-500 font-semibold hover:underline cursor-pointer text-base">
                            Sign Up
                        </span>
                        </Link>
                    </span>

                </div>
            </motion.div>
        </div>
    );
};

export default Login;
