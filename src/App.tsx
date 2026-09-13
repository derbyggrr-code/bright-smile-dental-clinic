import React, { useState } from 'react';
import { ImageProvider } from './context/ImageContext';
import { PhotoManagerToolbar } from './components/PhotoManagerToolbar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { DoctorWelcome } from './components/DoctorWelcome';
import { ClinicGallery } from './components/ClinicGallery';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ComfortAmenities } from './components/ComfortAmenities';
import { FeaturedTreatments } from './components/FeaturedTreatments';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DentalJourney } from './components/DentalJourney';
import { EmergencyCare } from './components/EmergencyCare';
import { AppointmentSection } from './components/AppointmentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentModal } from './components/AppointmentModal';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenBooking = (serviceTitle?: string) => {
    setPreselectedService(serviceTitle);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setPreselectedService(undefined);
  };

  return (
    <ImageProvider>
      <div className="min-h-screen flex flex-col bg-[#faf9f6] text-slate-900 font-sans selection:bg-rose-500 selection:text-white">
        {/* Sticky Navigation Bar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero onOpenBooking={() => handleOpenBooking()} />

          {/* 2. Trust / Quick Info Bar */}
          <TrustBar onOpenBooking={() => handleOpenBooking()} />

          {/* 3. Welcome Note & Gentle Care Philosophy by Dr. Shilpa Gupta */}
          <DoctorWelcome onOpenBooking={() => handleOpenBooking()} />

          {/* 4. Real Clinic Tour & Facility Gallery */}
          <ClinicGallery onOpenBooking={() => handleOpenBooking()} />

          {/* 5. About Section & Clinical Credentials */}
          <AboutSection onOpenBooking={() => handleOpenBooking()} />

          {/* 6. Complete Services Section (All 18 Services) */}
          <ServicesSection onOpenBooking={handleOpenBooking} />

          {/* 7. Clinic Comfort, Amenities & Kid-Friendly Atmosphere */}
          <ComfortAmenities onOpenBooking={() => handleOpenBooking()} />

          {/* 8. Featured Signature Treatments */}
          <FeaturedTreatments onOpenBooking={handleOpenBooking} />

          {/* 9. Why Choose Bright Smile Dental Clinic */}
          <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

          {/* 10. Dental Care Journey (4-Step Process) */}
          <DentalJourney onOpenBooking={() => handleOpenBooking()} />

          {/* 11. Emergency Dental Care */}
          <EmergencyCare />

          {/* 12. Appointment Booking Form Section */}
          <AppointmentSection selectedService={preselectedService} />

          {/* 13. Patient Testimonials (Editable Placeholders for Google Reviews) */}
          <TestimonialsSection />

          {/* 14. FAQ Section */}
          <FaqSection />

          {/* 15. Location & Contact Section */}
          <LocationSection />
        </main>

        {/* Footer */}
        <Footer
          onOpenBooking={handleOpenBooking}
          onOpenPolicy={(type) => setPolicyType(type)}
        />

        {/* Global Floating WhatsApp Action */}
        <FloatingWhatsApp />

        {/* Floating Quick Photo Manager Toolbar */}
        <PhotoManagerToolbar />

        {/* Quick Booking Modal */}
        <AppointmentModal
          isOpen={isBookingModalOpen}
          onClose={handleCloseBooking}
          preselectedService={preselectedService}
        />

        {/* Privacy Policy & Terms Modal */}
        <PolicyModal
          type={policyType}
          onClose={() => setPolicyType(null)}
        />
      </div>
    </ImageProvider>
  );
}
