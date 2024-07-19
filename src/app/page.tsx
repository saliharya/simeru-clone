import React from 'react';
import ScheduleIcon from '@/components/scheduleicon';
import studyProgramIcon from '../../public/study_program_icon.png';
import lecturerIcon from '../../public/lecturer_icon.png';
import classIcon from '../../public/class_icon.png';

export default function Home() {
  return (
    <>
      <ScheduleIcon
        icon={studyProgramIcon}
        name="Jadwal Program Studi"
        route="/JadwalProdiPage"
      />
      <ScheduleIcon
        icon={lecturerIcon}
        name="Jadwal Dosen"
        route="/JadwalDosenPage"
      />
      <ScheduleIcon
        icon={classIcon}
        name="Jadwal Ruang"
        route="/JadwalRuangPage"
      />
    </>
  )
}