import { Component } from 'react';
import './Login.css'
import api from "../services/api";
import { googleProvider } from '../config/authMethot';
import socicalMediaAuth from '../server/auth';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            boolCheck: false,
            checkLogin: true
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    login() {
        var count = 0;

        api.create().login()
        .then(response => {
            for (var i=0; i < response.data.user.length; i++) {
                if(this.state.userName === response.data.user[i].username && this.state.passWord === response.data.user[i].userpass){
                    window.location.replace('/job');
                    localStorage.setItem('user' , JSON.stringify(response))
                }
                else{
                    count++;
                }
            } 
            if (count === response.data.user.length) {
                this.setState({
                    checkLogin: false
                })
            }
        })
        .catch((error) => {
        const { message } = error;
        console.log('error: ', message);
        });
    }
    onChangeInput(event){
        var target = event.target;
        var name = target.name;
        var value = target.type ==='checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }
    getUserInfo() {
        api.create().getUserInfo(16)
        .then(response => {
            console.log('response = ', response);
            return response
        })
        .catch((error) => {
        const { message } = error;
        console.log('error: ', message);
        });
    }
    
    
    handleUserName(event) {
        this.setState({ userName: event.target.value, checkLogin: true})
        
    }
    
    handlePassword(event) {
        this.setState({ passWord: event.target.value , checkLogin: true})
    }

    handleOnClick = async (provider) =>{
        const res = await socicalMediaAuth(provider)
        console.log(res)
        if(res!== null){
            if(res.code !== "auth/cancelled-popup-request" && res.email !== "" && res.code !== "auth/popup-closed-by-user"){
                window.location.replace('/job')
                localStorage.setItem('user' , JSON.stringify(res))
            }
            else{
                window.location.replace('/login')
                localStorage.removeItem('user');
            }
        }
    }
    render(){
        var {boolCheck,checkLogin} = this.state;
        return (
            <div className="wraper">
                <div className="wraper_box">
                    <h1 className='wraper_box-login'>Đăng Nhập</h1>
                    <div className="row wraper_box-input">
                        <div className="wraper_box--user">
                            <p>Tài Khoản</p>
                            <input placeholder="Ex. bigfor4" className="inputpadding" type="text" name="username"   
                                value={this.state.userName}
                                onChange={this.handleUserName}
                            />
                        </div>
                        <div className="wraper_box--pass">
                            <p>Mật Khẩu</p>
                            <input placeholder="******" className="inputpadding" type={boolCheck === false ? 'password' : 'text'} name="password"  
                                value={this.state.passWord}
                                onChange={this.handlePassword}
                            />
                            {checkLogin === true ?'' : <p style={{color: 'red'}}>*Đăng Nhập Thất bại</p>}
                        </div>
                        <div className="wraper_box--check">
                            <p><input type="checkbox" 
                            name='boolCheck'
                            value={true}
                            checked={this.state.boolCheck}
                            onChange={this.onChangeInput} /><span className='ml-5'>Hiển Thị Mật Khẩu</span></p>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-primary " 
                        onClick={() => this.login()}
                    >Đăng Nhập</button>
                    <Button className='gg-login' style={{marginBottom: '25px' ,color: '#fff'}} variant="outlined" startIcon={<GoogleIcon /> }   onClick={()=>this.handleOnClick(googleProvider)}>
                        Google Login
                    </Button>
                </div>
            </div>
        );
    }
}

export default Login;
