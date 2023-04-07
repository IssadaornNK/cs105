import "./App.css";
import Home from "./components/Home";
import Todo from "./components/Todo";
import { Route, Routes} from "react-router-dom";
import CalendarPage from "./pages/Calendar";
import HomePage from "./pages/Homepage";
import TodayPage from "./pages/Todaypage"
import TodoPage from "./pages/TodoPage"

function App(){
    return(
        <Routes>
          <Route exect path="/" element={<HomePage />} />
          <Route pate="/todo" element={<TodoPage />} />
          <Route pate="/today" element={<TodayPage />} />
          <Route pate="/calendar" element={<CalendarPage />} />
        </Routes>
    );
}
export default App;