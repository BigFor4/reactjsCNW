import React,{useState , useEffect} from "react";
import './quiz.css'
import { Questionner } from "./Question/";
import Point from "./Question/point";
import Loadding from "./Question/loadding";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const API_URL1 = 'http://demo4380783.mockable.io/quiz';
function Quiz() {
    const [questions , setQuestions] = useState([]);
    const [currentIndex , setCurrentIndex] = useState(0);
    const [score , setScore] = useState(0);
    const [showAnswers , setShowAnswers] = useState(false);
    const [checkAnswers , setCheckAnswers] = useState(true);
    const [selected, setSelected] = useState();
    const {id} = useParams()
    const index = Number(id-1)
    useEffect(()=>{
        fetch(API_URL1).then((res)=> res.json())
        .then((data)=>{
            const questions  = data.posts[index].results.map((question)=>
            ({
                ...question,
                answer: [
                    question.correct_answer,
                    ...question.incorrect_answers,
                ].sort(()=>Math.random()-0.5)
            }))
            setQuestions(questions)
        });
    },[index]);
    const handleAnswer = (answer) =>{
        
        if(checkAnswers === true){
            if(answer === questions[currentIndex].correct_answer){
                setScore(score+1);
                setCheckAnswers(false);
            }
        }
        setSelected(answer)
        setShowAnswers(true);
        
    }
    const onHomeClick = () =>{
        window.location.replace('/learning')
    }
    const handlNextQuestion = () =>{
        const newIdex=currentIndex+1; 
        setCurrentIndex(newIdex);
        setShowAnswers(false);
        setCheckAnswers(true);
    }
    return( questions.length > 0 ?
    <div className="body">
        <div className="container ">
        {
            currentIndex >= questions.length ? 
            <Point score={score} onHomeClick={onHomeClick}></Point>
            :<Questionner data={questions[currentIndex]}
            handleAnswer={handleAnswer}
            answer= {questions[currentIndex].correct_answer}
            currentIndex= {currentIndex}
            showAnswer ={showAnswers}
            handlNextQuestion= {handlNextQuestion}
            onHomeClick={onHomeClick}
            selected= {selected}
            >
            </Questionner>
        }
        </div>
    </div>
    :<Loadding></Loadding>
    )
}
export default Quiz;
