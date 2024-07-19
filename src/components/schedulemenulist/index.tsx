import React from 'react';
import ScheduleIcon from '@/components/scheduleicon';
import studyProgramIcon from '../../../public/study_program_icon.png';
import lecturerIcon from '../../../public/lecturer_icon.png';
import classIcon from '../../../public/class_icon.png';
import { StaticImageData } from 'next/image';

interface ScheduleItem {
    icon: StaticImageData;
    name: string;
    route: string;
}

const scheduleItems: ScheduleItem[] = [
    {
        icon: studyProgramIcon,
        name: 'Jadwal Program Studi',
        route: 'schedule/StudyProgram',
    },
    {
        icon: lecturerIcon,
        name: 'Jadwal Dosen',
        route: 'schedule/Lecturer',
    },
    {
        icon: classIcon,
        name: 'Jadwal Ruang',
        route: 'schedule/Room',
    },
];

const ScheduleMenuList: React.FC = () => {
    return (
        <div className='flex justify-between flex-wrap container items-center'>
            {scheduleItems.map((item, index) => (
                <ScheduleIcon
                    key={index}
                    icon={item.icon}
                    name={item.name}
                    route={item.route}
                />
            ))}
        </div>
    );
};

export default ScheduleMenuList;
