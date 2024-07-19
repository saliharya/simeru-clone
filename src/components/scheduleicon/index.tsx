import React from 'react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ScheduleIconProps {
    icon: StaticImageData;
    name: string;
    route: string;
}

const ScheduleIcon: React.FC<ScheduleIconProps> = ({ icon, name, route }) => {
    return (
        <Link href={route}>
            <div className="flex flex-col items-center p-4 transition-transform transform hover:text-blue-500 rounded-lg">
                <img
                    src={icon.src}
                    alt={name}
                    width={200}
                    height={200}
                    className="object-contain transition-transform transform hover:scale-125"
                />
                <span className="mt-2 text-lg font-medium">{name}</span>
            </div>
        </Link>
    );
};

export default ScheduleIcon;
