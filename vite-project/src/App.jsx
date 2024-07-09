import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Preloader } from "./component/Preloader";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./component/login_component";
import SignUp from "./component/signup_component";
import UserDetails from "./component/UserDetails";
import Contact from "./component/Contact";
import Terms from "./component/Terms";
import { useEffect, useState } from "react";
import CreatePost from "./component/CreatePost";
import Paymentg from "./component/Paymentg";
import AboutUs from "./component/AboutUs";
function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true);
    }, 1000);
  }, []);

  return (
    <Router>
      <div className="App">
        {appLoaded ? (
          <>
            <Routes>
              <Route exact path="/" element={<SignUp />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/createpost" element={<CreatePost />} />
              <Route path="/payment" element={<Paymentg />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Terms" element={<Terms />} />
              <Route path="/About" element={<AboutUs />} />
            </Routes>
          </>
        ) : (
          <Preloader />
        )}
      </div>
    </Router>
  );
}

export default App;