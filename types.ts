export interface ClinicInfo {
  name: string;
  location: string;
  phone: string;
  displayPhone: string;
  email: string;
  address: string;
  landmark: string;
  pincode: string;
  timings: {
    weekdays: string;
    sunday: string;
  };
  doctor: {
    name: string;
    degree: string;
    designation: string;
    experienceNotes: string[];
  };
}

export type ServiceCategory = 
  | 'All'
  | 'Preventive & General Dentistry'
  | 'Cosmetic Dentistry'
  | 'Restorative Dentistry'
  | 'Surgical & Emergency Care'
  | 'Specialized Care';

export interface ServiceItem {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, 'All'>;
  description: string;
  iconName: string;
  benefits: string[];
}

export interface FeaturedTreatment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  idealFor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
  isPlaceholderNote?: boolean;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  message: string;
}
