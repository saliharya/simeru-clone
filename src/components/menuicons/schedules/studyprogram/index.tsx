import React from 'react'
import Image from 'next/image';
import studyProgramIcon from '../../../../../public/study_program_icon.png';
import Link from 'next/link';


export default function StudyProgramScheduleIcon() {
    return (
        <Link href="/JadwalProdiPage">
            <div className="flex flex-col items-center p-4">
                <Image
                    src={studyProgramIcon}
                    alt="University Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                />
                <span className="mt-2 text-lg font-medium">Jadwal Program Studi</span>
            </div>
        </Link>
    );
}
