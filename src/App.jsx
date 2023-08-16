import Template from "./components/Layout/Template";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import FAQ from "./components/FAQ";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import NotFound from "./components/NotFound";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/atayee-electric/" element={<Template />}>
      <Route index element={<Home />} />
      <Route path="/atayee-electric/about" element={<About />} />
      <Route path="/atayee-electric/contact" element={<Contact />} />
      <Route path="/atayee-electric/services" element={<Services />} />
      <Route path="/atayee-electric/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
