import { Box } from "@mui/material";
import React, { useState } from "react";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const ExercicePage = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default ExercicePage;
