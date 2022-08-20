import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Bananas from "../assets/images/bananas.jfif";
import { Card, Grid } from "@mui/material";

function Product() {
  return (
    <Box sx={{ my: 10, px: 5 }}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              bgcolor: "#A0F6F8",
              px: 8,
              py: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="img" src={Bananas} />
            <Typography variant="h6" sx={{ fontWeight: 600, pt: 2 }}>
              Tropical Fruits
            </Typography>
            <Typography variant="subtitle2">Flavorful and Sweet</Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              bgcolor: "#A0F6F8",
              px: 8,
              py: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="img" src={Bananas} />
            <Typography variant="h6" sx={{ fontWeight: 600, pt: 2 }}>
              Tropical Fruits
            </Typography>
            <Typography variant="subtitle2">Flavorful and Sweet</Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              bgcolor: "#A0F6F8",
              px: 8,
              py: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="img" src={Bananas} />
            <Typography variant="h6" sx={{ fontWeight: 600, pt: 2 }}>
              Tropical Fruits
            </Typography>
            <Typography variant="subtitle2">Flavorful and Sweet</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Product;
