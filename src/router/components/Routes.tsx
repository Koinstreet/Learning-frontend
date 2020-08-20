import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { Layout } from "../../components/Layout";
import { Home } from "../../components/Home";
import { Signin, Signup, AdminSignin } from "../../components/Auth";
import { CourseOverview } from "../../components/CourseOverview";
import { CourseView } from "../../components/CourseView";
import { Dashboard, CourseDetails } from '../../components/Admin';
import { Dashboard as UserDashboard } from '../../components/User';
import { About } from '../../components/AboutUs';
import { Contact } from '../../components/ContactUs';

import PrivateRoute from '../../utils/PrivateRoutes';
import AdminRoute from '../../utils/AdminRoutes';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <AdminRoute exact path="/admin/dashboard/course/:id" component={CourseDetails} />
          <AdminRoute exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/signin" component={AdminSignin} />
          <PrivateRoute exact path="/dashboard" component={UserDashboard} />
          <PrivateRoute exact path="/course/:courseId/:moduleId" component={CourseView} />
          <Route exact path="/overview/:id" component={CourseOverview} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/contact-us" exact component={Contact} />
          <Route path="/about-us" exact component={About} />
          <Route path="/" exact component={Home} />
        </Layout>
      </Switch>
    </Router>
  );
};

export default Routes;
