

// @mui material components
import Card from "@mui/material/Card";

// NovaPay Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// React icons
import { BsCheckCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { SiDropbox } from "react-icons/si";

// NovaPay Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import AdobeXD from "examples/Icons/AdobeXD";

// NovaPay Dashboard theme imports
import palette from "assets/theme/base/colors";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <VuiBox mb="16px">
        <VuiTypography variant="lg" fontWeight="bold" mb="5px" color="white">
          Notifications
        </VuiTypography>
        <VuiBox mb={2}>
          <VuiBox display="flex" alignItems="center">
            <BsCheckCircleFill color="green" size="15px" mr="5px" />
            <VuiTypography variant="button" color="text" fontWeight="medium" ml="5px" mr="2px">
              30
            </VuiTypography>{" "}
            <VuiTypography variant="button" color="text" fontWeight="regular">
              {" "}
              unread
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox>
        <TimelineItem
          icon={<FaBell size="16px" color={palette.info.main} />}
          title="Order #55229, Claim Klarna Payment"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          icon={<FaBell size="16px" color={palette.info.main} />}
          title="New order #55233"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          icon={<FaBell size="16px" color={palette.info.main} />}
          title="New order #55232"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          icon={<FaBell size="16px" color={palette.info.main} />}
          title="New order #55231"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          icon={<FaBell size="16px" color={palette.info.main} />}
          title="New order #55228"
          dateTime="18 DEC 4:54 AM"
        />
        <TimelineItem           icon={<FaBell size="16px" color={palette.info.main} />}
 title="New order #55227" dateTime="17 DEC" />
      </VuiBox>
    </Card>
  );
}

export default OrdersOverview;
