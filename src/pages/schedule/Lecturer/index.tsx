import React from 'react'
import { useState } from 'react';
import { dosenData, Dosen } from '../../../lib/data/dataDosen';

export default function JadwalDosenPage() {
    const [selectedDosen, setSelectedDosen] = useState<Dosen | null>(null);

    return (
        <div className="p-6">
            <div className="mb-4">
                <label htmlFor="dosen-select" className="block text-lg font-medium text-gray-700">
                    Pilih Dosen
                </label>
                <select
                    id="dosen-select"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                        const selected = dosenData.find(dosen => dosen.nama === e.target.value);
                        setSelectedDosen(selected || null);
                    }}
                >
                    <option value="">-- Pilih Dosen --</option>
                    {dosenData.map(dosen => (
                        <option key={dosen.nama} value={dosen.nama}>
                            {dosen.nama}
                        </option>
                    ))}
                </select>
            </div>

            {selectedDosen && (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hari</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kode</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mata Kuliah</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program Studi</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kelas</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKS</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jam</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ruang</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kampus</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {selectedDosen.jadwalDosen.map((jadwal, index) => (
                                <tr key={index}>
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
    );
}