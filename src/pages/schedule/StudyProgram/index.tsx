import React, { useState } from 'react';
import fakultasData from '../../../lib/data/dataProdi';

export default function JadwalProdiPage() {
    const [selectedFakultas, setSelectedFakultas] = useState('');
    const [selectedProdi, setSelectedProdi] = useState('');

    const handleFakultasChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFakultas(event.target.value);
        setSelectedProdi('');
    };

    const handleProdiChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProdi(event.target.value);
    };

    const filteredjadwalProdi = fakultasData.flatMap((fakultas) =>
        fakultas.prodi.flatMap((prodi) =>
            prodi.jadwalProdi.filter(
                (jadwalProdi) =>
                    (!selectedFakultas || jadwalProdi.fakultas === selectedFakultas) &&
                    (!selectedProdi || jadwalProdi.prodi === selectedProdi)
            )
        )
    );

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Jadwal Kuliah Baru</h1>

            <div className="mb-6">
                <label htmlFor="fakultas" className="block text-lg font-medium text-gray-700 mb-2">
                    Fakultas:
                </label>
                <select
                    id="fakultas"
                    value={selectedFakultas}
                    onChange={handleFakultasChange}
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value="">Pilih Fakultas</option>
                    {fakultasData.map((fak, index) => (
                        <option key={index} value={fak.nama}>
                            {fak.nama}
                        </option>
                    ))}
                </select>
            </div>

            {selectedFakultas && (
                <div className="mb-6">
                    <label htmlFor="prodi" className="block text-lg font-medium text-gray-700 mb-2">
                        Program Studi:
                    </label>
                    <select
                        id="prodi"
                        value={selectedProdi}
                        onChange={handleProdiChange}
                        className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value="">Pilih Program Studi</option>
                        {fakultasData
                            .find((f) => f.nama === selectedFakultas)
                            ?.prodi.map((p, index) => (
                                <option key={index} value={p.nama}>
                                    {p.nama}
                                </option>
                            ))}
                    </select>
                </div>
            )}

            {selectedFakultas && selectedProdi && filteredjadwalProdi.length > 0 && (
                <div className="mt-8">
                    <div className="overflow-x-auto shadow-lg rounded-lg">
                        <table className="table-auto w-full border-collapse bg-white">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2 border border-gray-300">HARI</th>
                                    <th className="px-4 py-2 border border-gray-300">KODE</th>
                                    <th className="px-4 py-2 border border-gray-300">MATA KULIAH</th>
                                    <th className="px-4 py-2 border border-gray-300">KELAS</th>
                                    <th className="px-4 py-2 border border-gray-300">SKS</th>
                                    <th className="px-4 py-2 border border-gray-300">JAM</th>
                                    <th className="px-4 py-2 border border-gray-300">SEMESTER</th>
                                    <th className="px-4 py-2 border border-gray-300">DOSEN</th>
                                    <th className="px-4 py-2 border border-gray-300">RUANG</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredjadwalProdi.map((jadwalProdi, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">{jadwalProdi.hari}</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">{jadwalProdi.kode}</td>
                                        <td className="px-4 py-2 border border-gray-300">{jadwalProdi.mataKuliah}</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">{jadwalProdi.kelas}</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">{jadwalProdi.sks}</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">{jadwalProdi.jam}</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">{jadwalProdi.semester}</td>
                                        <td className="px-4 py-2 border border-gray-300">{jadwalProdi.dosen}</td>
                                        <td className="px-4 py-2 border border-gray-300 text-center">{jadwalProdi.ruang}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
