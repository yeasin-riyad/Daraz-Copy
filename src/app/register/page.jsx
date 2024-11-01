"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/assets/assets";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        // Registration logic here (e.g., send to API)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                   <Link href={"/"}>
                   <Image 
                        src={logo} 
                        alt="Website Logo" 
                        width={80} 
                        height={80} 
                    />
                   </Link>
                </div>

                {/* Title */}
                <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Create an Account
                </h2>

                {/* Registration Form */}
                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 dark:text-gray-300">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-2 border rounded-md outline-none bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-red-500"
                        />
                    </div>
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
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="my-4 flex items-center">
                    <span className="w-full border-b dark:border-gray-600"></span>
                    <span className="px-2 text-gray-600 dark:text-gray-400 text-sm">OR</span>
                    <span className="w-full border-b dark:border-gray-600"></span>
                </div>

                {/* Google Login Button */}
                <button
                    onClick={() => signIn("google")}
                    className="w-full py-2 px-4 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
                >
                    <span className="mr-2">
                        {/* Google Icon SVG */}
                        <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M47.5 24.5c0-1.48-.13-2.9-.36-4.29H24v8.15h13.23c-.57 3.03-2.24 5.6-4.73 7.32v6.08h7.67c4.49-4.14 7.33-10.24 7.33-17.26z"
                                fill="#4285F4"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 48c6.36 0 11.68-2.12 15.57-5.73l-7.67-6.08c-2.14 1.44-4.86 2.3-7.9 2.3-6.08 0-11.22-4.11-13.07-9.64H3.08v6.1C7.06 42.2 14.89 48 24 48z"
                                fill="#34A853"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.93 28.85A14.51 14.51 0 019 24c0-1.69.29-3.33.82-4.85v-6.1H3.08A23.95 23.95 0 000 24c0 3.75.87 7.3 2.43 10.35l8.5-5.5z"
                                fill="#FBBC05"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 9.6c3.47 0 6.56 1.19 9.02 3.55l6.78-6.78C35.68 2.76 30.36 0 24 0 14.89 0 7.06 5.8 3.08 14.05l8.67 6.1C12.78 13.71 17.92 9.6 24 9.6z"
                                fill="#EA4335"
                            />
                        </svg>
                    </span>
                    Sign in with Google
                </button>

                {/* Footer Links */}
                <div className="text-center mt-6 text-gray-600 dark:text-gray-400">
                    <p>
                        Already have an account?{" "}
                        <Link href="/signin">
                            <span className="text-red-500 hover:underline">Login here</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
