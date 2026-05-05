import { BookingDialogProvider } from "@/contexts/BookingDialogContext";
import Hero from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import ForYou from "@/components/sections/ForYou";
import Feeling from "@/components/sections/Feeling";
import WhyNotReacting from "@/components/sections/WhyNotReacting";
import Imagine from "@/components/sections/Imagine";
import Testimonials from "@/components/sections/Testimonials";
import Method from "@/components/sections/Method";
import Offer from "@/components/sections/Offer";
import ForWhom from "@/components/sections/ForWhom";
import Story from "@/components/sections/Story";
import Close from "@/components/sections/Close";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <BookingDialogProvider>
    <main>
      <Hero />
      <SocialProofBar />
      <ForYou />
      <WhyNotReacting />
      <Feeling />
      <Imagine />
      <Method />
      <Testimonials />
      <Offer />
      <Story />
      <ForWhom />
      <Close />
      <Footer />
    </main>
  </BookingDialogProvider>
);

export default Index;
