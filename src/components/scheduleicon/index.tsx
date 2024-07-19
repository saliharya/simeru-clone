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
        <Link href={route}>
            <div className="flex flex-col items-center p-4">
                <Image
                    src={icon}
                    alt={name}
                    width={200}
                    height={200}
                    className="object-contain"
                />
                <span className="mt-2 text-lg font-medium">{name}</span>
            </div>
        </Link>
    );
};

export default ScheduleIcon;