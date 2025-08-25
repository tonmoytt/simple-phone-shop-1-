import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Authmainprovider } from "../AuthProvider/Authincation";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(Authmainprovider);
    const location = useLocation();
    const navigate = useNavigate(); // use React Router navigate
    

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-primary text-5xl"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    // SweetAlert2 for unauthorized access
    Swal.fire({
        title: "Access Denied",
        text: "You must be logged in to view this page.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login Now",
        cancelButtonText: "Cancel",
        customClass: {
            popup: "rounded-xl shadow-lg bg-white",
            title: "text-xl font-bold text-gray-800",
            htmlContainer: "text-gray-600",
            confirmButton:
                "px-6 py-3 cursor-pointer rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-all",
            cancelButton:
                "px-6 py-3 cursor-pointer rounded-lg bg-gray-300 text-gray-700 font-semibold hover:bg-gray-400 transition-all",
            actions: "flex justify-center gap-4 mt-4" // <-- add this
        },
        buttonsStyling: false,
    }).then((result) => {
        if (result.isConfirmed) {
            // Use navigate instead of window.location.href
            navigate("/login", { replace: true, state: { from: location } });
        } 
        else if (result.dismiss === Swal.DismissReason.cancel) {
            navigate(location?.state?.from?.pathname || "/", { replace: true });
        }
    });

    return null; // render nothing while waiting for user action
};

export default PrivetRoute;
