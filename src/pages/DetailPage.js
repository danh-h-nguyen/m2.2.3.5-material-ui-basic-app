import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import BasicChips from "../components/BasicChip";
import ButtonLearnMore from "../components/Button";
import { grey } from "@mui/material/colors";

const ItemLeft = styled(Paper)(({ theme }) => ({
  backgroundColor: grey[800],
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const ItemCenter = styled(Paper)(({ theme }) => ({
  backgroundColor: grey[800],
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function DetailPage({ jobs }) {
  return (
    <Box
      sx={{
        mt: 4, // margin top for spacing
      }}
    >
      <Grid
        container
        spacing={3} // Spacing between the grid items
        justifyContent="left" // Center the grid items
        sx={{
          width: "100%", // Full width of the container
          maxWidth: "100%", // Set maxWidth to 500px
          padding: "0 16px", // Optional padding for responsiveness
          margin: "0 auto", // Center the container horizontally}
          flexWrap: "wrap",
        }}
      >
        {jobs.map((job) => (
          <Grid
            key={job.id}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ maxWidth: "500px" }}
          >
            <ItemCenter>
              <div style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                {job.title}
              </div>
            </ItemCenter>

            <ItemLeft>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {job.skills.slice(0, 4).map((skill) => (
                  <BasicChips key={skill} label={skill}></BasicChips>
                ))}
              </div>

              <div style={{ color: "white", fontStyle: "italic" }}>
                {job.description}
              </div>
            </ItemLeft>

            <ItemCenter>
              <ButtonLearnMore></ButtonLearnMore>
            </ItemCenter>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
