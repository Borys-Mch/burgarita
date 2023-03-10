import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import tableImg from "../assets/table.png";

const FormTextField = styled(TextField)({
  input: {
    height: "51px",
    width: { xs: "350px", lg: "540px" },
  },
  fieldset: {
    borderRadius: "44px",
  },
  label: {
    padding: "13px",
    color: "white",
    fontSize: "20px",
  },
  "& label.Mui-focused": {
    color: "gray",
    paddingBottom: "10px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FF9900",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FF9900",
    },
    "&:hover fieldset": {
      borderColor: "#FF9900",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF9900",
    },
  },
});

function BookTable() {
  return (
    <Container maxWidth="xl">
      <Stack
        my={13}
        position="relative"
        direction={{ xs: "column-reverse", sm: "row" }}
        overflow="hidden"
        alignItems="center">
        <Box>
          <Box width={{ sm: "350px", md: "580px" }}>
            <Typography variant="headSec">
              Book a <span style={{ color: "#FF9900" }}>Table</span>
            </Typography>
          </Box>
          <Box mt={3}>
            <Typography variant="descrSec">
              Lorem Ipsum is simply dummy text of the printing and{" "}
            </Typography>
          </Box>
          <Box mt={5} sx={{ maxWidth: "100%" }}>
            <FormTextField fullWidth label="Email" />
          </Box>
          <Box mt={5} sx={{ maxWidth: "100%" }}>
            <FormTextField fullWidth label="Contact Number" />
          </Box>
          <Box mt={5} sx={{ maxWidth: "100%" }}>
            <FormTextField fullWidth label="Number of booking" />
          </Box>
        </Box>
        <Box
          component="img"
          src={tableImg}
          alt="table"
          width={{ xs: "350px", md: "600px", lg: "1312px" }}
          height={{ xs: "308px", md: "458px", lg: "954px" }}
        />
      </Stack>
    </Container>
  );
}

export default BookTable;
