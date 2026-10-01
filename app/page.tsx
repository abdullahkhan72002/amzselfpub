import { HomeAbout } from "@/components/home/home-about";
import { HomeAudience } from "@/components/home/home-audience";
import { HomeConnect } from "@/components/home/home-connect";
import { HomeCoupon } from "@/components/home/home-coupon";
import { HomeFaq } from "@/components/home/home-faq";
import { HomeGhostwriting } from "@/components/home/home-ghostwriting";
import { HomeHero } from "@/components/home/home-hero";
import { HomeHowItWorks } from "@/components/home/home-how-it-works";
import { HomeServices } from "@/components/home/home-services";
import { HomeTestimonials } from "@/components/home/home-testimonials";
import { HomeWhyChoose } from "@/components/home/home-why-choose";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeAudience />
      <HomeConnect />
      <HomeGhostwriting />
      <HomeHowItWorks />
      <HomeWhyChoose />
      <HomeCoupon />
      <HomeTestimonials />
      <HomeFaq />
    </main>
  );
}
