
import React, { Component } from "react";

// class Quiz extends Component {
//   state = {
//     levelNames: ["debutant", "confirme", "expert"],
//     quizLevel: 0,
//     maxQuestions: 10,
//     storedQuestions: [],
//     question: null,
//     options: [],
//     idQuestion: 0,
//     btnDisabled: true,
//     userAnswer: null,
//     score: 0,
//   };

//   storedDataRef = React.createRef();

//   loadQuestions = (level) => {
//     //console.log(level);
//     const fetchedArrayQuiz = QuizMarvel[0].quizz[level];
//     console.log(fetchedArrayQuiz);
//     if (fetchedArrayQuiz.length >= this.state.maxQuestions) {
//       this.storedDataRef.current = fetchedArrayQuiz;
//       const newArray = fetchedArrayQuiz.map(
//         ({ answer, ...keepRest }) => keepRest
//       );
//       this.setState({
//         storedQuestions: newArray,
//       });
//     } else {
//       console.log("pas assez de questions");
//     }
//   };

//   componentDidMount() {
//     this.loadQuestions(this.state.levelNames[this.state.quizLevel]);
//   }

//   nextQuestion = () => {
//     if (this.state.idQuestion === this.state.maxQuestions - 1) {
//       // end
//     } else {
//       this.setState((prevState) => ({
//         idQuestion: prevState.idQuestion + 1,
//       }));
//     }
//     // + 1
//     const goodAnswer = this.storedDataRef.current[this.state.idQuestion].answer;
//     if (this.state.userAnswer === goodAnswer) {
//       this.setState((prevState) => ({
//         score: prevState.score + 1,
//       }));
//     }
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.storedQuestions !== prevState.storedQuestions) {
//       // console.log(this.state.storedQuestions[0].question)
//       this.setState({
//         question: this.state.storedQuestions[this.state.idQuestion].question,
//         options: this.state.storedQuestions[this.state.idQuestion].options,
//       });
//     }
//     if (this.state.idQuestion !== prevState.idQuestion) {
//       this.setState({
//         question: this.state.storedQuestions[this.state.idQuestion].question,
//         options: this.state.storedQuestions[this.state.idQuestion].options,
//         userAnswer: null,
//         btnDisabled: true,
//       });
//     }
//   }
//   submitAnswer = (selectedAnswer) => {
//     this.setState({
//       userAnswer: selectedAnswer,
//       btnDisabled: false,
//     });
//   };
//   render() {
//     const { pseudo } = this.props.userData;
//     const displayOptions = this.state.options.map((option, index) => {
//       return (
//         <p
//           key={index}
//           className={`answerOptions ${
//             this.state.userAnswer === option ? "selected" : null
//           }`}
//           onClick={() => this.submitAnswer(option)}
//         >
//           {option}
//         </p>
//       );
//     });

//     return (
//       <div>
//         <Levels />
//         <ProgressBar />
//         <h2>{this.state.question}</h2>
//         {displayOptions}
//         <button
//           disabled={this.state.btnDisabled}
//           className="btnSubmit"
//           onClick={this.nextQuestion}
//         >
//           Suivant
//         </button>
//       </div>
//     );
//   }
// }

class Quiz extends Component {
  render() {
    const userData = this.props.userData;
    return(
      <div>
        <h2>Pseudo: {userData}</h2>
      </div>
    )
  }
  
}

export default Quiz;