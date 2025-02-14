import { Box, Button, Typography } from "@mui/material";
import image1 from "../../assets/images/23.jpeg";
import {
  GraphicEqOutlined,
  MonetizationOn,
  MonetizationOnOutlined,
  PendingActions,
  PeopleAltOutlined,
} from "@mui/icons-material";
import ProjectsDone from "../Components/ProjectsDone";
import BigImage2 from "../Components/BigImage2";
import AxiosAPI from "../Components/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectImages from "../Components/ProjectImages";
import LazyLoading from "../Components/LazyLoading";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "../Components/variants";

function ProjectReadMore() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const { id } = useParams();
  const FetchData = () => {
    AxiosAPI.get(`/projects/${id}/show`)
      .then((data) => {
        setProject(data.data);
        console.log(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);
  const MotionBox = motion(Box);

  return (
    <>
      {loading ? (
        <LazyLoading />
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 4,
              width: "100%",
              height: "auto",
              backgroundColor: "",
              position: "",
              paddingX: { xs: "5vh", sm: "10vh", md: "40vh" },
              paddingY: "5vh",
            }}
          >
            <Box sx={{ width: "100%", backgroundColor: "" }}>
              <Typography variant="h6" sx={{ display: "inline" }}>
                __________
              </Typography>
              <Typography
                variant="body1"
                sx={{ display: "inline", marginX: "2vh", backgroundColor: "" }}
              >
                {t("ourprojects")}
              </Typography>
              <MotionBox
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                sx={{ marginLeft: "12vh" }}
              >
                <Typography variant="h6">{project.title}</Typography>
                <br />
                <Typography variant="body1">{project.paragraph1}</Typography>
                <br />
                <Typography variant="body1">{project.paragraph2}</Typography>
                <br />
                <Typography variant="body1">{project.paragraph3}</Typography>
              </MotionBox>
            </Box>
            <MotionBox
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              sx={{
                backgroundColor: "",
                width: "100%",
                height: "40vh",
                paddingX: { xs: "", sm: "10vh", md: "20vh" },
              }}
            >
              <img
                src={`${import.meta.env.VITE_API_BASE_URL}/storage/${
                  project.photo2
                }`}
                style={{ width: "100%", height: "100%", borderRadius: "2%" }}
              />
            </MotionBox>
            <MotionBox
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              sx={{ marginLeft: "12vh" }}
            >
              <Typography variant="body1">{project.paragraph3}</Typography>
            </MotionBox>
            <Typography
              variant="body1"
              sx={{ color: "gray", textAlign: "end" }}
            >
              {project.date}
            </Typography>
          </Box>
          {/* Project Images */}
          <MotionBox
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            sx={{ padding: { xs: "0vh", sm: "10vh", md: "10vh" } }}
          >
            <ProjectImages id={id} />
          </MotionBox>
          {/* Project Images */}

          <Box
            sx={{
              backgroundColor: "rgb(252,237,198)",
              paddingY: "8vh",
              paddingX: { xs: "", sm: "10vh", md: "20vh" },
            }}
          >
            <MotionBox
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              sx={{ display: "flex", justifyContent: "space-between", gap: 5 }}
            >
              <Box sx={{ width: "50%" }}>
                <PendingActions />
                <Typography
                  variant="h6"
                  sx={{ display: "inline", marginX: "2vh" }}
                >
                  {t("projectt1")}
                </Typography>
                <Typography sx={{ marginX: "6vh" }}>
                  {t("projectdes1")}
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <MonetizationOnOutlined />
                <Typography
                  variant="h6"
                  sx={{ display: "inline", marginX: "2vh" }}
                >
                  {t("projectt1")}
                </Typography>
                <Typography sx={{ marginX: "6vh" }}>
                  {t("projectdes1")}
                </Typography>
              </Box>
            </MotionBox>
            <br />
            <MotionBox
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              sx={{ display: "flex", justifyContent: "space-between", gap: 5 }}
            >
              <Box sx={{ width: "50%" }}>
                <PeopleAltOutlined />
                <Typography
                  variant="h6"
                  sx={{ display: "inline", marginX: "2vh" }}
                >
                  {t("projectt1")}
                </Typography>
                <Typography sx={{ marginX: "6vh" }}>
                  {t("projectdes1")}
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <GraphicEqOutlined />
                <Typography
                  variant="h6"
                  sx={{ display: "inline", marginX: "2vh" }}
                >
                  {t("projectt1")}
                </Typography>
                <Typography sx={{ marginX: "6vh" }}>
                  {t("projectdes1")}
                </Typography>
              </Box>
            </MotionBox>
          </Box>
          {/* Projects Done */}
          <Box sx={{ padding: { xs: "0vh", sm: "10vh", md: "10vh" } }}>
            <ProjectsDone />
          </Box>
          {/* Donation Image */}
          <MotionBox
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            sx={{ marginX: "10vh", marginBottom: "5vh" }}
          >
            <BigImage2 />
          </MotionBox>
        </>
      )}
    </>
  );
}

export default ProjectReadMore;
