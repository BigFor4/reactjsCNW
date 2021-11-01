import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./main/main";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import Learning from "./Components/Learning/Learning";
import Quiz from "./Components/Learning/quiz";
class App extends Component {
  
  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/quiz/:id" exact component={() => (user === null ? <Login/> : <Quiz/>)} />
          <Route path="/job" exact component={() => (user === null ? <Login/> : <Main/>)} />
          <Route path="/learning" exact component={() => (user === null ? <Login/> : <Learning/>)} />
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
