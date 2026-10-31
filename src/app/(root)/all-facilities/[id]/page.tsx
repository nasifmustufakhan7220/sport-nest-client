import React, { Suspense } from 'react';
import BookingDetails from '../../_Components/BookingDetailsCard';

const FacilitiesDetailsPage = ({params}:{params: Promise<{id:string}>}) => {
    return (
        <div>
            <Suspense fallback={<p>Loading....</p>}>
                <BookingDetails params={params} />
            </Suspense>
        </div>
    );
};

export default FacilitiesDetailsPage;