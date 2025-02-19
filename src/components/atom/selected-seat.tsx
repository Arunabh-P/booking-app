import React, { FC } from "react";
interface SeatProp {
  seatId: string;
  tier: string;
  price: number;
}
const SelectedSeat: FC<SeatProp> = ({ seatId, tier, price }) => (
  <div className="px-3 py-2 bg-gray-50 rounded-md shadow-sm">
    <span className="font-medium">{seatId}</span>
    <span className="text-gray-600 text-sm ml-2">
      {tier} - ₹{price}
    </span>
  </div>
);

export default SelectedSeat;
