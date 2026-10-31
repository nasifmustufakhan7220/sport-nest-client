import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Users,
  Clock,
  DollarSign,
} from "lucide-react";
import { IFACILITY } from "@/Types/Facility";
import BookingForm from "./BookingForm";


export default async function BookingDetails ({params} : {params: Promise<{id: string}>}) {
    const {id} = await params;
    console.log(id);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}facilities/${id}`);
    const data:IFACILITY = await res.json();
    
  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="mx-auto max-w-280">
        {/* Back Button */}
        <Link
          href="/all-facilities"
          className="mb-7 flex items-center gap-2 text-sm text-slate-500 hover:text-green-600"
        >
          <ArrowLeft size={16} />
          Back to Facilities
        </Link>

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {/* Left Side - Facility Information */}
          <div>
            {/* Facility Image */}
            <div className="relative h-80 w-full overflow-hidden rounded-2xl">
              <Image
                src={`${data.image ? data.image : "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"}`}
                alt="Facility Image"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <span className="absolute left-4 top-4 rounded-full bg-green-600 px-4 py-1 text-xs font-bold text-white">
                {data.sportType}
              </span>
            </div>

            {/* Facility Name */}
            <h1 className="mt-6 text-3xl font-bold text-slate-950">
              {data.name}
            </h1>

            {/* Facility Details */}
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin size={14} />
                  Location
                </div>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {data.location}
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Users size={14} />
                  Capacity
                </div>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  Up to {data.capacity} players
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <DollarSign size={14} />
                  Price
                </div>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  ${data.price}/hour
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock size={14} />
                  Slots
                </div>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  {data.avaiableSlot} available
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">About this facility</h3>

              <p className="mt-2 text-sm text-slate-500">
               {data.description}
              </p>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            {/* Form Heading */}
            <h2 className="text-xl font-bold text-slate-900">
              Book This Facility
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Fill in your details to reserve this spot
            </p>

            <BookingForm data={data}/>
          </div>
        </div>
      </div>
    </div>
  );
}
