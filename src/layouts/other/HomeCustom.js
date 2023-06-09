import React from "react";
import Navbar from "../../components/Navbar/CustomNav";
import MapCards from "../../components/Cards/MapCards";
import CacheClear from "../../components/CacheClear/CacheClear";
import CarouselNew from "../../components/Carousel/Carousel2";
import StaticCards from "../../components/Cards/StaticCards";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@mui/material";
import bgImage from "../../assets/images/homeIcons/6186696.jpg";
import bgImage2 from "../../assets/images/homeIcons/shiprr.png";

const Home = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main
        className="min-vh-100 d-flex flex-column"
        // style={{
        //   backgroundImage: `url(${bgImage})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <Container
          fluid
          className="flex-grow-1 justify-content-center align-items-center"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <Row
            className="justify-content-center align-items-center"
            style={{
              backgroundColor: "#458B7C",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <Col>
              <Typography variant="h6" fontFamily={"Segoe UI"} color={"white"}>
                Welcome User!
              </Typography>
              <Typography variant="body2" color={"white"}>
                Welcome User!
              </Typography>
            </Col>
            <Col
              className="d-flex justify-content-end align-items-center"
              style={{ height: "100px" }}
            >
              <div
                className="rounded-circle overflow-hidden"
                style={{ width: "50px", height: "50px" }}
              >
                <img
                  src={require("../../assets/images/homeIcons/11.webp")}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Col>
          </Row>

          <Typography variant="h6" className="pb-2" fontFamily={"Segoe UI"}>
            Latest Feeds
          </Typography>
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={10} lg={8}>
              <CarouselNew />
            </Col>
          </Row>
          {/* <div
            style={{
              backgroundImage: `url(${bgImage2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          > */}

          <Typography variant="h6" fontFamily={"Segoe UI"}>
            Qr Section
          </Typography>
          <Row className="justify-content-center mb-2 ">
            <Col>
              <div className="d-flex justify-content-center">
                <StaticCards />
              </div>
            </Col>
          </Row>

          <Typography variant="h6" fontFamily={"Segoe UI"}>
            Card Section
          </Typography>
          <Row className="justify-content-center pt-2">
            <Col xs={12} md={6} lg={4}>
              <MapCards />
            </Col>
          </Row>

          {/* </div> */}
        </Container>
        <footer className="text-center mx-auto mt-4 ">
          <p>&copy; {date} Dockyard Toatal Solutions (Pvt) Ltd.</p>
        </footer>
      </main>
    </>
  );
};

export default Home;
