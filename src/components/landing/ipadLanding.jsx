import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import img from "../../../public/images/landing.png";
import btn from "../../../public/images/Button.png";
import Link from "next/link";

const NewPage = () => {
  return (
    <Box className="main">
      <Grid container className="flex flex-col justify-between items-center">
        <Grid item className="flex flex-col items-center">
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
        </Grid>
        <Grid item className="flex flex-col items-center ">
          <Image src={img} alt="Picture " width={420} height={600} />
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
  );
};

export default NewPage;
