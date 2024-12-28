

// /* eslint-disable react/prop-types */
// // NovaPay Dashboard React components
// import VuiBox from "components/VuiBox";
// import VuiTypography from "components/VuiTypography";
// import VuiAvatar from "components/VuiAvatar";
// import VuiBadge from "components/VuiBadge";
// import IconButton from '@mui/material/IconButton';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // Images
// import avatar1 from "assets/images/avatar1.png";
// import avatar2 from "assets/images/avatar2.png";
// import avatar3 from "assets/images/avatar3.png";
// import avatar4 from "assets/images/avatar4.png";
// import avatar5 from "assets/images/avatar5.png";
// import avatar6 from "assets/images/avatar6.png";

// function Subscriber({ image, name, email }) {
//   return (
//     <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
//       <VuiBox mr={2}>
//         <VuiAvatar src={image} alt={name} size="sm" variant="rounded" />
//       </VuiBox>
//       <VuiBox display="flex" flexDirection="column">
//         <VuiTypography variant="button" color="white" fontWeight="medium">
//           {name}
//         </VuiTypography>
//         <VuiTypography variant="caption" color="text">
//           {email}
//         </VuiTypography>
//       </VuiBox>
//     </VuiBox>
//   );
// }

// function Function({ job, org }) {
//   return (
//     <VuiBox display="flex" flexDirection="column">
//       <VuiTypography variant="caption" fontWeight="medium" color="white">
//         {job}
//       </VuiTypography>
//       <VuiTypography variant="caption" color="text">
//         {org}
//       </VuiTypography>
//     </VuiBox>
//   );
// }

// export default {
  
//   columns: [
//     { name: "Subscriber", align: "left", width: "30%" }, // 30% width
//     { name: "Since", align: "center", width: "25%" },    // 25% width
//     { name: "status", align: "center", width: "20%" },   // 20% width
//     { name: "action", align: "center", width: "25%" },   // 25% width
//   ],

//   rows: [
//     {
//       id: 1, // Unique identifier
//       Subscriber: <Subscriber image={avatar4} name="Esthera Jackson" email="esthera@demo.com" />,

//       status: (
//         <VuiBadge
//           variant="standard"
//           badgeContent="Active"
//           color="success"
//           size="xs"
//           container
//           sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
//             background: success.main,
//             border: `${borderWidth[1]} solid ${success.main}`,
//             borderRadius: borderRadius.md,
//             color: white.main,
//           })}
//         />
//       ),
//       Since: (
//         <VuiTypography variant="caption" color="white" fontWeight="medium">
//           23/04/18
//         </VuiTypography>
//       ),
//       action: (
//         <VuiTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
         
//           <IconButton
//               aria-label="expand row"
              
//               onClick={collapse_expand}
//               size="medium"
//               color="white"
//             >
//               {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//             </IconButton>
//         </VuiTypography>
//       ),
//     },
//   ],
// };


/* eslint-disable react/prop-types */
// NovaPay Dashboard React components
import React, { useState } from "react";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// Images
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";
import avatar5 from "assets/images/avatar5.png";
import avatar6 from "assets/images/avatar6.png";
import Card from "@mui/material/Card";
import { position } from "stylis";

function Subscriber({ image, name, }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox mr={2}>
        <VuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </VuiBox>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="button" color="white" fontWeight="medium">
          {name}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

function Function({ job, org }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
        {job}
      </VuiTypography>
      <VuiTypography variant="caption" color="text">
        {org}
      </VuiTypography>
    </VuiBox>
  );
}

export default {
  columns: [
    { name: "Subscriber", align: "left", width: "30%" }, // 30% width
    { name: "Location", align: "center", width: "25%" },    // 25% width
    { name: "status", align: "center", width: "20%" },   // 20% width
    { name: "Summary", align: "center", width: "25%" },   // 25% width
  ],

  rows: [
    {
      id: 1, // Unique identifier
      Subscriber: <Subscriber image={avatar4} name="Esthera Jackson" />,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="Active"
          color="success"
          size="xs"
          container
          sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
            background: success.main,
            border: `${borderWidth[1]} solid ${success.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      Location: (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          23/04/18
        </VuiTypography>
      ),
      Summary: (
        <ExpandCollapseRow />
      ),
    },
    {
    //  Summary Details
    },
  ],
};

// Expand/Collapse functionality for the entire row
function ExpandCollapseRow() {
  const [open, setOpen] = useState(false); // State to control expanded/collapsed

  // Function to toggle open/close state
  const handleExpandCollapse = () => {
    setOpen(!open);
  };

  return (
    <VuiBox>
      {/* Row with expand/collapse icon */}
      <VuiBox display="flex" alignItems="end">
        <IconButton onClick={handleExpandCollapse} size="medium" color="white">
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </VuiBox>

      {/* Entire row with expanded content */}
      <Collapse in={open} timeout="auto" unmountOnExit> 

      <Card>

      <VuiBox width="100%" mt={2} p={2} bgcolor="rgba(255,255,255,0.1)" borderRadius="md" 
       
      >
          <VuiBox display="flex" justifyContent="space-between">
            <VuiBox width="30%">
              <VuiTypography variant="button" color="white" fontWeight="medium">
                Esthera Jackson
              </VuiTypography>
              <VuiTypography variant="caption" color="text">
                esthera@demo.com
              </VuiTypography>
            </VuiBox>
            <VuiBox width="25%">
              <VuiTypography variant="caption" color="white" fontWeight="medium">
                23/04/18
              </VuiTypography>
            </VuiBox>
            <VuiBox width="20%">
              <VuiBadge
                variant="standard"
                badgeContent="Active"
                color="success"
                size="xs"
                container
                sx={({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
                  background: success.main,
                  border: `${borderWidth[1]} solid ${success.main}`,
                  borderRadius: borderRadius.md,
                  color: white.main,
                })}
              />
            </VuiBox>
            <VuiBox width="25%">
              <VuiTypography variant="caption" color="text" fontWeight="medium">
                Action
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        </VuiBox>
      </Card>
      

      </Collapse>
      

      
    </VuiBox>
  );
}
