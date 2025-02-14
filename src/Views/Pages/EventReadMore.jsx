import { DateRange, LocationOn } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import image1 from "../../assets/images/23.jpeg";
import Events from "../Components/Events";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosAPI from "../Components/axios";
import LazyLoading from "../Components/LazyLoading";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "../Components/variants";

function EventReadMore() {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { t } = useTranslation();

  const FetchData = () => {
    AxiosAPI.get(`/events/${id}/show`)
      .then((data) => {
        setEvent(data.data);
        console.log(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    FetchData();
  }, [id]);
  const MotionBox = motion(Box);

  return (
    <>
      {loading ? (
        <LazyLoading />
      ) : (
        <>
          <MotionBox
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            sx={{
              backgroundColor: "rgb(252,237,198)",
              paddingX: "5vh",
              paddingY: "10vh",
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "center", marginBottom: "3vh" }}
            >
              {event.title}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  display: "",
                  fontSize: "12px",
                  marginRight: "2vh",
                }}
              >
                <LocationOn fontSize="small" />
                {event.address}
              </Typography>
              <Typography
                variant="body1"
                sx={{ textAlign: "center", display: "", fontSize: "12px" }}
              >
                <DateRange fontSize="small" />
                {event.date} | {event.time}
              </Typography>
            </Box>
          </MotionBox>
          <MotionBox
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            sx={{ paddingX: "20vh", paddingY: "10vh" }}
          >
            <Typography variant="h6">{t("about")}</Typography>
            <Typography variant="body1">{event.description}</Typography>
            <Box
              sx={{
                backgroundColor: "",
                marginY: "3vh",
                width: "100%",
                height: "40vh",
              }}
            >
              <img
                src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
                  event.photo
                }`}
                style={{
                  width: "60%",
                  float: "right",
                  height: "40vh",
                  borderRadius: "2%",
                }}
              />
            </Box>
            {/* Events */}
            <Events />
          </MotionBox>
        </>
      )}
    </>
  );
}

export default EventReadMore;
