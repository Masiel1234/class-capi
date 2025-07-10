"use client";

import React, { useState } from 'react';
import Input from '../Input/Input';
import SubmitButton from '../Button/SubmitButton';
import { addNewUser, isUserRegistered, updateActiveUser } from '@/lib/LocalStorage';
import { useRouter } from 'next/navigation';

interface UserData {
    username: string;
    password: string;
    email?: string;
    avatarUrl?: string;
}

interface FormErrors {
    username?: string;
    password?: string;
    email?: string;
}

const LoginForm: React.FC = () => {

    const [userData, setFormData] = useState<UserData>({
        username: '',
        password: '',
        email: '',
    });

    const [message, setMessage] = useState<string>("");
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        const fieldValue = e.target.value;

        setFormData((prevData) => ({
            ...prevData,
            [id]: fieldValue,
        }));

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [id]: '',
        }));

        setMessage("");
    };

    const validateForm = (): boolean => {
        const errors: FormErrors = {};

        if (!userData.username) {
            errors.username = ('userRequired');
        }

        if (!userData.password) {
            errors.password = ('passwordRequired');
        }

        if (!isLogin && !userData.email) {
            errors.email = ('emailRequired');
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            if (isLogin) {
                if (isUserRegistered(userData.username)) {
                    setMessage(('loginSuccess'));
                    updateActiveUser(userData);
                    router.push("/blog/profile");
                } else {
                    setMessage(('userNotFound'));
                }
            } else {
                if (isUserRegistered(userData.username)) {
                    setMessage(('userAlreadyRegistered'));
                } else {
                    addNewUser(userData);
                    setMessage(('successfullRegistration'));
                    setFormData({ username: '', password: '', email: '' });
                    router.push("/login");
                }
            }
        }
    };

    return (
        <div className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] xl:max-w-[35vw] mt-10 mx-auto relative bg-center bg-no-repeat bg-cover shadow-[0_12px_15px_0_rgba(0,0,0,0.24),0_17px_50px_0_rgba(0,0,0,0.19)]">
            <form onSubmit={handleSubmit}>
                <div className="w-full px-6 sm:px-8 md:px-12 lg:px-[6vw] pt-6 sm:pt-8 md:pt-10 pb-10 capitalize">
                    <div className="flex flex-col sm:flex-row mb-6 gap-2 sm:gap-5">
                        <button
                            type="button"
                            onClick={() => setIsLogin(true)}
                            className={`bg-none border-none text-base sm:text-lg font-bold cursor-pointer p-2 sm:p-[10px] transition-all duration-300 ease-in-out uppercase ${isLogin ? 'active' : ''}`}
                        >
                            {('signin')}
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsLogin(false)}
                            className={`bg-none border-none text-base sm:text-lg font-bold cursor-pointer p-2 sm:p-[10px] transition-all duration-300 ease-in-out uppercase ${!isLogin ? 'active' : ''}`}
                        >
                            {('signup')}
                        </button>
                    </div>

                    {/* Campos */}
                    {isLogin ? (
                        <>
                            <Input
                                label="username"
                                type="text"
                                id="username"
                                value={userData.username}
                                onChange={handleChange}
                                error={formErrors.username}
                            />
                            <Input
                                label="password"
                                type="password"
                                id="password"
                                value={userData.password}
                                onChange={handleChange}
                                error={formErrors.password}
                            />
                        </>
                    ) : (
                        <>
                            <Input
                                label="username"
                                type="text"
                                id="username"
                                value={userData.username}
                                onChange={handleChange}
                                error={formErrors.username}
                            />
                            <Input
                                label="email"
                                type="email"
                                id="email"
                                value={userData.email || ''}
                                onChange={handleChange}
                                error={formErrors.email}
                            />
                            <Input
                                label="password"
                                type="password"
                                id="password"
                                value={userData.password}
                                onChange={handleChange}
                                error={formErrors.password}
                            />
                        </>
                    )}

                    {message && <p className="text-black mt-2">{message}</p>}

                    <SubmitButton text={isLogin ? ('signin') : ('signup')} variant='add' onClick={() => alert('haz iniciado sesion')}/>
                </div>
            </form>
        </div>

    );
};

export default LoginForm;
