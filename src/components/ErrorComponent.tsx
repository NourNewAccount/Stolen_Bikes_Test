import React from "react";
import { Box, Typography } from "@mui/material";

interface ErrorComponentProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="calc(100vh - 350px)"
    >
      <Typography variant="h5" color="error">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorComponent;
