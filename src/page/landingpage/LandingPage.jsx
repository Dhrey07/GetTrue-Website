import NabBar from "../../component/NavBAr/index";
import ChooseUs from "../../component/Section/ChooseUs/ChooseUs";
import Footer from "../../component/Section/Footer/Footer";
import JoinUs from "../../component/Section/JoinUs/JoinUs";
import Mission from "../../component/Section/Mission/Mission";
import OurServices from "../../component/Section/OurServices/OurServices";
import Stories from "../../component/Section/Stories/Stories";
import Hero from "../../component/Hero/index";

const LandingPage = () => {
  return (
    <div>
      <NabBar />
      <Hero />
      <Mission />
      <OurServices />
      <ChooseUs />
      <Stories />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
