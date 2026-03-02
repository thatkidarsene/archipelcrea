import { Route, Switch } from "wouter";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Concept from "@/pages/Concept";
import Islands from "@/pages/Islands";
import Formulas from "@/pages/Formulas";
import Registration from "@/pages/Registration";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Passport from "@/pages/Passport";

export function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/concept" component={Concept} />
        <Route path="/iles" component={Islands} />
        <Route path="/formules" component={Formulas} />
        <Route path="/inscription" component={Registration} />
        <Route path="/passeport" component={Passport} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
        <Route>404</Route>
      </Switch>
    </Layout>
  );
}
