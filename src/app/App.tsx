<<<<<<< HEAD
import React, {useState} from 'react';
import './style.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
=======
import React, { useState } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Viewer from './pages/Viewer';
<<<<<<< HEAD
import Projects from './pages/Projects';
import Project from './pages/Project';
import Users from './pages/Users';
import BurgerMenu from './components/burgerMenu';
import {singlePack} from './mock-data-2';
import {ontology} from './mock-config-data';
//import { layout } from './layout';
import {projectConfig} from './project_config';
=======
import Projects from './pages/Projects'
import Project from './pages/Project'
import Users from './pages/Users';
import BurgerMenu from './components/burgerMenu';
import { singlePack } from './mock-data-2';
import { ontology } from './mock-config-data';
import { layout } from './layout';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
import NLPViewer from '../nlpviewer';
import groupPlugin from '../plugins/group/Group';
import dialogueBoxPlugin from '../plugins/dialogue_box/DialogueBox';
import AccountMenu from './components/accountMenu';

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Router>
      <div>
        <header className="layout_header">
          <BurgerMenu open={open} setOpen={setOpen}>
            <Link to="/users">All Users</Link>
            <Link to="/projects">All Projects</Link>
          </BurgerMenu>
          <AccountMenu></AccountMenu>
        </header>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/documents/:id">
            <Viewer />
<<<<<<< HEAD
          </Route>
=======
          </Route>          
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/project/:id">
            <Project />
          </Route>

          <Route path="/">
            <Projects />
          </Route>
<<<<<<< HEAD
=======

>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
        </Switch>
      </div>
    </Router>
  );
}

function ViewWithDemoData() {
  return (
    <NLPViewer
      textPack={singlePack}
      ontology={ontology}
      plugins={[groupPlugin, dialogueBoxPlugin]}
<<<<<<< HEAD
      projectConfig={projectConfig}
=======
      layout={layout}
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
    />
  );
}

let EntryComponent = App;

<<<<<<< HEAD
// eslint-disable-next-line @typescript-eslint/no-explicit-any
=======
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
if (process.env.REACT_APP_IS_DEMO === ('true' as any)) {
  EntryComponent = ViewWithDemoData;
}

export default EntryComponent;
