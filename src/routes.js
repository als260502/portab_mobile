import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import Mail from "./pages/Mail";
import Sheduler from "./pages/Sheduler";

const Routes = createAppContainer(
  createSwitchNavigator({
    Edit,
    Dashboard,
    Main,
    Sheduler,
    Delete,
    Mail,
  })
)

export default Routes;
