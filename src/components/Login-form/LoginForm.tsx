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
                    router.push("/blog/login");
                }
            }
        }
    };

    return (
        <div className="login-wrap">
            <form onSubmit={handleSubmit}>
<<<<<<< HEAD
                <div className="login-html">
                    <div className="tab-container">
=======
                <SubmitButton text='home' variant='go' to='/blog' onClick={()=>{}}/>
                <div className="w-full px-6 sm:px-8 md:px-12 lg:px-[6vw] pt-6 sm:pt-8 md:pt-10 pb-10 capitalize">
                    <div className="flex flex-col sm:flex-row mb-6 gap-2 sm:gap-5">
>>>>>>> 8ec646f03f1095d53cc7a7259de1ea652a1ae964
                        <button
                            type="button"
                            onClick={() => setIsLogin(true)}
                            className={`tab ${isLogin ? 'active' : ''}`}>
                            {('signin')}
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsLogin(false)}
                            className={`tab ${!isLogin ? 'active' : ''}`}
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

                    {message && <p>{message}</p>}

                    <SubmitButton text={isLogin ? ('signin') : ('signup')} variant='button' onClick={() => alert('haz iniciado sesion')}/>
                </div>
            </form>
        </div>

    );
};

export default LoginForm;
