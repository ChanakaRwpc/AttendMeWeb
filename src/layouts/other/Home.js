import React from "react";
import { Container, Row, Col, CardBody } from "react-bootstrap";
import MapCards from "../../components/Cards/MapCards";
import CustomNavbar from "../../components/Navbar/CustomNavbar";
import "./home.css";
import StaticCards from "../../components/Cards/StaticCards";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography, Button, CardActionArea } from "@mui/material";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import { useMediaQuery, useTheme } from "@mui/material";
import QR from "../qrscanne/QR";
import CacheClear from "../../components/CacheClear/CacheClear";
import CustomCarousel from "../../components/Carousel/CustomCarousel";
import CarouselNew from "../../components/Carousel/Carousel2";
const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);
  const date = new Date().getFullYear();

  const handleScan = () => {
    console.log("sdsd");
    setOpen(true);
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#fff ",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Set the minimum height of the container to fill the viewport
        justifyContent: "space-between",
      }}
    >
      <div
        className="upperDiv"
        style={{
          backgroundColor: "#fff ",
        }}
      >
        <header>
          <CacheClear />
        </header>

        <div>
          <CustomNavbar />
          <QR
            isOpen={open}
            handleCloseFromMain={() => {
              setOpen(false);
            }}
          ></QR>
          <Typography variant="h6" className="ms-3 me-3 ">
            Hello user!
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              backgroundColor: "#49AAA0",
              justifyContent: "space-around",
              alignItems: "center",
              height: "150px",
            }}
            className="rounded ms-3 me-3 "
          >
            {/* <StaticCards /> */}

            <Box>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Paper
                  elevation={24}
                  sx={{
                    width: 70,
                    height: 70,
                    marginTop: "10px",
                    justifyContent: "center",
                    borderRadius: "20px",
                  }}
                >
                  <CardActionArea
                    sx={{
                      // width: 100,
                      // height: 100,
                      borderRadius: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <AccessTimeIcon
                      style={{ width: "60%", height: 70, color: "#ff5400" }}
                    />
                  </CardActionArea>
                  <Typography className="justify-content-center text-center fw-bold text-white pt-1">
                    Time
                  </Typography>
                </Paper>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Paper
                  elevation={24}
                  sx={{
                    width: 70,
                    height: 70,
                    marginTop: "10px",
                    justifyContent: "center",
                    borderRadius: "20px",
                  }}
                >
                  <CardActionArea
                    sx={{
                      // width: 100,
                      // height: 100,
                      borderRadius: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                    onClick={handleScan}
                  >
                    <QrCodeScannerIcon
                      style={{ width: "60%", height: 70, color: "#ff5400" }}
                    ></QrCodeScannerIcon>
                  </CardActionArea>
                  <Typography className="justify-content-center text-center fw-bold text-white pt-1">
                    Scan
                  </Typography>
                </Paper>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Paper
                  elevation={24}
                  sx={{
                    width: 70,
                    height: 70,
                    marginTop: "10px",
                    justifyContent: "center",
                    borderRadius: "20px",
                  }}
                >
                  <CardActionArea
                    sx={{
                      // width: 100,
                      // height: 100,
                      borderRadius: "30%",
                      display: "flex",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <PersonIcon
                      style={{ width: "60%", height: 70, color: "#ff5400" }}
                    />
                  </CardActionArea>
                  <Typography className="justify-content-center text-center fw-bold text-white pt-1">
                    Leaves
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </div>
        </div>

        <div className="bottomDiv">
          <Container
            style={{
              backgroundColor: "#fff",
              paddingTop: 10,
            }}
          >
            <Typography variant="h6">Gallery</Typography>
            <div
              style={{ height: "100%" }}
              className=" m-2 overflow-hidden rounded "
            >
              <div
                style={{
                  width: "100%",
                  height: isMobile ? "auto" : "400px",
                }}
              >
                {/* <CustomCarousel /> */}
                <CarouselNew />
              </div>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center m-2 mt-3 ">
              <Typography variant="h6">Biztrack</Typography>
              <Typography variant="body2">
                your true business partner
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
              }}
              className="pt-2 pb-2 justify-content-around rounded"
            >
              <MapCards />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "2%",
              }}
            >
              {/* <Button
                  variant="contained"
                  color="success"
                  style={{ position: "absolute", borderRadius: 25 }}
                >
                  Success
                </Button> */}
            </div>
          </Container>
        </div>
      </div>
      <footer
        style={{
          textAlign: "center",
          marginTop: "auto",
          bottom: 0,
        }}
      >
        <p>&copy; {date} Dockyard Toatal Solutions (Pvt) Ltd.</p>
      </footer>
    </div>
  );
};

export default Home;
