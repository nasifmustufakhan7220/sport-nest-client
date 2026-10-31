"use client";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";

export default function AddFacilityPage() {
  const handelFacilities = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const filitiesData = Object.fromEntries(formData.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}facilities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filitiesData),
    });

    const data = await res.json();
    if (data.acknowledged) {
      toast.add({
        title: "Success!",
        description: "Facility added successfully.",
      });
    }
  };
  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 py-10">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            Add New Facility
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            List your sports venue for others to book
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <form className="space-y-7" onSubmit={handelFacilities}>
            {/* First Row */}
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
              {/* Facility Name */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-slate-600">
                  Facility Name *
                </label>

                <Input
                  type="text"
                  name="name"
                  placeholder="e.g. Green Turf Football Ground"
                  className="h-11 rounded-xl border-slate-200 px-4 shadow-none placeholder:text-slate-400 focus-visible:ring-green-500"
                />
              </div>

              {/* Sport Type */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-slate-600">
                  Sport Type *
                </label>

                <select
                  name="sportType"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Sport Type</option>
                  <option value="football">Football</option>
                  <option value="cricket">Cricket</option>
                  <option value="badminton">Badminton</option>
                  <option value="tennis">Tennis</option>
                  <option value="basketball">Basketball</option>
                </select>
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-slate-600">
                  Image URL *
                </label>

                <Input
                  type="url"
                  name="image"
                  placeholder="https://example.com/image.jpg"
                  className="h-11 rounded-xl border-slate-200 px-4 shadow-none placeholder:text-slate-400 focus-visible:ring-green-500"
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-slate-600">
                  Location *
                </label>

                <Input
                  type="text"
                  name="location"
                  placeholder="e.g. Gulshan, Dhaka"
                  className="h-11 rounded-xl border-slate-200 px-4 shadow-none placeholder:text-slate-400 focus-visible:ring-green-500"
                />
              </div>

              {/* Price */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-slate-600">
                  Price Per Hour ($) *
                </label>

                <Input
                  type="number"
                  name="price"
                  placeholder="50"
                  className="h-11 rounded-xl border-slate-200 px-4 shadow-none placeholder:text-slate-400 focus-visible:ring-green-500"
                />
              </div>

              {/* Capacity */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-slate-600">
                  Capacity (Players) *
                </label>

                <Input
                  type="number"
                  name="capacity"
                  placeholder="22"
                  className="h-11 rounded-xl border-slate-200 px-4 shadow-none placeholder:text-slate-400 focus-visible:ring-green-500"
                />
              </div>
            </div>

            {/* Available Time Slots */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-slate-600">
                Available Time Slots *
              </label>

              <div className="flex gap-2">
                <Input
                  type="text"
                  name="avaiableSlot"
                  placeholder="e.g. 08:00 AM - 09:00 AM"
                  className="h-11 rounded-xl border-slate-200 px-4 shadow-none placeholder:text-slate-400 focus-visible:ring-green-500"
                />

                <Button
                  type="button"
                  className="h-11 w-14 shrink-0 rounded-xl bg-[#16a34a] hover:bg-green-700"
                >
                  <PlusCircle className="size-5" />
                </Button>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-slate-600">
                Description *
              </label>

              <Textarea
                placeholder="Describe your facility..."
                name="description"
                className="min-h-24 resize-none rounded-xl border-slate-200 px-4 py-3 shadow-none placeholder:text-slate-400 focus-visible:ring-green-500"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="h-14 w-full rounded-xl bg-[#16a34a] text-base font-bold text-white shadow-lg shadow-green-100 hover:bg-green-700 sm:w-48"
              >
                Add Facility
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
