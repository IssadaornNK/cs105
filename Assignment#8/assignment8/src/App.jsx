import FavoriteSites from "./components/FavoriteSites";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import './App.css'
function App() {
  return (
    <div className="App">
      <FavoriteSites/>
      <Profile/>
      <Gallery/>
    </div>
  );
}

export default App;
