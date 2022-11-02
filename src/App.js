// import ShowTeachers from './components/ShowTeachersData/ShowTeachers';
import Dashboard from './components/StudentProfile/pages/Dashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import ShowStudentData from './components/ShowStudentData/ShowStudentDetails';
import StudentDetailPage from './components/ShowStudentData/StudentEditForm/StudentDetailPage';
import About from './components/AboutPage/about';
import LoginData from './components/LoginPage/LoginData';
import ShowAdminAddForm from './components/AddAdmin/ShowAdminAddForm';
import ShowChangePasswordForm from './components/ChangePassword/ShowChangePasswordForm';
import DisplayChat from './components/NotImportant/DisplayChats';
import TeachersDataRedux from './components/TeachersData/TeachersDataRedux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoutes/PrivateRoutes';
import Error from './components/Errorpage/Error';

import { useSelector } from 'react-redux';
const App = () => {
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/dashboard" isLogged={isLogged}>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute exact path="/" isLogged={isLogged}>
          <AdminDashboard></AdminDashboard>
        </PrivateRoute>
        <PrivateRoute exact path="/listofstudents" isLogged={isLogged}>
          <ShowStudentData></ShowStudentData>
        </PrivateRoute>
        {/* <PrivateRoute exact path="/listofteacher" isLogged={isLogged}>
          <ShowTeachers></ShowTeachers>
        </PrivateRoute> */}
        <PrivateRoute exact path="/addstudent" isLogged={isLogged}>
          <StudentDetailPage></StudentDetailPage>
        </PrivateRoute>
        <PrivateRoute exact path="/aboutpage" isLogged={isLogged}>
          <About></About>
        </PrivateRoute>
        <Route exact path="/loginpage">
          <LoginData></LoginData>
        </Route>
        <PrivateRoute exact path="/changepassword" isLogged={isLogged}>
          <ShowChangePasswordForm></ShowChangePasswordForm>
        </PrivateRoute>
        <PrivateRoute exact path="/addadmin" isLogged={isLogged}>
          <ShowAdminAddForm></ShowAdminAddForm>
        </PrivateRoute>
        <PrivateRoute path="/chatwithstudent" isLogged={isLogged}>
          <DisplayChat></DisplayChat>
        </PrivateRoute>
        <PrivateRoute path="/addteacher" isLogged={isLogged}>
          <TeachersDataRedux></TeachersDataRedux>
        </PrivateRoute>
        <Route path="*" isLogged={isLogged}>
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
