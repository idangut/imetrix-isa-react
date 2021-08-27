import Pagina from "./Page";
import Blog from "./Blog";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Pagina} /> 
          <Route path="/blog" component={Blog} /> 
        </Switch>
      </>
    </Router>
  );
}

export default App;
