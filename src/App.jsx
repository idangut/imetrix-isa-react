import PaginaPrincipal from "./Page";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from "./componentsblog/pages/register/Register";
import Login from "./componentsblog/pages/login/Login";
import Home from "./componentsblog/pages/home/Home";
import Settings from "./componentsblog/pages/settings/Settings";
import Single from "./componentsblog/pages/Single/Single";
import Write from "./componentsblog/pages/write/Write";

function App() {

  const user = false;
  
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={PaginaPrincipal} />
          <Route path="/blog/home"> <Home/> </Route>
          <Route path="/blog/register"> {user ? <Home/> : <Register/>} </Route>
          <Route path="/blog/login"> {user ? <Home/> : <Login/>} </Route>
          <Route path="/blog/settings"> {user ? <Settings/> : <Register/>} </Route>
          <Route path="/blog/post/:postId"> <Single/> </Route>
          <Route path="/blog/write"> {user ? <Write/> : <Register/>} </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
