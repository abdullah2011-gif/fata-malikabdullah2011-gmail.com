import { Box, Button, Grid, Typography } from "@mui/material";
import EventIpad from "components/ipadEvent";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import img from "../../../public/images/Event image.png";
import icon from "../../../public/images/Icon.png";
import icon1 from "../../../public/images/Icon1.png";
import stroke from "../../../public/images/Stroke.png";

const Event = () => {
  const [siz, setSiz] = useState(window.innerWidth);

  const handleResize = () => {
    setSiz(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  console.log(siz);

  return (
    <>
      {siz > 1200 ? (
        <Box className="main">
          <Grid container className="flex justify-between items-start">
            <Grid item className="flex flex-col " md={12} lg={5}>
              <Typography variant="h2" className="event-text">
                Birthday Bash
              </Typography>
              <Typography variant="body1" className="text">
                Hosted by Elysia
              </Typography>
              <div className="flex justify-between w-90 mt-10">
                <div className="flex">
                  <div>
                    <Image src={icon} alt="Picture " width={40} height={40} />
                  </div>
                  <div>
                    <p className="date">18 August 6:00PM</p>
                    <p className="value">to 19 August 1:00PM UTC +10</p>
                  </div>
                </div>

                <div>
                  <Image src={stroke} alt="Picture " width={10} height={10} />
                </div>
              </div>
              <div className="flex justify-between w-90 mt-8">
                <div className="flex">
                  <div>
                    <Image src={icon1} alt="Picture " width={40} height={40} />
                  </div>
                  <div>
                    <p className="date">Street name</p>
                    <p className="value">Suburb, State, Postcode</p>
                  </div>
                </div>

                <div>
                  <Image src={stroke} alt="Picture " width={10} height={10} />
                </div>
              </div>
            </Grid>
            <Grid item md={12} lg={6}>
              <Image src={img} alt="Picture " width={500} height={500} />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <EventIpad />
      )}
    </>
  );
};

export default Event;
