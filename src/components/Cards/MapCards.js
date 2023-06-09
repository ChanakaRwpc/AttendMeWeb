import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { CardActionArea, CardActions } from "@mui/material";
import axios from "axios";

export default function MapCards() {
  const [cardData, setCardData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("#####");
        const data = response.data;
        setCardData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "flex-start",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Card
          sx={{
            width: 100,
            height: 100,
            borderRadius: "10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center ",
            backgroundColor: "#fff",
          }}
        >
          <CardActionArea className="d-flex flex-column align-items-center ">
            <CardMedia
              component="img"
              height="40"
              image={require("../../assets/images/homeIcons/report.png")}
              alt="img"
              style={{ objectFit: "contain" }}
            />
            <Typography
              variant="body2 "
              color="#9095AEff"
              align="center"
              className="pt-1 fw-semibold"
            >
              Report
            </Typography>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            width: 100,
            height: 100,
            borderRadius: "10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center ",
            backgroundColor: "#fff",
          }}
        >
          <CardActionArea className="d-flex flex-column align-items-center">
            <CardMedia
              component="img"
              height="40"
              image={require("../../assets/images/homeIcons/authentication.png")}
              alt="img"
              style={{
                objectFit: "contain",
              }}
            />
            <Typography
              variant="body2 "
              color="text.primary"
              align="center"
              className="pt-1"
            >
              Auth
            </Typography>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: 100,
            height: 100,
            borderRadius: "10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center ",
            backgroundColor: "#fff",
          }}
        >
          <CardActionArea className="d-flex flex-column align-items-center">
            <CardMedia
              component="img"
              height="40"
              image={require("../../assets/images/homeIcons/time.png")}
              alt="img"
              style={{ objectFit: "contain" }}
            />

            <Typography
              variant="body2 "
              color="text.primary"
              align="center"
              className="pt-1"
            >
              Time
            </Typography>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}

{
  /* <>
{cardData.map((card) => (
  <Card key={card.id} sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={card.image}
        alt={card.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
))}
</> */
}
