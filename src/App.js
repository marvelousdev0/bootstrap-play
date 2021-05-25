import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { URLS } from "./constants/urls";

const Home = lazy(() => import("./pages/Home"));
const Buttons = lazy(() => import("./pages/Buttons"));
const Inputs = lazy(() => import("./pages/Inputs"));
const Selects = lazy(() => import("./pages/Selects"));

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content overflow-y d-flex">
        <Sidebar />
        <main className="p-3">
          <div className="container-fluid">
            <Suspense fallback={null}>
              <Switch>
                <Route exact path={URLS.HOME} component={Home} />
                <Route path={URLS.BUTTONS} component={Buttons} />
                <Route path={URLS.INPUTS} component={Inputs} />
                <Route path={URLS.SELECTS} component={Selects} />
              </Switch>
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
