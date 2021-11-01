import { Component } from 'react';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state={
            id: '',
            name: '',
            status: false
        }
    }
    onChange =(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true:false;
        }
        this.setState({
            [name] : value
        })
    }
    componentDidMount(){
        if(this.props.tasks){
            this.setState({
                id: this.props.tasks.id,
                name: this.props.tasks.name,
                status: this.props.tasks.status
            })
        }
        console.log(this.state)
    }
    componentWillReceiveProps(nextProps){
        if( nextProps && nextProps.tasks){
            this.setState({
                id: nextProps.tasks.id,
                name: nextProps.tasks.name,
                status: nextProps.tasks.status
            })
        }else if(nextProps.tasks === null){
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
    }
    onSubmit =(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.onClear();
        this.onCloseForm();
    }
    onClear= () =>{
        this.setState({
            name: '',
            status: false,
        })
    }
    onCloseForm = () =>{
        this.props.onCloseForm();
    }
    render(){
        var {id} = this.state;
    return (
            <div className="list-group">
                <div className="list-group-item list-group-item-warning taskform-close">
                    <h4>{id === '' ? 'Thêm Công Việc' : 'Cập Nhập Công Việc'}</h4><i className="fas fa-times-circle close"
                        onClick={this.onCloseForm}
                    ></i>
                </div>
                <div className="list-group-item">
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" className="form-control" name='name'
                        value={this.state.name}
                        onChange={this.onChange}
                        placeholder="Nhập môn học..."/>
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" name='status' 
                    value={this.state.status}
                    onChange={this.onChange}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br />
                    <div className="text-center">
                    {id === '' ? <button type="submit" className="btn btn-warning mr-5">Thêm</button> : <button type="submit" className="btn btn-warning mr-5">Sửa</button>}
                        <button type="submit" className="btn btn-danger"
                            onClick={this.onClear}
                        >Hủy Bỏ</button>
                    </div>
                    </form>
                </div>
            </div>
    );

    }
}

export default TaskForm;
