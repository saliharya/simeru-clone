import ScheduleMenuList from '@/components/schedulemenulist'
import React from 'react'
import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';

export default function SchedulePage() {

    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'loading') return; // Do nothing while loading
        if (!session) signIn(); // Redirect to login if not authenticated
    }, [session, status])

    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-3xl font-bold mb-8 mt-16">Sistem Informasi Manajemen Ruang</h1>
            <div className="flex justify-between flex-wrap container items-center mb-16">
                <ScheduleMenuList />
            </div>
        </div>
    )
}
