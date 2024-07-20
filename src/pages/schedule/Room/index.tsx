import React, { useState } from 'react';
import { Kampus, dataRuang } from '../../../lib/data/dataRuang';

export default function JadwalRuangPage() {
    const [selectedKampus, setSelectedKampus] = useState<Kampus | null>(null);
    const [expandedRuang, setExpandedRuang] = useState<string | null>(null);

    const handleChangeKampus = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const kampus = dataRuang.find(kampus => kampus.kampus === e.target.value) || null;
        setSelectedKampus(kampus);
        setExpandedRuang(null); // Reset expanded room when changing campus
    };

    const toggleRuang = (ruang: string) => {
        setExpandedRuang(expandedRuang === ruang ? null : ruang);
    };

    return (
        <div className="p-6">
            <div className="mb-4">
                <label htmlFor="kampus-select" className="block text-lg font-medium text-gray-700">
                    Pilih Kampus
                </label>
                <select
                    id="kampus-select"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={handleChangeKampus}
                >
                    <option value="">-- Pilih Kampus --</option>
                    {dataRuang.map(kampus => (
                        <option key={kampus.kampus} value={kampus.kampus}>
                            Kampus {kampus.kampus}
                        </option>
                    ))}
                </select>
            </div>

            {selectedKampus && (
                <div className="overflow-x-auto">
                    <h2 className="text-xl font-bold mb-4">Jadwal Ruang - Kampus {selectedKampus.kampus}</h2>
                    {selectedKampus.ruang.map((ruang, index) => (
                        <div key={index} className="mb-4">
                            <button
                                onClick={() => toggleRuang(ruang.ruang)}
                                className="w-full text-left px-4 py-2 font-semibold bg-gray-100 border border-gray-300 rounded-lg"
                            >
                                {expandedRuang === ruang.ruang ? (
                                    <span className="text-red-500">- Ruang {ruang.ruang}</span>
                                ) : (
                                    <span className="text-blue-500">+ Ruang {ruang.ruang}</span>
                                )}
                            </button>

                            {expandedRuang === ruang.ruang && (
                                <div className="mt-2 p-4 border border-gray-200 rounded-lg">
                                    <p className="text-sm mb-2">Kapasitas: {ruang.kapasitas}</p>
                                    <p className="text-sm mb-2">Jumlah Sesi: {ruang.jumlahSesi}</p>
                                    <p className="text-sm mb-2">Sesi Terpakai: {ruang.sesiTerpakai}</p>
                                    <p className="text-sm mb-2">Sesi Tersisa: {ruang.sesiTersisa}</p>

                                    {ruang.jadwalRuang.length > 0 ? (
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hari</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jam</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kode</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mata Kuliah</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kelas</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKS</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program Studi</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosen</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {ruang.jadwalRuang.map((jadwal, idx) => (
                                                    <tr key={idx}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.hari}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.jam}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.kode}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.mataKuliah}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.kelas}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.sks}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.programStudi}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.semester}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.dosen}</td>
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