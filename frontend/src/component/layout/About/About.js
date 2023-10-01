import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/alibaba.com_official/?hl=en";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://i.pinimg.com/564x/24/a9/a2/24a9a23b35abe862d872638b5ed65a94.jpg"
              alt="Founder"
            />
            <Typography>Founder : Rajiv Kumawat</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            Welcome to Rental Hub, your one-stop destination for hassle-free furniture solutions! At Rental Hub, we believe that creating a comfortable and stylish living space shouldn't be a challenge. That's why we offer a wide selection of high-quality furniture for rent, making it easy for you to transform your house into a home, whether it's for a short-term stay or a long-term lease.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/@FurlencoBengaluru/channels"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/furlenco/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;