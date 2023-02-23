import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AuthProvider from "./contexts/AuthProvider";
import Navbar from "./navigation/Navbar";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop/>
        <nav>
          <Navbar/>
        </nav>
        <main>
          <Navigation/>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
