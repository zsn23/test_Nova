import Payment__Header from "../PaymentHeader/index";

// @mui material components
import Card from "@mui/material/Card";
import VuiInput from "components/VuiInput";

// NovaPay Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { AiFillTag } from "react-icons/ai";
import VuiPagination from "components/VuiPagination";

// @mui material components
import Icon from "@mui/material/Icon";

// NovaPay Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

// Data
import authorsTableData from "layouts/payments/components/PaymentMethods/data/authorsTableData";
import { React, useState } from "react";
import { IconButton, Collapse, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BorderTop } from "@mui/icons-material";
import avatar4 from "assets/images/avatar4.png";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IoInformationCircle } from "react-icons/io5";
import LabelIcon from "@mui/icons-material/Label";

// payments icons
import AliPay from "./data/Pay Logos/alipay.svg"
import American_Express from "./data/Pay Logos/american-express.svg"
import ApplePay from "./data/Pay Logos/apple-pay.svg"
import Bancomat_Pay from "./data/Pay Logos/Bancomat pay.jpeg"
import banocontact from "./data/Pay Logos/bancontact.svg"
import blik from "./data/Pay Logos/blik pay.jpeg"
import Bluecode from "./data/Pay Logos/blueCode.jpeg"
import cartes_banacaries from "./data/Pay Logos/Cartes Bancaires.png"
import DinersClub from "./data/Pay Logos/diners-club-international.svg"
import Discover from "./data/Pay Logos/payment-card-discover.svg"
import googlepay from "./data/Pay Logos/google-pay.svg"
import giropay from "./data/Pay Logos/giropay.svg"
import iDeal from "./data/Pay Logos/i_deal.svg"
import IrisPay from "./data/Pay Logos/iris pay.png"
import JCB from "./data/Pay Logos/jcb.svg"
import klarna from "./data/Pay Logos/klarna Icon.jpeg"
import Mastercard from "./data/Pay Logos/mastercard.svg"
import MbWay from "./data/Pay Logos/mb way.jpeg"
import mobilepay from "./data/Pay Logos/mobile pay.png"
import pagopa from "./data/Pay Logos/pagao pa.svg"
import payconiq from "./data/Pay Logos/Payconiq pay.png"
import paypal from "./data/Pay Logos/paypal.svg"
import payu from "./data/Pay Logos/pay u.svg"
import p24 from "./data/Pay Logos/Przelewy24 (P24).svg"
import samsungpay from "./data/Pay Logos/samsung-pay.svg"
import Satispay from "./data/Pay Logos/Satispay.png"
import SepaDD from "./data/Pay Logos/direct-debit.svg"
import Swish from "./data/Pay Logos/swish.svg"
import Trustly from "./data/Pay Logos/Trustly.png"
import UnionPay  from "./data/Pay Logos/unionpay.svg"
import Vipps from "./data/Pay Logos/vipps.svg"
import visa from "./data/Pay Logos/visa.svg"
import wechatpay from "./data/Pay Logos/wechat.svg"
import VuiButton from "components/VuiButton";

function Payment_Methods() {
  const { columns, rows } = authorsTableData;
  const [isExpanded, setIsExpanded] = useState({});
  const [open, setOpen] = useState(false); // State to control expanded/collapsed


  const handleToggle = (index) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the specific row's state
    }));
  };


  const DataOfpaymentMethods = [
    {
      Logo: AliPay,
      Payment_method: "AliPay",
      Location: "China",
      Status: "Inactive",
      Description: "Alipay is a hugely popular multi-purpose mobile payments app. It has more than 1.3 billion annual active users as of June 2020 and processed $17 trillion worth of transactions in mainland China over the course of a year.",
      Currencies: "HKD, USD, CNY",
      Activation_period: "3 days"
    },
    {
      Logo : American_Express,
      Payment_method: "American Express",
      Location: "Global",
      Status: "Active",
      Description: "American Express (Amex) is a multinational financial services company known primarily for its credit card, charge card, and traveler's check services. It is one of the largest card issuers in the world, offering a range of financial products and services for individuals, small businesses, and corporations.",
      Currencies: "All currencies",
      Activation_period: "1 day"
    },
    {
      Logo: ApplePay,
      Payment_method: "Apple Pay",
      Location: "Global",
      Status: "Active",
      Description: "ApplePay is a digital wallet technology that can be used to store your Cards and use those credentials to make payments on the Web, Mobile & In-Store, making the checkout process simple, safe & secure.",
      Currencies: "All currencies",
      Activation_period: "Immediately"
    },
    {
      Logo : Bancomat_Pay,
      Payment_method: "Bancomat Pay",
      Location: "Italy",
      Status: "Inactive",
      Description: "An Italian payment method that enables secure and instant transactions through mobile devices, primarily in euros.",
      Currencies: "EUR",
      Activation_period: "Immediately"
    },
    {
      Logo : banocontact,
      Payment_method: "Bancontact",
      Location: "Belgium",
      Status: "Active",
      Description: "Bancontact makes it possible to pay directly through the online payment systems of all major Belgian banks for customers with Bancontact payment cards.",
      Currencies: "EUR",
      Activation_period: "0-3 days"
    },
    {
      Logo : blik ,
      Payment_method: "Blik",
      Location: "Poland",
      Status: "Inactive",
      Description: "BLIK is a payment system in Poland that enables users to make payments using their mobile banking app without the need for a payment card.",
      Currencies: "PLN",
      Activation_period: "0-5 days"
    },
    {
      Logo : Bluecode ,
      Payment_method: "Bluecode",
      Location: "Germany, Austria, Switzerland",
      Status: "Active",
      Description: "Bluecode is a mobile payment method that allows users to make payments through their smartphone by scanning a QR code at participating merchants.",
      Currencies: "EUR",
      Activation_period: "3-5 days"
    },
    {
      Logo : cartes_banacaries ,
      Payment_method: "Cartes Bancaires",
      Location: "France",
      Status: "Inactive",
      Description: "France’s leading payment network, allowing card-based transactions with wide acceptance across the country.",
      Currencies: "EUR",
      Activation_period: "3-5 days"
    },
    {
      Logo : DinersClub,
      Payment_method: "Diners Club",
      Location: "Global",
      Status: "Inactive",
      Description: "Diners Club International is a premium global brand with a rich heritage as the world’s first charge card and is issued in 55+ countries.",
      Currencies: "AED, AUD, BGN, BHD, CAD, CHF, CZK, DKK, EUR, GBP, HKD, HUF, ILS, INR, JPY, KWD, MAD, NOK, NZD, OMR, PLN, QAR, RON, SAR, SEK, SGD, THB, TRY, USD, ZAR",
      Activation_period: "Immediately"
    },
    {
      Logo : Discover ,
      Payment_method: "Discover",
      Location: "Global",
      Status: "Inactive",
      Description: "Discover Network is a comprehensive, large-scale payments network used by over 305 million global cardholders and accepted at millions of businesses and cash access locations.",
      Currencies: "AED, AUD, BGN, BHD, CAD, CHF, CZK, DKK, EUR, GBP, HKD, HUF, ILS, INR, JPY, KWD, MAD, NOK, NZD, OMR, PLN, QAR, RON, SAR, SEK, SGD, THB, TRY, USD, ZAR",
      Activation_period: "Immediately"
    },
    { Logo : giropay,
      Payment_method: "giropay",
      Location: "Germany",
      Status: "Active",
      Description: "giropay is a popular online payment method in Germany, allowing consumers to make payments directly from their bank accounts. It was developed to enable easy and secure transactions via online banking.",
      Currencies: "EUR",
      Activation_period: "0-3 days"
    },
    {
      Logo : googlepay,
      Payment_method: "GooglePay",
      Location: "Global",
      Status: "Active",
      Description: "Google Pay is a digital wallet technology that enables shoppers to make seamless payments using any credit or debit card saved to their Google Account on compatible devices at a physical store, in-app, or on the web.",
      Currencies: "All currencies",
      Activation_period: "Immediately"
    },
    { Logo : iDeal,
      Payment_method: "iDeal",
      Location: "Netherlands",
      Status: "Active",
      Description: "iDEAL, launched in 2005, provides a payment guarantee to merchants while enabling consumers to pay online through their mobile banking app or online bank account. iDEAL is based on the SEPA credit transfer and seamlessly integrates with the online banking systems offered by banks.",
      Currencies: "EUR",
      Activation_period: "3 days"
    },
    {
      Logo : IrisPay,
      Payment_method: "Iris Payments",
      Location: "Greece",
      Status: "Inactive",
      Description: "A Greek instant payment system facilitating real-time bank transfers for e-commerce and other transactions.",
      Currencies: "EUR",
      Activation_period: "1-2 days"
    },
    {
      Logo : JCB,
      Payment_method: "JCB",
      Location: "Global",
      Status: "Active",
      Description: "JCB is a major global payment card network and a leading credit card issuer and acquirer in Japan. Its acceptance network includes 34 million merchants in the world.",
      Currencies: "All currencies",
      Activation_period: "Immediately"
    },
    {
      Logo : klarna,
      Payment_method: "Klarna",
      Location: "Global",
      Status: "Active",
      Description: "Klarna is a popular Buy Now Pay Later payment method available in more than 20 countries. Before approving the payment, Klarna performs risk checks on the shopper. If successful, Klarna takes on the credit risk for the payment and pays you upfront in full.",
      Currencies: "EUR, DKK, NOK, PLN, SEK, CHF, GBP, CZK, USD",
      Activation_period: "0-7 days"
    },
    {
      Logo : Mastercard,
      Payment_method: "MasterCard",
      Location: "Global",
      Status: "Active",
      Description: "Mastercard is one of the largest payment card networks globally, issuing cards in most countries and being accepted by most Merchants globally.",
      Currencies: "All currencies",
      Activation_period: "Immediately"
    },
    {
      Logo : MbWay,
      Payment_method: "MB Way",
      Location: "Portugal",
      Status: "Active",
      Description: "MB Way is a popular mobile payment service in Portugal. It's an instant payment solution that allows users to make purchases, transfer money, and even withdraw cash at ATMs using their mobile phone.",
      Currencies: "EUR",
      Activation_period: "3-5 days"
    },
    {
      Logo : mobilepay,
      Payment_method: "mobilepay",
      Location: "Scandinavia",
      Status: "Inactive",
      Description: "MobilePay is a popular mobile payment solution that originated in Denmark. It allows users to make payments using their smartphones, making it a convenient option for consumers and businesses alike.",
      Currencies: "DKK, EUR",
      Activation_period: "3-7 days"
    },
    {
      Logo : pagopa,
      Payment_method: "pagoPA",
      Location: "Italy",
      Status: "Inactive",
      Description: "Italy’s digital platform for public administration payments, ensuring efficient and traceable transactions.",
      Currencies: "EUR",
      Activation_period: "7-14 days"
    },
    {
      Logo : payconiq,
      Payment_method: "Payconiq",
      Location: "BENELUX",
      Status: "Active",
      Description: "Payconiq is a mobile payment solution that allows users to make payments via their smartphones. It is primarily used in Belgium, the Netherlands, and Luxembourg. With Payconiq, users can link their bank account to the app and make payments in stores, online, or transfer money to friends.",
      Currencies: "EUR",
      Activation_period: "3-5 days"
    },
    {
      Logo : paypal,
      Payment_method: "PayPal",
      Location: "Global",
      Status: "Inactive",
      Description: "PayPal Holdings, Inc. is an American multinational financial technology company operating an online payments system in the majority of countries that supports online money transfers and serves as an electronic alternative to traditional paper methods such as checks and money orders.",
      Currencies: "AUD, BRL, CAD, CZK, DKK, EUR, HKD, HUF, JPY, MYR, MXN, NOK, NZD, PHP, PLN, GBP, RUB, SGD, SEK, CHF, TWD, THB, USD",
      Activation_period: "8 days"
    },
    {
      Logo : payu,
      Payment_method: "PayU",
      Location: "Global",
      Status: "Active",
      Description: "PayU is an online bank transfer payment method popular in Poland and the Czech Republic, where shoppers log in with their online banking credential to review and authorize online payments.",
      Currencies: "PLN, CZ",
      Activation_period: "3 days"
    },
    {
      Logo : p24,
      Payment_method: "Przelewy24 (P24)",
      Location: "Poland",
      Status: "Active",
      Description: "Przelewy24 is a Poland-based real-time online bank transfer payment method, often referred to as P24. Przelewy24 operates in partnership with all Polish banks.",
      Currencies: "EUR, PLN",
      Activation_period: "8 days"
    },
    {
      Logo : samsungpay,
      Payment_method: "SamsungPay",
      Location: "Global",
      Status: "Inactive",
      Description: "Samsung Pay is a mobile wallet provided by Samsung for Android OS. The app comes pre-installed on new Samsung devices. Shoppers can add cards on their Samsung Pay app, and then use the app to make payments.",
      Currencies: "All currencies",
      Activation_period: "7-14 days"
    },
    {
      Logo : Satispay,
      Payment_method: "Satispay",
      Location: "Europe",
      Status: "Active",
      Description: "Satispay is a mobile payment platform that allows users to make payments, send money, and manage financial transactions via their smartphones. The service is popular in Italy and other European countries and is designed to be a simpler and more cost-effective alternative to traditional banking systems or credit/debit cards.",
      Currencies: "EUR",
      Activation_period: "Immediately"
    },
    {
      Logo : SepaDD,
      Payment_method: "SEPA Direct Debit",
      Location: "Europe",
      Status: "Active",
      Description: "The Single Euro Payments Area (SEPA) Direct Debit is a standardized payment method for bank-to-bank transactions within the European Union. Direct Debit is a simple, cost-effective way to take recurring payments where same-day payment isn't required. Shoppers can choose TrueLayer to connect and verify their bank account or choose to enter the account details manually to complete the payment.",
      Currencies: "EUR",
      Activation_period: "2-4 days"
    },
    {
      Logo : Swish,
      Payment_method: "Swish",
      Location: "Sweden",
      Status: "Inactive",
      Description: "Swish is a popular mobile payment system in Sweden that allows users to send and receive money using their smartphones. It is linked to a user's bank account, enabling instant transactions between individuals and businesses. Swish is widely used for personal payments, shopping, and even donations, making it a versatile payment option in Sweden.",
      Currencies: "SEK",
      Activation_period: "4 days"
    },
    {
      Logo : Trustly,
      Payment_method: "Trustly",
      Location: "Lithuania",
      Status: "Active",
      Description: "Trustly is a bank transfer payment service provider. With Trustly, consumers can initiate payments directly from their bank accounts, using a highly secure payment option, with no risk of stolen details or fraud.",
      Currencies: "DKK, EUR, GBP, NOK, PLN, SEK",
      Activation_period: "8 days"
    },
    {
      Logo : UnionPay,
      Payment_method: "Union Pay",
      Location: "Global",
      Status: "Active",
      Description: "A global payment network originating in China, supporting card and mobile payments in multiple currencies.",
      Currencies: "All currencies",
      Activation_period: "3-7 days"
    },
    {
      Logo : Vipps,
      Payment_method: "Vipps",
      Location: "Norway",
      Status: "Active",
      Description: "Norway’s mobile payment app, offering seamless peer-to-peer and merchant transactions.",
      Currencies: "NOK",
      Activation_period: "3-5 days"
    },
    {
      Logo : visa,
      Payment_method: "Visa",
      Location: "Global",
      Status: "Active",
      Description: "Visa is one of the largest payment card networks globally, issuing cards in most countries and being accepted by most Merchants globally.",
      Currencies: "All currencies",
      Activation_period: "Immediately"
    },
    {
      Logo : wechatpay,
      Payment_method: "WeChat Pay",
      Location: "China",
      Status: "Active",
      Description: "A Chinese mobile wallet integrated with the WeChat app, enabling quick payments in multiple currencies for domestic and international users.",
      Currencies: "All Asian currencies",
      Activation_period: "3-7 days"
    }
  ];



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Payment__Header />


      {/*Payment Methods Table */}
      <VuiBox py={2}>
        <VuiBox mb={3}>
          <Card>

            {/* Search */}
            <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
              <VuiBox sx={{ width: "100%" }}>
                {" "}
                {/* Adjust the width here */}
                <VuiInput
                  placeholder="Search payment method name"
                  icon={{
                    component: "search",
                    direction: "left",
                  }}
                  size="large"
                  sx={{
                    width: "100%", // Ensures the input takes the full width of the parent box
                  }}
                />
              </VuiBox>
            </VuiBox>
            {/* Search */}

            {/* Dropdowns */}
            <VuiBox>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  marginTop: "16px",
                  marginBottom: "16px",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                {/* Date Range Dropdown */}
                <div style={{ position: "relative", display: "flex" }}>
                <LabelIcon
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#cbd5e0",
              fontSize: "14px",
            }}
          />
                  <select
                    style={{
                      background: "#1A1F37",
                      color: "#fff",
                      border: "1px solid #4a5568",
                      borderRadius: "5px",
                      padding: "10px 12px 10px 36px",

                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    <option style={{ display: "none" }} value="" disabled selected>
                      Location
                    </option>
                    {/* <option value="30">Last 30 days</option>
                    <option value="7">Last 7 days</option>
                    <option value="1">Today</option> */}
                    {DataOfpaymentMethods.map((Data,index)=>( 
                      <option value={Data.Location}> {Data.Location} </option>
                    ))}
                  </select>
                </div>

                {/* Payment Method Dropdown */}
                <div style={{ position: "relative", display: "flex" }}>
                <LabelIcon
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#cbd5e0",
              fontSize: "14px",
            }}
          />
                  <select
                    style={{
                      background: "#1A1F37",
                      color: "#fff",
                      border: "1px solid #4a5568",
                      borderRadius: "5px",
                      padding: "10px 12px 10px 36px",

                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    <option style={{ display: "none" }} value="" disabled selected>
                      Status
                    </option>
                    <option value="active">Active Methods</option>
                    <option value="Inactive">In Active Methods</option>
                    
                  </select>
                </div>
              </div>
            </VuiBox>
            {/* Dropdowns */}


            {/* Rows And columns */}
            <VuiBox
              sx={{
                "& th": {
                  padding: "10px 15px", // Padding for table header cells
                  margin: "5px 0", // Margin applied to add spacing around headers
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    padding: "10px 15px", // Padding for table body cells
                    margin: "5px 0", // Margin applied to body cells if needed

                  },
                },
                "& td": {
                  padding: "10px 15px", // Padding for table body cells
                  margin: "5px 0", // Margin applied to body cells if needed
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },

              }}


              style={{ overflowX: "auto" }}

            >
              

              {/* <VuiBox> */}
              <table style={{ width: "100%", borderSpacing: "0px" }}>

                <thead >
                  <tr >
                    <th style={{ width: "25%", textAlign: "left" }}>
                      <VuiTypography variant="caption" color="white" fontWeight="medium">
                        Payment Methods
                      </VuiTypography>
                    </th>

                    <th style={{ width: "25%" }}>
                      <VuiTypography variant="caption" color="white" fontWeight="medium">
                        Location
                      </VuiTypography>
                    </th>

                    <th style={{ width: "25%" }}>
                      <VuiTypography variant="caption" color="white" fontWeight="medium">
                        Status
                      </VuiTypography>
                    </th>

                    <th style={{ width: "25%" }}>
                      <VuiTypography variant="caption" color="white" fontWeight="medium">
                        Summary
                      </VuiTypography>
                    </th>
                  </tr>
                </thead>
                {DataOfpaymentMethods.map((Data, index) => (
                  <tbody key={index}>
                    <tr>
                      <td style={{ width: "25%", textAlign: "left" }}>
                        <VuiBox style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                          <VuiAvatar src={Data.Logo} alt={Data.Payment_method} size="lg" style={{padding:"10px"}} variant="none"/>

                          <VuiTypography variant="caption" color="white" fontWeight="medium">
                            {Data.Payment_method}
                          </VuiTypography>


                        </VuiBox>

                      </td>

                      <td style={{ width: "25%", textAlign: "center" }}>
                        <VuiTypography variant="caption" color="white" fontWeight="medium">
                          {Data.Location}
                        </VuiTypography>
                      </td>
                      {/* status */}
                      <td style={{ width: "25%", textAlign: "center" }}>
                        <VuiBadge
                          variant="standard"
                          badgeContent={Data.Status}
                          color={Data.Status === "Active" ? "success" : "error"}
                          size="xs"
                          container
                          sx={({ palette: { white, success, error }, borders: { borderRadius, borderWidth } }) => ({
                            background: Data.Status === "Active" ? success.main : error.main,
                            border: `${borderWidth[1]} solid ${Data.Status === "Active" ? success.main : error.main
                              }`,
                            borderRadius: borderRadius.md,
                            color: white.main,
                          })}
                        />
                      </td>

                      <td style={{ width: "25%", textAlign: "center" }}>
                        <IconButton onClick={() => handleToggle(index)} size="medium" color="white">
                          {isExpanded[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                      </td>

                    </tr>

                    {isExpanded[index] && (


                      <tr className="expand-row">

                        <td colSpan="4">

                          <VuiBox
                            sx={{
                              "& th": {
                                borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                                  `${borderWidth[0]} solid ${grey[700]}`,
                              },
                              "& td": {
                                borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                                  `${borderWidth[0]} solid ${grey[700]}`,
                              },

                            }}
                          >
                            <table className="inner-table" style={{ width: "100%", borderSpacing: "0px" }}>
                              <thead>



                                <tr>

                                  <th style={{ width: "50%", textAlign: "left" }}>
                                    <VuiTypography fontWeight="bold" variant="h3" color="white">
                                      Summary
                                    </VuiTypography>
                                  </th>

                                  <th style={{ width: "50%", textAlign: "right" }}>
                                    <VuiButton
                                      size="md"
                                      variant="gradient"
                                      color="primary"

                                     
                                    >
                                      Disable
                                    </VuiButton>
                                  </th>

                                </tr>
                              </thead>



                              <tbody key={index}>



                                <tr>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography fontWeight="light" variant="h6" color="white">
                                      Description
                                    </VuiTypography>
                                  </td>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography style={{ fontWeight: "200", fontSize: "15px" }} color="white">
                                      {Data.Description}
                                    </VuiTypography></td>
                                </tr>

                                <tr>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiBox display="flex" alignItems="center">
                                      <VuiTypography variant="h6" color="white" fontWeight="light" >
                                        Activation time
                                      </VuiTypography>
                                      <IoInformationCircle color="white" size={'20px'} />
                                    </VuiBox>

                                  </td>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography style={{ fontWeight: "200", fontSize: "15px" }} color="white">
                                      {Data.Activation_period}
                                    </VuiTypography></td>
                                </tr>

                                <tr>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography fontWeight="light" variant="h6" color="white">
                                      Payment product
                                    </VuiTypography>
                                  </td>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography style={{ fontWeight: "200", fontSize: "15px" }} color="white">
                                      Online Payments, Payment Links, Xero Invoice Payment
                                    </VuiTypography>
                                  </td>
                                </tr>

                                <tr>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography fontWeight="light" variant="h6" color="white">
                                      Refund Support
                                    </VuiTypography>
                                  </td>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography style={{ fontWeight: "200", fontSize: "15px" }} color="white" >
                                      Yes
                                    </VuiTypography>
                                  </td>
                                </tr>

                                {/* <tr>
                                   <td style={{  textAlign: "left" }}>
                                     <VuiTypography fontWeight="light" variant="h6" color="white">
                                        Dispute support
                                     </VuiTypography>
                                   </td>
                                   <td style={{ textAlign: "left" }}>
                                     <VuiTypography fontWeight="false" variant="subtitle2" color="white">
                                      Yes
                                     </VuiTypography></td>
                                 </tr> */}

                                <tr>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography fontWeight="light" variant="h6" color="white">
                                      Recurring payments
                                    </VuiTypography>
                                  </td>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography style={{ fontWeight: "200", fontSize: "15px" }} color="white" >
                                      Yes
                                    </VuiTypography>
                                  </td>
                                </tr>

                                <tr>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography fontWeight="light" variant="h6" color="white">
                                      Transaction currencies
                                    </VuiTypography>
                                  </td>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography style={{ fontWeight: "200", fontSize: "15px" }} color="white">
                                      All currencies
                                    </VuiTypography>
                                  </td>
                                </tr>

                                <tr>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography fontWeight="light" variant="h6" color="white">
                                      Settlement currencies
                                    </VuiTypography>
                                  </td>
                                  <td style={{ textAlign: "left" }}>
                                    <VuiTypography style={{ fontWeight: "200", fontSize: "15px" }} color="white" >
                                      {Data.Currencies}
                                    </VuiTypography>
                                  </td>
                                </tr>



                              </tbody>




                            </table>
                          </VuiBox>


                        </td>

                      </tr>
                    )}
                  </tbody>
                ))}
              </table>
              {/* </VuiBox> */}

            </VuiBox>
            {/* Rows And columns */}


            {/* Table Footer (Pagination and Row per col) */}
            <VuiBox
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: ({ borders: { borderWidth }, palette: { grey } }) =>
                  `${borderWidth[1]} solid ${grey[700]}`, // Add border-top with the same style
                paddingTop: "12px", // Optional: Add spacing to the top if needed
                flexWrap: "wrap",
                gap: "5px",
              }}
            >
              <VuiBox>
                <VuiPagination variant="gradient" color="primary">
                  <VuiPagination item>
                    <Icon>keyboard_arrow_left</Icon>
                  </VuiPagination>
                  <VuiPagination item active>
                    1
                  </VuiPagination>

                  <VuiPagination item>
                    <Icon>keyboard_arrow_right</Icon>
                  </VuiPagination>
                </VuiPagination>
              </VuiBox>

              <VuiBox
                display="flex"
                flexWrap="wrap"
                alignItems="center"
                gap="5px"
                justifyContent="center"
              >
                <VuiTypography variant="button" color="white">
                  Row Per Page
                </VuiTypography>

                {/* Payment Method Dropdown */}
                <div style={{ position: "relative", display: "flex" }}>
                  <select
                    style={{
                      background: "#1A1F37",
                      color: "#fff",
                      border: "1px solid #4a5568",
                      borderRadius: "5px",
                      padding: "7px 12px 7px 12px",

                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    <option value="/">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                </div>
              </VuiBox>
            </VuiBox>
            {/* Table Footer (Pagination and Row per col) */}

          </Card>
        </VuiBox>
      </VuiBox>
      {/*Payment Methods Table */}

      <Footer />
    </DashboardLayout>
  );
}

export default Payment_Methods;

// import React, { useState } from "react";
// import Card from "@mui/material/Card";

// // NovaPay Dashboard React components
// import VuiBox from "components/VuiBox";
// import VuiTypography from "components/VuiTypography";

// // NovaPay Dashboard React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

// // Header
// import Payment__Header from "../PaymentHeader/index";

// // Table Data
// import authorsTableData from "layouts/payments/components/PaymentMethods/data/authorsTableData";

// function Payment_Methods() {
//   const { columns, rows: initialRows } = authorsTableData;

//   // Add useState for managing expanded rows
//   const [rows, setRows] = useState(
//     initialRows.map((row) => ({ ...row, isExpanded: false }))
//   );

//   // Toggle expand/collapse state for a specific row
//   const handleToggleExpand = (index) => {
//     setRows((prevRows) =>
//       prevRows.map((row, i) =>
//         i === index ? { ...row, isExpanded: !row.isExpanded } : row
//       )
//     );
//   };

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <Payment__Header />
//       <VuiBox mt={4}>
//         <VuiTypography variant="h5" fontWeight="bold" color="white">
//           Payment Methods
//         </VuiTypography>
//       </VuiBox>
//       <VuiBox py={2}>
//         <VuiBox mb={3}>
//           <Card>
//             <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
//               <VuiTypography variant="lg" color="white">
//                 Subscriptions
//               </VuiTypography>
//             </VuiBox>
//             <VuiBox>
//               {rows.map((row, index) => (
//                 <div key={index} style={{ marginBottom: "10px" }}>
//                   {/* Main Row */}
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                       backgroundColor: "#1E1E2F",
//                       padding: "10px",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <div style={{ flex: 1 }}>{row.Subscriber}</div>
//                     <div style={{ flex: 1, textAlign: "center" }}>{row.status}</div>
//                     <div style={{ flex: 1, textAlign: "center" }}>{row.Since}</div>
//                     <div style={{ flex: 1, textAlign: "center" }}>
//                       <button
//                         onClick={() => handleToggleExpand(index)}
//                         style={{
//                           backgroundColor: "transparent",
//                           color: "white",
//                           border: "none",
//                           cursor: "pointer",
//                         }}
//                       >
//                         {row.isExpanded ? "Collapse" : "Expand"}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Collapsible Content */}
//                   {row.isExpanded && (
//                     <div
//                       // style={{
//                       //   marginTop: "5px",
//                       //   backgroundColor: "#333",
//                       //   padding: "15px",
//                       //   borderRadius: "5px",
//                       // }}
//                     >
//                       <VuiTypography variant="caption" color="white">
//                         Add your custom content here (e.g., forms, details, etc.)
//                       </VuiTypography>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </VuiBox>
//           </Card>
//         </VuiBox>
//       </VuiBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Payment_Methods;
