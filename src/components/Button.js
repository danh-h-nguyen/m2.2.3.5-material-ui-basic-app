import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonLearnMore() {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "orange",
        "&:hover": { backgroundColor: "darkorange" },
      }}
    >
      learn more
    </Button>
  );
}
