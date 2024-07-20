import React, { useState } from 'react';
import fakultasData from './data';

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
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Jadwal Kuliah Baru</h1>

            <div className="mb-4">
                <label htmlFor="fakultas" className="block mb-2">
                    Fakultas:
                </label>
                <select
                    id="fakultas"
                    value={selectedFakultas}
                    onChange={handleFakultasChange}
                    className="w-full px-3 py-2 border rounded-md"
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
                <div className="mb-4">
                    <label htmlFor="prodi" className="block mb-2">
                        Program Studi:
                    </label>
                    <select
                        id="prodi"
                        value={selectedProdi}
                        onChange={handleProdiChange}
                        className="w-full px-3 py-2 border rounded-md"
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
                <div className="mt-4">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border border-gray-300">HARI</th>
                                    <th className="px-4 py-2 border border-gray-300">KODE</th>
                                    <th className="px-4 py-2 border border-gray-300">
                                        MATA KULIAH
                                    </th>
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
                                    <tr key={index}>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {jadwalProdi.hari}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {jadwalProdi.kode}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {jadwalProdi.mataKuliah}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {jadwalProdi.kelas}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {jadwalProdi.sks}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {jadwalProdi.jam}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {jadwalProdi.semester}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {jadwalProdi.dosen}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {jadwalProdi.ruang}
                                        </td>
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