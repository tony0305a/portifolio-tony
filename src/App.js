
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Routes from './routes'

function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <Routes/>
      </Router>
    </>
  );
}

export default App;
