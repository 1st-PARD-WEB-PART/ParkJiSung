import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{
        fontWeight: 700,
        fontSize: '5rem',
        color: '#1877F2',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 25%)',

      }}
      >
        HomePage
      </Typography>
    </Box>
  );
}
