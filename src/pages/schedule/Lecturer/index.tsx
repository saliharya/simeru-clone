import React, { useState } from 'react';
import { dosenData, Dosen } from '../../../lib/data/dataDosen';

export default function JadwalDosenPage() {
    const [selectedDosen, setSelectedDosen] = useState<Dosen | null>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleDosenChange = (dosen: Dosen) => {
        if (openIndex === dosenData.indexOf(dosen)) {
            setOpenIndex(null);
        } else {
            setSelectedDosen(dosen);
            setOpenIndex(dosenData.indexOf(dosen));
        }
    };

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Jadwal Dosen</h1>

            <div className="space-y-4">
                {dosenData.map((dosen, index) => (
                    <div key={dosen.nama} className="bg-white shadow-md rounded-lg">
                        <button
                            className="w-full px-4 py-2 text-left text-lg font-semibold text-gray-700 bg-gray-50 rounded-t-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={() => handleDosenChange(dosen)}
                        >
                            {dosen.nama}
                        </button>
                        {openIndex === index && selectedDosen && (
                            <div className="p-4">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            {['Hari', 'Kode', 'Mata Kuliah', 'Program Studi', 'Kelas', 'SKS', 'Jam', 'Semester', 'Ruang', 'Kampus'].map(header => (
                                                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {selectedDosen.jadwalDosen.map((jadwal, index) => (
                                            <tr key={index} className="hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.hari}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.kode}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.mataKuliah}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.programStudi}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.kelas}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.sks}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.jam}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.semester}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.ruang}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jadwal.kampus}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
