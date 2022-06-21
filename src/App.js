// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Auth from "./components/Auth/Auth";
import VerifyEmail from "./components/VerifyEmail";
import ResetPassword from "./components/ResetPassword";
import ResetPasswordMessage from "./components/ResetPasswordMessage";
import ResetPasswordSuccess from "./components/ResetPasswordSuccess";

function App() {
  return (
    <div className="p-4">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <Route
            path="/users/:userId/verify-email"
            exact
            component={VerifyEmail}
          />
          <Route path="/reset-password" exact component={ResetPassword} />
          <Route
            path="/resetPasswordMessage"
            exact
            component={ResetPasswordMessage}
          />
          <Route
            path="/resetpasswordsuccess"
            exact
            component={ResetPasswordSuccess}
          />
          resetpasswordsuccess
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
