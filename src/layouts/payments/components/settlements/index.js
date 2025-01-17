import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import Payment_Header from "../PaymentHeader/index";
import { FaCalendarAlt, FaCreditCard, FaDollarSign, FaRedo } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Button from '@mui/material/Button';
import { Card, CardContent, Typography, Grid, Tooltip, Stack } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import colors from "assets/theme/base/colors";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import VuiProgress from "components/VuiProgress";
import linearGradient from "assets/theme/functions/linearGradient";
import { IoInformationCircle, IoWallet } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";
import { IoBuild } from "react-icons/io5";

import { MdCurrencyExchange } from "react-icons/md";
import VuiButton from "components/VuiButton";
// NovaPay Dashboard React example components

// Vision UI Dashboard PRO React examples
// import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";

{/* <DefaultStatisticsCard
  title="sales"
  count="$230,220"
  percentage={{
    color: "success",
    value: "+55%",
    label: "since last month",
  }}
  dropdown={{
    action: func,
    menu: node,
    value: "6 May - 7 May",
  }}
/> */}
function Settlements() {


  const DataOfpaymentMethods = [
    {
      Payment_method: "AliPay",
      Location: "China",
      Status: "Inactive",
      Description: "Alipay is a hugely popular multi-purpose mobile payments app. It has more than 1.3 billion annual active users as of June 2020 and processed $17 trillion worth of transactions in mainland China over the course of a year.",
      Currencies: "HKD, USD, CNY",
      Activation_period: "3 days"
    },
    {
      
      Payment_method: "American Express",
      Location: "Global",
      Status: "Active",
      Description: "American Express (Amex) is a multinational financial services company known primarily for its credit card, charge card, and traveler's check services. It is one of the largest card issuers in the world, offering a range of financial products and services for individuals, small businesses, and corporations.",
      Currencies: "All currencies",
      Activation_period: "1 day"
    },
    {
      Payment_method: "Apple Pay",
      Location: "Global",
      Status: "Active",
      Description: "ApplePay is a digital wallet technology that can be used to store your Cards and use those credentials to make payments on the Web, Mobile & In-Store, making the checkout process simple, safe & secure.",
      Currencies: "All currencies",
      Activation_period: "Immediately"
    },
    {
      
      Payment_method: "Bancomat Pay",
      Location: "Italy",
      Status: "Inactive",
      Description: "An Italian payment method that enables secure and instant transactions through mobile devices, primarily in euros.",
      Currencies: "EUR",
      Activation_period: "Immediately"
    },
    {
      
      Payment_method: "Bancontact",
      Location: "Belgium",
      Status: "Active",
      Description: "Bancontact makes it possible to pay directly through the online payment systems of all major Belgian banks for customers with Bancontact payment cards.",
      Currencies: "EUR",
      Activation_period: "0-3 days"
    },
    {
      
      Payment_method: "Blik",
      Location: "Poland",
      Status: "Inactive",
      Description: "BLIK is a payment system in Poland that enables users to make payments using their mobile banking app without the need for a payment card.",
      Currencies: "PLN",
      Activation_period: "0-5 days"
    },
    {
      
      Payment_method: "Bluecode",
      Location: "Germany, Austria, Switzerland",
      Status: "Active",
      Description: "Bluecode is a mobile payment method that allows users to make payments through their smartphone by scanning a QR code at participating merchants.",
      Currencies: "EUR",
      Activation_period: "3-5 days"
    },
    {
      
      Payment_method: "Cartes Bancaires",
      Location: "France",
      Status: "Inactive",
      Description: "France’s leading payment network, allowing card-based transactions with wide acceptance across the country.",
      Currencies: "EUR",
      Activation_period: "3-5 days"
    },
    {
      
      Payment_method: "Diners Club",
      Location: "Global",
      Status: "Inactive",
      Description: "Diners Club International is a premium global brand with a rich heritage as the world’s first charge card and is issued in 55+ countries.",
      Currencies: "AED, AUD, BGN, BHD, CAD, CHF, CZK, DKK, EUR, GBP, HKD, HUF, ILS, INR, JPY, KWD, MAD, NOK, NZD, OMR, PLN, QAR, RON, SAR, SEK, SGD, THB, TRY, USD, ZAR",
      Activation_period: "Immediately"
    },
    {
      
      Payment_method: "Discover",
      Location: "Global",
      Status: "Inactive",
      Description: "Discover Network is a comprehensive, large-scale payments network used by over 305 million global cardholders and accepted at millions of businesses and cash access locations.",
      Currencies: "AED, AUD, BGN, BHD, CAD, CHF, CZK, DKK, EUR, GBP, HKD, HUF, ILS, INR, JPY, KWD, MAD, NOK, NZD, OMR, PLN, QAR, RON, SAR, SEK, SGD, THB, TRY, USD, ZAR",
      Activation_period: "Immediately"
    },
    { 
      Payment_method: "giropay",
      Location: "Germany",
      Status: "Active",
      Description: "giropay is a popular online payment method in Germany, allowing consumers to make payments directly from their bank accounts. It was developed to enable easy and secure transactions via online banking.",
      Currencies: "EUR",
      Activation_period: "0-3 days"
    },
    {
      
      Payment_method: "GooglePay",
      Location: "Global",
      Status: "Active",
      Description: "Google Pay is a digital wallet technology that enables shoppers to make seamless payments using any credit or debit card saved to their Google Account on compatible devices at a physical store, in-app, or on the web.",
      Currencies: "All currencies",
      Activation_period: "Immediately"
    },
    { 
      Payment_method: "iDeal",
      Location: "Netherlands",
      Status: "Active",
      Description: "iDEAL, launched in 2005, provides a payment guarantee to merchants while enabling consumers to pay online through their mobile banking app or online bank account. iDEAL is based on the SEPA credit transfer and seamlessly integrates with the online banking systems offered by banks.",
      Currencies: "EUR",
      Activation_period: "3 days"
    },
    {
      
      Payment_method: "Iris Payments",
      Location: "Greece",
      Status: "Inactive",
      Description: "A Greek instant payment system facilitating real-time bank transfers for e-commerce and other transactions.",
      Currencies: "EUR",
      Activation_period: "1-2 days"
    },
    {
      
      Payment_method: "JCB",
      Location: "Global",
      Status: "Active",
      Description: "JCB is a major global payment card network and a leading credit card issuer and acquirer in Japan. Its acceptance network includes 34 million merchants in the world.",
      Currencies: "All currencies",
      Activation_period: "Immediately"
    },
    {
      
      Payment_method: "Klarna",
      Location: "Global",
      Status: "Active",
      Description: "Klarna is a popular Buy Now Pay Later payment method available in more than 20 countries. Before approving the payment, Klarna performs risk checks on the shopper. If successful, Klarna takes on the credit risk for the payment and pays you upfront in full.",
      Currencies: "EUR, DKK, NOK, PLN, SEK, CHF, GBP, CZK, USD",
      Activation_period: "0-7 days"
    },
    {
      
      Payment_method: "MasterCard",
      Location: "Global",
      Status: "Active",
      Description: "Mastercard is one of the largest payment card networks globally, issuing cards in most countries and being accepted by most Merchants globally.",
      Currencies: "All currencies",
      Activation_period: "Immediately"
    },
    {
      
      Payment_method: "MB Way",
      Location: "Portugal",
      Status: "Active",
      Description: "MB Way is a popular mobile payment service in Portugal. It's an instant payment solution that allows users to make purchases, transfer money, and even withdraw cash at ATMs using their mobile phone.",
      Currencies: "EUR",
      Activation_period: "3-5 days"
    },
    {
      
      Payment_method: "mobilepay",
      Location: "Scandinavia",
      Status: "Inactive",
      Description: "MobilePay is a popular mobile payment solution that originated in Denmark. It allows users to make payments using their smartphones, making it a convenient option for consumers and businesses alike.",
      Currencies: "DKK, EUR",
      Activation_period: "3-7 days"
    },
    {
      
      Payment_method: "pagoPA",
      Location: "Italy",
      Status: "Inactive",
      Description: "Italy’s digital platform for public administration payments, ensuring efficient and traceable transactions.",
      Currencies: "EUR",
      Activation_period: "7-14 days"
    },
    {
      
      Payment_method: "Payconiq",
      Location: "BENELUX",
      Status: "Active",
      Description: "Payconiq is a mobile payment solution that allows users to make payments via their smartphones. It is primarily used in Belgium, the Netherlands, and Luxembourg. With Payconiq, users can link their bank account to the app and make payments in stores, online, or transfer money to friends.",
      Currencies: "EUR",
      Activation_period: "3-5 days"
    },
    {
      
      Payment_method: "PayPal",
      Location: "Global",
      Status: "Inactive",
      Description: "PayPal Holdings, Inc. is an American multinational financial technology company operating an online payments system in the majority of countries that supports online money transfers and serves as an electronic alternative to traditional paper methods such as checks and money orders.",
      Currencies: "AUD, BRL, CAD, CZK, DKK, EUR, HKD, HUF, JPY, MYR, MXN, NOK, NZD, PHP, PLN, GBP, RUB, SGD, SEK, CHF, TWD, THB, USD",
      Activation_period: "8 days"
    },
    {
      
      Payment_method: "PayU",
      Location: "Global",
      Status: "Active",
      Description: "PayU is an online bank transfer payment method popular in Poland and the Czech Republic, where shoppers log in with their online banking credential to review and authorize online payments.",
      Currencies: "PLN, CZ",
      Activation_period: "3 days"
    },
    {
      
      Payment_method: "Przelewy24 (P24)",
      Location: "Poland",
      Status: "Active",
      Description: "Przelewy24 is a Poland-based real-time online bank transfer payment method, often referred to as P24. Przelewy24 operates in partnership with all Polish banks.",
      Currencies: "EUR, PLN",
      Activation_period: "8 days"
    },
    {
      
      Payment_method: "SamsungPay",
      Location: "Global",
      Status: "Inactive",
      Description: "Samsung Pay is a mobile wallet provided by Samsung for Android OS. The app comes pre-installed on new Samsung devices. Shoppers can add cards on their Samsung Pay app, and then use the app to make payments.",
      Currencies: "All currencies",
      Activation_period: "7-14 days"
    },
    {
      
      Payment_method: "Satispay",
      Location: "Europe",
      Status: "Active",
      Description: "Satispay is a mobile payment platform that allows users to make payments, send money, and manage financial transactions via their smartphones. The service is popular in Italy and other European countries and is designed to be a simpler and more cost-effective alternative to traditional banking systems or credit/debit cards.",
      Currencies: "EUR",
      Activation_period: "Immediately"
    },
    {
      
      Payment_method: "SEPA Direct Debit",
      Location: "Europe",
      Status: "Active",
      Description: "The Single Euro Payments Area (SEPA) Direct Debit is a standardized payment method for bank-to-bank transactions within the European Union. Direct Debit is a simple, cost-effective way to take recurring payments where same-day payment isn't required. Shoppers can choose TrueLayer to connect and verify their bank account or choose to enter the account details manually to complete the payment.",
      Currencies: "EUR",
      Activation_period: "2-4 days"
    },
    {
      
      Payment_method: "Swish",
      Location: "Sweden",
      Status: "Inactive",
      Description: "Swish is a popular mobile payment system in Sweden that allows users to send and receive money using their smartphones. It is linked to a user's bank account, enabling instant transactions between individuals and businesses. Swish is widely used for personal payments, shopping, and even donations, making it a versatile payment option in Sweden.",
      Currencies: "SEK",
      Activation_period: "4 days"
    },
    {
      
      Payment_method: "Trustly",
      Location: "Lithuania",
      Status: "Active",
      Description: "Trustly is a bank transfer payment service provider. With Trustly, consumers can initiate payments directly from their bank accounts, using a highly secure payment option, with no risk of stolen details or fraud.",
      Currencies: "DKK, EUR, GBP, NOK, PLN, SEK",
      Activation_period: "8 days"
    },
    {
      
      Payment_method: "Union Pay",
      Location: "Global",
      Status: "Active",
      Description: "A global payment network originating in China, supporting card and mobile payments in multiple currencies.",
      Currencies: "All currencies",
      Activation_period: "3-7 days"
    },
    {
      
      Payment_method: "Vipps",
      Location: "Norway",
      Status: "Active",
      Description: "Norway’s mobile payment app, offering seamless peer-to-peer and merchant transactions.",
      Currencies: "NOK",
      Activation_period: "3-5 days"
    },
    {
      
      Payment_method: "Visa",
      Location: "Global",
      Status: "Active",
      Description: "Visa is one of the largest payment card networks globally, issuing cards in most countries and being accepted by most Merchants globally.",
      Currencies: "All currencies",
      Activation_period: "Immediately"
    },
    {
      
      Payment_method: "WeChat Pay",
      Location: "China",
      Status: "Active",
      Description: "A Chinese mobile wallet integrated with the WeChat app, enabling quick payments in multiple currencies for domestic and international users.",
      Currencies: "All Asian currencies",
      Activation_period: "3-7 days"
    }
  ];

  const { gradients } = colors;
  const { cardContent } = gradients;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Payment_Header />
      <VuiBox mt={4}>
        <VuiTypography variant="h5" fontWeight="bold" color="white">
          Overview
        </VuiTypography>

      </VuiBox>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          marginTop: "16px",
          marginBottom: "16px",
          gap: "12px",
          flexWrap: "wrap"
        }}
      >
        {/* Date Range Dropdown */}
        <div style={{ position: "relative", display: "flex" }}>
          <FaCalendarAlt
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
            <option value="30">Last 30 days</option>
            <option value="7">Last 7 days</option>
            <option value="1">Today</option>
          </select>
        </div>

        {/* Payment Method Dropdown */}
        <div style={{ position: "relative", display: "flex" }}>
          <FaCreditCard
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
            <option style={{display:"none"}} value="/" disabled selected>Payment Method</option>
         
         {DataOfpaymentMethods.map((Data,index)=>( 
           <option value={Data.Payment_method}> {Data.Payment_method} </option>
         ))}
          </select>
        </div>
        {/* Settlement currency */}
        <div style={{ position: "relative", display: "flex" }}>
          <MdCurrencyExchange
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#cbd5e0",
              fontSize: "14px",
            }} />
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
           
            <option value="/">USD </option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="CHF">CHF</option>
          </select>

        </div>
        {/* Reset Button */}


        <VuiBox>
          <VuiButton


            style={{
              padding: "0px",
              margin: "3px",
              minHeight: "1.5rem"
            }}
            size="md"
            variant="gradient"
            color="primary"
          >
            Reset
          </VuiButton>
        </VuiBox>
      </div>




      <VuiBox mb={"10px"} display="flex" flexWrap="wrap" gap="5px">
        {/* Settled card */}
        <VuiBox >
          <Card>
            <VuiBox display="flex" alignItems="center">
              <VuiTypography variant="sm" color="white" fontWeight="bold" >
                Settled
              </VuiTypography>
              <IoInformationCircle color="white" />
            </VuiBox>
            <VuiBox display="flex" alignItems="center">
              <VuiTypography variant="sm" color="white" fontWeight="bold" >
                $ 56.69 USD
              </VuiTypography>
            </VuiBox>
          </Card>
        </VuiBox>

        {/* Pending Settlements card */}
        <VuiBox


        >
          <Card>
            <VuiBox display="flex" alignItems="center" >
              <VuiTypography variant="sm" color="white" fontWeight="bold" >
                Pending Settlements
              </VuiTypography>
              <IoInformationCircle color="white" />
            </VuiBox>

            <VuiBox display="flex" alignItems="center">
              <VuiTypography variant="sm" color="white" fontWeight="bold" >
                $ 5.67 USD
              </VuiTypography>
            </VuiBox>
          </Card>
        </VuiBox>

      </VuiBox>







      <Card >
        <Grid item xs={12} lg={6} xl={6} mt={2}>
          <VuiBox
            sx={{
              backgroundColor: "transparent", // Background (optional)
              width: "100%", // Full width
            }}
          >
            {/* Title and Description */}
            <VuiBox sx={{ mb: 2 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "#fff", mb: 1 }} // White text
              >
                Settlements
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#fff" }} // Softer white text
              >
                Overview of your settled amounts for the selected period. See your list
                of settlements in Wallet Transactions.
              </Typography>
            </VuiBox>

            {/* Horizontal Line */}
            <hr
              style={{
                border: "none",
                borderTop: "1px solid rgba(255, 255, 255, 0.2)", // Subtle white line
                marginBottom: "16px",
              }}
            />

            {/* Graph */}
            <VuiBox
              sx={{
                width: "60%",
                height: "220px", // Adjust graph height
                background: linearGradient(
                  cardContent.main,
                  cardContent.state,
                  cardContent.deg
                ),
                borderRadius: "20px", // Rounded corners
              }}
            >
              <BarChart
                barChartData={barChartDataDashboard}
                barChartOptions={barChartOptionsDashboard}
              />
            </VuiBox>
          </VuiBox>
        </Grid>
      </Card>



    </DashboardLayout>
  );
}

export default Settlements;
