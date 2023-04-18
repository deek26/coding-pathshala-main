import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Contactus from "./pages/Contactus";
import FAQs from "./pages/FAQs";
// import MyAccount from "./pages/MyAccount";
import Forgotpassword from "./pages/Forgotpassword";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutus from "./pages/Aboutus";
import Requestforspecimen from "./pages/Requestforspecimen";
import Trackyourorder from "./pages/Trackyourorder";
import Connectus from "./pages/Connectus";
import Team from "./pages/Team";
import Career from "./pages/Career";
import Catalogue from "./pages/Catalogue";
import Privacypolicy from "./pages/Privacypolicy";
import Shipping from "./pages/Shipping";
import Books from "./pages/Books";
import Onlinetests from "./pages/Onlinetests";
import Examcombos from "./pages/Examcombos";
import Videocourses from "./pages/Videocourses";
import Magazines from "./pages/Magazines";
import Authors from "./pages/Authors";
import Affiliates from "./pages/Affiliates";
import Partners from "./pages/Partners";
import Coaching from "./pages/Coaching";
import Examupdate from "./pages/Examupdate";
import Favourites from "./pages/Favourites";
import Mycart from "./pages/Mycart";
import Profile from "./pages/Profile";
import Loader from "./pages/Loader";
import PrivateRouter from "./pages/PrivateRouter";
import { UseAuthStatus } from "./pages/UseAuthStatus";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/FAQs" element={<FAQs />} />
          {/* <Route path="/MyAccount" element={<MyAccount />} /> */}
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Requestforspecimen" element={<Requestforspecimen />} />
          <Route path="/Trackyourorder" element={<Trackyourorder />} />
          <Route path="/Connectus" element={<Connectus />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Examcombos" element={<Examcombos />} />
          <Route path="/Onlinetests" element={<Onlinetests />} />
          <Route path="/Videocourses" element={<Videocourses />} />
          <Route path="/Magazines" element={<Magazines />} />
          <Route path="/Authors" element={<Authors />} />
          <Route path="/Affiliates" element={<Affiliates />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/Coaching" element={<Coaching />} />
          <Route path="/Examupdate" element={<Examupdate />} />
          <Route path="/Favourites" element={<Favourites />} />
          <Route path="/Mycart" element={<Mycart />} />
          <Route path="/Profile" element={<PrivateRouter />}>
            <Route path="/Profile" element={<Profile />} />
          </Route>
          <Route path="/UseAuthStatus" element={<UseAuthStatus />} />
          <Route path="/Loader" element={<Loader />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
