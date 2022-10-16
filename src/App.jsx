import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import RoutesMain from "./routes";
import AuthProvider from "./contexts/Authcontext";
import GlobalStyle from "./styles/global";
import TechProvider from "./contexts/TechContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <AuthProvider>
        <TechProvider>
          <RoutesMain />
        </TechProvider>
      </AuthProvider>
    </>
  );
}

export default App;
