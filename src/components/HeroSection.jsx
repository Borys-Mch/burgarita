import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  TextField,
} from "@mui/material";

import heroImg from "../assets/hero.png";

const HeroSection = () => {
  const CssTextField = styled(TextField)({
    fieldset: {
      borderRadius: "36px",
      borderStyle: "none",
    },
  });

  return (
    <Container maxWidth="xl">
      <Stack
        pt={20}
        direction={{ xs: "column-reverse", sm: "row" }}
        overflow="hidden">
        <Box>
          <Button
            variant="outlined"
            color="warning"
            sx={{
              width: "375px",
              height: "97px",
              fontSize: "32px",
              fontWeight: 600,
              color: "#D1D1D2",
              textTransform: "none",
              border: "3px solid #FF9900",
              borderRadius: "63px",
            }}>
            Tasty Food Forever
          </Button>
          <Box mt={7}>
            <Typography variant="headSec">
              Hot new items in the{" "}
              <span style={{ color: "#FF9900" }}>restaurant</span>
            </Typography>
          </Box>
          <Box mt={5}>
            <Typography variant="descrSec">
              Lorem Ipsum is{" "}
              <span style={{ color: "#FF9900" }}>
                simply dummy text of the printing
              </span>{" "}
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text .
            </Typography>
          </Box>

          <Stack
            mt={7}
            direction="row"
            alignItems="center"
            p={1}
            sx={{
              background: "white",
              borderRadius: "30px",
              maxWidth: "max-content",
            }}>
            <CssTextField id="filled-basic" label="Search Here.........." />
            <Button
              variant="contained"
              color="warning"
              size="large"
              sx={{
                width: "329px",
                height: "76px",
                fontSize: 28,
                fontWeight: 600,
                textTransform: "none",
                borderRadius: "25px",
                padding: 0,
                background:
                  "linear-gradient(90.32deg, #FF9900 1.66%, #FF2F31 99.83%)",
              }}>
              Grab it
            </Button>
          </Stack>
        </Box>
        <Box
          component="img"
          src={heroImg}
          alt="Hero"
          width={{ sm: "550px", lg: "720px" }}
          height={{ sm: "524px", lg: "686px" }}
        />
      </Stack>
    </Container>
  );
};

export default HeroSection;
