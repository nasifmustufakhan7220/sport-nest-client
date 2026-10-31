import { IBooking } from "@/Types/Facility";
import MyBookingCard from "./MyBookingCard";

export default async function MyBookings() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}booking`);
    const bookings:IBooking[] = await res.json();
  return (
    <div className="grid grid-cols-1 gap-3">
        {
            bookings.map(booking=><MyBookingCard key={booking._id} data={booking} />)
        }
    </div>
  );
}
