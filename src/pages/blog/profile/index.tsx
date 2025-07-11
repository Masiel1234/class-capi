'use client';

import Image from "next/image";
import Button from '@/common/components/Button/SubmitButton'
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
            <div className="flex items-center gap-4">
                <Button variant="go" text="" to="/blog" onClick={()=>{}}/>
                <Image
                width={20}
                height={20}
                    src={activeUser?.avatarUrl ?? '/images/pfp.jpg'}
                    alt={activeUser?.username ?? 'usuario'}
                    className="w-10 h-10 rounded-full object-cover"/>
                <p className="text-sm font-medium capitalize">
                    {"welcome"} {activeUser?.username}!
                </p>
                <button
                    onClick={handleLogOut}
                    className="bg-transparent border-none text-sm font-bold cursor-pointer px-3 py-2 transition-all duration-300 ease-in-out uppercase hover:text-red-600">
                    {"logout"}
                </button>
                <Button variant="go" text="go to playlist" to="/blog/playlist" onClick={()=>{}}></Button>
            </div>
        </>
    );
};

export default Profile;
