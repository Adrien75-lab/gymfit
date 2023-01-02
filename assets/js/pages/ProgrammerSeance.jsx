import React from "react";
import { Link } from "react-router-dom";
import HorizontalScrollbar from "../components/HorizontalScrollbar";

const ProgrammerSeance = () => {
  const exercises = [
    {
      name: "Développé couché",
      sets: 3,
      reps: 8,
    },
    {
      name: "Tractions",
      sets: 3,
      reps: 8,
    },
    {
      name: "Soulevé de terre",
      sets: 3,
      reps: 8,
    },
    {
      name: "Squat",
      sets: 3,
      reps: 8,
    },
  ];
  function generateRandomWorkout(exerciseList) {
    const workout = [];
    for (let i = 0; i < exerciseList.length; i++) {
      const randomIndex = Math.floor(Math.random() * exerciseList.length);
      workout.push(exerciseList[randomIndex]);
    }
    return workout;
  }
  const workout = generateRandomWorkout(exercises);

  return (
    <>
      <div className="container w-50">
        <Link
          to="/programmerSeance"
          class="btn btn-primary active"
          role="button"
          data-bs-toggle="button"
          aria-current="page"
        >
          Programmer une séance
        </Link>

        <Link
          to="/VoirSonPlanning"
          class="btn btn-primary "
          role="button"
          data-bs-toggle="button"
          aria-pressed="true"
        >
          Voir son planning
        </Link>
        <Link
          to="/VoirProgression"
          class="btn btn-primary"
          aria-disabled="true"
          role="button"
          data-bs-toggle="button"
        >
          Voir sa progression
        </Link>
      </div>
      <div>
        <h2 className="text-center my-3">Choose your workout</h2>
        {/* <HorizontalScrollbar /> */}
      </div>

      <div>
        <h1>What do you want to do ? </h1>
        {workout.map((exercise) => (
          <React.Fragment key={exercise.name}>
            <p>{exercise.name}</p>
            <p>
              {exercise.sets} séries de {exercise.reps} répétitions
            </p>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default ProgrammerSeance;
