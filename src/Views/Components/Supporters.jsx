import { Box, Typography, useMediaQuery } from "@mui/material"
import image1 from '../../assets/images/23.jpeg';
import Slider from "react-slick";

// Import required slick carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import AxiosAPI from "./axios";
import LazyLoading from "./LazyLoading";
import { useTranslation } from "react-i18next";
// import '../../Styles/SlickStyle.css';


function Supporters() {

    const [supporters, setSupporters] = useState([]);
    const [loading, setLoading] = useState(true);
    const {t}=useTranslation();

    const FetchData = () => {
        AxiosAPI.get('/supporters/show').then((data) => {
            setSupporters(data.data);
            console.log(data.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);

        })
    }
    // const supporters=[image1,image1,image1,image1,];

    const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const S = isSmallScreen ? 1 : isMediumScreen ? 2 : 2;
    const FTrue = (supporters.length < 2) ? false : true;
    const settings = {
        autoplay: true,
        autoplaySpeed: 500,
        className: 'center',
        centerMode: true,
        infinite: FTrue,
        speed: 2000,
        slidesToShow: S,
        slidesToScroll: 1,
        centerPadding: '60px',
        arrows: false,
        dots: true,
        cssEase: 'linear'
    };

    useEffect(() => {
        FetchData();
    }, [])
    return (
        <>
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                            <Typography variant="p" sx={{ display: 'inline' }}>{t('oursupporters')}</Typography>
                            <Box sx={{ display: '', width: '80%', height: '0.5vh', marginTop: '3vh', marginLeft: '3vh', backgroundColor: 'black' }}></Box>
                        </Box>
            {loading ?
                (
                    <LazyLoading />
                ) :
                (
                        <Box className="slider-container" sx={{ display: '', position: 'relative', marginTop: '3vh', justifyContent: 'space-around' }}>
                            <Slider {...settings}>
                                {supporters.map((item, index) => (
                                    <>
                                        <img key={index} src={`${import.meta.env.VITE_API_BASE_URL}/storage/${item.logo}`} style={{ width: '20vh', height: '10vh', borderRadius: '10%' }} />
                                        <br />
                                    </>
                                ))
                                }
                            </Slider>
                        </Box>
                )}
                    </>
        </>
    )
}

export default Supporters
