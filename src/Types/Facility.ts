export interface IFACILITY {
  avaiableSlot: string;
  capacity: string;
  description: string;
  image: string;
  location: string;
  name: string;
  price: string;
  sportType: string;
  _id: string;
}

export interface IBooking {
  _id: string;
  name: string;
  date: string;
  timeSlot: string;
  duration: string;
  image: string;
}
