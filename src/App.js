import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Layout/Body';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import LoginDisplay from './components/Pages/LoginDisplay';
import SignUpDoctor from './components/Pages/SignUpDoctor';
import SignupPatient from './components/Pages/SignupPatient';
import DoctorLogin from './components/Pages/DoctorLogin';
import PatientLogin from './components/Pages/PatientLogin';
import Drawer from './components/Layout/Drawer';
import UserDashboard from './components/Pages/UserDashboard';
import PatientDataForm from './components/Pages/PatientDataForm';
import AnalysisDisplay from './components/Pages/AnalysisDisplay';
import DoctorDashboard from './components/Pages/DoctorDashboard';
import Forum from './components/Pages/Forum';
// import Home from './components/Home';
// import rootReducer from './reducer';
function App() {
  return (<>
    <Header />
    <Routes>
      <Route path="/" element={<Body/>} />
      {/* </Route> */}
      <Route path="profile" element={<Drawer/>} />
      <Route path="login" element={<LoginDisplay />} />
      <Route path="doctorlogin" element={<DoctorLogin />} />
      <Route path="doctorsignup" element={<SignUpDoctor />} />
      <Route path="patientlogin" element={<PatientLogin />} />
      <Route path="patientlogin/userdashboard" element={<UserDashboard />} />
      <Route path="doctorlogin/doctordashboard" element={<DoctorDashboard />} />
      <Route path="/analysisdisplay" element={<AnalysisDisplay />} />
      {/* </Route> */}
      <Route path="patientdataform" element={<PatientDataForm />} />
      {/* </Route> */}
      <Route path="/patientsignup" element={<SignupPatient />} />
      <Route path="/forum" element={<Forum />} />
      {/* </Route> */}
    </Routes>
    <Footer />
  </>
  );
}

export default App;


// set PORT=4000 &&