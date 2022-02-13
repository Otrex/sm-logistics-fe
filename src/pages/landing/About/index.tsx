import { TopNav } from "../components/Nav";
import img1 from "@assets/img/img1.png";
import img2 from "@assets/img/img2.png";
import {
  H148,
  H152,
  P16,
  Width75p,
} from "../components/StyledComponents";
import { IconRounded } from "@ui-kit/ComponentTags";
import DownCaret from "@assets/svg/DownCaret";
import Check from "@assets/svg/Check";
import OurServices from "../components/OurService";
import RideWithUs from "../components/RideWithUs";
import AvailableOn from "../components/AvailableOn";
import Footer from "../components/Footer";
import ImageGrid from "../components/ImageGrid";

const Header = () => (
  <>
    <Width75p>
      <div className="text-center">
        <H152 style={{ color: "#03045E" }}>Who We Are.</H152>
        <P16 className="px-80 pb-14">
          We’re a logistics company dedicated to deliverying the best
          dispatch service possible, with Optimal Quality...all for a
          great price!
        </P16>
      </div>
      <ImageGrid />
      <div className="flex justify-center">
        <IconRounded dim>
          <DownCaret stroke="#03045E" />
        </IconRounded>
      </div>
    </Width75p>
  </>
);

const MoreAbout = () => (
  <>
    <Width75p className="pt-44">
      <div className="flex flex-row">
        <div className="w-4/8">
          <H148>
            Best Drivers.
            <br /> Effective Tracking. Super-Fast Deliveries.
          </H148>
        </div>
        <div className="w-5/8 pl-12">
          <P16>
            We are all about convinience. Thus, our services are
            designed to meet your needs whenever you want it. With us,
            upi can be sure of Super-Fast Delivery with Optimal
            Quality, all for a great price!
          </P16>
          <div className="flex flex-row">
            <div className="w-1/2">
              <div className="flex flex-row items-center">
                <Check stroke="#FAB60B" />
                <P16 bold className="ml-6">
                  Express Delivery
                </P16>
              </div>
              <div className="flex flex-row items-center">
                <Check stroke="#FAB60B" />
                <P16 bold className="ml-6">
                  Real-Time Tracking
                </P16>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-row items-center">
                <Check stroke="#FAB60B" />
                <P16 bold className="ml-6">
                  Scheduled Pickups
                </P16>
              </div>
              <div className="flex flex-row items-center">
                <Check stroke="#FAB60B" />
                <P16 bold className="ml-6">
                  Available on Web & Mobile
                </P16>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Width75p>
  </>
);

const OurPeople = () => (
  <>
    <Width75p className="pt-44 pb-20">
      <div className="text-center">
        <H152 style={{ color: "#03045E" }}>Our People</H152>
        <P16 className="px-80">
          We cherish our people and love every moment we share
          together.
        </P16>
      </div>
    </Width75p>
    <div className="relative text-right pb-72">
      <img src={img1} alt="img1" className="inline-block pr-8" />
      <img src={img2} alt="img2" className="inline-block" />
    </div>
  </>
);

const About = (props: any) => {
  return (
    <>
      <TopNav className="mb-48" active={1} />
      <Header />
      <MoreAbout />
      <OurPeople />
      <RideWithUs />
      <OurServices />
      <AvailableOn />
      <Footer />
    </>
  );
};

export default About;
