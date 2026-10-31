
import Image from "next/image";
import { MapPin, CalendarDays, Clock, DollarSign, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IBooking } from "@/Types/Facility";
const MyBookingCard = ({data}: {data: IBooking}) => {
    return (
        <div className="flex flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:flex-row sm:items-start">

          {/* Facility Image */}
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
            <Image
              src={`${data.image ? data.image : "https://images.unsplash.com/photo-1544717305-2782549b5136"}`}
              alt="Smash Arena"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>

          {/* Booking Details */}
          <div className="min-w-0 flex-1">

            {/* Facility Name and Status */}
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-lg font-bold text-slate-900">
                Smash Arena
              </h2>

              <span className="rounded-md border border-yellow-200 bg-yellow-100 px-2 py-1 text-[10px] font-bold text-yellow-700">
                PENDING
              </span>
            </div>

            {/* Booking Information */}
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">

              {/* Location */}
              <div className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-green-500" />
                <span>Dhanmondi, Dhaka</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1.5">
                <CalendarDays className="size-3.5 text-green-500" />
                <span>Nov 5, 2026</span>
              </div>

              {/* Time */}
              <div className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-green-500" />
                <span>03:00 PM - 04:00 PM (1h)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-1.5">
                <DollarSign className="size-3.5 text-green-500" />
                <span className="font-semibold text-slate-900">$30</span>
              </div>

            </div>
          </div>

          {/* Cancel Button */}
          <Button
            variant="ghost"
            className="h-9 shrink-0 justify-start gap-2 px-2 text-sm font-medium text-red-500 hover:bg-red-50 hover:text-red-600 sm:mt-0"
          >
            <Trash2 className="size-4" />
            Cancel
          </Button>

    </div>
    );
};

export default MyBookingCard;