import { FC } from "react";
import { TbArmchair } from "react-icons/tb";

interface SeatProps {
  seatId: string;
  rowIndex: number;
  isSelected: boolean;
  price: number;
  onSeatClick: (seatId: string, rowIndex: number) => void;
  tireColor: string;
}

export const Seat: FC<SeatProps> = ({
  seatId,
  rowIndex,
  isSelected,
  tireColor,
  onSeatClick,
}) => {
  return (
    <div
      className="flex flex-col items-center"
      onClick={() => onSeatClick(seatId, rowIndex)}
    >
      <div
        style={{ backgroundColor: isSelected ? "#a5ef73" : tireColor }}
        className={`
          p-[4px] lg:p-2 rounded-md cursor-pointer tireColor transition-colors relative group
          
        `}
      >
        <TbArmchair
          color={isSelected ? "white" : "black"}
          className="text-[14px]  lg:text-[20px]"
        />
      </div>
      <span className="text-[12px] md:text-[14px] mt-1">{seatId}</span>
    </div>
  );
};
