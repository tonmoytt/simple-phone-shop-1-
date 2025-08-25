import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Authmainprovider } from "../Authincation";
import Swal from "sweetalert2";


const Register = () => {

    const [passwordMsg, setPasswordMsg] = useState("");
    const { createUser } = useContext(Authmainprovider)
    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const ConfirmPassword = form.get("password");

        setPasswordMsg("");

        if (password.length < 6) {
            setPasswordMsg("Password should be at least 6 characters");
            return;
        }
        if (!/[0-9]/.test(password)) {
            setPasswordMsg("Please include at least one number");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordMsg("Please include at least one uppercase letter");
            return;
        }
        if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setPasswordMsg("Please include at least one special character");
            return;
        }
         if (password !== ConfirmPassword){
            setPasswordMsg("Password do not match")
         }

        createUser(email, password)
            .then(() => {
                Swal.fire("Success!", "Successfully registered!", "success");
                e.target.reset();
                navigate("/login");
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    Swal.fire("Oops!", "This email is already registered!", "error");
                } else {
                    Swal.fire("Error!", error.message, "error");
                }
            });
    };

    return (
        <div className="mt-8 md:mt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-orange-100 p-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
            >
                {/* Animated background bubbles */}
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
                    Create Account
                </h2>
                <form className="space-y-4" onSubmit={handleRegister}>
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition ${passwordMsg.name ? "border-red-400" : "border-gray-200"
                                }`}
                        />
                        {passwordMsg.name && (
                            <p className="text-xs text-red-500 mt-1 absolute left-2 -bottom-5">
                                {passwordMsg.name}
                            </p>
                        )}
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition ${passwordMsg.email ? "border-red-400" : "border-gray-200"
                                }`}
                        />
                        {passwordMsg.email && (
                            <p className="text-xs text-red-500 mt-1 absolute left-2 -bottom-5">
                                {passwordMsg.email}
                            </p>
                        )}
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition ${passwordMsg.password ? "border-red-400" : "border-gray-200"
                                }`}
                        />
                        {passwordMsg.password && (
                            <p className="text-xs text-red-500 mt-1 absolute left-2 -bottom-5">
                                {passwordMsg.password}
                            </p>
                        )}
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            name="ConfirmPassword"
                            placeholder="Confirm Password"
                            className={`w-full px-4 py-3 rounded-xl border text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition ${passwordMsg.ConfirmPassword ? "border-red-400" : "border-gray-200"
                                }`}
                        />
                        {passwordMsg.ConfirmPassword && (
                            <p className="text-xs text-red-500 mt-1 absolute left-2 -bottom-5">
                                {passwordMsg.ConfirmPassword}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-500 text-sm">
                    Already have an account?{" "}
                    <Link to='/login'> <span className="text-purple-500 font-semibold hover:underline cursor-pointer text-base z-50">
                        Sign in
                    </span>
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default Register;
