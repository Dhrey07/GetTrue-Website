import styles from "./styles.module.css";
import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Icon } from "@iconify-icon/react";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import TestimonialCard from "../../Testimonial/TestimonialCard";
import SiphoImg from "../../../assets/siphoimg.svg";
import ThandiImg from "../../../assets/thandi.svg";
import LeratoImg from "../../../assets/lerato.svg";

const Stories = () => {
  const scrollContainerRef = useRef(null);

  const testimony = [
    {
      testify:
        "Get Thru’s internet solutions have been a game-changer for my small business. The high-speed connection has boosted our productivity and customer satisfaction. I’m thrilled with the support and service.",
      clientImg: SiphoImg,
      clientName: "Sipho Nkosi",
      clientTitle: "Small Business Owner",
    },
    {
      testify:
        "Thanks to Get Thru’s digital skills training, I’ve gained valuable new skills that have opened up exciting career opportunities for me. The training was practical, engaging, and incredibly helpful.",
      clientImg: ThandiImg,
      clientName: "Thandi Mthembu",
      clientTitle: "Digital Skills Trainee",
    },
    {
      testify:
        "The Wi-Fi hotspots provided by Get Thru have made a huge difference in our community center. Our members can now access essential online resources, and it’s had a positive impact on local education and social activities.",
      clientImg: LeratoImg,
      clientName: "Lerato Khumalo",
      clientTitle: "Community Center Coordinator",
    },
  ];

  const scrollAmount = 300;

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollAmount;
    }
  };

  const handleBack = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= scrollAmount;
    }
  };

  return (
    <div className={styles.storiescont}>
      <div className={styles.storiesheader}>
        <h6>Impact Stories</h6>
        <h2>Real Stories of Transformation and Empowerment</h2>
        <p>
          Discover how Get Thru’s services have made a meaningful difference in
          the lives of individuals, businesses, and educational institutions
          across South Africa. Our impact stories highlight the positive changes
          brought about by our commitment to affordable internet access and
          digital skills training.
        </p>
      </div>

      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          alignItems: "center",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          padding: "15px 15px",
          marginInline: "60px",
          "@media (max-width: 1000px)": {
            flexDirection: "column",
            marginInline: "20px",
          },
        }}
      >
        {testimony.map((step, index) => (
          <Box key={index} sx={{ marginRight: "20px" }}>
            <TestimonialCard
              testimony={step.testify}
              clientImg={step.clientImg}
              clientName={step.clientName}
              clientTitle={step.clientTitle}
            />
          </Box>
        ))}
      </Box>

      <div className={styles.buttoncontainer}>
        <Button onClick={handleBack} className={styles.scrollButton}>
          <Icon
            icon="formkit:arrowleft"
            width="30"
            height="30"
            style={{ color: "#54D923" }}
          />
        </Button>
        <div>
          <Icon
            icon="material-symbols:circle"
            width="10"
            height="10"
            style={{ color: "#54D923" }}
          />
        </div>
        <Button onClick={handleNext} className={styles.scrollButton}>
          <Icon
            icon="formkit:arrowright"
            width="30"
            height="30"
            style={{
              color: "#54D923",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default Stories;
