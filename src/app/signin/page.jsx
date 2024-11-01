"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/assets/assets";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                {/* Logo */}
                <div className="flex justify-center mb-6 ">
                   <Link href={"/"}>
                   <Image 
                        src={logo} // Update this path to your logo
                        alt="Website Logo" 
                        width={80} 
                        height={80} 
                    /></Link>
                </div>

                {/* Title */}
                <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Login to Your Account
                </h2>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-md outline-none bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 dark:text-gray-300">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-md outline-none bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition duration-200"
                    >
                        Login
                    </button>
                </form>

                {/* Footer Links */}
                <div className="text-center mt-6 text-gray-600 dark:text-gray-400">
                    <p>
                        Don't have an account?{" "}
                        <Link href="/register">
                            <span className="text-red-500 hover:underline">Register here</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
