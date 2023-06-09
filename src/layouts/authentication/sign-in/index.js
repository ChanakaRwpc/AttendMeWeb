import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Card } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginIcon from "@mui/icons-material/Login";
import bgImage from "../../../assets/images/custom/newBg2.jpg";
import cardImg from "../../../assets/images/custom/newBg3.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import logo from "../../../assets/images/logo2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../../context/AuthContext";

function SignIn(props) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const { handleLogin } = useContext(AuthContext);

  const dispatch = useDispatch();
  const validate = () => {
    let isValid = true;
    if (14 < phoneNumber.length || 10 > phoneNumber.length) {
      isValid = false;
    }

    return isValid;
  };

  const handleButtonClick = (e) => {
    if (!loading || validate()) {
      setLoading(true);
      handleLogin(phoneNumber.substring(2));
      setLoading(false);
    }
  };

  const onPhoneNumberChanged = (e) => {
    setPhoneNumber(e.phone);
  };

  return (
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
                backgroundImage: `url(${cardImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: 3,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                variant="gradient"
                alignItems="center"
                sx={{
                  backgroundColor: "#fffff",
                  borderRadius: 5,
                }}
                mx={3}
                mt={2}
                p={2}
                mb={1}
                textAlign="center"
                justifyContent="center"
              >
                <img src={logo} width="200" height="200" alt="logo" />
                <Typography
                  variant="h5"
                  fontWeight="medium"
                  fontFamily={"verdana"}
                  color="#005A9C"
                  mt={1}
                >
                  Sign in!
                </Typography>
              </Box>
              <Box pt={2} pb={3} px={3}>
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <PhoneInput
                    style={{
                      margin: " 0 auto",
                      width: " 300px",
                    }}
                    country={"lk"}
                    onlyCountries={["lk"]}
                    value={phoneNumber}
                    placeholder={"+94 12 3456 789"}
                    onChange={(phone) => onPhoneNumberChanged({ phone })}
                    isValid={false}
                  />
                </div>
                <Box mt={2} mb={1}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <LoadingButton
                      sx={{ bgcolor: "#005A9C", borderRadius: 20 }}
                      onClick={handleButtonClick}
                      loading={loading}
                      loadingPosition="start"
                      startIcon={<LoginIcon />}
                      variant="contained"
                    >
                      <span>Login</span>
                    </LoadingButton>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignIn;
