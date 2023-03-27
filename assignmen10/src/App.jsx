import { Box } from "@mui/material";
import Nav from "./components/Nav"
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Rightbar from "./components/Rightbar";
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';


function App() {
  return (
    <Box>
      <Nav />
      <Grid container justify="flex" sx={{ m: 2 }}>
        <Grid  item xs={3} >
          <Sidebar />
        </Grid>
        <Grid item sx={{ p: -2 }}>
        <Container fixed>
          <Content />
        </Container>
        </Grid>

        <Grid item xs={3}>
          <Rightbar />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
