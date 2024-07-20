import ScheduleMenuList from '@/components/schedulemenulist';
import React, { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';

export default function SchedulePage() {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'loading') return;
        if (!session) signIn();
    }, [session, status]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-12 mt-16 text-gray-800">Sistem Informasi Manajemen Ruang</h1>
            <div className="container mx-auto p-6">
                <ScheduleMenuList />
            </div>
        </div>
    );
}
