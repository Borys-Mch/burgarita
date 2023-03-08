import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

import recipeImg from "../assets/recipe.png";

const RecipeSection = () => {
  return (
    <Container maxWidth="xl">
      <Stack my={{ xs: 10, lg: 25 }} alignItems="center">
        <Typography
          fontSize={{ xs: 40, md: 50, lg: 90 }}
          fontWeight={700}
          textAlign="center"
          color="white">
          Secret <span style={{ color: "#FF9900" }}>steak recipe</span>
          <br /> from our chef
        </Typography>
        <Typography
          mt={{ xs: 2, md: 5 }}
          fontSize={{ xs: 20, lg: 28 }}
          fontWeight={600}
          textAlign="center"
          color="white">
          Lorem Ipsum is simply{" "}
          <span style={{ color: "#FF9900" }}>dummy text of the printing </span>
          and typesetting
        </Typography>
        <Stack
          mt={{ xs: 5, lg: 20 }}
          direction={{ sm: "row" }}
          alignItems="center">
          <Box
            component="img"
            src={recipeImg}
            alt="steak"
            width={{ xs: "350px", md: "550px", lg: "800px" }}
            height={{ xs: "361px", md: "567px", lg: "824px" }}
          />
          <Box>
            <Typography fontSize={{ xs: 20, lg: 32 }} color="#D1D1D2">
              <span style={{ fontWeight: 600 }}>
                Season the steaks with salt. Heat the oil in a frying pan large
                enough to fit
              </span>
              <br /> <br />
              Once melted and foaming, add the garlic and thyme. Carefully put
              the steak in the pan and cook for 3 mins for rare, 4 mins for
              medium and 6 mins for well done, flip the steak and repeat. Once
              cooked, add a squeeze of lemon juice to the pan and spoon the
              lemony butter over the steak.
              <br /> <br />
              <span style={{ fontWeight: 600 }}>
                Transfer the steaks to a warm plate and cover.
              </span>
            </Typography>
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
                background: "FF9900",
              }}>
              Full Method
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default RecipeSection;
