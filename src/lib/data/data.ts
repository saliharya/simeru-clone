interface Fakultas {
    nama: string;
    prodi: Prodi[];
}

interface Prodi {
    nama: string;
    jadwalProdi: JadwalProdi[];
}

interface JadwalProdi {
    hari: string;
    kode: string;
    mataKuliah: string;
    kelas: string;
    sks: string;
    jam: string;
    semester: string;
    dosen: string;
    ruang: string;
    fakultas: string;
    prodi: string;
}

interface Dosen {
    nama: string
    jadwalDosen: JadwalDosen[];
}

interface JadwalDosen {
    hari: string;
    kode: string;
    mataKuliah: string;
    programStudi: string;
    kelas: string;
    sks: string;
    jam: string;
    semester: string;
    ruang: string;
    kampus: string;
}

const dosenData: Dosen[] = [
    {
        nama: "Dinan Yulianto, S.T., M.Eng.",
        jadwalDosen: [
            {
                hari: "Senin",
                kode: "211860431",
                mataKuliah: "Teknologi Multimedia",
                programStudi: "Teknik Informatika",
                kelas: "F",
                sks: "3",
                jam: "11,12",
                semester: "6",
                ruang: "Daring ( T. Informatika )",
                kampus: "Kampus IV",
            },
            {
                hari: "Rabu",
                kode: "211860431",
                mataKuliah: "Teknologi Multimedia",
                programStudi: "Teknik Informatika",
                kelas: "E",
                sks: "3",
                jam: "1,2",
                semester: "6",
                ruang: "Daring ( T. Informatika )",
                kampus: "Kampus IV",
            },
            {
                hari: "Kamis",
                kode: "211860731",
                mataKuliah: "Rekayasa Web",
                programStudi: "Teknik Informatika",
                kelas: "A",
                sks: "3",
                jam: "11,12",
                semester: "6",
                ruang: "4.1.6.75",
                kampus: "Kampus IV",
            },
            {
                hari: "Jumat",
                kode: "211860431",
                mataKuliah: "Teknologi Multimedia",
                programStudi: "Teknik Informatika",
                kelas: "G",
                sks: "3",
                jam: "7,8",
                semester: "6",
                ruang: "Daring ( T. Informatika )",
                kampus: "Kampus IV",
            },
            {
                hari: "Jumat",
                kode: "211870220",
                mataKuliah: "Kapita Selekta",
                programStudi: "Teknik Informatika",
                kelas: "A",
                sks: "2",
                jam: "9,10",
                semester: "7",
                ruang: "Daring ( T. Informatika )",
                kampus: "Kampus IV",
            },
            {
                hari: "Sabtu",
                kode: "211860731",
                mataKuliah: "Rekayasa Web",
                programStudi: "Teknik Informatika",
                kelas: "B",
                sks: "3",
                jam: "11,12",
                semester: "6",
                ruang: "4.1.5.55",
                kampus: "Kampus IV",
            }
        ]
    }
];


const fakultasData: Fakultas[] = [
    {
        nama: 'Fakultas Agama Islam',
        prodi: [
            {
                nama: 'Pendidikan Agama Islam',
                jadwalProdi: [
                    {
                        hari: 'Senin',
                        kode: 'FAI101',
                        mataKuliah: 'Agama Islam',
                        kelas: 'A',
                        sks: '3',
                        jam: '08:00 - 10:00',
                        semester: 'I',
                        dosen: 'Ustadz Ahmad',
                        ruang: 'Aula',
                        fakultas: 'Fakultas Agama Islam',
                        prodi: 'Pendidikan Agama Islam',
                    },
                    {
                        hari: 'Rabu',
                        kode: 'FAI102',
                        mataKuliah: 'Fiqih',
                        kelas: 'B',
                        sks: '3',
                        jam: '10:00 - 12:00',
                        semester: 'II',
                        dosen: 'Ustadzah Fatimah',
                        ruang: 'Ruang 101',
                        fakultas: 'Fakultas Agama Islam',
                        prodi: 'Pendidikan Agama Islam',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Fakultas Ekonomi',
        prodi: [
            {
                nama: 'Manajemen',
                jadwalProdi: [
                    {
                        hari: 'Selasa',
                        kode: 'FEK101',
                        mataKuliah: 'Pengantar Manajemen',
                        kelas: 'A',
                        sks: '3',
                        jam: '09:00 - 11:00',
                        semester: 'I',
                        dosen: 'Dr. Budi Santoso',
                        ruang: 'Ruang 202',
                        fakultas: 'Fakultas Ekonomi',
                        prodi: 'Manajemen',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Fakultas Farmasi',
        prodi: [
            {
                nama: 'Farmasi Klinis',
                jadwalProdi: [
                    {
                        hari: 'Kamis',
                        kode: 'FFK101',
                        mataKuliah: 'Farmakologi',
                        kelas: 'A',
                        sks: '3',
                        jam: '10:00 - 12:00',
                        semester: 'III',
                        dosen: 'Dr. Siti Aisyah',
                        ruang: 'Lab 1',
                        fakultas: 'Fakultas Farmasi',
                        prodi: 'Farmasi Klinis',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Fakultas Hukum',
        prodi: [
            {
                nama: 'Ilmu Hukum',
                jadwalProdi: [
                    {
                        hari: 'Jumat',
                        kode: 'FH101',
                        mataKuliah: 'Hukum Pidana',
                        kelas: 'A',
                        sks: '3',
                        jam: '08:00 - 10:00',
                        semester: 'II',
                        dosen: 'Dr. Rudi Hartono',
                        ruang: 'Ruang 301',
                        fakultas: 'Fakultas Hukum',
                        prodi: 'Ilmu Hukum',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Fakultas Kedokteran',
        prodi: [
            {
                nama: 'Pendidikan Dokter',
                jadwalProdi: [
                    {
                        hari: 'Senin',
                        kode: 'FKD101',
                        mataKuliah: 'Anatomi',
                        kelas: 'A',
                        sks: '4',
                        jam: '08:00 - 12:00',
                        semester: 'I',
                        dosen: 'Dr. Ali Hasan',
                        ruang: 'Lab Anatomi',
                        fakultas: 'Fakultas Kedokteran',
                        prodi: 'Pendidikan Dokter',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Fakultas Keguruan dan Ilmu Pendidikan',
        prodi: [
            {
                nama: 'Pendidikan Matematika',
                jadwalProdi: [
                    {
                        hari: 'Selasa',
                        kode: 'FKIP101',
                        mataKuliah: 'Matematika Dasar',
                        kelas: 'A',
                        sks: '3',
                        jam: '09:00 - 11:00',
                        semester: 'I',
                        dosen: 'Dr. Lina Marlina',
                        ruang: 'Ruang 401',
                        fakultas: 'Fakultas Keguruan dan Ilmu Pendidikan',
                        prodi: 'Pendidikan Matematika',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Fakultas Kesehatan Masyarakat',
        prodi: [
            {
                nama: 'Ilmu Kesehatan Masyarakat',
                jadwalProdi: [
                    {
                        hari: 'Rabu',
                        kode: 'FKM101',
                        mataKuliah: 'Epidemiologi',
                        kelas: 'A',
                        sks: '3',
                        jam: '10:00 - 12:00',
                        semester: 'III',
                        dosen: 'Dr. Maya Putri',
                        ruang: 'Ruang 501',
                        fakultas: 'Fakultas Kesehatan Masyarakat',
                        prodi: 'Ilmu Kesehatan Masyarakat',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Fakultas Psikologi',
        prodi: [
            {
                nama: 'Psikologi Klinis',
                jadwalProdi: [
                    {
                        hari: 'Kamis',
                        kode: 'FPS101',
                        mataKuliah: 'Psikopatologi',
                        kelas: 'A',
                        sks: '3',
                        jam: '08:00 - 10:00',
                        semester: 'II',
                        dosen: 'Dr. Dwi Handayani',
                        ruang: 'Ruang 601',
                        fakultas: 'Fakultas Psikologi',
                        prodi: 'Psikologi Klinis',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Fakultas Sains Dan Teknologi Terapan',
        prodi: [
            {
                nama: 'Bioteknologi',
                jadwalProdi: [
                    {
                        hari: 'Senin',
                        kode: 'FST101',
                        mataKuliah: 'Genetika',
                        kelas: 'A',
                        sks: '3',
                        jam: '09:00 - 11:00',
                        semester: 'II',
                        dosen: 'Dr. Budi Raharjo',
                        ruang: 'Lab Genetika',
                        fakultas: 'Fakultas Sains Dan Teknologi Terapan',
                        prodi: 'Bioteknologi',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Fakultas Sastra',
        prodi: [
            {
                nama: 'Sastra Inggris',
                jadwalProdi: [
                    {
                        hari: 'Rabu',
                        kode: 'FSI101',
                        mataKuliah: 'Literature',
                        kelas: 'A',
                        sks: '3',
                        jam: '08:00 - 10:00',
                        semester: 'I',
                        dosen: 'Dr. Anna Smith',
                        ruang: 'Ruang 701',
                        fakultas: 'Fakultas Sastra',
                        prodi: 'Sastra Inggris',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Fakultas Teknologi Industri',
        prodi: [
            {
                nama: 'Teknik Informatika',
                jadwalProdi: [
                    {
                        hari: 'Senin',
                        kode: '211860431',
                        mataKuliah: 'Teknologi Multimedia',
                        kelas: 'F',
                        sks: "3",
                        jam: '11, 12',
                        semester: 'VI',
                        dosen: 'Dinan Yulianto, S.T., M.Eng.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    }, {
                        hari: 'Rabu',
                        kode: '211860431',
                        mataKuliah: 'Teknologi Multimedia',
                        kelas: 'E',
                        sks: "3",
                        jam: '1, 2',
                        semester: 'VI',
                        dosen: 'Dinan Yulianto, S.T., M.Eng.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    }, {
                        hari: 'Kamis',
                        kode: '211860731',
                        mataKuliah: 'Rekayasa Web',
                        kelas: 'A',
                        sks: "3",
                        jam: '11, 12',
                        semester: 'VI',
                        dosen: 'Dinan Yulianto, S.T., M.Eng.',
                        ruang: '4.1.6.75',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    }, {
                        hari: 'Jumat',
                        kode: '211860431',
                        mataKuliah: 'Teknologi Multimedia',
                        kelas: 'G',
                        sks: "3",
                        jam: '11, 12',
                        semester: 'VI',
                        dosen: 'Dinan Yulianto, S.T., M.Eng.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    }, {
                        hari: 'Senin',
                        kode: '211870220',
                        mataKuliah: 'Kapita Selekta',
                        kelas: 'A',
                        sks: "2",
                        jam: '9, 10',
                        semester: 'VII',
                        dosen: 'Dinan Yulianto, S.T., M.Eng.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    }, {
                        hari: 'Senin',
                        kode: '211860431',
                        mataKuliah: 'Teknologi Multimedia',
                        kelas: 'F',
                        sks: "3",
                        jam: '11, 12',
                        semester: 'VI',
                        dosen: 'Dinan Yulianto, S.T., M.Eng.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211820230',
                        mataKuliah: 'Algoritma Pemrograman',
                        kelas: 'D',
                        sks: "3",
                        jam: '1,2,3',
                        semester: 'II',
                        dosen: 'Drs., Wahyu Pujiyono, M. Kom.',
                        ruang: '4.1.5.67',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211820320',
                        mataKuliah: 'Aljabar Linear Matrik',
                        kelas: 'A',
                        sks: '2',
                        jam: '1,2',
                        semester: 'II',
                        dosen: 'Guntur Maulana Zamroni, B.Sc., M.Kom.',
                        ruang: '4.1.4.51',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211820520',
                        mataKuliah: 'Bahasa Indonesia',
                        kelas: 'I',
                        sks: '2',
                        jam: '1,2',
                        semester: 'II',
                        dosen: 'Wachid Eko Purwanto, S.Pd. Bebryana Ratri, S.Pd., M.Pd.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211840131',
                        mataKuliah: 'Analisis dan Perancangan Perangkat Lunak',
                        kelas: 'B',
                        sks: "3",
                        jam: '1,2',
                        semester: 'IV',
                        dosen: 'Drs., Tedy Setiadi, M.T.',
                        ruang: '4.1.5.69',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211840131',
                        mataKuliah: 'Analisis dan Perancangan Perangkat Lunak',
                        kelas: 'C',
                        sks: "3",
                        jam: '1,2',
                        semester: 'IV',
                        dosen: 'Ali Tarmuji, S.T., M.Cs.',
                        ruang: '4.1.5.66',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211840531',
                        mataKuliah: 'Kecerdasan Buatan',
                        kelas: 'I',
                        sks: "3",
                        jam: '1,2',
                        semester: 'IV',
                        dosen: 'Miftahurrahma Rosyda, S.Kom., M.Eng.',
                        ruang: '4.1.5.71',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211860220',
                        mataKuliah: 'Metodologi Penelitian',
                        kelas: 'B',
                        sks: '2',
                        jam: '1,2',
                        semester: 'VI',
                        dosen: 'Ir., Sri Winiarti, S.T., M.Cs.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211860631',
                        mataKuliah: 'Kriptografi',
                        kelas: 'B',
                        sks: "3",
                        jam: '1,2',
                        semester: 'VI',
                        dosen: 'Nur Rochmah Dyah PA, S.T., M.Kom.',
                        ruang: '4.1.6.75',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211861131',
                        mataKuliah: 'Deep Learning',
                        kelas: 'A',
                        sks: "3",
                        jam: '1,2',
                        semester: 'VI',
                        dosen: 'Dr., Murinto, S.Si., M.Kom.',
                        ruang: '4.1.5.59',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211880200',
                        mataKuliah: 'Ilmu Dakwah',
                        kelas: 'G',
                        sks: '0',
                        jam: '1,2',
                        semester: 'VIII',
                        dosen: 'Drs., Indal Abror, M.Ag.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211820120',
                        mataKuliah: 'Akhlak',
                        kelas: 'C',
                        sks: '2',
                        jam: '3,4',
                        semester: 'II',
                        dosen: 'Thonthowi, S.Ag., M.Hum. Ali Yusuf, S.Th.I., M.Hum.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211820120',
                        mataKuliah: 'Akhlak',
                        kelas: 'F',
                        sks: '2',
                        jam: '3,4',
                        semester: 'II',
                        dosen: 'Niki Alma Febriana Fauzi, S.Th.I., M.A. Arsyada Rakhmah, Lc., M.H.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211820320',
                        mataKuliah: 'Aljabar Linear Matrik',
                        kelas: 'G',
                        sks: '2',
                        jam: '3,4',
                        semester: 'II',
                        dosen: 'Faisal Fajri Rahani, S.Si., M.Cs.',
                        ruang: '4.1.5.62',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211820631',
                        mataKuliah: 'Matematika Diskrit',
                        kelas: 'A',
                        sks: "3",
                        jam: '3,4',
                        semester: 'II',
                        dosen: 'Nur Rochmah Dyah PA, S.T., M.Kom.',
                        ruang: '4.1.6.75',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211820820',
                        mataKuliah: 'Pendidikan Kewarganegaraan',
                        kelas: 'H',
                        sks: '2',
                        jam: '3,4',
                        semester: 'II',
                        dosen: 'Atqo Darmawan Aji, S.H.,M.H. Insan Pribadi, S.H., M.H.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211840131',
                        mataKuliah: 'Analisis dan Perancangan Perangkat Lunak',
                        kelas: 'D',
                        sks: "3",
                        jam: '3,4',
                        semester: 'IV',
                        dosen: 'Arfiani Nur Khusna, S.T., M.Kom.',
                        ruang: '4.1.5.65',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211840420',
                        mataKuliah: 'Islam Interdisipliner',
                        kelas: 'G',
                        sks: '2',
                        jam: '3,4',
                        semester: 'IV',
                        dosen: 'Dr., Sutarman, S.Pd., M.Hum. Husnul Khotimah Husaeri, S.Psi., S.H.I., M.Sc',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211840531',
                        mataKuliah: 'Kecerdasan Buatan',
                        kelas: 'A',
                        sks: "3",
                        jam: '3,4',
                        semester: 'IV',
                        dosen: 'Ir., Sri Winiarti, S.T., M.Cs.',
                        ruang: '4.1.5.59',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211840831',
                        mataKuliah: 'Strategi Algoritma',
                        kelas: 'J',
                        sks: "3",
                        jam: '3,4',
                        semester: 'IV',
                        dosen: 'Dwi Normawati, S.T., M.Eng.',
                        ruang: '4.1.5.69',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211850320',
                        mataKuliah: 'Pengantar Manajemen dan Prinsip Proyek',
                        kelas: 'A',
                        sks: '2',
                        jam: '3,4',
                        semester: 'V',
                        dosen: 'Guntur Maulana Zamroni, B.Sc., M.Kom.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211860220',
                        mataKuliah: 'Metodologi Penelitian',
                        kelas: 'C',
                        sks: '2',
                        jam: '3,4',
                        semester: 'VI',
                        dosen: 'Supriyanto, S.T., M.T.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211861531',
                        mataKuliah: 'Pengelihatan Komputer',
                        kelas: 'A',
                        sks: "3",
                        jam: '3,4',
                        semester: 'VI',
                        dosen: 'Dr., Murinto, S.Si., M.Kom.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211880200',
                        mataKuliah: 'Ilmu Dakwah',
                        kelas: 'A',
                        sks: '0',
                        jam: '3,4',
                        semester: 'VIII',
                        dosen: 'MUH. IQBAL, M.Pd.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211820230',
                        mataKuliah: 'Algoritma Pemrograman',
                        kelas: 'E',
                        sks: "3",
                        jam: '4,5,6',
                        semester: 'II',
                        dosen: 'Bambang Setiawan, S.T., M.T.',
                        ruang: '4.1.5.68',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211820320',
                        mataKuliah: 'Aljabar Linear Matrik',
                        kelas: 'H',
                        sks: '2',
                        jam: '4,5',
                        semester: 'II',
                        dosen: 'Evi Suryani, S.T., M.Cs.',
                        ruang: '4.1.5.60',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211820520',
                        mataKuliah: 'Bahasa Indonesia',
                        kelas: 'J',
                        sks: '2',
                        jam: '4,5',
                        semester: 'II',
                        dosen: 'Rina Marzuki, S.Pd.\nHeni Purnama, S.Pd., M.Pd.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211840131',
                        mataKuliah: 'Analisis dan Perancangan Perangkat Lunak',
                        kelas: 'E',
                        sks: "3",
                        jam: '4,5',
                        semester: 'IV',
                        dosen: 'Krisna Adi Prasetyo, S.T., M.Kom.',
                        ruang: '4.1.5.70',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211840531',
                        mataKuliah: 'Kecerdasan Buatan',
                        kelas: 'B',
                        sks: "3",
                        jam: '4,5',
                        semester: 'IV',
                        dosen: 'Widiya Anggara, S.T., M.Eng.',
                        ruang: '4.1.5.72',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211860220',
                        mataKuliah: 'Metodologi Penelitian',
                        kelas: 'D',
                        sks: '2',
                        jam: '4,5',
                        semester: 'VI',
                        dosen: 'Fitriani, S.T., M.Kom.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211860631',
                        mataKuliah: 'Kriptografi',
                        kelas: 'C',
                        sks: "3",
                        jam: '4,5',
                        semester: 'VI',
                        dosen: 'Nisa Nurul, S.Kom., M.Kom.',
                        ruang: '4.1.6.74',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211861131',
                        mataKuliah: 'Deep Learning',
                        kelas: 'B',
                        sks: "3",
                        jam: '4,5',
                        semester: 'VI',
                        dosen: 'Andi Riza, S.T., M.Eng.',
                        ruang: '4.1.5.58',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    },
                    {
                        hari: 'senin',
                        kode: '211880200',
                        mataKuliah: 'Ilmu Dakwah',
                        kelas: 'B',
                        sks: '0',
                        jam: '4,5',
                        semester: 'VIII',
                        dosen: 'Yulianto, M.Ag.',
                        ruang: 'Daring ( T. Informatika )',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika'
                    }

                ],
            },
            {
                nama: 'Teknik Kimia',
                jadwalProdi: [
                    {
                        hari: 'Rabu',
                        kode: 'FTK101',
                        mataKuliah: 'Kimia Organik',
                        kelas: 'A',
                        sks: '3',
                        jam: '08:00 - 10:00',
                        semester: 'III',
                        dosen: 'Dr. Rahmat Hidayat',
                        ruang: 'Lab Kimia',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Kimia',
                    },
                ],
            },
            {
                nama: 'Teknik Elektro',
                jadwalProdi: [
                    {
                        hari: 'Kamis',
                        kode: 'FTE101',
                        mataKuliah: 'Sistem Digital',
                        kelas: 'A',
                        sks: '3',
                        jam: '09:00 - 11:00',
                        semester: 'II',
                        dosen: 'Dr. Indra Lesmana',
                        ruang: 'Lab Elektronika',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Elektro',
                    },
                ],
            },
            {
                nama: 'Teknik Industri',
                jadwalProdi: [
                    {
                        hari: 'Jumat',
                        kode: 'FTI201',
                        mataKuliah: 'Manajemen Industri',
                        kelas: 'A',
                        sks: '3',
                        jam: '08:00 - 10:00',
                        semester: 'IV',
                        dosen: 'Dr. Andi Susanto',
                        ruang: 'Ruang 402',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Industri',
                    },
                ],
            },
            {
                nama: 'Teknik Informatika Prosus',
                jadwalProdi: [
                    {
                        hari: 'Selasa',
                        kode: 'FTIP101',
                        mataKuliah: 'Algoritma dan Pemrograman',
                        kelas: 'A',
                        sks: '3',
                        jam: '13:00 - 15:00',
                        semester: 'I',
                        dosen: 'Ibu Ratna Dewi',
                        ruang: 'Lab Prosus',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknik Informatika Prosus',
                    },
                ],
            },
            {
                nama: 'Teknologi Pangan',
                jadwalProdi: [
                    {
                        hari: 'Kamis',
                        kode: 'FTP101',
                        mataKuliah: 'Teknologi Pengolahan Pangan',
                        kelas: 'A',
                        sks: '3',
                        jam: '10:00 - 12:00',
                        semester: 'III',
                        dosen: 'Dr. Dian Kusuma',
                        ruang: 'Lab Pangan',
                        fakultas: 'Fakultas Teknologi Industri',
                        prodi: 'Teknologi Pangan',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Kampus Merdeka',
        prodi: [
            {
                nama: 'Prodi Merdeka',
                jadwalProdi: [
                    {
                        hari: 'Rabu',
                        kode: 'KM101',
                        mataKuliah: 'Belajar Merdeka',
                        kelas: 'A',
                        sks: '2',
                        jam: '13:00 - 15:00',
                        semester: 'I',
                        dosen: 'Dr. Merdeka Belajar',
                        ruang: 'Ruang 501',
                        fakultas: 'Kampus Merdeka',
                        prodi: 'Prodi Merdeka',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Pascasarjana',
        prodi: [
            {
                nama: 'Magister Manajemen',
                jadwalProdi: [
                    {
                        hari: 'Senin',
                        kode: 'PAS101',
                        mataKuliah: 'Manajemen Strategis',
                        kelas: 'A',
                        sks: '4',
                        jam: '18:00 - 21:00',
                        semester: 'I',
                        dosen: 'Prof. Dr. Bambang Suharto',
                        ruang: 'Ruang 601',
                        fakultas: 'Pascasarjana',
                        prodi: 'Magister Manajemen',
                    },
                ],
            },
        ],
    },
    {
        nama: 'Program Permata Sakti',
        prodi: [
            {
                nama: 'Program Sakti',
                jadwalProdi: [
                    {
                        hari: 'Selasa',
                        kode: 'PS101',
                        mataKuliah: 'Permata Sakti',
                        kelas: 'A',
                        sks: '2',
                        jam: '10:00 - 12:00',
                        semester: 'I',
                        dosen: 'Dr. Sakti Permata',
                        ruang: 'Ruang 701',
                        fakultas: 'Program Permata Sakti',
                        prodi: 'Program Sakti',
                    },
                ],
            },
        ],
    },
];

export default fakultasData;
