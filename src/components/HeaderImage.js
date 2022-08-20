import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import headerimage from "../assets/images/headerimage.jfif";

function HeaderImage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${headerimage})`,
        minHeight: "92vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        component="div"
        color="white"
        sx={{ fontWeight: 600, textAlign: "center" }}
      >
        Fresh Organic Produce
      </Typography>
      <Typography
        variant="h3"
        component="div"
        color="white"
        sx={{ fontWeight: 600, textAlign: "center" }}
      >
        Live Healthily
      </Typography>
      <Typography
        variant="h6"
        component="div"
        color="white"
        sx={{ fontWeight: 600, textAlign: "center", px: "20%", py: 3 }}
      >
        Suitable for organic stores, organic lifestyle organic farming, organic
        consumption
      </Typography>
      <Button
        variant="contained"
        sx={{
          borderRadius: 3,
          bgcolor: "#FF9100",
          "&:hover": {
            bgcolor: "orange",
          },
        }}
      >
        <Typography variant="subtitle1">Our Services</Typography>
      </Button>

      {/*
      <Typography
        variant="h4"
        component="div"
        color="#ffffff"
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        COPYRIGHT & NEIGHBORING RIGHTS
      </Typography>
      <Typography
        variant="body1_1"
        component="div"
        sx={{ fontWeight: 600, textAlign: "center", px: "20%", py: 3 }}
      >
        We are a society standing for copyrights & Neighboring rights for the
        creative industry over all the country, striving to attain a well
        mannered society avoiding stilling minds.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="g1"
          sx={{ marginRight: 2, border: "2px solid #FFFFFF33" }}
        >
          VIEW MORE
        </Button>
        <Button
          variant="outlined"
          sx={{ border: "1px solid #A1A1A1", color: "#ffffff" }}
        >
          CONTACT US
        </Button>
      </Box> */}
    </Box>
  );
}

export default HeaderImage;
