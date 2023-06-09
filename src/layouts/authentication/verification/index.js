import React from "react";
import { useState, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  Button,
  CircularProgress,
} from "@mui/material";
import bgImage from "../../../assets/images/custom/newBg2.jpg";
import bgImage2 from "../../../assets/images/custom/newBg3.jpg";
import { green } from "@mui/material/colors";
import OtpInput from "react-otp-input";
import logo from "../../../assets/images/logo2.png";
import PublishIcon from "@mui/icons-material/Publish";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkVerification } from "../../../action/Login";

const Verification = () => {
  const { isLoggedIn, otpcode, user, error } = useSelector(
    (state) => state.auth
  );
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const timer = useRef();
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);

      // timer.current = window.setTimeout(() => {
      //   // const user = JSON.parse(localStorage.getItem("user"));
      //   console.log(user);
      if (otp === otpcode) {
        dispatch(checkVerification(true, user, navigate));
      } else {
        dispatch(checkVerification(false, user, navigate));
      }

      setSuccess(true);
      setLoading(false);
      // }, 2000);
    }
  };

  return (
    <>
      <Box
        position="absolute"
        width="100%"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          overflowX: "hidden",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundColor: "#005A9C",
        }}
      >
        <Box px={1} width="100%" height="100vh" mx="auto">
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
              <Card
                sx={{
                  // borderRadius: 5,
                  backgroundImage: `url(${bgImage2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: 3,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    animation: "animateBorder 2s infinite",
                  }}
                ></div>
                <Box
                  variant="gradient"
                  sx={{
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                  }}
                  mx={3}
                  mb={1}
                  textAlign="center"
                >
                  <img src={logo} width="200" height="200" alt="logo" />
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="#005A9C"
                    mt={1}
                  >
                    Verification
                  </Typography>
                  <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    sx={{ mt: 1, mb: 2 }}
                  ></Grid>
                </Box>
                <Box pt={2} pb={2} px={3}>
                  <Box component="form" role="form">
                    <div
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={5}
                        renderSeparator={<span>&nbsp; &nbsp; </span>}
                        renderInput={(props) => <input {...props} />}
                        separator={<span style={{ width: "8px" }}></span>}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        inputStyle={{
                          border: "1px solid transparent",
                          borderRadius: "8px",
                          width: "20%",
                          height: "40px",
                          fontSize: "20px",
                          color: "#0f0f0",
                          fontWeight: "400",
                          caretColor: "#005A9C",
                          borderColor: "#005A9C",
                        }}
                        focusStyle={{
                          border: "1px solid #CFD3DB",
                          outline: "none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        fontWeight="medium"
                        color="#000"
                        mt={3}
                      >
                        Didn't Recive OTP{" "}
                        <button style={{ borderRadius: 5, fontSize: 15 }}>
                          Resend
                        </button>
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {loading && (
                        <CircularProgress
                          size={28}
                          sx={{
                            color: "#551BAD",
                            position: "absolute",
                          }}
                        />
                      )}
                    </div>
                    <Box mt={4} mb={1}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          p: 1,
                          m: 1,
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={[
                            buttonSx,
                            {
                              width: "60%",
                              height: "40px",
                              borderRadius: 10,
                              backgroundColor: "#005A9C",
                              fontSize: 18,
                              fontWeight: "400",
                            },
                          ]}
                          disabled={loading}
                          onClick={handleButtonClick}
                          startIcon={<PublishIcon />}
                        >
                          Verify
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <style>
              <style>
                {`
        @keyframes animateBorder {
          0% {
            border: 2px solid #CFD3DB;
          }
          50% {
            border: 3px solid #2196f3; 
          }
          100% {
            border: 2px solid #CFD3DB; 
          }
        }
        `}
              </style>
            </style>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Verification;
