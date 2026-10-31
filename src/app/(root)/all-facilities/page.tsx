import { Search, Filter, ArrowUp, ArrowDown } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FacilitiesGrid from "../_Components/FacilitiesGrid";
import { Suspense } from "react";

const AllFacilitiesPage = () => {
  return (
    <section className="mx-auto w-full max-w-280 px-5 py-10">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">
          All Facilities
        </h1>

        <p className="mt-2 text-xl text-slate-500">
          Browse 28 sports venues available for booking
        </p>
      </div>

      {/* Search and Filter Card */}
      <div className="flex flex-col gap-3 rounded-2xl mb-10 border border-slate-100 bg-white p-5 shadow-sm lg:flex-row lg:items-center">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

          <Input
            type="text"
            placeholder="Search by facility name..."
            className="h-13 rounded-2xl border-slate-200 pl-11 text-base shadow-none placeholder:text-slate-400 focus-visible:ring-green-500"
          />
        </div>

        {/* Sport Filter */}
        <div className="relative w-full lg:w-56.25]">
          <Filter className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

          <select className="h-13 w-full appearance-none rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-base text-slate-900 outline-none focus:ring-2 focus:ring-green-500">
            <option value="">All Sports</option>
            <option value="football">Football</option>
            <option value="cricket">Cricket</option>
            <option value="badminton">Badminton</option>
            <option value="tennis">Tennis</option>
            <option value="basketball">Basketball</option>
          </select>
        </div>

        {/* Price: Low to High */}
        <Button
          variant="outline"
          className="h-13 w-full rounded-2xl border-slate-200 px-5 text-base font-normal text-slate-800 shadow-none hover:bg-slate-50 lg:w-auto"
        >
          <ArrowUp className="size-4" />
          Price
        </Button>

        {/* Price: High to Low */}
        <Button
          variant="outline"
          className="h-13 w-full rounded-2xl border-slate-200 px-5 text-base font-normal text-slate-800 shadow-none hover:bg-slate-50 lg:w-auto"
        >
          <ArrowDown className="size-4" />
          Price
        </Button>
      </div>


        <Suspense fallback={<p>Loading..</p>}>
          <FacilitiesGrid/>
        </Suspense>

    </section>
  );
};

export default AllFacilitiesPage;
