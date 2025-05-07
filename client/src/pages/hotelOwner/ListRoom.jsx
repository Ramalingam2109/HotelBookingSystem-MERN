// src/pages/hotelOwner/ListRoom.jsx
import React from "react";
import Title from "../../components/Title";
import { roomsDummyData } from "../../assets/assets"; // Import the dummy data

const ListRoom = () => {
  return (
    <div className="p-4">
      <Title
        align="left"
        font="outfit"
        title="Room listings"
        subTitle="View, edit or manage all listed rooms."
      />

      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Room Type</th>
              <th className="p-3 text-left max-sm:hidden">Amenities</th>
              <th className="p-3 text-left">Price/Night</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {roomsDummyData.map((room) => (
              <tr key={room._id} className="hover:bg-gray-50">
                <td className="p-3">{room.roomType}</td>
                <td className="p-3 max-sm:hidden">
                  {room.amenities.join(", ")} {/* Now safe to use join() */}
                </td>
                <td className="p-3">${room.pricePerNight}</td>

                {/* slider button */}
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-sm text-center">
                  <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                    <input type="checkbox" name="" id="" className="sr-only peer" checked={room.isAvailable}/>
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200:"></div>
                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
