import Box from "@mui/material/Box";
import Header from "../sections/Header";
import Product from "../sections/Products";

function Home() {
  return (
    <Box>
      <Header activeTab="Home" />
      <Product />
    </Box>
  );
}

export default Home;
