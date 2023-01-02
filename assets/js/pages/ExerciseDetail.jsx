import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

const ExerciseDetail = () => {
  const { id } = useParams();
  
  return <Box>Test</Box>;
};

export default ExerciseDetail;
