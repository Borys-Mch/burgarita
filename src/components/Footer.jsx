import React from "react";
import { Box, Container, Link, Stack, Typography } from "@mui/material";

import { menuItems } from "../constants";
import { socialIcons } from "../constants";

const Footer = () => {
  return (
    <Container maxWidth="xl">
      <Stack
        py={8}
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center", md: "flex-end" }}>
        <Box>
          <Typography fontSize={32} fontWeight={500} color="white">
            + 42 34 56 78 90 56
          </Typography>
          <Typography mt={4} fontSize={20} fontWeight={500} color="white">
            Dammstrasse 23, 6300 Zug, Switzerland
          </Typography>
        </Box>
        <Box mt={{ xs: 5, md: 0 }}>
          <Stack direction="row" spacing={5}>
            {menuItems.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                fontSize={20}
                fontWeight={500}
                color="#D1D1D2"
                underline="none">
                {item.title}
              </Link>
            ))}
          </Stack>
        </Box>
        <Box mt={{ xs: 5, md: 0 }}>
          <Stack direction="row" spacing={3}>
            {socialIcons.map((icon) => (
              <Link key={icon.id} href={icon.url}>
                <Box component="img" src={icon.img} alt={icon.alt} />
              </Link>
            ))}
          </Stack>
          <Stack mt={4} direction="row" spacing={5}>
            <Typography fontSize={20} fontWeight={400} color="#D1D1D2">
              Privacy policy
            </Typography>
            <Typography fontSize={20} fontWeight={400} color="#D1D1D2">
              Cookies
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Footer;
