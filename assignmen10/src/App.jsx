import {Box} from "@mui/material";
import Nav from "./components/Nav"
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Rightbar from "./components/Rightbar";


function App() {
  return (
    <Box>
     <Nav/>
     <Content/>
     <Sidebar/>
     <Rightbar/>
    </Box>
  );
}

export default App;
