import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import Mail from "./pages/Mail";
import Sheduler from "./pages/Sheduler";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: Main,
      Sheduler: Sheduler,
      Dashboard: Dashboard,
      Edit: Edit,
      Delete: Delete,
      Mail: Mail
    },
    {
      headerMode: "none",
      mode: "card",
      navigationOptions: {
        gestureEnabled: true
      }
    }
  )
);

export default Routes;
