import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const ProgrammerSeance = () => {
  const [workout, setWorkout] = useState([]);
  const options = ['Facile', 'Moyen', 'Difficile'];
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [level, setLevel] = useState(localStorage.getItem("niveau"));
  const [time, setTime] = useState(localStorage.getItem("time"));
  const [Nbexercises, setExercises] = useState(localStorage.getItem("NbExercises"));
  const [btnWorkoutPdm, setBtn] = useState(false);
  const [btnWorkoutPdp, setBtnPdp] = useState(false);
  useEffect(() => {
    if (level === 'Facile') {
      setTime('20min');
      setExercises(5);
      setBtn(true);
      setBtnPdp(true);

      // Récupération des valeurs depuis le LocalStorage

    } else if (level === 'Moyen') {
      setTime('30min');
      setExercises(8);
      setBtn(true);
      setBtnPdp(true);

    } else if (level === 'Difficile') {
      setTime('40min');
      setExercises(10);
      setBtn(true);

    }
  }, [level, btnWorkoutPdm]);





  const fetchData = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });
  }
  useEffect(() => {
    fetchData(`http://localhost:8000/api/workouts`)
      .then(data => {
        data["hydra:member"] = data["hydra:member"].map(
          workout => workout
        );
        setWorkout(data["hydra:member"]);
      })
      .catch(error => console.log(error));

  }, []);
  // Permet de selectionner un seul nom
  const workoutPertePoids = workout
    .filter(element => element.id === 1)
    .map(element => element.nom)[0];
  const workoutPriseMasse = workout
    .filter(element => element.id === 2)
    .map(element => element.nom)[0];

  console.log(workoutPriseMasse);
  localStorage.setItem("niveau", level);
  localStorage.setItem("NbExercises", Nbexercises);
  localStorage.setItem("time", time);

  // Récupération des valeurs depuis le LocalStorage

  var savedNbExercises = localStorage.getItem("NbExercises");
  var savedTime = localStorage.getItem("time");


  return (

    <div className="text-center my-3">

      <h2>Choisissez votre séance</h2>

      <div className="text-container"
        style={{ position: 'absolute', right: '50', top: '0', padding: '1rem' }}
      >
        <h5>Choisissez votre niveau :</h5>
        {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
        <div>{`inputValue: '${inputValue}'`}</div> */}
        <br />
        <Autocomplete
          options={options}
          onChange={(event, newValue) => {
            setLevel(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="Niveau" />}
        /></div>
      <div className="text-container"
        style={{ position: 'absolute', right: '50', top: '140px', padding: '1rem' }}
      ><h5>{`Niveau sélectionné : ${level}`} </h5></div>
      {/* <div className="text-container"
        style={{ position: 'absolute', right: '7%', top: '0', padding: '1rem' }}
      ><h5>Temps de la séance : 20min </h5></div> */}

      <div className="text-container"
        style={{ position: 'absolute', right: '6%', top: '50px', padding: '1rem' }}
      ><div><h5>{`Temps de la séance : ${savedTime}`}</h5></div></div>
      <div className="text-container"
        style={{ position: 'absolute', right: '8%', top: '100px', padding: '1rem' }}
      ><h5>{`Nombre d'exercices : ${savedNbExercises}`} </h5></div>

      <div className="img-container">

        <img src="https://cdn.optigura.com/img/blog/qu-est-ce-qu-une-prise-de-masse/main-w990h360@2x.13290.webp" alt="Example image 1" style={{ width: '50%', margin: '1rem 0' }} />
        <span className="img-title1">{workoutPriseMasse}</span>
        <button class="btn btn-primary btn-sm image-button"
          type="button"
          disabled={btnWorkoutPdm ? false : true}>Démarrer séance</button>
      </div>

      <div className="img-container" >

        <div style={{ position: 'absolute', right: '50', top: '150', padding: '1rem' }}>
          <h5>Choisissez votre niveau :</h5>
        </div>

        <img src="https://www.mediacritik.com/wp-content/uploads/2019/05/rameur-musculation.jpg" alt="Example image 2" style={{ width: '770px', height: '300px', margin: '1rem 0' }} />
        <span className="img-title">{workoutPertePoids}</span>
        <button class="btn btn-primary btn-sm image-button"
          type="button"
          disabled={btnWorkoutPdm ? false : true}>Démarrer séance</button>
      </div>

    </div>
  );
};

export default ProgrammerSeance;