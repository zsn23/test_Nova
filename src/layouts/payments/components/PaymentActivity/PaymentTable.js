import React from "react";
import VuiBox  from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ALipay from "./Pay Logos/alipay.svg"
import Bancomat_Pay from "./Pay Logos/Bancomat pay.jpeg"
import banocontact from "./Pay Logos/bancontact.svg"
import ApplePay from "./Pay Logos/apple-pay.svg"
import Mastercard from "./Pay Logos/mastercard.svg"
import visa from "./Pay Logos/visa.svg"


import VuiAvatar from "components/VuiAvatar";

export default {
  columns: [
    { name: "OrderID", align: "left"},
    { name: "paymentCreatedTime", align: "center"},
    { name: "paymentStatus", align: "center"},
    { name: "paymentAmount", align: "center"},
    { name: "paymentMethod", align: "center"},
    { 
      name: "settings", 
      align: "center",
      render: () => (
        <VuiAvatar 
          src={visa} 
          alt={Settings_Icon} 
         
        />
      )
    },
  ],
  rows: [
    {
      OrderID: (
        <VuiBox display="flex">
          <VuiTypography  color="white" variant="button" fontWeight="medium">
            #55231
          </VuiTypography>
        </VuiBox>
      ),
      paymentCreatedTime: (
        <VuiBox display="flex">
        <VuiTypography color="white" variant="white" fontWeight="medium">
          2024-12-18
        </VuiTypography>
        <VuiTypography color="white" variant="button" fontWeight="medium" ml={1}>
          21:16
        </VuiTypography>
      </VuiBox>
      
      ),
      paymentStatus: (
        <VuiTypography variant="button" color="success" fontWeight="bold">
         Succeeded
        </VuiTypography>
      ),
      paymentAmount: (
        <VuiTypography variant="button" color="white" fontWeight="bold">
           $70,168
        </VuiTypography>
      ),
      paymentMethod: (
        <VuiBox display="flex" alignItems="center" width="8rem" textAlign="left" gap="3px" pl="17px">
          <VuiAvatar src={ALipay} alt="ali_pay" size="md" style={{padding:"10px"}} variant="none" /> 
          <VuiTypography color="white" variant="button"  fontWeight="bold">
          AliPay
          </VuiTypography>
        </VuiBox>
      ),
      settings: (
        <VuiBox >
        <VuiTypography color="white" variant="button" fontWeight="bold">
          <MoreHorizIcon fontSize="medium" />  {/* This makes the icon large */}
        </VuiTypography>
      </VuiBox>
      ),
    },
    {
        OrderID: (
          <VuiBox display="flex">
            <VuiTypography  color="white" variant="button" fontWeight="medium">
              #55228
            </VuiTypography>
          </VuiBox>
        ),
        paymentCreatedTime: (
            <VuiBox display="flex">
            <VuiTypography color="white" variant="button" fontWeight="medium">
              2024-12-28
            </VuiTypography>
            <VuiTypography color="white" variant="button" fontWeight="medium" ml={1}>
              21:12
            </VuiTypography>
          </VuiBox>
          
        ),
        paymentStatus: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
           Created
          </VuiTypography>
        ),
        paymentAmount: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $70,168
          </VuiTypography>
        ),
        paymentMethod: (
          <VuiBox display="flex" alignItems="center" width="8rem" textAlign="left" gap="3px" pl="17px">
          <VuiAvatar src={visa} alt="Visa" size="md" style={{padding:"10px"}} variant="none" /> 
            <VuiTypography color="white" variant="button" fontWeight="bold">
            Visa
            </VuiTypography>
          </VuiBox>
        ),
        settings: (
            <VuiBox >
            <VuiTypography color="white" variant="button" fontWeight="bold">
              <MoreHorizIcon fontSize="medium" />  {/* This makes the icon large */}
            </VuiTypography>
          </VuiBox>
          ),
    },
    {
        OrderID: (
          <VuiBox display="flex">
            <VuiTypography  color="white" variant="button" fontWeight="medium">
              #55229
            </VuiTypography>
          </VuiBox>
        ),
        settings: (
            <VuiBox >
            <VuiTypography color="white" variant="button" fontWeight="bold">
              <MoreHorizIcon fontSize="medium" />  {/* This makes the icon large */}
            </VuiTypography>
          </VuiBox>
          ),
        paymentCreatedTime: (
            <VuiBox display="flex">
            <VuiTypography color="white" variant="button" fontWeight="medium">
              2024-12-19
            </VuiTypography>
            <VuiTypography color="white" variant="button" fontWeight="medium" ml={1}>
              20:42
            </VuiTypography>
          </VuiBox>
          
        ),
        
        paymentStatus: (
          <VuiTypography variant="button" color="success" fontWeight="bold">
           Succeeded
          </VuiTypography>
        ),
        paymentAmount: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $70,168
          </VuiTypography>
        ),
        paymentMethod: (
          <VuiBox display="flex" alignItems="center" width="8rem" textAlign="left" gap="3px" pl="17px">
          <VuiAvatar src={banocontact} alt="banocontact" size="md" style={{padding:"10px"}} variant="none" /> 
            <VuiTypography color="white" variant="button" fontWeight="bold">
            Bancontact
            </VuiTypography>
          </VuiBox>
        ),
        settings: (
            <VuiBox >
            <VuiTypography color="white" variant="button" fontWeight="bold">
              <MoreHorizIcon fontSize="medium" />  {/* This makes the icon large */}
            </VuiTypography>
          </VuiBox>
          ),
      },
      {
        OrderID: (
          <VuiBox display="flex">
            <VuiTypography  color="white" variant="button" fontWeight="medium">
              #55228
            </VuiTypography>
          </VuiBox>
        ),
        paymentCreatedTime: (
            <VuiBox display="flex">
            <VuiTypography color="white" variant="button" fontWeight="medium">
              2024-12-10
            </VuiTypography>
            <VuiTypography color="white" variant="button" fontWeight="medium" ml={1}>
              20:40
            </VuiTypography>
          </VuiBox>
          
        ),
        paymentStatus: (
          <VuiTypography variant="button" color="success" fontWeight="bold">
           Succeeded
          </VuiTypography>
        ),
        paymentAmount: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $70,168
          </VuiTypography>
        ),
        paymentMethod: (
          <VuiBox display="flex" alignItems="center" width="8rem" textAlign="left" gap="3px" pl="17px">
          <VuiAvatar src={Mastercard} alt="master card" size="md" style={{padding:"10px"}} variant="none" /> 
            <VuiTypography color="white" variant="button" fontWeight="bold">
              Master Card
            </VuiTypography>
          </VuiBox>
        ),
        settings: (
            <VuiBox >
            <VuiTypography color="white" variant="button" fontWeight="bold">
              <MoreHorizIcon fontSize="medium" />  {/* This makes the icon large */}
            </VuiTypography>
          </VuiBox>
          ),
      },
      {
        OrderID: (
          <VuiBox display="flex">
            <VuiTypography  color="white" variant="button" fontWeight="medium">
              #55227
            </VuiTypography>
          </VuiBox>
        ),
        paymentCreatedTime: (
            <VuiBox display="flex">
            <VuiTypography color="white" variant="button" fontWeight="medium">
              2024-12-31
            </VuiTypography>
            <VuiTypography color="white" variant="button" fontWeight="medium" ml={1}>
              19:47
            </VuiTypography>
          </VuiBox>
          
        ),
        paymentStatus: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
           Created
          </VuiTypography>
        ),
        paymentAmount: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $70,168
          </VuiTypography>
        ),
        paymentMethod: (
          <VuiBox display="flex" alignItems="center" width="8rem" textAlign="left" gap="3px" pl="17px">
          <VuiAvatar src={ApplePay} alt="ApplePay" size="md" style={{padding:"10px"}} variant="none" /> 
            <VuiTypography color="white" variant="button" fontWeight="bold">
            Apple Pay
            </VuiTypography>
          </VuiBox>
        ),
        settings: (
            <VuiBox >
            <VuiTypography color="white" variant="button" fontWeight="bold">
              <MoreHorizIcon fontSize="medium" />  {/* This makes the icon large */}
            </VuiTypography>
          </VuiBox>
          ),
      },
      {
        OrderID: (
          <VuiBox display="flex">
            <VuiTypography  color="white" variant="button" fontWeight="medium">
              #55226
            </VuiTypography>
          </VuiBox>
        ),
        paymentCreatedTime: (
            <VuiBox display="flex">
            <VuiTypography color="white" variant="button" fontWeight="medium">
              2025-01-01
            </VuiTypography>
            <VuiTypography color="white" variant="button" fontWeight="medium" ml={1}>
              19:05
            </VuiTypography>
          </VuiBox>
          
        ),
        paymentStatus: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
           Created
          </VuiTypography>
        ),
        paymentAmount: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
           $70,168
          </VuiTypography>
        ),
        paymentMethod: (
          <VuiBox display="flex" alignItems="center" width="8rem" textAlign="left" gap="3px" pl="17px">
          <VuiAvatar src={Bancomat_Pay} alt="bancomat_pay" size="md" style={{padding:"10px"}} variant="none" /> 
            <VuiTypography color="white" variant="button" fontWeight="bold">
            Bancomat Pay
            </VuiTypography>
          </VuiBox>
        ),
        settings: (
            <VuiBox >
            <VuiTypography color="white" variant="button" fontWeight="bold">
              <MoreHorizIcon fontSize="medium" />  {/* This makes the icon large */}
            </VuiTypography>
          </VuiBox>
          ),
      },
  ],


};
