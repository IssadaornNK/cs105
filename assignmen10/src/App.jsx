import { Box } from "@mui/material";
import Nav from "./components/Nav"
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Rightbar from "./components/Rightbar";
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';


function App() {
  return (
    <div className="App">
     <Box>
      <Nav />
      <Container >
        <Grid container direction="row" spacing={2} pt={5}>
          <Grid item sx={{ display: { xs: 'none', sm: 'none', md:'block' } }}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={6}>
            <Content />
          </Grid>
          <Grid item sx={{ display: { xs: 'none', sm: 'none', md:'block' } }}>
            <Rightbar />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  );
}

export default App;
