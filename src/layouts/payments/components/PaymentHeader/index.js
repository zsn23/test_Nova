import { useState } from 'react'
// icons
import { BiStats } from "react-icons/bi";
import { GoShield } from "react-icons/go";
import { CgDanger } from "react-icons/cg";
import { ImCoinDollar } from "react-icons/im";
import { FaLink } from "react-icons/fa6";
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import VuiBox from "components/VuiBox";
import VuiTypography from 'components/VuiTypography';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Divider from "@mui/material/Divider";
import Chip from '@mui/material/Chip';
import { useLocation } from "react-router-dom";
import colors from 'assets/theme/base/colors';
import borders from 'assets/theme/base/borders';
import { Grid } from '@mui/material';
import { whitespace } from 'stylis';

const PaymentsSubroutes = [
    { path: "/payments/Payment-Activity", label: "Payment Activity", icon: <BiStats  style={{fontSize:"25px" , marginRight: "7px" }} color="#0075ff" /> },
    { path: "/payments/risk", label: "Risk", icon: <GoShield style={{ fontSize:"25px" ,marginRight: "7px" }} color="#e31a1a" /> },
   // { path: "/payments/disputes", label: "Disputes", icon: <CgDanger style={{fontSize:"25px" , marginRight: "7px" }} color=" #fbcf33" /> },
    { path: "/payments/settlements", label: "Settlements", icon: <ImCoinDollar style={{fontSize:"25px" , marginRight: "7px" }} color="#01b574" /> },
    { path: "/payments/Payment-Links", label: "Payment Links", icon: <FaLink style={{ fontSize:"25px" ,marginRight: "7px" }} color="white" /> },
];

const PaymentRoutes = [
    { path: "/payments", lable: "Dashboard" },
    { path: "/payments/Payment-Methods", lable: "Payment Methods" },
];

const Payment_Header = () => {

    const location = useLocation();

    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <VuiBox mt={1}>

            <VuiBox display="flex" flexWrap="wrap">
                {PaymentRoutes.map((route, index) => (
                    <VuiBox
                        display="flex"
                        justifyContent="start"
                        flexDirection="column"
                        mt="7px"
                        key={route.path}
                    >
                        <NavLink color="white" to={route.path}>
                            <VuiTypography
                                // backgroundColor={location.pathname === route.path ? "#1a1f37" : "none"}
                                variant="h4"
                                mr="8px"
                                style={{
                                    padding: "5px 20px 5px 20px",
                                    color: "white",
                                    borderRadius: "0.9375rem",
                                    fontWeight: "bolder",
                                }}
                            >
                                {route.lable}

                                {location.pathname === route.path && (
                                    <Divider light style={{ margin: "3px" }} />
                                )}
                            </VuiTypography>
                        </NavLink>
                    </VuiBox>
                ))}
            </VuiBox>



            <VuiBox display="flex" alignItems="center" flexWrap="wrap">
                {PaymentsSubroutes.map((route, index) => (
                    <VuiBox
                        key={route.path}
                        display="flex"
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        style={{
                            position: "relative", // Ensure the hover effect stays within this box
                            marginBottom: "10px", // Optional: Adds spacing between links
                        }}
                        mt="5px"
                    >
                        <NavLink

                            style={{
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                position: "relative", // Needed for proper positioning of the glass effect
                            }}
                            color="white"
                            to={route.path}
                        >
                            <VuiTypography
                                backgroundColor={location.pathname === route.path ? "#1a1f37" : "none"}
                                variant="button"
                                color="white"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent:"center",
                                    position: "relative",
                                    zIndex: 2, // Keep text above hover effect
                                    padding: "4px 15px 4px 15px", // Adds some padding around the text
                                    borderRadius: "0.9375rem", // Matches hover effect
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                }}
                            >
                                {route.icon} {route.label}
                            </VuiTypography>

                            {/* {hoverIndex === index && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "#1a1f37", // Light overlay
                                            backdropFilter: "blur(10px)", // Glass effect
                                            borderRadius: "0.9375rem", // Matches the typography container
                                            zIndex: 1, // Places the effect behind the text
                                        }}
                                    ></div>
                                )} */}
                        </NavLink>
                    </VuiBox>
                ))}
            </VuiBox>


            <Divider
                light
                style={{ marginTop: "0px" }}
            />
        </VuiBox>
    )
}

export default Payment_Header