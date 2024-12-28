// // react-router components
// import { Redirect, Route, Switch, useLocation } from "react-router-dom";
// // NovaPay Dashboard React contexts
// import { setMiniSidenav, setOpenConfigurator, useVisionUIController } from "context";
// import { useEffect, useMemo, useState } from "react";

// import { CacheProvider } from "@emotion/react";
// import Configurator from "examples/Configurator";
// import CssBaseline from "@mui/material/CssBaseline";
// import Icon from "@mui/material/Icon";
// // NovaPay Dashboard React example components
// import Sidenav from "examples/Sidenav";
// // @mui material components
// import { ThemeProvider } from "@mui/material/styles";
// // NovaPay Dashboard React components
// import VuiBox from "components/VuiBox";
// import createCache from "@emotion/cache";
// // NovaPay Dashboard React routes
// import routes from "routes";
// // RTL plugins
// import rtlPlugin from "stylis-plugin-rtl";
// // NovaPay Dashboard React themes
// import theme from "assets/theme";
// import themeRTL from "assets/theme/theme-rtl";

// // NovaPay Payments Routes
// import PaymentMethods from "layouts/payments/components/PaymentMethods/index";

// // NovaPay Payments Sub category Routes
// import Disputes from "layouts/payments/components/disputes";
// import PaymentActivity from "layouts/payments/components/PaymentActivity";
// import PaymentLinks from "layouts/payments/components/paymentLinks";
// import Risk from "layouts/payments/components/risk";
// import Settlements from "layouts/payments/components/settlements";
// import paymnetLinkbutton from "layouts/payments/components/paymentslinkbutton"
// import PaymentLinkForm from "layouts/payments/components/paymentLinks"

// export default function App() {
//   const [controller, dispatch] = useVisionUIController();
//   const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
//   const [onMouseEnter, setOnMouseEnter] = useState(false);
//   const [rtlCache, setRtlCache] = useState(null);
//   const { pathname } = useLocation();

//   // Cache for the rtl
//   useMemo(() => {
//     const cacheRtl = createCache({
//       key: "rtl",
//       stylisPlugins: [rtlPlugin],
//     });

//     setRtlCache(cacheRtl);
//   }, []);

//   // Open sidenav when mouse enter on mini sidenav
//   const handleOnMouseEnter = () => {
//     if (miniSidenav && !onMouseEnter) {
//       setMiniSidenav(dispatch, false);
//       setOnMouseEnter(true);
//     }
//   };

//   // Close sidenav when mouse leave mini sidenav
//   const handleOnMouseLeave = () => {
//     if (onMouseEnter) {
//       setMiniSidenav(dispatch, true);
//       setOnMouseEnter(false);
//     }
//   };

//   // Change the openConfigurator state
//   const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

//   // Setting the dir attribute for the body element
//   useEffect(() => {
//     document.body.setAttribute("dir", direction);
//   }, [direction]);

//   // Setting page scroll to 0 when changing the route
//   useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//   }, [pathname]);

//   const getRoutes = (allRoutes) =>
//     allRoutes.map((route) => {
//       if (route.collapse) {
//         return getRoutes(route.collapse);
//       }

//       if (route.route) {
//         return <Route exact path={route.route} component={route.component} key={route.key} />;
//       }

//       return null;
//     });

//   const configsButton = (
//     <VuiBox
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       width="3.5rem"
//       height="3.5rem"
//       bgColor="info"
//       shadow="sm"
//       borderRadius="50%"
//       position="fixed"
//       right="2rem"
//       bottom="2rem"
//       zIndex={99}
//       color="white"
//       sx={{ cursor: "pointer" }}
//       onClick={handleConfiguratorOpen}
//     >
//       <Icon fontSize="default" color="inherit">
//         settings
//       </Icon>
//     </VuiBox>
//   );

//   return direction === "rtl" ? (
//     <CacheProvider value={rtlCache}>
//       <ThemeProvider theme={themeRTL}>
//         <CssBaseline />
//         {layout === "dashboard" && (
//           <>
//             <Sidenav
//               color={sidenavColor}
//               brand=""
//               brandName="NovaPay"
//               routes={routes}
//               onMouseEnter={handleOnMouseEnter}
//               onMouseLeave={handleOnMouseLeave}
//             />
//             <Configurator />
//             {configsButton}
//           </>
//         )}
//         {layout === "vr" && <Configurator />}
//         <Switch>
//           {getRoutes(routes)}
//           {/* New Routes */}
//           <Route exact path="/payments/risk" component={Risk} />
//           <Route exact path="/payments/disputes" component={Disputes} />
//           <Route exact path="/payments/Payment-Activity" component={PaymentActivity} />
//           <Route exact path="/payments/settlements" component={Settlements} />
//           <Route exact path="/payments/Payment-Links" component={paymnetLinkbutton} />
//           <Route exact path="/payments/payment-Link-Form" component={PaymentLinkForm}/>
//           <Route exact path="/payments/Payment-Methods" component={PaymentMethods} />
//           <Redirect from="*" to="/dashboard" />
//         </Switch>
//       </ThemeProvider>
//     </CacheProvider>
//   ) : (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {layout === "dashboard" && (
//         <>
//           <Sidenav
//             color={sidenavColor}
//             brand=""
//             brandName="NovaPay"
//             routes={routes}
//             onMouseEnter={handleOnMouseEnter}
//             onMouseLeave={handleOnMouseLeave}
//           />
//           <Configurator />
//           {configsButton}
//         </>
//       )}
//       {layout === "vr" && <Configurator />}
//       <Switch>
//         {getRoutes(routes)}
//         <Route exact path="/payments/risk" component={Risk} />
//         <Route exact path="/payments/disputes" component={Disputes} />
//         <Route exact path="/payments/Payment-Activity" component={PaymentActivity} />
//         <Route exact path="/payments/settlements" component={Settlements} />
//         <Route exact path="/payments/Payment-Links" component={paymnetLinkbutton} />
//         <Route exact path="/payments/payment-Link-Form" component={PaymentLinkForm}/>
//         <Route exact path="/payments/Payment-Methods" component={PaymentMethods} />
//         <Redirect from="*" to="/dashboard" />
//       </Switch>
//     </ThemeProvider>
//   );
// }


// react-router components
import { Redirect, Route, Switch } from "react-router-dom";
// NovaPay Dashboard React contexts
import { setMiniSidenav, setOpenConfigurator, useVisionUIController } from "context";
import { useEffect, useMemo, useState } from "react";

import { CacheProvider } from "@emotion/react";
import Configurator from "examples/Configurator";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
// NovaPay Dashboard React example components
import Sidenav from "examples/Sidenav";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
// NovaPay Dashboard React components
import VuiBox from "components/VuiBox";
import createCache from "@emotion/cache";
// NovaPay Dashboard React routes
import routes from "routes";
// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
// NovaPay Dashboard React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// NovaPay Payments Routes
import PaymentMethods from "layouts/payments/components/PaymentMethods/index";

// NovaPay Payments Sub category Routes
import Disputes from "layouts/payments/components/disputes";
import PaymentActivity from "layouts/payments/components/PaymentActivity";
import PaymentLinks from "layouts/payments/components/paymentLinks";
import Risk from "layouts/payments/components/risk";
import Settlements from "layouts/payments/components/settlements";
import paymnetLinkbutton from "layouts/payments/components/paymentslinkbutton"
import PaymentLinkForm from "layouts/payments/components/paymentLinks"

export default function App() {
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} component={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <VuiBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="info"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="white"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </VuiBox>
  );

  return (
    <ThemeProvider theme={direction === "rtl" ? themeRTL : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand=""
            brandName="NovaPay"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Switch>
        {getRoutes(routes)}
        {/* New Routes */}
        <Route exact path="/payments/risk" component={Risk} />
        <Route exact path="/payments/disputes" component={Disputes} />
        <Route exact path="/payments/Payment-Activity" component={PaymentActivity} />
        <Route exact path="/payments/settlements" component={Settlements} />
        <Route exact path="/payments/Payment-Links" component={paymnetLinkbutton} />
        <Route exact path="/payments/payment-Link-Form" component={PaymentLinkForm} />
        <Route exact path="/payments/Payment-Methods" component={PaymentMethods} />
        <Redirect from="*" to="/dashboard" />
      </Switch>
    </ThemeProvider>
  );
}
