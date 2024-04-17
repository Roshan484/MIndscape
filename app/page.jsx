import HomeServices from "./components/HomeComponents/HomeServices/HomeServices";
import HomeHero from "./components/HomeComponents/HomeHero";
import Counter from "./components/HomeComponents/Counter/Counter";
import GetStarted from "./components/HomeComponents/GetStarted";
import HowItWorks from "./components/HomeComponents/HowItWorks";
import Testimonial from "./components/HomeComponents/Testimonial";
import Faq from "./components/HomeComponents/FaqComponent/Faq";

export default function Home() {
  return (
    <main>
      <HomeServices />
      <HomeHero />
      <Counter />
      <GetStarted />
      <HowItWorks />
      <Faq />
      <Testimonial />
    </main>
  );
}
