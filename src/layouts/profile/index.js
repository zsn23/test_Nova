import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
// Images
import secureImage from "examples/Icons/secure.png";
import integration from "examples/Icons/integration.png";
import future from "examples/Icons/future.png";
import profile1 from "assets/images/profile-1.png";
import profile2 from "assets/images/profile-2.png";
import profile3 from "assets/images/profile-3.png";
// NovaPay Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import Footer from "examples/Footer";
// NovaPay Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import Welcome from "../profile/components/Welcome/index";
import CarInformations from "./components/CarInformations";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <VuiBox mt={5} mb={3}>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
        >
          <Grid
            item
            xs={12}
            xl={4}
            xxl={3}
            sx={({ breakpoints }) => ({
              minHeight: "400px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2",
              },
            })}
          >
            <Welcome />
          </Grid>
          <Grid
            item
            xs={12}
            xl={5}
            xxl={6}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "2 / 1 / 3 / 3",
              },
            })}
          >
            <CarInformations />
          </Grid>
          <Grid
            item
            xs={12}
            xl={3}
            xxl={3}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "1 / 2 / 2 / 3",
              },
            })}
          >
            <ProfileInfoCard
              title="profile information"
              description="Hi, I'm Demo User. This is the Dashboard from Getnovapay"
              info={{
                fullName: "Demo User",
                mobile: "(44) 123 1234 123",
                email: "demo@getnovapay.com",
                location: "United Kingdom",
              }}
              social={[
                {
                  
                },
                {

                },
                {

                },
              ]}
            />
          </Grid>
        </Grid>
      </VuiBox>
      <Grid container spacing={3} mb="30px">
        <Grid item xs={12} xl={3} height="100%">
          <PlatformSettings />
        </Grid>
        <Grid item xs={12} xl={9}>
          <Card>
          <VuiBox display="flex" flexDirection="column" height="100%">
  <VuiBox display="flex" flexDirection="column" mb="24px">
    <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
      News
    </VuiTypography>
    <VuiTypography color="text" variant="button" fontWeight="regular">
      Stay informed with the latest insights in payment solutions
    </VuiTypography>
  </VuiBox>
  <Grid container spacing={3}>
    <Grid item xs={12} md={6} xl={4}>
      <DefaultProjectCard
        image={integration}
        label="Blog #1"
        title="Integrating Payment APIs"
        description="Explore the essentials of integrating payment APIs seamlessly into your platform for enhanced transaction experiences."
        action={{
          type: "internal",
          route: "/pages/blog/payment-api-integration",
          color: "white",
          label: "READ MORE",
        }}
        authors={[
          { image: team1, name: "Elena Morison" },
          { image: team2, name: "Ryan Milly" },
        ]}
      />
    </Grid>
    <Grid item xs={12} md={6} xl={4}>
      <DefaultProjectCard
        image={secureImage}
        label="Blog #2"
        title="Security in Payment Processing"
        description="A deep dive into best practices for securing customer data and ensuring reliable payment processes in digital transactions."
        action={{
          type: "internal",
          route: "/pages/blog/payment-security",
          color: "white",
          label: "READ MORE",
        }}
        authors={[
          { image: team3, name: "Nick Daniel" },
          { image: team4, name: "Peterson" },
        ]}
      />
    </Grid>
    <Grid item xs={12} md={6} xl={4}>
      <DefaultProjectCard
        image={future}
        label="Blog #3"
        title="Future of Digital Payments"
        description="Discover upcoming trends in digital payments, from crypto integration to real-time payment solutions and beyond."
        action={{
          type: "internal",
          route: "/pages/blog/future-digital-payments",
          color: "white",
          label: "READ MORE",
        }}
        authors={[
          { image: team4, name: "Peterson" },
          { image: team2, name: "Ryan Milly" },
        ]}
      />
    </Grid>
  </Grid>
</VuiBox>

          </Card>
        </Grid>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;