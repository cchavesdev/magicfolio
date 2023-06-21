import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/login/Login";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import { Home } from "./components/home/Home";
import { Landing } from "./components/landing/Landing";

function App() {
  return (
    <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<Login></Login>} />
          <Route path={"/"} element={<Landing></Landing>} />
          <Route
            path={"/home"}
            element={
              <RequireAuth loginPath={"/login"}>
             <Home/>
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
