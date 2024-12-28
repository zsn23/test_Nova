import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import colors from "assets/theme/base/colors";
import Payment_Header from "../PaymentHeader/index";


function Disputes() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Payment_Header/>

      <VuiBox  mt={4} >
        <VuiTypography variant="h5" fontWeight="bold" color="white">
        Disputues
        </VuiTypography>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Disputes;