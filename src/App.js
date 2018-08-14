import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import Gene from "./Gene"
import Chromosome from "./Chromosome"
import Home from "./Home"

const App = () => {
  return (
    <div>
      <span> Watch the console log for every route change </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/genes/13">Unlucky Gene</Link>
        </li>
        <li>
          <Link to="/genes/sadA">sadA Gene</Link>
        </li>
        <li>
          <Link to="/genes/numA">numA Gene</Link>
        </li>
        <li>
          <Link to="/chromosomes/13">Unlucky Chromosome</Link>
        </li>
        <li>
          <Link to="/chromosomes/1">First Chromosome</Link>
        </li>
        <li>
          <Link to="/chromosomes/6">Sixth Chromosome</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/genes/:id" component={Gene} />
        <Route path="/chromosomes/:id" component={Chromosome} />
      </Switch>
    </div>
  )
}
export default App
