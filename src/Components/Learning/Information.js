
import { Component } from 'react';
class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    onclickLogout = () =>{
        window.location.replace('/login')
        localStorage.removeItem('user');
    }
    render(){
        this.onCloseForm = () =>{
            this.props.onCloseForm();
        }
        const {
            username,
            birthDay,
            address,
            university,
        } = this.props;
        return (
            <div className="thongtin">
                <div className='control-icon'  onClick={this.onCloseForm}><i className="fas fa-bars" /></div>
                <div className="thongtin-anh">
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif' alt='anh'/>
                </div>
                <div className="thongtin-text">
                    <h4>{username}</h4>
                    <p>Ngày Sinh:{birthDay}</p>
                    <p>Địa Chỉ: {address}</p>
                    <p>{university}</p>
                    </div>
                    <div className="speac" >
                    </div>
                    <div className="thongtin-logout">
                    <button onClick={this.onclickLogout} className="btn btn-primary">Logout</button>
                </div>
            </div>
        );
    }
}

export default Information;
