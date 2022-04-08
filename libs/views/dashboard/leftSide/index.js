import { useState, useEffect } from 'react';

import { getTripCounting } from '../../../models/tripModel'

import Maps from './Maps';
import JumlahPenumpangMotor from './JumlahPenumpangMotor';
import DetilJumlah from './DetilJumlah';
import CardStatus from './CardStatus';
import Checkpoint from './Checkpoint';

import { Search } from '../../../components/input'
import { ButtonSort } from '../../../components/button'

const LeftSide = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    (async () => {
      const dataTrips = await getTripCounting();
      setTrips(dataTrips)
    })()
  },[])


  return (
    <div className="bg-white rounded-xl p-4 lg:w-2/3 mb-4">
      
      <div className="flex flex-col md:flex-row gap-3 mb-3">
        <Maps />

        <div className="flex gap-3">
          <div className="rounded-lg overflow-hidden text-sm w-full">
            <JumlahPenumpangMotor />

            <div className="border-2 border-t-0 border-gray-400 rounded-b-lg p-4 overflow-y-auto h-[272px]">
              {trips.map((e,i) => (
                <DetilJumlah
                  key={i}
                  trip={e.trip.city.name}
                  bus={[
                    e.bus_count,
                    e.passenger_man_count,
                    e.passenger_woman_count,
                    0,
                    ]}
                  truck={[
                    e.truck_count,
                    0,
                    0,
                    e.vehicle_count,
                    ]}
                />
              ))}
              </div>
          </div>

          <div className="w-full">
            <CardStatus
              judul="Status Bus"
              perjalanan="0"
              istirahat="0"
              butuhBantuan="0"
              tiba="0"
            />

            <CardStatus
              judul="Status Truk"
              perjalanan="0"
              istirahat="0"
              butuhBantuan="0"
              tiba="0"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 border-b">
          <h1 className="text-2xl text-maincolor">Bus Checkpoint</h1>
          <Search />
          <ButtonSort />
        </div>

        <div className="overflow-x-auto">
          {trips.map((e,i) => (
            <Checkpoint key={i} judul={`${e.trip.city.name} - ${e.trip_id}`} progres={0} />
          ))}
        </div>

      </div>


    </div>
  );
}

export default LeftSide;