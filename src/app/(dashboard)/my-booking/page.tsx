import { Suspense } from "react";
import MyBookings from "../_components/MyComponents";

const MyBookingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">My Bookings</h1>

          <p className="mt-1 text-sm text-slate-500">
            View and manage all your facility bookings
          </p>
        </div>

        {/* Booking Card */}
          <Suspense fallback={<p>Loading....</p>}>
                <MyBookings />
          </Suspense>
      </div>
    </div>
  );
};

export default MyBookingPage;
