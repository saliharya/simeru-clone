import ScheduleMenuList from '@/components/schedulemenulist'
import React from 'react'

export default function SchedulePage() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-3xl font-bold mb-8 mt-16">Sistem Informasi Manajemen Ruang</h1>
            <div className="flex justify-between flex-wrap container items-center mb-16">
                <ScheduleMenuList />
            </div>
        </div>
    )
}
