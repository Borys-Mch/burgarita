import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import { exclusiveItems } from "../constants";
import exclusiveImg from "../assets/exclusive.png";
import pepperImg from "../assets/pepper.png";

const ExclusiveSection = () => {
  return (
    <Container maxWidth="xl">
      <Stack
        my={13}
        position="relative"
        direction={{ xs: "column-reverse", sm: "row" }}
        alignItems="center">
        <Box>
          <Typography
            fontSize={{ xs: 40, md: 50, lg: 90 }}
            fontWeight={700}
            color="white">
            Explore our <span style={{ color: "#FF9900" }}>exclusive</span>{" "}
            dishes
          </Typography>
          <Typography
            mt={{ xs: 2, md: 5 }}
            fontSize={{ xs: 20, lg: 28 }}
            fontWeight={600}
            color="white"
            maxWidth="sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text .
          </Typography>
          <Button
            variant="contained"
            color="warning"
            sx={{
              marginTop: { xs: "20px", md: "67px" },
              borderRadius: "29px",
              width: "190px",
              height: "68px",
              fontSize: "28px",
              fontWeight: 600,
              background: "#FF9900",
            }}>
            More
          </Button>
        </Box>
        <Box
          component="img"
          src={exclusiveImg}
          alt="exclusive"
          width={{ xs: "350px", md: "500px", lg: "750px" }}
          height={{ xs: "308px", md: "441px", lg: "661px" }}
        />
        <Box
          component="img"
          src={pepperImg}
          alt="Pepper"
          position="absolute"
          bottom="-100px"
          left="30%"
        />
      </Stack>
      <Stack>
        <Grid container mt={5} spacing={5} columns={{ xs: 3, md: 6, lg: 12 }}>
          {exclusiveItems.map((item) => (
            <Grid item xs={3} key={item.id}>
              <Stack alignItems="center">
                <Box component="img" src={item.img} alt={item.title} />
                <Typography
                  fontSize={32}
                  fontWeight={600}
                  textAlign="center"
                  color="#D1D1D2">
                  {item.title}
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={400}
                  textAlign="center"
                  color="#D1D1D2">
                  {item.desc}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default ExclusiveSection;
