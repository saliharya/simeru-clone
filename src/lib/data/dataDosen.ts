export interface Dosen {
    nama: string;
    jadwalDosen: JadwalDosen[];
}

export interface JadwalDosen {
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

export const dosenData: Dosen[] = [
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
    },
    {
        nama: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
        jadwalDosen: [
            {
                hari: "Senin",
                kode: "211820320",
                mataKuliah: "Aljabar Linear Matrik",
                programStudi: "Teknik Informatika",
                kelas: "A",
                sks: "2",
                jam: "1,2",
                semester: "2",
                ruang: "4.1.4.51",
                kampus: "Kampus IV",
            },
            {
                hari: "Senin",
                kode: "211850320",
                mataKuliah: "Pengantar Manajemen dan Prinsip Proyek",
                programStudi: "Teknik Informatika",
                kelas: "A",
                sks: "2",
                jam: "3,4",
                semester: "5",
                ruang: "Daring ( T. Informatika )",
                kampus: "Kampus IV",
            },
            {
                hari: "Senin",
                kode: "211840131",
                mataKuliah: "Analisis dan Perancangan Perangkat Lunak",
                programStudi: "Teknik Informatika",
                kelas: "E",
                sks: "3",
                jam: "7,8",
                semester: "4",
                ruang: "4.1.5.65",
                kampus: "Kampus IV",
            },
            {
                hari: "Senin",
                kode: "211840131",
                mataKuliah: "Analisis dan Perancangan Perangkat Lunak",
                programStudi: "Teknik Informatika",
                kelas: "I",
                sks: "3",
                jam: "9,10",
                semester: "4",
                ruang: "4.1.5.66",
                kampus: "Kampus IV",
            },
            {
                hari: "Selasa",
                kode: "211820320",
                mataKuliah: "Aljabar Linear Matrik",
                programStudi: "Teknik Informatika",
                kelas: "H",
                sks: "2",
                jam: "1,2",
                semester: "2",
                ruang: "4.1.6.75",
                kampus: "Kampus IV",
            },
            {
                hari: "Selasa",
                kode: "211820320",
                mataKuliah: "Aljabar Linear Matrik",
                programStudi: "Teknik Informatika",
                kelas: "D",
                sks: "2",
                jam: "3,4",
                semester: "2",
                ruang: "4.1.6.75",
                kampus: "Kampus IV",
            },
            {
                hari: "Selasa",
                kode: "211860120",
                mataKuliah: "Manajemen Proyek Teknologi Informasi",
                programStudi: "Teknik Informatika",
                kelas: "C",
                sks: "2",
                jam: "5,6",
                semester: "6",
                ruang: "Daring ( T. Informatika )",
                kampus: "Kampus IV",
            },
            {
                hari: "Rabu",
                kode: "211840630",
                mataKuliah: "Komunikasi Data dan Jaringan Komputer",
                programStudi: "Teknik Informatika",
                kelas: "I",
                sks: "3",
                jam: "1,2,3",
                semester: "4",
                ruang: "4.1.5.61",
                kampus: "Kampus IV",
            },
            {
                hari: "Jumat",
                kode: "211820320",
                mataKuliah: "Aljabar Linear Matrik",
                programStudi: "Teknik Informatika",
                kelas: "F",
                sks: "2",
                jam: "1,2",
                semester: "2",
                ruang: "4.1.6.75",
                kampus: "Kampus IV",
            },
            {
                hari: "Jumat",
                kode: "211840630",
                mataKuliah: "Komunikasi Data dan Jaringan Komputer",
                programStudi: "Teknik Informatika",
                kelas: "D",
                sks: "3",
                jam: "7,8,9",
                semester: "4",
                ruang: "4.1.5.55",
                kampus: "Kampus IV",
            }
        ]
    }
];