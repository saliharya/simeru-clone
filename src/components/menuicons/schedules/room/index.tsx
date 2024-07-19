import React from 'react'
import Image from 'next/image';
import classIcon from '../../../../../public/class_icon.png';
import Link from 'next/link';


export default function RoomScheduleIcon() {
    return (
        <Link href="/JadwalRuangPage">
            <div className="flex flex-col items-center p-4">
                <Image
                    src={classIcon}
                    alt="University Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                />
                <span className="mt-2 text-lg font-medium">Jadwal Ruang</span>
            </div>
        </Link>
    );
}
