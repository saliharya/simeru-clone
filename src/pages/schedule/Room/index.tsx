import React, { useState } from 'react';
import { Kampus, dataRuang } from '../../../lib/data/dataRuang';

export default function JadwalRuangPage() {
    const [selectedKampus, setSelectedKampus] = useState<Kampus | null>(null);
    const [expandedRuang, setExpandedRuang] = useState<string | null>(null);

    const handleChangeKampus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const kampus = dataRuang.find(kampus => kampus.kampus === e.target.value) || null;
        setSelectedKampus(kampus);
        setExpandedRuang(null);
    };

    const toggleRuang = (ruang: string) => {
        setExpandedRuang(expandedRuang === ruang ? null : ruang);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="mb-6">
                <label htmlFor="kampus-select" className="block text-lg font-semibold text-gray-800 mb-2">
                    Pilih Kampus
                </label>
                <div className="relative">
                    <select
                        id="kampus-select"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm appearance-none bg-white text-gray-800 py-2 px-3 pr-10"
                        onChange={handleChangeKampus}
                    >
                        <option value="">-- Pilih Kampus --</option>
                        {dataRuang.map(kampus => (
                            <option key={kampus.kampus} value={kampus.kampus}>
                                Kampus {kampus.kampus}
                            </option>
                        ))}
                    </select>
                    <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>

            {selectedKampus && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Jadwal Ruang - Kampus {selectedKampus.kampus}
                    </h2>
                    {selectedKampus.ruang.map((ruang, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg">
                            <button
                                onClick={() => toggleRuang(ruang.ruang)}
                                className="w-full text-left px-4 py-3 font-semibold bg-gray-100 border-b border-gray-300 rounded-t-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                {expandedRuang === ruang.ruang ? (
                                    <span className="text-red-600">- Ruang {ruang.ruang}</span>
                                ) : (
                                    <span className="text-blue-600">+ Ruang {ruang.ruang}</span>
                                )}
                            </button>

                            {expandedRuang === ruang.ruang && (
                                <div className="p-4 border border-gray-200 rounded-b-lg bg-gray-50">
                                    <p className="text-sm text-gray-600 mb-2">Kapasitas: {ruang.kapasitas}</p>
                                    <p className="text-sm text-gray-600 mb-2">Jumlah Sesi: {ruang.jumlahSesi}</p>
                                    <p className="text-sm text-gray-600 mb-2">Sesi Terpakai: {ruang.sesiTerpakai}</p>
                                    <p className="text-sm text-gray-600 mb-4">Sesi Tersisa: {ruang.sesiTersisa}</p>

                                    {ruang.jadwalRuang.length > 0 ? (
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    {['Hari', 'Jam', 'Kode', 'Mata Kuliah', 'Kelas', 'SKS', 'Program Studi', 'Semester', 'Dosen'].map(header => (
                                                        <th key={header} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            {header}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {ruang.jadwalRuang.map((jadwal, idx) => (
                                                    <tr key={idx}>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{jadwal.hari}</td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{jadwal.jam}</td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{jadwal.kode}</td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{jadwal.mataKuliah}</td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{jadwal.kelas}</td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{jadwal.sks}</td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{jadwal.programStudi}</td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{jadwal.semester}</td>
                                                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">{jadwal.dosen}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p className="text-gray-500">Tidak ada jadwal untuk ruang ini.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
