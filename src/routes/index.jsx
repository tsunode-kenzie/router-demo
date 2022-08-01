import { Switch, Route } from "react-router-dom";
import Title from "../components/Title";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/dashboard'>
        <Title>Teste H1</Title>
      </Route>
      <Route exact path='/dashboard/profile'>
        <Title>Teste outro</Title>
      </Route>
      <Route exact path='/dashboard/profile'>
        <Title>Teste outro</Title>
      </Route>
      <Route exact path='/dashboard/profile'>
        <Title>Teste outro</Title>
      </Route>
      <Route exact path='/dashboard/profile'>
        <Title>Teste outro</Title>
      </Route>
    </Switch>
  )
}

export default Routes;