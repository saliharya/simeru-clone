import ScheduleMenuList from '@/components/schedulemenulist'
import React from 'react'

export default function SchedulePage() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex justify-between flex-wrap container items-center mt-16 mb-16">
                <ScheduleMenuList />
            </div>
        </div>
    )
}