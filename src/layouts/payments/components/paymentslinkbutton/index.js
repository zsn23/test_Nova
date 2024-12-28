// import React from 'react';
// import VuiButton from "components/VuiButton";
// import VuiBox from "components/VuiBox";
// import VuiTypography from "components/VuiTypography"; // Correct import
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Payment_Header from "../PaymentHeader/index";
// import logo from "./favicon.png";
// import Card from "@mui/material/Card";


// const Index = () => {
//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <Payment_Header />
//       <Card
//         sx={{margin: "auto",padding: "20px",maxWidth: "500px",textAlign: "center",backgroundColor: "#333", borderRadius: "10px",}}>
//         <VuiBox
//           sx={{
//             display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",height: "100%",}}>
//           <img src={logo} alt="Logo" style={{ maxWidth: "150px", marginBottom: "20px" }} />
//           <VuiTypography
//             variant="h5"
//             sx={{color: "white",fontWeight: "bold",marginBottom: "20px", }}>
//             Create Your First Payment Link
//           </VuiTypography>
//           <VuiButton variant="gradient" color="info">
//             Link
//           </VuiButton>
//         </VuiBox>
//       </Card>
//     </DashboardLayout>
//   );
// };

// export default Index;



import React from 'react';
import VuiButton from "components/VuiButton";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography"; // Correct import
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Payment_Header from "../PaymentHeader/index";
import logo from "layouts/payments/components/paymentslinkbutton/favicon.png";
import Card from "@mui/material/Card";
import Footer from 'examples/Footer';
import VuiBadge from 'components/VuiBadge';
import VuiAvatar from 'components/VuiAvatar';
import { display, fontSize, fontWeight, height, letterSpacing, padding, width } from '@mui/system';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const Index = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Payment_Header />
      
        <VuiBox display="flex"  alignItems="center" flexDirection="column" justifyContent="center">
          <VuiAvatar style={{width:"30%",height:"15%"}} src={logo} alt="Logo"  />
        

        <VuiBox style={{display:"flex" , justifyContent:"center" , flexDirection:"column" , alignItems:"center"}}>

        
        <VuiBox display="flex" justifyContent="center">
          <VuiTypography   mb={3} style={{WordSpacing:"2px"}} color="white" variant="h4">
            Create Your First Payment Link
          </VuiTypography>
          </VuiBox>
          <NavLink to="/payments/payment-Link-Form">
          <VuiButton style={{padding:"5px 20px 5px 20px" , fontSize:"20px" , fontWeight:"100"}} size="large" variant="gradient" color="primary">
            New Payment Link

          </VuiButton>
          </NavLink>
          </VuiBox>
         
         
        </VuiBox>
     

      <Footer/>
    </DashboardLayout>
  );
};

export default Index;