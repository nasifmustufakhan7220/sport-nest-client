
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { IFACILITY } from "@/Types/Facility";

export default function FacilityCard({facility}:{facility: IFACILITY}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white font-sans shadow-sm transition-all duration-300 hover:shadow-lg">

      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={`${facility.image ? facility.image : "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"}`}
          alt="Sports facility"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Sport Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-bold text-orange-700">
          {facility.sportType.toUpperCase()}
        </span>

        {/* Price Badge */}
        <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-2 shadow-sm">
          <span className="text-lg font-bold text-green-700">$ {facility.price}</span>
          <span className="text-sm text-gray-400">/hr</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="space-y-4 p-5">

        <h2 className="text-xl font-bold text-slate-900">
          {facility.name}
        </h2>

        {/* Facility Details */}
        <div className="space-y-2.5">

          <div className="flex items-center gap-2.5 text-slate-500">
            <MapPin className="size-4.5 shrink-0 text-green-500" />
            <span>${facility.location}</span>
          </div>

          <div className="flex items-center gap-2.5 text-slate-500">
            <Users className="size-4.5 shrink-0 text-green-500" />
            <span>Up to {facility.capacity} players</span>
          </div>

          <div className="flex items-center gap-2.5 text-slate-500">
            <Clock className="size-4.5 shrink-0 text-green-500" />
            <span>{facility.avaiableSlot} slots available</span>
          </div>

        </div>

        {/* Book Button */}
        <Button
          
          className="h-12.5 w-full rounded-2xl bg-green-600 text-base font-bold text-white hover:bg-green-700"
        >
          <Link
            href={`/all-facilities/${facility._id}`}
            className="flex items-center justify-center gap-2"
          >
            Book Now
            <ArrowRight className="size-5 shrink-0" />
          </Link>
        </Button>

      </div>
    </div>
  );
}
