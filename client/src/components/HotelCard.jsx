import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="block w-72 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={room.images[0]}
          alt="Room"
        />
        {index % 2 === 0 && (
          <span className="absolute top-3 left-3 bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded-full shadow">
            Best Seller
          </span>
        )}
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-gray-900">
            {room.hotel.name}
          </h3>
          <div className="flex items-center gap-1 text-orange-500 font-medium">
            <img src={assets.starIconFilled} alt="star" className="w-4 h-4" />
            4.9
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between pt-3">
          <p className="text-gray-800 text-lg font-semibold">
            ${room.pricePerNight}
            <span className="text-sm text-gray-500 font-normal"> / night</span>
          </p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
