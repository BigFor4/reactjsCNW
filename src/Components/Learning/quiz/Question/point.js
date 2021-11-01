import React from "react";
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
const Point = ({
    score,onHomeClick}) =>{
        return (
            <div className="card cardtest" >
                <div className="card-body">
                    
                </div>
                <div className="card-body">
                    <div className="row">
                        <h3>Điểm của bạn là : {score}</h3>
                    </div>

                    <Button className="btn-trangchu" variant="contained" endIcon={<HomeIcon/>}
                        onClick={onHomeClick}
                    >Về Trang Chủ</Button> 
                    
                </div>
            </div>
        )
    }
export default Point;