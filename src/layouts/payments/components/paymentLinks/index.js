

// // import React, { useState } from "react";
// // import {
// //   Card,
// //   Tabs,
// //   Tab,
// //   TextField,
// //   Select,
// //   MenuItem,
// //   RadioGroup,
// //   FormControlLabel,
// //   Radio,
// //   Checkbox,
// // } from "@mui/material";
// // import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// // import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// // import Payment_Header from "../PaymentHeader/index";
// // import VuiTypography from "components/VuiTypography";
// // import VuiBox from "components/VuiBox";
// // import { IoInformationCircle } from "react-icons/io5";
// // import Button from "@mui/material/Button";
// // import LabelIcon from "@mui/icons-material/Label";
// // import VuiInput from "components/VuiInput";


// // const PaymentLinks = () => {
// //   const [activeTab, setActiveTab] = useState("I will enter the amount");
// //   const [showAmountInput, setShowAmountInput] = useState(true);
// //   const [selectedDate, setSelectedDate] = useState("");
// //   const [selectedCurrency, setSelectedCurrency] = useState("USD");


// //   // const currencyMap = {
// //   //   USD: "us",
// //   //   EUR: "eu",
// //   //   AUD: "au",
// //   //   INR: "in",
  
// //   // };
// //   const handleTabChange = (event, newValue) => {
// //     setActiveTab(newValue);
// //     setShowAmountInput(newValue === "I will enter the amount");
// //   };

// //   return (
// //     <DashboardLayout>
// //       <DashboardNavbar />
// //       <Payment_Header />
// //       <VuiBox mt={4}>
// //         <VuiTypography variant="h5" fontWeight="bold" color="white">
// //           Payment Links
// //         </VuiTypography>
// //       </VuiBox>
      
      
      
// //       <VuiTypography variant="h6" fontWeight="bold" color="white" p={5} maxWidth="300px" mx="auto">
// //         Link amount and details
// //       </VuiTypography>
      
// //       <VuiBox
// //   mt={4}
// //   sx={{
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
    
    
// //   }}
// // >
// //       <Card mt={3} style={{ display:"flex", justifyContent:"center", width:"50%"}}>
// //       <VuiBox p={4} width="100%" >
// //         <VuiBox maxWidth="400px" color="dark">
// //   <Tabs
// //     value={activeTab}
// //     onChange={handleTabChange}
// //   >
// //     <Tab label="I will enter the amount" value="I will enter the amount" />
// //     <Tab label="My customer will enter the amount" value="My customer will enter the amount" />
// //   </Tabs>
// // </VuiBox>

// //         {showAmountInput && (
// //   <VuiBox mt={4}>
// //     <VuiTypography variant="h6" color="white">
// //       How much would you like to request from your customer?
// //     </VuiTypography>
// //     <VuiBox display="flex" alignItems="center" mt={2}>
// //       {/* <TextField   type="number" placeholder="0.00" sx={{ mr: 2 }} /> */}
// //       <VuiInput type="number" placeholder="0.00" sx={{ mr: 2 }}  />
// //       <VuiBox display="flex" alignItems="center" gap={1}>
// //          <div style={{ position: "relative", display: "flex" }}>
             
// //                    <select
// //                      style={{
// //                        background: "#1A1F37",
// //                        color: "#fff",
// //                        border: "1px solid #4a5568",
// //                        borderRadius: "5px",
// //                        padding: "10px 12px 10px 36px",
         
// //                        cursor: "pointer",
// //                        fontSize: "14px",
// //                      }}
         
// //                    >
// //                      <option value="USD">USD</option>
// //                      <option value="EUR">EUR</option>
// //                      <option value="INR">INR</option>
// //                    </select>
// //                  </div>
// //         {/* <Select
// //           value={selectedCurrency}
// //           onChange={(e) => setSelectedCurrency(e.target.value)}
// //           variant="outlined"
// //         >
          
// //           {Object.keys(currencyMap).map((currency) => (
// //             <MenuItem key={currency} value={currency}>
// //               <VuiBox display="flex" alignItems="center" gap={1}>
// //                 <img
// //                   src={`https://flagcdn.com/w40/${currencyMap[currency].toLowerCase()}.png`}
// //                   alt={`${currency} flag`}
// //                   style={{ width: "24px", height: "24px", borderRadius: "4px" }}
// //                 />
// //                 {currency}
// //               </VuiBox>
// //             </MenuItem>
// //           ))}
// //         </Select> */}
// //       </VuiBox>
// //     </VuiBox>
// //   </VuiBox>
// // )}

       
// //         <VuiBox mt={4}>
// //           <VuiTypography variant="h6" color="white">
// //             Title
// //           </VuiTypography>
// //           {/* <TextField fullWidth placeholder="e.g. Order #12345, Membership fee, etc." variant="outlined" /> */}
// //           <VuiInput placeholder="e.g. Order #12345, Membership fee, etc." size="large" />
// //         </VuiBox>

        
// //         <VuiBox mt={4}>
// //           <VuiTypography variant="h6" color="white">
// //             Description (Optional)
// //           </VuiTypography>
// //           {/* <TextField
// //             fullWidth
// //             multiline
// //             rows={4}
// //             placeholder="e.g. Payment for membership fees for December, etc."
// //             variant="outlined"
// //           /> */}
// //           <VuiInput placeholder="e.g. Payment for membership fees for December, etc." multiline rows={5} />
// //         </VuiBox>

       
// //         <VuiBox mt={4}>
// //           <VuiTypography variant="h6" color="white">
// //             Internal reference (Optional)
// //           </VuiTypography>
// //           {/* <TextField fullWidth placeholder="e.g. REF-123" variant="outlined" /> */}
// //           <VuiInput placeholder="e.g. REF-123"  size="large" />
// //         </VuiBox>

// //         <VuiBox mt={4}>
// //           <VuiTypography variant="h6" color="white">
// //             Customer information
// //             <IoInformationCircle style={{ marginLeft: "8px" }} />
// //           </VuiTypography>
// //           <VuiTypography variant="h6" color="white" mt={2}>
// //             We collect Name and Email for all your transactions.
// //           </VuiTypography>
// //         </VuiBox>
// //         <VuiBox mt={3}>
// //           <RadioGroup defaultValue="billing" color="white">
// //             <FormControlLabel
// //               value="billing"
// //               control={
// //                 <Radio
// //                   sx={{
// //                     "& .MuiSvgIcon-root": {
// //                       border: "2px solid grey", 
// //                       borderRadius: "50%", 
// //                     },
// //                   }}
// //                 />
// //               }
// //               label="Billing address only"
// //             />
// //             <FormControlLabel
// //               value="billing-shipping"
// //               control={
// //                 <Radio
// //                   sx={{
// //                     "& .MuiSvgIcon-root": {
// //                       border: "2px solid grey",
// //                       borderRadius: "50%",
// //                     },
// //                   }}
// //                 />
// //               }
// //               label="Billing and shipping address"
// //             />
// //           </RadioGroup>
// //         </VuiBox>

// //         <VuiBox mt={2} sx={{ color: "white" }}>
// //           <FormControlLabel
// //             control={
// //               <Checkbox
// //                 sx={{
// //                   "& .MuiSvgIcon-root": {
// //                     border: "2px solid grey", 
// //                     borderRadius: "4px", 
// //                   },
// //                 }}
// //               />
// //             }
// //             label="Customer phone number"
// //           />
// //           <FormControlLabel
// //             control={
// //               <Checkbox
// //                 sx={{
// //                   "& .MuiSvgIcon-root": {
// //                     border: "2px solid grey", 
// //                     borderRadius: "4px", 
// //                   },
// //                 }}
// //               />
// //             }
// //             label="Reference"
// //           />
// //           <FormControlLabel
// //             control={
// //               <Checkbox
// //                 sx={{
// //                   "& .MuiSvgIcon-root": {
// //                     border: "2px solid grey", 
// //                     borderRadius: "4px", 
// //                   },
// //                 }}
// //               />
// //             }
// //             label="Message"
// //           />
// //         </VuiBox>

// //         <VuiBox mt={4}>
// //           <VuiTypography variant="h6" color="white">
// //             Link Validity
// //           </VuiTypography>
// //         </VuiBox>

// //         <VuiTypography mt={3} variant="h6" color="white">
// //           Link Type
// //         </VuiTypography>

// //         <VuiBox>
// //           <RadioGroup   defaultValue="billing" color="white" row>
// //             <FormControlLabel
// //               value="billing"
// //               control={
// //                 <Radio
// //                   sx={{
// //                     "& .MuiSvgIcon-root": {
// //                       border: "2px solid grey",
// //                       borderRadius: "50%",
// //                     },
// //                   }}
// //                 />
// //               }
// //               label="One-Time"
// //             />
// //             <FormControlLabel
// //               value="billing-shipping"
// //               control={
// //                 <Radio
// //                   sx={{
// //                     "& .MuiSvgIcon-root": {
// //                       border: "2px solid grey",
// //                       borderRadius: "50%",
// //                       gap:"5px",
// //                     },
// //                   }}
// //                 />
// //               }
// //               label="Reusable"
// //             />
// //           </RadioGroup>
// //         </VuiBox>

        
// //         <VuiBox mt={4}>
// //           <VuiTypography variant="h6" color="white">
// //             Active until
// //           </VuiTypography>
// //           <input
// //             type="date"
// //             value={selectedDate}
// //             onChange={(e) => setSelectedDate(e.target.value)}
// //             style={{
// //               marginTop: "10px",
// //               padding: "10px",
// //               borderRadius: "4px",
// //               width: "50%",
// //               backgroundColor: "#fff",
// //             }}
// //           />
// //         </VuiBox>

// //         <VuiBox
// //           mt={5}
// //           sx={{
// //             display: "flex",
// //             justifyContent: "flex-end",
// //             gap: "16px",
// //             padding: "16px",
// //           }}
// //         >
// //           <Button variant="contained" color="primary">
// //             Preview
// //           </Button>
// //           <Button variant="contained" color="primary">
// //             Create
// //           </Button>
// //         </VuiBox>
        
// //       </VuiBox>
// //         </Card>
// //         </VuiBox>
// //     </DashboardLayout>
// //   );
// // };

// // export default PaymentLinks;



// import React, { useState } from "react";
// import {
//   Card,
//   Tabs,
//   Tab,
//   TextField,
//   Select,
//   MenuItem,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Checkbox,
// } from "@mui/material";
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Payment_Header from "../PaymentHeader/index";
// import VuiTypography from "components/VuiTypography";
// import VuiBox from "components/VuiBox";
// import { IoInformationCircle } from "react-icons/io5";

// import VuiInput from "components/VuiInput";

// import VuiButton from "components/VuiButton";
// import "./paymentLink.css"
// import VuiBadge from "components/VuiBadge";

// const PaymentLink = () => {
//   const [activeTab, setActiveTab] = useState("I will enter the amount");
//   const [showAmountInput, setShowAmountInput] = useState(true);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedCurrency, setSelectedCurrency] = useState("USD");

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//     setShowAmountInput(newValue === "I will enter the amount");
//   };

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <Payment_Header />




     
//       <VuiBox
//         mt={4}
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",


//         }}
//       >
//         <Card mt={3} style={{ display: "flex", justifyContent: "center" }}>

       

//           <VuiBox px={4} width="100%" >

//           <VuiTypography mb={3} variant="h5" fontWeight="bold" color="white" >
//         Link amount and details
//       </VuiTypography>


            
//               <Tabs
//                 value={activeTab}
//                 onChange={handleTabChange}
//                 style={{background:"black"}}
//               >
//                 <Tab label="I will enter the amount" value="I will enter the amount" />
//                 <Tab label="My customer will enter the amount" value="My customer will enter the amount" />
//               </Tabs>
            

//             {showAmountInput && (
//               <VuiBox mt={4}>
//                 <VuiTypography mb={1} variant="h6" color="white">
//                   How much would you like to request from your customer?
//                 </VuiTypography>
//                 <VuiBox display="flex" alignItems="center" >
//                   <VuiInput type="number" style={{  borderRadius: "5px 0px 0px 5px"   }} placeholder="0.00"  />
//                   <VuiBox display="flex" alignItems="center" gap={1}>
//                     <div style={{ position: "relative", display: "flex" }}>
//       <select
//         style={{
//           background: "#1A1F37",
//           color: "#fff",
//           border: "1px solid #4a5568",
//           borderRadius: "0px 5px 5px 0px",
//           padding: "11px 12px 11px 12px",
//           cursor: "pointer",
//           fontSize: "12px",
//           height: "40px",
//         }}
//       >
//         <option value="USD" style={{ display: 'flex', alignItems: 'center' }}>
//           USD <VuiBadge  size="sm" src={"usflag"} alt="us_flag" />
//         </option>
//         <option value="POUND" style={{ display: 'flex', alignItems: 'center' }}>
//            POUND <VuiBadge size="sm" src={"ukflag"} alt="uk_flag" />
//         </option>
//         <option value="IDR" >
//           IDR <VuiBadge size="sm" src={"indonasianflag"} alt="indonasian_flag" />
//         </option>
//       </select>
//     </div>

    

//                   </VuiBox>
//                 </VuiBox>
//               </VuiBox>
//             )}


//             <VuiBox mt={4}>
//               <VuiTypography mb={1} variant="h6" color="white">
//                 Title
//               </VuiTypography>
//               <VuiInput style={{  borderRadius: "5px " }} placeholder="e.g. Order #12345, Membership fee, etc." size="large" />
//             </VuiBox>


//             <VuiBox mt={4}>
//               <VuiTypography mb={1} variant="h6" color="white">
//                 Description (Optional)
//               </VuiTypography>
//               <VuiInput  style={{  borderRadius: "5px " }} placeholder="e.g. Payment for membership fees for December, etc."  />
//             </VuiBox>


//             <VuiBox mt={4}>
//               <VuiTypography mb={1} variant="h6" color="white">
//                 Internal reference (Optional)
//               </VuiTypography>
//               <VuiInput style={{  borderRadius: "5px " }} placeholder="e.g. REF-123" size="large" />
//             </VuiBox>


// <VuiBox display="flex" justifyContent="center" flexWrap="wrap" alignItems="start" flexDirection="column" mt={3} p={3} style={{border:"1px solid grey"}}>
//               {/* Cus info , collect name mail heading */}
//             <VuiBox display="flex" flexDirection="column" justifyContent="center " flexWrap="wrap" >
//               <VuiTypography variant="h4" color="white">
//                 Customer information
//                 <IoInformationCircle style={{ marginLeft: "8px" }} />
//               </VuiTypography>

//               <VuiTypography  variant="h6" style={{fontWeight:"100"}} color="white" mt={2}>
//                 We collect Name and Email for all your transactions.
//               </VuiTypography>
//             </VuiBox>
//             {/* Cus info , collect name mail heading */}


//               {/* Customer addresses */}
//               <VuiBox mt={1} >
//                 <VuiBox display="flex" alignItems="center">
//                   <VuiTypography variant="h6" color="white" style={{fontWeight:"100"}} >
//                     Customer addresses
//                   </VuiTypography>
//                   <IoInformationCircle color="white" size={'20px'} />
//                 </VuiBox>
//                 <RadioGroup style={{padding:"0px 30px 0 30px"}} defaultValue="billing" color="white">
//                   <FormControlLabel
                    
//                     value="billing"
//                     control={
//                       <Radio
//                         sx={{
//                           "& .MuiSvgIcon-root": {
//                             border: "2px solid white",
//                             borderRadius: "50%",
                            
//                           },
//                         }}
//                       />
//                     }
//                     label="Billing address only"
//                   />
//                   <FormControlLabel
//                     value="billing-shipping"
//                     control={
//                       <Radio
//                         sx={{
//                           "& .MuiSvgIcon-root": {
//                             border: "2px solid white",
//                             borderRadius: "50%",
//                           },
//                         }}
//                       />
//                     }
//                     label="Billing and shipping address"
//                   />
//                 </RadioGroup>
//               </VuiBox>
//               {/* Customer addresses */}

//             {/*ph , ref , msg  */}
//             <VuiBox px={2} mt={1} sx={{ color: "white" }}>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     sx={{
//                       "& .MuiSvgIcon-root": {
//                         border: "2px solid white",
//                         borderRadius: "4px",
                        
//                       },
//                     }}
//                   />
//                 }
//                 label="Customer Phone Number"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     sx={{
//                       "& .MuiSvgIcon-root": {
//                         border: "2px solid white",
//                         borderRadius: "4px",
//                       },
//                     }}
//                   />
//                 }
//                 label="Reference"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     sx={{
//                       "& .MuiSvgIcon-root": {
//                         border: "2px solid white",
//                         borderRadius: "4px",
//                       },
//                     }}
//                   />
//                 }
//                 label="Message Optional "
//               />
//             </VuiBox>
//             {/*ph , ref , msg  */}


//             {/* Link Vis */}
//             <VuiBox mt={3}>
//               <VuiTypography variant="h4" color="white">
//                 Link Validity
//               </VuiTypography>
//             </VuiBox>
//             {/* Link Vis */}

//             {/* Link typ */}
//             <VuiTypography mt={3} variant="h6" style={{fontWeight:"100"}} color="white">
//               Link Type
//             </VuiTypography>
//             {/* Link typ */}

//             {/* Link typ radio */}
//             <VuiBox px={2}>
//               <RadioGroup defaultValue="billing"  color="white" row>
//                 <FormControlLabel
//                   value="billing"
//                   control={
//                     <Radio
//                       sx={{
//                         "& .MuiSvgIcon-root": {
//                           border: "2px solid white",
//                           borderRadius: "50%",
                          
//                         },
//                       }}
//                     />
//                   }
//                   label="One-Time"
//                 />
//                 <FormControlLabel
//                   value="billing-shipping"
//                   control={
//                     <Radio
//                       sx={{
//                         "& .MuiSvgIcon-root": {
//                           border: "2px solid white",
//                           borderRadius: "50%",
                          
//                         },
//                       }}
//                     />
//                   }
//                   label="Reusable"
//                 />
//               </RadioGroup>
//             </VuiBox>
//             {/* Link typ radio */}




//             {/* Calender */}
//             <VuiBox display="flex" flexDirection="column" flexWrap="wrap" mt={1}>
//               <VuiTypography style={{fontWeight:"100"}} variant="h6" color="white">
//                 Active until
//               </VuiTypography>
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 style={{
//                   marginTop: "10px",
//                   padding: "10px",
//                   borderRadius: "10px",
//                   width: "120px",
//                   backgroundColor: "#fff",
                  
//                 }}
//               />
//             </VuiBox>
//              {/* Calender */}

//             </VuiBox>

//             {/* Preview create btn */}
//             <VuiBox
//               mt={3}
//               sx={{
//                 display: "flex",
//                 justifyContent: "flex-end",
//                 gap: "16px",
               
//               }}
//             >
//               <VuiButton variant="gradient" color="primary">
//                 Preview
//               </VuiButton>
//               <VuiButton variant="gradient" color="primary">
//                 Create
//               </VuiButton>
//             </VuiBox>
//             {/* Preview create btn */}

//           </VuiBox>
//         </Card>
//       </VuiBox>
//     </DashboardLayout>
//   );
// };

// export default PaymentLink



import React, { useState } from "react";
import {
  Card,
  Tabs,
  Tab,
  TextField,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Payment_Header from "../PaymentHeader/index";
import VuiTypography from "components/VuiTypography";
import VuiBox from "components/VuiBox";
import { IoInformationCircle } from "react-icons/io5";

import VuiInput from "components/VuiInput";

import VuiButton from "components/VuiButton";
import "./paymentLink.css"
import VuiBadge from "components/VuiBadge";

// import ukflag from "./flags icons/united-kingdom-flag-icon.svg"
// import usflag from "./flags icons/usa-flag.svg"
// import indonasianflag from "./flags icons/indonesia-flag.svg"
// import VuiAvatar from "components/VuiAvatar";

import FlagsDropdowm from "./FlagsDropdown"


const PaymentLink = () => {
  const [activeTab, setActiveTab] = useState("I will enter the amount");
  const [showAmountInput, setShowAmountInput] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");


  const handleTabChange = (value) => {
    setActiveTab(value);
    setShowAmountInput(value === "I will enter the amount");
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Payment_Header />




     
      <VuiBox
        mt={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",


        }}
      >
        <Card mt={3} style={{ display: "flex", justifyContent: "center" }}>

       

          <VuiBox px={4} width="100%" >

          <VuiTypography mb={3} variant="h5" fontWeight="bold" color="white" >
        Link amount and details
      </VuiTypography>


            
              {/* <Tabs
                value={activeTab}
                onChange={handleTabChange}
                style={{background:"black"}}
              >
                <Tab label="I will enter the amount" value="I will enter the amount" />
                <Tab label="My customer will enter the amount" value="My customer will enter the amount" />
              </Tabs> */}
              <VuiBox
          sx={{
            display: "flex",
            backgroundColor: "white",
            borderRadius: "8px",
            flexWrap:"wrap",
          }}
        >
          
          <VuiBox
            onClick={() => handleTabChange("I will enter the amount")}
            sx={{
              flex:1,
              border:"0.5px solid grey",
              padding: "10px 20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: activeTab === "I will enter the amount" ? "linear-gradient(90deg, #6a11cb, #2575fc)" : "#0F1535",
              color: activeTab === "I will enter the amount" ? "#fff" : "white",
              fontWeight: "bold",
              //borderRadius: activeTab === "I will enter the amount" ? "10px" : "0px",
              textAlign: "center",
            }}
          >
            I will enter the amount
          </VuiBox>

          
          <VuiBox
            onClick={() => handleTabChange("My customer will enter the amount")}
            sx={{
              flex:1,
              padding: "10px 20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              border:"0.5px solid grey",
              justifyContent: "center",
              background: activeTab === "My customer will enter the amount" ? "linear-gradient(90deg, #6a11cb, #2575fc)" : "#0F1535",
              color: activeTab === "My customer will enter the amount" ? "#fff" : "white",
              fontWeight: "bold",
              //borderRadius: activeTab === "My customer will enter the amount" ? "10px" : "0px",
              textAlign: "center",
            }}
          >
            My customer will enter the amount
          </VuiBox>
        </VuiBox>
            

            {showAmountInput && (
              <VuiBox mt={4}>
                <VuiTypography mb={1} variant="h6" color="white">
                  How much would you like to request from your customer?
                </VuiTypography>
                <VuiBox display="flex" alignItems="center" >
                  <VuiInput type="number" style={{  borderRadius: "5px 0px 0px 5px"   }} placeholder="0.00"  />
                  <VuiBox display="flex" alignItems="center" gap={1}>
                    {/* <div style={{ position: "relative", display: "flex" }}>
                      <select
                        style={{
                          background: "#1A1F37",
                          color: "#fff",
                          border: "1px solid #4a5568",
                          borderRadius: "0px 5px 5px 0px",
                          padding: "11px 12px 11px 12px",
                          cursor: "pointer",
                          fontSize: "12px",
                          height: "40px",
                        }}
                      >
                        <option value="USD" style={{ display: 'flex', alignItems: 'center' }}>
                          USD <VuiAvatar src={usflag} alt="usFlag" />
                        </option>
                        <option value="POUND" style={{ display: 'flex', alignItems: 'center' }}>
                          POUND <VuiAvatar src={ukflag} alt="ukFlag" />
                        </option>
                        <option value="IDR" >
                          IDR <VuiAvatar src={indonasianflag} alt="indonasianFlag" />
                        </option>
                      </select>
                    </div> */}
                    <FlagsDropdowm />
                  </VuiBox>
                </VuiBox>
              </VuiBox>
            )}


            <VuiBox mt={4}>
              <VuiTypography mb={1} variant="h6" color="white">
                Title
              </VuiTypography>
              <VuiInput style={{  borderRadius: "5px " }} placeholder="e.g. Order #12345, Membership fee, etc." size="large" />
            </VuiBox>


            <VuiBox mt={4}>
              <VuiTypography mb={1} variant="h6" color="white">
                Description (Optional)
              </VuiTypography>
              <VuiInput  style={{  borderRadius: "5px " }} placeholder="e.g. Payment for membership fees for December, etc."  />
            </VuiBox>


            <VuiBox mt={4}>
              <VuiTypography mb={1} variant="h6" color="white">
                Internal reference (Optional)
              </VuiTypography>
              <VuiInput style={{  borderRadius: "5px " }} placeholder="e.g. REF-123" size="large" />
            </VuiBox>


<VuiBox display="flex" justifyContent="center" flexWrap="wrap" alignItems="start" flexDirection="column" mt={3} p={3} style={{border:"1px solid grey"}}>
              {/* Cus info , collect name mail heading */}
            <VuiBox display="flex" flexDirection="column" justifyContent="center " flexWrap="wrap" >
              <VuiTypography variant="h4" color="white">
                Customer information
                <IoInformationCircle style={{ marginLeft: "8px" }} />
              </VuiTypography>

              <VuiTypography  variant="h6" style={{fontWeight:"100"}} color="white" mt={2}>
                We collect Name and Email for all your transactions.
              </VuiTypography>
            </VuiBox>
            {/* Cus info , collect name mail heading */}


              {/* Customer addresses */}
              <VuiBox mt={1} >
                <VuiBox display="flex" alignItems="center">
                  <VuiTypography variant="h6" color="white" style={{fontWeight:"100"}} >
                    Customer addresses
                  </VuiTypography>
                  <IoInformationCircle color="white" size={'20px'} />
                </VuiBox>
                <RadioGroup style={{padding:"0px 30px 0 30px"}} defaultValue="billing" color="white">
                  <FormControlLabel
                    
                    value="billing"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            border: "2px solid white",
                            borderRadius: "50%",
                            
                          },
                        }}
                      />
                    }
                    label="Billing address only"
                  />
                  <FormControlLabel
                    value="billing-shipping"
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            border: "2px solid white",
                            borderRadius: "50%",
                          },
                        }}
                      />
                    }
                    label="Billing and shipping address"
                  />
                </RadioGroup>
              </VuiBox>
              {/* Customer addresses */}

            {/*ph , ref , msg  */}
            <VuiBox px={2} mt={1} sx={{ color: "white" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": {
                        border: "2px solid white",
                        borderRadius: "4px",
                        
                      },
                    }}
                  />
                }
                label="Customer Phone Number"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": {
                        border: "2px solid white",
                        borderRadius: "4px",
                      },
                    }}
                  />
                }
                label="Reference"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": {
                        border: "2px solid white",
                        borderRadius: "4px",
                      },
                    }}
                  />
                }
                label="Message Optional "
              />
            </VuiBox>
            {/*ph , ref , msg  */}


            {/* Link Vis */}
            <VuiBox mt={3}>
              <VuiTypography variant="h4" color="white">
                Link Validity
              </VuiTypography>
            </VuiBox>
            {/* Link Vis */}

            {/* Link typ */}
            <VuiTypography mt={3} variant="h6" style={{fontWeight:"100"}} color="white">
              Link Type
            </VuiTypography>
            {/* Link typ */}

            {/* Link typ radio */}
            <VuiBox px={2}>
              <RadioGroup defaultValue="billing"  color="white" row>
                <FormControlLabel
                  value="billing"
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          border: "2px solid white",
                          borderRadius: "50%",
                          
                        },
                      }}
                    />
                  }
                  label="One-Time"
                />
                <FormControlLabel
                  value="billing-shipping"
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          border: "2px solid white",
                          borderRadius: "50%",
                          
                        },
                      }}
                    />
                  }
                  label="Reusable"
                />
              </RadioGroup>
            </VuiBox>
            {/* Link typ radio */}




            {/* Calender */}
            <VuiBox display="flex" flexDirection="column" flexWrap="wrap" mt={1}>
              <VuiTypography style={{fontWeight:"100"}} variant="h6" color="white">
                Active until
              </VuiTypography>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  borderRadius: "10px",
                  width: "120px",
                  backgroundColor: "#fff",
                  
                }}
              />
            </VuiBox>
             {/* Calender */}

            </VuiBox>

            {/* Preview create btn */}
            <VuiBox
              mt={3}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "16px",
               
              }}
            >
              <VuiButton variant="gradient" color="primary">
                Preview
              </VuiButton>
              <VuiButton variant="gradient" color="primary">
                Create
              </VuiButton>
            </VuiBox>
            {/* Preview create btn */}

          </VuiBox>
        </Card>
      </VuiBox>
    </DashboardLayout>
  );
};

export default PaymentLink






