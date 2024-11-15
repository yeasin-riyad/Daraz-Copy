"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "@/assets/assets";
import bcrypt from 'bcryptjs';
import { useRegisterUserMutation } from "@/components/redux/productSlice";
import toast from "react-hot-toast";


const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerUser] = useRegisterUserMutation();


    const handleRegister = async(e) => {
        e.preventDefault();
        try{
            const hashedPassword = await bcrypt.hash(password, 10);
            await registerUser({ name, email, password: hashedPassword }).unwrap();
            toast.success("Registration successful")

 

        }catch (error) {
            toast.error('Error registering user...');
          }
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
