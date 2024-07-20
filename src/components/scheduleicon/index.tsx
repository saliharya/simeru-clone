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
            <div className="flex flex-col items-center p-4 transition-transform transform hover:text-blue-500 rounded-lg">
                <div className="relative w-48 h-48">
                    <Image
                        src={icon}
                        alt={name}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform transform hover:scale-125"
                    />
                </div>
                <span className="mt-8 text-lg font-medium">{name}</span>
            </div>
        </Link>
    );
};

export default ScheduleIcon;
