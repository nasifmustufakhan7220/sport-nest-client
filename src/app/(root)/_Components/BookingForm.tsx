"use client";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IFACILITY } from "@/Types/Facility";
import { CalendarDays, Clock, Timer } from "lucide-react";
import { toast } from "@/components/ui/toast";
import { Spinner } from "@/components/ui/spinner";

const BookingForm = ({ data }: { data: IFACILITY }) => {
  const [submit, setSubmit] = useState(false);
  const getTodayLocal = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const today = useMemo(() => getTodayLocal(), []);

  const handelBooking = async(e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const bookingData = Object.fromEntries(formData.entries());
    
    if (bookingData.date < today) {
      toast.add({
        title: "Invalid Date",
        description: "Date Must be today's date or later.",
      });
      return;
    }
    
    const image = data.image; 
    setSubmit(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}booking`,{
        method: "POST",
        headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({...bookingData, image: image}),
    });

    setSubmit(false);

    const dataForm = await res.json();
    if(dataForm.acknowledged){
        toast.add({
        title: "Success!",
        description: "Booking completed.",
      });
    };
  };

  const timeSlots = [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
  ];
  return (
    <div>
      <form className="mt-6 space-y-4" onSubmit={handelBooking}>
        {/* Facility Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase text-slate-500">
            Facility
          </label>

          <Input
            type="text"
            name="name"
            value={data.name}
            className="h-10.75 rounded-xl bg-slate-50 shadow-none"
          />
        </div>

        {/* Booking Date */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1 text-xs font-semibold uppercase text-slate-500">
            <CalendarDays size={13} />
            Booking Date
          </label>

          <Input
            type="date"
            name="date"
            min={today}
            className="h-10.75 rounded-xl shadow-none"
          />
        </div>

        {/* Time Slot */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1 text-xs font-semibold uppercase text-slate-500">
            <Clock size={13} />
            Time Slot
          </label>

          <select
            name="timeSlot"
            className="h-10.75 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a time slot</option>
            {Number(data.avaiableSlot) > 0 &&
              timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
          </select>
        </div>

        {/* Duration */}
        <div className="space-y-1.5">
          <label className="flex items-center gap-1 text-xs font-semibold uppercase text-slate-500">
            <Timer size={13} />
            Duration (Hours)
          </label>

          <Input
            type="string"
            name="duration"
            defaultValue="1"
            className="h-10.75rounded-xl shadow-none"
          />
        </div>

        {/* Total Price */}
        <div className="rounded-xl border border-green-100 bg-green-50 p-4">
          <div className="flex items-center justify-between text-sm text-slate-500">
            <span>$80/hr × 1 hr</span>
            <span>$80</span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <span className="font-bold text-slate-900">Total Price</span>

            <span className="text-lg font-bold text-green-700">$80</span>
          </div>
        </div>

        {/* Confirm Booking */}
        <Button
          type="submit"
          className="h-13 w-full rounded-xl bg-green-600 text-base font-bold text-white shadow-md hover:bg-green-700"
          disabled={submit}
        >
          {submit && <Spinner/>}
          {submit ? "Booking..." : "Confirm Booking"}
          
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
