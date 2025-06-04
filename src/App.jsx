import "./App.css";
// import FAQ from './Component/FAQ/FAQ_Component'
// import Navbar from './Component/Navbar/Navbar'
// import Footer from'./Component/Footer/Footer'
import Home_first from "./Component/Home/Home_first";
import Job_Search from "./Component/Home/Job_Search";
import ResumeLandingPage from "./Component/Home/newpage.jsx";
// import Resume_Guide from './Component/Home/Resume_Guide'
import PaymentPlans from "./Component/Home/Pay.jsx";
function App() {
  return (
    <>
      <div className="bg-[#e4e0d7] ">
        {/* <ResumeLandingPage /> */}
        <Home_first />
        <Job_Search />
        <PaymentPlans />
        {/* <Resume_Guide/> */}
        {/* <FAQ/>  */}
      </div>
    </>
  );
}

export default App;
