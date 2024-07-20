import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ScheduleIconProps {
    icon: StaticImageData;
    name: string;
    route: string;
}

const ScheduleIcon: React.FC<ScheduleIconProps> = ({ icon, name, route }) => {
    return (
        <Link href={route} passHref>
            <div className="flex flex-col items-center p-6 transition-transform transform hover:scale-105 hover:text-blue-500 rounded-lg shadow-lg bg-white">
                <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48">
                    <Image
                        src={icon}
                        alt={name}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform transform hover:scale-110"
                    />
                </div>
                <span className="mt-4 text-center text-lg font-medium text-gray-700">{name}</span>
            </div>
        </Link>
    );
};

export default ScheduleIcon;
