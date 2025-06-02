import FeaturedCourses from "@/components/FeacherdCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChoseUs";
import TestimonislCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black/[0.96] flex-col items-center justify-between ">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonislCards/>
      <UpcomingWebinars/>
      <Instructors/>
    </main>
  );
}
