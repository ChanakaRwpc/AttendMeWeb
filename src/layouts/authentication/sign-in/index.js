import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../../context/AuthContext";
import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import logoImg from "../../../assets/images/login/icon.png";
function SignIn(props) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { handleLogin } = useContext(AuthContext);

  const onPhoneNumberChanged = (value) => {
    const sanitizedPhone = value.replace(/[\s-]+/g, "");

    setPhoneNumber(sanitizedPhone);
  };

  const isValidPhoneNumber = (value) => {
    const sanitizedPhone = value.replace(/[\s-]+/g, "");

    if (sanitizedPhone.length === 0) {
      console.log("Invalid phone number");
      return false;
    }

    return true;
  };

  const handleButtonClick = (value) => {
    if (isValidPhoneNumber(phoneNumber)) {
      handleLogin(phoneNumber.substring(2));
    } else {
      console.log("number error");
    }
  };

  return (
    <MDBContainer className="p-3 my-5 justify-content-center align-items-center ">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6" center>
          <div className="text-center">
            <img src={logoImg} style={{ width: "185px" }} alt="logo" />
            <h4 className="mt-1 mb-5 pb-1">Attend Me Web</h4>
          </div>

          <PhoneInput
            inputStyle={{
              width: "100%",
              backgroundColor: "#f8f3db",
              height: 50,
            }}
            onlyCountries={["lk"]}
            value={phoneNumber}
            placeholder="+94 12 3456 789"
            onChange={onPhoneNumberChanged}
            isValid={false}
            inputProps={{
              maxLength: 16,
            }}
          />
          <MDBBtn
            className="mb-4 mt-4 w-100"
            size="lg"
            style={{ backgroundColor: "#F2B807" }}
            onClick={handleButtonClick}
          >
            Sign in
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignIn;
