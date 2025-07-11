'use client';

import Image from "next/image";
import Button from '@/components/Button/SubmitButton'
import { useEffect, useState } from "react";
import { deleteActiveUser, getActiveUser, type userData } from "@/lib/LocalStorage";
import { useRouter } from "next/navigation"; 

const Profile = () => {
    const [activeUser, setActiveUser] = useState<userData>();
    const router = useRouter();

    useEffect(() => {
        const data = getActiveUser();
        if (data == null) {
            router.push("/login");
        } else {
            setActiveUser(data);
        }
    }, []);

    const handleLogOut = () => {
        deleteActiveUser();
        router.push("/login");
    };

    return (
        <>
            <div className="profile-container">
                <Image
                width={20}
                height={20}
                    src={activeUser?.avatarUrl ?? '/images/pfp.jpg'}
                    alt={activeUser?.username ?? 'usuario'}
                    className="pfp"/>
                <p className="user-welcome">
                    {"welcome"} {activeUser?.username}!
                </p>
                <button
                    onClick={handleLogOut}
                    className="btn-logout">
                    {"logout"}
                </button>
                <Button variant="go" text="home" to="/blog" onClick={()=>{}}/>
                <Button variant="go" text="go to playlist" to="/blog/playlist" onClick={()=>{}}></Button>
            </div>
        </>
    );
};

export default Profile;
