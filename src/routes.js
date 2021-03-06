import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import Mail from "./pages/Mail";
import Sheduler from "./pages/Sheduler";

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Sheduler,
    Dashboard,
    Mail,
    Edit,
    Delete,
  })
)

export default Routes;
