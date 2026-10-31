import { IFACILITY } from "@/Types/Facility";
import FacilityCard from "./FacilityCard";

const FacilitiesGrid = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}facilities`);
  const facilities:IFACILITY[] = await res.json();
  console.log(facilities);

  return (
    <div>

      <div className="grid grid-cols-3 gap-3">
        {
            
            facilities.map(facility=><FacilityCard key={facility._id} facility={facility} />)   
        }
      </div>
    </div>
  );
};

export default FacilitiesGrid;
