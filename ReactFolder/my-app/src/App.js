
import  {BrowserRouter, Switch , Route} from "react-router-dom"
import Detail from "./routes/Detail";
import Home from "./routes/Home"

function App() {
  return <BrowserRouter>
          <Switch>
            <Route path="/hello">
              <h1>안녕하세요.</h1>
            </Route>

            <Route path="/movie/:id">
              <Detail />
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </BrowserRouter>
  
}
export default App;
