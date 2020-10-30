import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout__container">
      <Router>
        <Header>
          <Navbar />
        </Header>
        <Content className="content__container">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
