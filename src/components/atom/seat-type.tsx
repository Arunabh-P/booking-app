import React, { FC } from "react";
interface SeatTypeProps {
  title: string;
  bgColor: string;
}
const SeatType: FC<SeatTypeProps> = ({ title, bgColor }) => (
  <div className="flex items-center gap-1">
    <div className={`w-4 h-4 ${bgColor} border border-1 rounded-md`}></div>
    <p>{title}</p>
  </div>
);

export default SeatType;
