import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material/";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, []);

  // console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    : [];
  // console.log(currentExercises);
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      // console.log(exercisesData);
      if (bodyPart === "tous") {
        console.log("test");
        exercisesData = await fetchData("http://localhost:8000/api/exercises");
      } else {
        console.log(bodyPart);
        if (bodyPart === "all") {
          exercisesData = await fetchData(
            "http://localhost:8000/api/exercises"
          );
        } else {
          exercisesData = await fetchData(
            `http://localhost:8000/api/exercises?partie=${bodyPart}`
          );
        }

        exercisesData["hydra:member"] = exercisesData["hydra:member"].map(
          (exercises) => exercises
        );
        console.log(exercisesData);
      }

      // console.log(exercisesData["hydra:member"]);

      // if (bodyPart === "all") {
      //   exercisesData = await fetchData(
      //     "https://exercisedb.p.rapidapi.com/exercises",
      //     exerciseOptions
      //   );
      // if (bodyPart === "Tous") {
      //   exercisesData = await fetchData(
      //     "http://localhost:8000/api/exercises",

      //   );
      // }
      // else {
      //   exercisesData = await fetchData(
      //     `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      //     exerciseOptions
      //   );
      //   console.log(exercisesData);
      // }

      setExercises(exercisesData["hydra:member"]);
    };

    fetchExercisesData();
  }, [bodyPart]);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  return (
    <div
      style={{ opacity: opacity, transition: "opacity 0.3s ease-in-out" }}
      className={`search-exercises ${isMounted ? "fade-in" : ""}`}
    >

    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Afficher les résultats
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
    </div>
  );
};

export default Exercises;
