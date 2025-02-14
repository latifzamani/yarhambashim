import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import video1 from "../../assets/videos/1.mp4";
import image1 from "../../assets/images/y3.jpg";
import image2 from "../../assets/images/y2.jpg";
import image3 from "../../assets/images/y6.jpg";
import { Link } from "react-router-dom";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowRightRounded,
  DateRange,
  EventNote,
  HomeMaxOutlined,
  HomeOutlined,
  HomeSharp,
  LocalHospital,
  Medication,
  PlayCircle,
  SchoolSharp,
  TitleSharp,
  VideoLabel,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import Events from "../Components/Events";
import BigImage2 from "../Components/BigImage2";
import Supporters from "../Components/Supporters";
import { PieChart } from "@mui/x-charts";
import ProjectsDone from "../Components/ProjectsDone";
import Chart from "../Components/Chart";
import AxiosAPI from "../Components/axios";
import LazyLoading from "../Components/LazyLoading";
import Toastify from "../Components/Toastify";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "../Components/variants";
// import video1 from '../../assets/images/23.jpeg';
function Home() {
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideo2, setPlayVideo2] = useState(false);
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const { t } = useTranslation();
  const FetchData = () => {
    AxiosAPI.get("/videos/show")
      .then((data) => {
        setVideos(data.data[0]);
        console.log(data.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePlayVideo = () => {
    setPlayVideo(!playVideo);
  };

  const handlePlayVideo2 = () => {
    setPlayVideo2(!playVideo2);
  };

  useEffect(() => {
    FetchData();
  }, []);

  const MotionBox = motion(Box);
  const MotionButton = motion(Button);
  return (
    <>
      {loading ? (
        <LazyLoading />
      ) : (
        <>
          {/* Part 1 Video1*/}
          <Box
            sx={{
              backgroundColor: "",
              width: "100%",
              height: { xs: "40vh", sm: "80vh", md: "80vh" },
              backgroundImage: "url()",
              position: "relative",
            }}
            onClick={handlePlayVideo}
          >
            <video
              controls={playVideo}
              preload="auto"
              poster={image2}
              src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
                videos.video1
              }`}
              autoPlay={playVideo}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 1,
                objectFit: "cover",
                borderRadius: "0%",
              }}
            />
            {!playVideo && (
              <Box
                sx={{
                  zIndex: 2,
                  paddingY: { xs: "5vh", sm: "20vh", md: "20vh" },
                  paddingX: "10vh",
                }}
              >
                <Typography
                  sx={{
                    zIndex: 2,
                    color: "white",
                    position: "relative",
                    backdropFilter: "blur(20px)",
                    padding: "20px",
                    marginBottom: "3vh",
                    fontSize: { xs: "20px", sm: "40px", md: "40px" },
                  }}
                >
                  {t("firstVideotitle")}
                </Typography>
                <Typography
                  sx={{
                    zIndex: 2,
                    position: "relative",
                    display: "flex",
                    gap: 4,
                    flexDirection: "row",
                  }}
                >
                  <Button variant="contained" sx={{ backgroundColor: "green" }}>
                    <Link
                      to="/whatwd"
                      style={{ textDecorationLine: "none", color: "white" }}
                    >
                      {t("whatwedo")}
                    </Link>
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handlePlayVideo}
                    startIcon={<PlayCircle sx={{ color: "white" }} />}
                    sx={{ color: "white" }}
                  >
                    {t("playvideo")}
                  </Button>
                </Typography>
              </Box>
            )}
          </Box>

          {/* Part 2  Know About us*/}
          <Box Box sx={{ padding: { xs: "5vh", sm: "10vh", md: "10vh" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "",
                gap: 1,
                width: "100%",
                height: { xs: "110vh", sm: "100vh", md: "100vh" },
                backgroundColor: "",
                position: "",
                marginY: "10vh",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  padding: "0vh",
                  flexDirection: { xs: "column", sm: "row", md: "row" },
                  justifyContent: "space-between",
                  gap: 4,
                  width: "100%",
                  height: "70vh",
                  backgroundColor: "",
                  position: "relative",
                  marginTop: "0vh",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "60%", md: "60%" },
                    backgroundColor: "",
                  }}
                >
                  <Typography variant="h6" sx={{ display: "inline" }}>
                    __________
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      display: "inline",
                      marginX: "2vh",
                      backgroundColor: "",
                    }}
                  >
                    {t("knowaboutus")}
                  </Typography>
                  <MotionBox
                    variants={fadeIn("right", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.7 }}
                    sx={{ marginLeft: { xs: "2vh", sm: "12vh", md: "12vh" } }}
                  >
                    <Typography variant="h6">
                      {t("knowaboutustitle")}
                    </Typography>
                    <Typography variant="body1">
                      {t("knowaboutusdes")}
                    </Typography>
                    <MotionButton
                      variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: true, amount: 0.7 }}
                      variant="contained"
                      sx={{
                        backgroundColor: "rgb(242,200,75)",
                        marginY: "5vh",
                      }}
                    >
                      <Link
                        to="/aboutUs"
                        style={{ textDecorationLine: "none", color: "black" }}
                      >
                        {t("learnmore")}
                      </Link>
                    </MotionButton>
                  </MotionBox>
                </Box>
                <MotionBox
                  variants={fadeIn("left", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  sx={{
                    backgroundColor: "",
                    width: { xs: "100%", sm: "40%", md: "40%" },
                    height: "60vh",
                    backgroundImage: "url()",
                    position: "relative",
                  }}
                  onClick={handlePlayVideo2}
                >
                  <video
                    controls={playVideo2}
                    poster={image3}
                    src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
                      videos.video2
                    }`}
                    autoPlay={playVideo2}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      zIndex: 1,
                      objectFit: "cover",
                      borderRadius: "1%",
                    }}
                  />
                  {!playVideo2 && (
                    <Box sx={{ zIndex: 2, paddingY: "20vh", paddingX: "10vh" }}>
                      <Typography
                        sx={{
                          zIndex: 2,
                          position: "relative",
                          display: "flex",
                          gap: 4,
                          flexDirection: "row",
                        }}
                      >
                        <IconButton
                          variant="outlined"
                          onClick={handlePlayVideo2}
                          sx={{ color: "white" }}
                        >
                          <PlayCircle
                            fontSize="large"
                            sx={{ color: "white" }}
                          />
                        </IconButton>
                      </Typography>
                    </Box>
                  )}
                </MotionBox>
              </Box>
              {/* Supporters */}
              <Box sx={{ marginTop: { xs: "25vh", sm: "0vh", md: "0vh" } }}>
                <Supporters />
              </Box>
            </Box>
          </Box>

          {/* Part 3 What we do*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "row" },
              justifyContent: "space-between",
              gap: 4,
              width: "100%",
              height: "auto",
              backgroundColor: "rgb(252,237,198)",
              position: "",
              padding: "5vh",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "60%", md: "60%" },
                backgroundColor: "",
              }}
            >
              <Typography variant="h6" sx={{ display: "inline" }}>
                __________
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "inline", marginX: "2vh", backgroundColor: "" }}
              >
                {t("whatwedo")}
              </Typography>
              <MotionBox
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                sx={{ marginLeft: { xs: "2vh", sm: "12vh", md: "12vh" } }}
              >
                <Typography variant="h6">{t("whatwedotitle")}</Typography>
                <Typography variant="body1">{t("whatwedodes")}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    margin: "2vh",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6">
                    <HomeSharp />
                    {t("familysupport")}
                  </Typography>
                  <Typography sx={{ marginLeft: "4vh" }}>
                    {t("familysupportdes")}
                  </Typography>
                  <Typography variant="h6">
                    <LocalHospital />
                    {t("healthbenefits")}
                  </Typography>
                  <Typography sx={{ marginLeft: "4vh" }}>
                    {t("healthbenefitsdes")}
                  </Typography>
                  <Typography variant="h6">
                    <SchoolSharp /> {t("scholarships")}
                  </Typography>
                  <Typography sx={{ marginLeft: "4vh" }}>
                    {t("scholarshipsdes")}
                  </Typography>
                  <Typography variant="h6">
                    <Medication /> {t("therapy")}
                  </Typography>
                  <Typography sx={{ marginLeft: "4vh" }}>
                    {t("therapydes")}
                  </Typography>
                </Box>
              </MotionBox>
            </Box>
            <MotionBox
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              sx={{
                backgroundColor: "",
                width: { xs: "100%", sm: "40%", md: "40%" },
                height: { xs: "30vh", sm: "60vh", md: "60vh" },
              }}
            >
              <img
                src={image1}
                style={{ width: "100%", height: "100%", borderRadius: "2%" }}
              />
            </MotionBox>
          </Box>

          {/* Part 4 PROJECTS WE HAVE DONE*/}
          <Box sx={{ padding: { xs: "0vh", sm: "10vh", md: "10vh" } }}>
            <ProjectsDone />
          </Box>

          {/* Part 5 Chart*/}

          <Chart />
          {/* ---------- */}

          {/* Part 6 Doantion Image*/}
          <Box sx={{ padding: { xs: "5vh", sm: "10vh", md: "10vh" } }}>
            <MotionBox
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
            >
              <BigImage2 />
            </MotionBox>

            {/* Part 7  Events*/}
            <Events />
          </Box>
        </>
      )}
    </>
  );
}

export default Home;
