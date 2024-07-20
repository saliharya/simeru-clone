export interface Ruang {
    ruang: string;
    kapasitas: number;
    jumlahSesi: number;
    sesiTerpakai: number;
    sesiTersisa: number;
    jadwalRuang: JadwalRuang[]
}

export interface JadwalRuang {
    hari: string;
    jam: string;
    kode: string;
    mataKuliah: string;
    kelas: string;
    sks: string;
    programStudi: string;
    semester: string;
    dosen: string;
}

export interface Kampus {
    kampus: string;
    ruang: Ruang[];
}

export const dataRuang: Kampus[] = [
    {
        kampus: "I",
        ruang: [
            {
                ruang: "string",
                kapasitas: 1,
                jumlahSesi: 1,
                sesiTerpakai: 1,
                sesiTersisa: 1,
                jadwalRuang: [{
                    hari: "string",
                    jam: "string",
                    kode: "string",
                    mataKuliah: "string",
                    kelas: "string",
                    sks: "string",
                    programStudi: "string",
                    semester: "string",
                    dosen: "string",
                }]
            }
        ]
    },
    {
        kampus: "II",
        ruang: [
            {
                ruang: "string",
                kapasitas: 1,
                jumlahSesi: 1,
                sesiTerpakai: 1,
                sesiTersisa: 1,
                jadwalRuang: [{
                    hari: "string",
                    jam: "string",
                    kode: "string",
                    mataKuliah: "string",
                    kelas: "string",
                    sks: "string",
                    programStudi: "string",
                    semester: "string",
                    dosen: "string",
                }]
            }
        ]
    },
    {
        kampus: "III",
        ruang: [
            {
                ruang: "string",
                kapasitas: 1,
                jumlahSesi: 1,
                sesiTerpakai: 1,
                sesiTersisa: 1,
                jadwalRuang: [{
                    hari: "string",
                    jam: "string",
                    kode: "string",
                    mataKuliah: "string",
                    kelas: "string",
                    sks: "string",
                    programStudi: "string",
                    semester: "string",
                    dosen: "string",
                }]
            }
        ]
    },
    {
        kampus: "IV",
        ruang: [
            {
                ruang: "4.1.2.01",
                kapasitas: 60,
                jumlahSesi: 124,
                sesiTerpakai: 0,
                sesiTersisa: 124,
                jadwalRuang: [{
                    hari: "Senin",
                    jam: "1,2",
                    kode: "211820320",
                    mataKuliah: "Aljabar Linear Matrik",
                    kelas: "A",
                    sks: "2",
                    programStudi: "Teknik Informatika",
                    semester: "2",
                    dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                }]
            },
            {
                ruang: "4.1.2.02",
                kapasitas: 60,
                jumlahSesi: 124,
                sesiTerpakai: 0,
                sesiTersisa: 124,
                jadwalRuang: [{
                    hari: "Senin",
                    jam: "1,2",
                    kode: "211820320",
                    mataKuliah: "Aljabar Linear Matrik",
                    kelas: "A",
                    sks: "2",
                    programStudi: "Teknik Informatika",
                    semester: "2",
                    dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                }]
            },
            {
                ruang: "4.1.2.03",
                kapasitas: 60,
                jumlahSesi: 124,
                sesiTerpakai: 0,
                sesiTersisa: 124,
                jadwalRuang: [{
                    hari: "Senin",
                    jam: "1,2",
                    kode: "211820320",
                    mataKuliah: "Aljabar Linear Matrik",
                    kelas: "A",
                    sks: "2",
                    programStudi: "Teknik Informatika",
                    semester: "2",
                    dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                }]
            },
            {
                ruang: "4.1.2.04",
                kapasitas: 60,
                jumlahSesi: 124,
                sesiTerpakai: 0,
                sesiTersisa: 124,
                jadwalRuang: [{
                    hari: "Senin",
                    jam: "1,2",
                    kode: "211820320",
                    mataKuliah: "Aljabar Linear Matrik",
                    kelas: "A",
                    sks: "2",
                    programStudi: "Teknik Informatika",
                    semester: "2",
                    dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                }]
            },
            {
                ruang: "4.1.2.05",
                kapasitas: 60,
                jumlahSesi: 124,
                sesiTerpakai: 60,
                sesiTersisa: 64,
                jadwalRuang: [
                    {
                        hari: "Senin",
                        jam: "1,2",
                        kode: "211820320",
                        mataKuliah: "Aljabar Linear Matrik",
                        kelas: "A",
                        sks: "2",
                        programStudi: "Teknik Informatika",
                        semester: "2",
                        dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                    }
                ]
            },
            {
                ruang: "4.1.2.06",
                kapasitas: 60,
                jumlahSesi: 124,
                sesiTerpakai: 69,
                sesiTersisa: 55,
                jadwalRuang: [
                    {
                        hari: "Selasa",
                        jam: "5,6",
                        kode: "211860120",
                        mataKuliah: "Manajemen Proyek Teknologi Informasi",
                        kelas: "C",
                        sks: "2",
                        programStudi: "Teknik Informatika",
                        semester: "6",
                        dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                    }
                ]
            },
            {
                ruang: "4.1.2.07",
                kapasitas: 30,
                jumlahSesi: 124,
                sesiTerpakai: 53,
                sesiTersisa: 71,
                jadwalRuang: [{
                    hari: "Senin",
                    jam: "1,2",
                    kode: "211820320",
                    mataKuliah: "Aljabar Linear Matrik",
                    kelas: "A",
                    sks: "2",
                    programStudi: "Teknik Informatika",
                    semester: "2",
                    dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                }]
            },
            {
                ruang: "4.1.2.08",
                kapasitas: 30,
                jumlahSesi: 124,
                sesiTerpakai: 0,
                sesiTersisa: 124,
                jadwalRuang: [{
                    hari: "Senin",
                    jam: "1,2",
                    kode: "211820320",
                    mataKuliah: "Aljabar Linear Matrik",
                    kelas: "A",
                    sks: "2",
                    programStudi: "Teknik Informatika",
                    semester: "2",
                    dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                }]
            },
            {
                ruang: "4.1.2.09",
                kapasitas: 60,
                jumlahSesi: 124,
                sesiTerpakai: 66,
                sesiTersisa: 58,
                jadwalRuang: [{
                    hari: "Senin",
                    jam: "1,2",
                    kode: "211820320",
                    mataKuliah: "Aljabar Linear Matrik",
                    kelas: "A",
                    sks: "2",
                    programStudi: "Teknik Informatika",
                    semester: "2",
                    dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                }]
            },
            {
                ruang: "4.1.2.10",
                kapasitas: 60,
                jumlahSesi: 124,
                sesiTerpakai: 62,
                sesiTersisa: 62,
                jadwalRuang: [{
                    hari: "Senin",
                    jam: "1,2",
                    kode: "211820320",
                    mataKuliah: "Aljabar Linear Matrik",
                    kelas: "A",
                    sks: "2",
                    programStudi: "Teknik Informatika",
                    semester: "2",
                    dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                }]
            },
            {
                ruang: "4.1.3.11",
                kapasitas: 60,
                jumlahSesi: 124,
                sesiTerpakai: 51,
                sesiTersisa: 73,
                jadwalRuang: [{
                    hari: "Senin",
                    jam: "1,2",
                    kode: "211820320",
                    mataKuliah: "Aljabar Linear Matrik",
                    kelas: "A",
                    sks: "2",
                    programStudi: "Teknik Informatika",
                    semester: "2",
                    dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                }]
            },
            {
                ruang: "4.1.3.12",
                kapasitas: 30,
                jumlahSesi: 124,
                sesiTerpakai: 72,
                sesiTersisa: 52,
                jadwalRuang: [{
                    hari: "Senin",
                    jam: "1,2",
                    kode: "211820320",
                    mataKuliah: "Aljabar Linear Matrik",
                    kelas: "A",
                    sks: "2",
                    programStudi: "Teknik Informatika",
                    semester: "2",
                    dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                }]
            },
            {
                ruang: "4.1.3.13",
                kapasitas: 30,
                jumlahSesi: 124,
                sesiTerpakai: 45,
                sesiTersisa: 79,
                jadwalRuang: [{
                    hari: "Senin",
                    jam: "1,2",
                    kode: "211820320",
                    mataKuliah: "Aljabar Linear Matrik",
                    kelas: "A",
                    sks: "2",
                    programStudi: "Teknik Informatika",
                    semester: "2",
                    dosen: "Guntur Maulana Zamroni, B.Sc., M.Kom.",
                }]
            }
            // Add more rooms as needed
        ]
    },
    {
        kampus: "V",
        ruang: [
            {
                ruang: "string",
                kapasitas: 1,
                jumlahSesi: 1,
                sesiTerpakai: 1,
                sesiTersisa: 1,
                jadwalRuang: [{
                    hari: "string",
                    jam: "string",
                    kode: "string",
                    mataKuliah: "string",
                    kelas: "string",
                    sks: "string",
                    programStudi: "string",
                    semester: "string",
                    dosen: "string",
                }]
            }
        ]
    },
    {
        kampus: "VI",
        ruang: [
            {
                ruang: "string",
                kapasitas: 1,
                jumlahSesi: 1,
                sesiTerpakai: 1,
                sesiTersisa: 1,
                jadwalRuang: [{
                    hari: "string",
                    jam: "string",
                    kode: "string",
                    mataKuliah: "string",
                    kelas: "string",
                    sks: "string",
                    programStudi: "string",
                    semester: "string",
                    dosen: "string",
                }]
            }
        ]
    },
];