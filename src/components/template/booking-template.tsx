"use client";
import Button from "@/components/atom/button";
import { Seat } from "@/components/atom/seat";
import SeatType from "@/components/atom/seat-type";
import { pricePlans } from "@/constants/price-plan";
import { seatData } from "@/constants/seat";
import { getTierColor } from "@/helper/get-tier-color";
import { getTierPricing } from "@/helper/get-tier-price";
import { useToastStore } from "@/store/tost";
import React, { useState } from "react";
import SelectedSeat from "../atom/selected-seat";
import { useTranslations } from "next-intl";

const BookingTemplate = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const { showToast } = useToastStore();
  const t = useTranslations("bookTicket");
  const toggleSeat = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats((prev) => prev.filter((id) => id !== seatId));
    } else if (selectedSeats.length >= seatData.maxSeat) {
      showToast(
        "Error",
        `You can only select up to ${seatData.maxSeat} seats.`
      );
    } else {
      setSelectedSeats((prev) => [...prev, seatId]);
    }
  };

  const handleBooking = () => {
    if (selectedSeats.length > 0) {
      showToast("Success", "Booking confirmed! Your seats have been reserved.");
    }
  };

  const calculateTotal = () => {
    return selectedSeats.reduce((total, seatId) => {
      const rowIndex = seatData.rows.indexOf(seatId[0]);
      const { price } = getTierPricing(rowIndex);
      return total + price;
    }, 0);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 section-padding bg-primary min-h-screen">
      <div className="w-full md:w-7/12 flex flex-col items-center justify-center bg-white p-3 sm:p-5 rounded-lg">
        <h3 className="font-semibold my-3 text-center">{t("pageTitle")}</h3>
        <div className="flex flex-wrap justify-center gap-3 mb-3 sm:mb-5 border-[1.5px] rounded-md p-2 bg-gray-50 sm:w-fit">
          {pricePlans.map((item) => (
            <SeatType
              title={item.name}
              bgColor={item.bgColor}
              key={item.name}
            />
          ))}
        </div>
        <div className="grid mb-5">
          {seatData.rows.map((row, rowIndex) => (
            <div
              key={row}
              className="flex mb-3 last:mb-0 justify-center items-center"
            >
              <div className="flex gap-2">
                {[...Array(seatData.seatsPerRow)].map((_, seatIndex) => {
                  const seatId = `${row}${seatIndex + 1}`;
                  const isSelected = selectedSeats.includes(seatId);
                  const { price } = getTierPricing(rowIndex);
                  const tireColor = getTierColor(rowIndex);
                  return (
                    <Seat
                      key={seatId}
                      seatId={seatId}
                      rowIndex={rowIndex}
                      isSelected={isSelected}
                      price={price}
                      onSeatClick={toggleSeat}
                      tireColor={tireColor}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-5/12 bg-white  p-3 sm:p-5  rounded-lg">
        <h4 className="font-medium my-3 text-center">{t("billTitle")}</h4>
        {selectedSeats.length > 0 ? (
          <>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedSeats.map((seatId) => {
                const rowIndex = seatData.rows.indexOf(seatId[0]);
                const { price, tier } = getTierPricing(rowIndex);
                return (
                  <SelectedSeat
                    key={seatId}
                    seatId={seatId}
                    tier={tier}
                    price={price}
                  />
                );
              })}
            </div>
            <div className="flex justify-between items-center border-t pt-4 mb-5">
              <div>
                <p className="font-medium text-lg">
                {t("total")}: ₹{calculateTotal()}
                </p>
                <p className="text-sm text-gray-600">
                  {selectedSeats.length} selected
                </p>
              </div>
            </div>
            <Button onClick={handleBooking} text={t("bookNow")} />
          </>
        ) : (
          <p className="text-gray-500">{t("noSeatSelected")}</p>
        )}
      </div>
    </div>
  );
};

export default BookingTemplate;
