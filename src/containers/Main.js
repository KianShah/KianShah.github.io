import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Main(propss) {
  return (
    <div>
      <HashRouter basename="/">
        <Header theme={propss.theme} setTheme={propss.setTheme} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            path="/home"
            render={(props) => (
              <Home
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            path="/projects"
            render={(props) => (
              <Projects
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
        </Switch>
        <Footer theme={propss.theme} />
      </HashRouter>
    </div>
  );
}
