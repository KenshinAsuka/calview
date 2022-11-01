import { Counter } from "./components/Counter";
import { Calculator } from "./components/Calculator";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/calculator',
    element: <Calculator />
  }
];

export default AppRoutes;
