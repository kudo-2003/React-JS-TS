import React from "react";
import AppRouter from "./routers/AppRouter";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./assets/styles/index.css"

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}>
      <AppRouter />
    </GoogleOAuthProvider>
  );
};

export default App;