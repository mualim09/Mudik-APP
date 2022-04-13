import { useState } from 'react'

import { Table } from '../../../libs/components/table'

const MemberModal = ({ data, setShowModal }) => {

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm z-10 bg-black/10 overflow-y-auto p-4">
      <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-[800px] min-h-[300px]">
        <div className="flex justify-between -mt-2 border-b pb-3">
          <h1 className="text-xl font-semibold">Data Anggota</h1>
          <button className="text-xl" onClick={() => setShowModal(false)}>x</button>
        </div>
        <div className="rounded-xl overflow-x-auto mt-6">
          <table className="min-w-full w-max">
            <thead>
              <tr>
                <th className="p-2 border-b">Nama</th>
                <th className="p-2 border-b">NIK</th>
                <th className="p-2 border-b">No. KK</th>
                <th className="p-2 border-b">Gender</th>
                <th className="p-2 border-b">Vaksin</th>
                <th className="p-2 border-b">Tipe Vaksin</th>
                <th className="p-2 border-b">File Booster</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e,i) => (
                <tr className="text-center">
                  <td className="p-2">{e.name}</td>
                  <td className="p-2">{e.nik}</td>
                  <td className="p-2">{e.no_kk}</td>
                  <td className="p-2">{(e.gender == 'p') ? 'Perempuan' : 'Laki-laki'}</td>
                  <td className="p-2">Dosis {e.Vaksin}</td>
                  <td className="p-2">{e.type_vaksin}</td>
                  <td className="p-2"><a href={e.file_booster} target="_blank">{e.file_booster ? 'File' : ''}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MemberModal;