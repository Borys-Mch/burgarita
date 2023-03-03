import React, { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import { menuItems } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <Stack
        py={8}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end">
        <Stack direction="row" alignItems="flex-end" spacing={3}>
          <Box component="img" src="/logo.svg" alt="Logo" />
          <Typography
            fontSize={36}
            fontWeight={600}
            color="#D1D1D2"
            sx={{ display: { xs: "none", lg: "flex" } }}>
            Burgarita
          </Typography>
        </Stack>

        <Box>
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={() => setToggle((prev) => !prev)}
            sx={{ mr: 2, display: { sm: "none" }, height: "45px" }}>
            {toggle ? (
              <Close sx={{ fontSize: "40px", color: "white" }} />
            ) : (
              <Menu sx={{ fontSize: "40px", color: "white" }} />
            )}
          </IconButton>
          <Stack
            direction={{ sm: "row" }}
            position={{ xs: "absolute", sm: "static" }}
            p={{ xs: "50px", sm: "0" }}
            borderRadius="20px"
            spacing={5}
            sx={{
              display: { xs: `${toggle ? "flex" : "none"}`, sm: "flex" },
              background: { xs: "#343434", sm: "transparent" },
              border: { xs: "1px solid #707070", sm: "none" },
              right: "40px",
              top: "140px",
            }}>
            {menuItems.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                fontSize={28}
                fontWeight={600}
                lineHeight={2.2}
                color="#D1D1D2"
                underline="none">
                {item.title}
              </Link>
            ))}
          </Stack>
        </Box>

        <Button
          variant="contained"
          color="warning"
          sx={{
            width: "190px",
            height: "64px",
            background: "#FF9900",
            fontSize: "28px",
            fontWeight: 600,
            color: "#F3FADC",
            borderRadius: "100px",
            textTransform: "none",
            display: { xs: "none", md: "flex" },
          }}>
          Sign Up
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
