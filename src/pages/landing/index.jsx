import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../../public/images/landing.png";
import btn from "../../../public/images/Button.png";
import Link from "next/link";
import NewPage from "components/landing/ipadLanding";

const Landings = () => {
  const [size, setSize] = useState(window.innerWidth);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  console.log(size);

  return (
    <>
      {size > 1200 ? (
        <Box className="main">
          <Grid container className="flex justify-between items-center">
            <Grid item md={12} lg={6}>
              <Image src={img} alt="Picture " width={420} height={600} />
            </Grid>
            <Grid item className="flex flex-col items-end" md={12} lg={6}>
              <Typography variant="h2" className="landing-text">
                Imagine if
                <br />
                <span>Snapchat</span>
                <br />
                had events.
              </Typography>
              <Typography variant="body1" className="sub-text">
                Easily host and share events with your friends across any social
                media.
              </Typography>
              <Link href="/event">
                <a>
                  <Button size="large" variant="contained" className="btn">
                    🎉 Create my event
                  </Button>
                </a>
              </Link>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <NewPage />
      )}
    </>
  );
};

export default Landings;
