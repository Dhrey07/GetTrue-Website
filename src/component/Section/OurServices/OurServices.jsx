import ServiceCard from "../../ServiceCard/ServiceCard";
import styles from "./styles.module.css";
import WifiImg from "../../../assets/wifi.svg";
import HomeInternet from "../../../assets/homeinternet.png";
import BusinessImg from "../../../assets/bsuiness.png";
import Button from "../../Button/Button";

const OurServices = () => {
  return (
    <div className={`${styles.service}`}>
      <div className={`${styles.servicecont}`}>
        <div className={`${styles.margincont}`}>
          <h6>Our Services</h6>
          <h2>Connecting Communities with Tailored Solutions</h2>
          <p className={styles.ourserviceparagraph}>
            Explore how <strong>Get Thru’s</strong> diverse services are
            designed to bridge the digital divide and support community growth.
            From affordable internet access to comprehensive digital skills
            training, our solutions are crafted to meet the needs of
            individuals, families, and businesses, ensuring everyone benefits
            from enhanced connectivity and opportunities.
          </p>
          <div className={`${styles.flexservice}`}>
            <div>
              <ServiceCard
                title="Wi-Fi Hotspots"
                subtitle="Providing affordable and reliable internet access in key
               public areas such as community centers and parks, supporting education,
                work, and social inclusion."
                serviceImg={WifiImg}
              />
            </div>
            <div>
              <ServiceCard
                title="Home Internet Solutions"
                subtitle="Offering flexible and budget-friendly internet packages for
               households to ensure that everyone stays connected and enjoys seamless
                online experiences."
                serviceImg={HomeInternet}
              />
            </div>
            <div>
              <ServiceCard
                title="Business Internet Solutions"
                subtitle="Delivering high-speed internet tailored for small and medium
               enterprises, empowering businesses to succeed in a digital economy with
                enhanced connectivity."
                serviceImg={BusinessImg}
              />
            </div>
            <div>
              <ServiceCard
                title="Wi-Fi Hotspots"
                subtitle="Providing affordable and reliable internet access in key
               public areas such as community centers and parks, supporting education,
                work, and social inclusion."
                serviceImg={WifiImg}
              />
            </div>
          </div>
          <p className={`${styles.ourserviceparagraph} margin-top-38`}>
            Explore our range of services designed to provide affordable
            internet access and enhance digital skills. From public Wi-Fi
            hotspots to comprehensive training programs, we offer solutions to
            connect and empower communities.
          </p>
          <div className={`${styles.servicebtn}`}>
            <Button title="Learn More About Our Services" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
