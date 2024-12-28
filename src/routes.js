import Billing from "layouts/billing";
import { BsCreditCardFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
// NovaPay Dashboard React layouts
import Dashboard from "layouts/dashboard";
import { FaCartShopping } from "react-icons/fa6";
import { IoBuild } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
// NovaPay Dashboard React icons
import { IoRocketSharp } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import PaymentActivity from "layouts/payments/components/PaymentActivity";
import Payments from "layouts/payments";
import Profile from "layouts/profile";
import RTL from "layouts/rtl";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Tables from "layouts/tables";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    route: "/tables",
    icon: <IoStatsChart size="15px" color="inherit" />,
    component: Tables,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <BsCreditCardFill size="15px" color="inherit" />,
    component: Billing,
    noCollapse: true,
  },
    {
      type: "collapse",
      name: "Payments",
      key: "payments",
      route: "/payments",
      icon: <FaCartShopping size="15px" color="inherit" />, // Payments Icon
      component: Payments, // Payments Component
      noCollapse: true,
    },
  

  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <BsFillPersonFill size="15px" color="inherit" />,
    component: Profile,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <IoIosDocument size="15px" color="inherit" />,
    component: SignIn,
    noCollapse: true,
  }
];

export default routes;
