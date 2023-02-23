import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import Modal from "../../Modal";

const ExerciseCard = ({ exercise }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [opacity, setOpacity] = useState(0);

  return (
    <>
      <div className={`exercise-card ${isMounted ? "fade-in" : ""}`}>
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          sx={{ fontSize: { lg: "15px", xs: "20px" } }}
          mt="11px"
          pb="10px"
        >
          {exercise.description}
        </Typography>

        <Stack direction="row">
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#f57c00",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.partie}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#f57c00",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.equipement}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#f57c00",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
            onClick={() => setIsOpen(true)}
          >
            Ajouter à la séance
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
          {exercise.nom}
        </Typography>
      </div>

      {isOpen && <Modal id={exercise.nom} setIsOpen={setIsOpen} />}
    </>
  );
};

export default ExerciseCard;
