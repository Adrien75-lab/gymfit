import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Pagination, Stack, Typography } from "@mui/material/";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "../components/exercises/ExerciseCard";
import { CSSTransition } from "react-transition-group";

function strUcFirst(a) { return (a + '').charAt(0).toUpperCase() + a.substr(1); }

const ExerciseDetail = ({ }) => {
  const { partie } = useParams();
  const [exercises, setExercises] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = Array.isArray(exercises) ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) : [];
  const [isMounted, setIsMounted] = useState(false);
  const [opacity, setOpacity] = useState(0);
  
  console.log(partie);
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      // console.log(exercisesData);
      if (partie) {

        exercisesData = await fetchData(
          `http://localhost:8000/api/exercises?partie=${partie}`,

        );
        exercisesData["hydra:member"] = exercisesData["hydra:member"].map(exercises => exercises);
        console.log(exercisesData["hydra:member"]);

      }
      setExercises(exercisesData["hydra:member"]);
    };


    fetchExercisesData();
  }, [partie]);

  // if (partie) {
  //   let exercisesData = [];

  //   exercisesData = fetchData(
  //     `http://localhost:8000/api/exercises?partie=${partie}`,

  //   )
  //   console.log(exercisesData);
  // }
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    

      <Box id="exercises" sx={{ mt: { lg: "1px" } }}>
        <Typography variant="h4" sx={{ mb: "15px" }}>
          Liste des exercices pour le muscle : {strUcFirst(partie)}
          <Stack mt="50px" direction="row"
            sx={{ gap: { lg: "110px", xs: "50px" } }}
            flexWrap="wrap"
            justifyContent="center">
            {currentExercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
          </Stack>
          <Stack mt="100px" alignItems="center">
            <Pagination
              color="primary"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          </Stack>

        </Typography>

      </Box>
    
  );
};

export default ExerciseDetail;
