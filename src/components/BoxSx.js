import * as React from "react";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import jobs from "../jobs.json";
import { useParams } from "react-router-dom";

export default function BoxSx() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);

  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#333",
            dark: grey[800],
          },
        },
      }}
    >
      <Box
        sx={{
          width: 200,
          height: 200,
          borderRadius: 1,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },

          mt: 1,
          color: "white",
          fontFamily: "Arial",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>{job ? job.title : "Job not found"}</div>
      </Box>
    </ThemeProvider>
  );
}
