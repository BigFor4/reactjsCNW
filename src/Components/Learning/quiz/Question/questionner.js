import React,{memo,useMemo} from "react";
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
const Questionner = ({
    showAnswer,
    selected,currentIndex,
    handleAnswer,onHomeClick,
    handlNextQuestion,
    data : {question ,correct_answer,incorrect_answers}}) =>{

    



    const shuffleAnswer = useMemo(()=>{
        
        return [correct_answer , ...incorrect_answers].sort(()=> Math.random() - 0.5)
    }
        ,[correct_answer, incorrect_answers]);

        return (
            <div className="card cardtest" >
                <div className="card-body">
                <Button className="btn-trangchu-ques" variant="contained" endIcon={<HomeIcon/>}
                    onClick={onHomeClick}
                    >Về Trang Chủ
                </Button> 
                    <div className="cauhoi"><h2>Câu Hỏi: {currentIndex+1}</h2></div>
                    <div className="cauhoi"><h3 dangerouslySetInnerHTML={{__html:question}} /></div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="traloi-dong1" >
                            {shuffleAnswer.map((answer,index)=>{
                                const bgColor = () => {
                                    if(showAnswer === true){
                                        switch (answer){
                                            case correct_answer:
                                                return "success";
                                            case selected:
                                                return "error";
                                            default:
                                                return "inherit"
                                        }
                                    }
                                    else{
                                        return "inherit"
                                    }
                                    
                                }
                                const variantColor = () => {
                                    if(showAnswer === true){
                                        switch (answer){
                                            case correct_answer:
                                                return "contained";
                                            case selected:
                                                return "contained";
                                            default:
                                                return "outlined"
                                        }
                                    }
                                    else{
                                        return "outlined"
                                    }
                                    
                                }
                                return(
                                <Button key={answer} 
                                    color={
                                        bgColor()
                                    } 
                                    variant={
                                        variantColor()
                                    }
                                    className=" col-xs-5 col-sm-5 col-md-5 col-lg-5" 
                                    onClick = {showAnswer === true ? ()=> '' :()=> handleAnswer(answer)}
                                    >
                                        {answer}
                                </Button>
                            )})}
                            
                        </div>
                    </div>
                    {showAnswer ?
                    <Button variant="contained" 
                        endIcon={<NavigateNextIcon />} 
                        onClick={handlNextQuestion}
                    >
                        Next</Button>: ''    
                }
                    
                </div>
                
            </div>
        
        )
    }
export default memo(Questionner);