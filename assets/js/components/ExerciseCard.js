import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import Modal from "../Modal";

const ExerciseCard = ({ exercise }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <Link className="exercise-card" to={`/exercise/${exercise.id}`}> */}
      <Button onClick={() => setIsOpen(true)} className="exercise-card">
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row">
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#FFA9A9",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#FCC757",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#FCC757",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
            onClick={() => setIsOpen(true)}
          >
            Detail de l'exercice
          </Button>
        </Stack>
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          sx={{ fontSize: { lg: "24px", xs: "20px" } }}
          mt="11px"
          pb="10px"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
      </Button>

      {isOpen && <Modal id={exercise.name} setIsOpen={setIsOpen} />}
    </>
  );
};

export default ExerciseCard;
