import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { EarningsSection, ProfessionalToolsSection, ScaleUpSupportSection, EntrepreneurSection } from '../components/AlternatingFeatures';
import { MeetLeaderSection, InThePressSection, FinalCTAWithFooter } from '../components/VahanStyleSections';
import { LoadingSpinner } from '../components/LoadingAnimation';

/**
 * VahanStyleHomePage - Vahan Leaders inspired recruitment platform page
 * Warm beige backgrounds, alternating layouts, professional design
 */
const VahanStyleHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
        <LoadingSpinner size="lg" message="Loading PartnerHB..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Warm yellow/beige background */}
      <HeroSection />

      {/* Earnings Section - White background with dots */}
      <EarningsSection />

      {/* Professional Tools Section - Gray background */}
      <ProfessionalToolsSection />

      {/* Scale-Up Support Section - White background */}
      <ScaleUpSupportSection />

      {/* Entrepreneur Section - Gray background */}
      <EntrepreneurSection />

      {/* Meet A Vahan Leader - Testimonial with beige background */}
      <MeetLeaderSection />



      {/* In The Press - Press coverage */}
      <InThePressSection />

      {/* Final CTA with Footer */}
      <FinalCTAWithFooter />
    </div>
  );
};

export default VahanStyleHomePage;
