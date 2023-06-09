import { Box, Card, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

import { steakItem } from "../constants";

const SteakPlatterSection = () => {
  return (
    <Container maxWidth="xl">
      <Box my={25}>
        <Box textAlign="center">
          <Typography variant="headSec">
            Try on of the there <br /> new{" "}
            <span style={{ color: "#FF9900" }}>steak platter</span>
          </Typography>
        </Box>
        <Box mt={{ xs: 2, md: 5 }} textAlign="center">
          <Typography variant="descrSec">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text .
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="space-between">
          {steakItem.map((item) => (
            <Grid item key={item.id}>
              <Card
                variant="outlined"
                sx={{
                  width: { xs: "330px", lg: "350px", xl: "460px" },
                  marginTop: "60px",
                  background: "transparent",
                }}>
                <Box
                  component="img"
                  src={item.img}
                  alt="Product"
                  width={{ xs: "320px", lg: "340px", xl: "450px" }}
                  height={{ xs: "330px", lg: "351px", xl: "460px" }}
                />
                <Stack mt={2} alignItems="center">
                  <Typography
                    fontSize={{ xs: "22px", xl: "32px" }}
                    fontWeight={600}
                    color="#D1D1D2">
                    {item.title}
                  </Typography>
                  <Typography
                    fontSize="24px"
                    fontWeight={600}
                    color="#D1D1D2"
                    mt={1}>
                    {item.price} $
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SteakPlatterSection;
