import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

// import HeaderComponent from './HeaderComponent';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, []);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("http://localhost:8000/bodypart");

      const data = bodyPartsData.map((part) => part.partie);

      setBodyParts(["tous", ...data]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      console.log(search);
      // const exercisesData = await fetchData(
      //   "https://exercisedb.p.rapidapi.com/exercises",
      //   exerciseOptions
      // );
      const exercisesData = await fetchData(
        "http://localhost:8000/api/exercises"
      );

      const searchedExercises = exercisesData["hydra:member"].filter(
        (item) =>
          item.nom.toLowerCase().includes(search) ||
          item.partie.toLowerCase().includes(search)
        // item.equipment.toLowerCase().includes(search) ||
        // item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 700, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <div
      style={{ opacity: opacity, transition: "opacity 0.3s ease-in-out" }}
      className={`search-exercises ${isMounted ? "fade-in" : ""}`}
    >
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Box position="relative" mb="72px">
          <TextField
            height="76px"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "800px", xs: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Cherchez un exercice"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: "#FF2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "173px", xs: "80px" },
              height: "56px",
              position: "absolute",
              right: "0px",
              fontSize: { lg: "20px", xs: "14px" },
            }}
            onClick={handleSearch}
          >
            Rechercher
          </Button>
        </Box>
        <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
          <HorizontalScrollbar
            data={bodyParts}
            bodyParts
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        </Box>
      </Stack>
    </div>
  );
};

export default SearchExercises;
