import React from "react";
import { useState, useRef } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Box, Grid } from "@mui/material";
import bgImage from "../../../assets/images/custom/newBg2.jpg";
import bgImage2 from "../../../assets/images/custom/newBg3.jpg";
import { green } from "@mui/material/colors";
import OtpInput from "react-otp-input";
import logo from "../../../assets/images/logo2.png";
import PublishIcon from "@mui/icons-material/Publish";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkVerification } from "../../../action/Login";
import logoImg from "../../../assets/images/login/icon.png";

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
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={logoImg}
              alt="verify"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol
            md="6"
            className="d-flex justify-content-center align-items-center"
          >
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0">Attend Me Web</span>
              </div>
              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Enter OTP Number
              </h5>
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

              <MDBBtn
                className="mb-4 mt-4 px-5"
                size="lg"
                style={{ backgroundColor: "#F2B807" }}
              >
                Verify
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default Verification;
