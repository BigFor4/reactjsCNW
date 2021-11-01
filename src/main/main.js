import '../App.css'
import { Component } from 'react';
import TaskForm from '../Components/Job/TaskForm';
import Control from '../Components/Job/TaskControl';
import TaskList from '../Components/Job/TaskList';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      isDislayForm: false,
      tasksEditing : null,
      filter: {
        name: '',
        status: -1
      },
      sortBy:'name',
      sortValue:1
    }
  }
  onLeaning = () =>{
    window.location.replace('/Learning');
  }
  onAddJob = () =>{
    if(this.state.tasksEditing !== null && this.state.isDislayForm === true){
      this.setState({
        tasksEditing: null,
        isDislayForm:  true
      })
    }
    else{
      this.setState({
        isDislayForm: !this.state.isDislayForm,
        tasksEditing: null
      })
    }
  }
  componentDidMount(){
    if(localStorage &&  localStorage.getItem('tasks')){
      var tasks =  JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }
  onCloseForm = ()=>{
    this.setState({
      isDislayForm: false
    })
  }
  onShowForm = ()=>{
    this.setState({
      isDislayForm: true
    })
  }
  s4(){
    var rand = 1 + (Math.random() * (100-1));
    return  Math.floor(rand).toString();
  }
  generateID(){
    return this.s4()+this.s4()+this.s4()+this.s4()+this.s4()+this.s4()+this.s4()+this.s4()+this.s4()+this.s4()+this.s4();
  }
  onSubmit= (data) =>{
    var {tasks} = this.state; 
    if(data.id === ''){
      data.id= this.generateID();
      tasks.push(data);
    }
    else{
      var index =this.findIndex(data.id);
      console.log(index)
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      tasksEditing: null
    })
    localStorage.setItem('tasks' ,JSON.stringify(tasks))
  }
  findIndex =(id)=>{
    var {tasks} = this.state;
    var result = -1
    tasks.forEach((tasks,index)=>{
      if(tasks.id === id){
        result = index;
      }
    })
    return result;
  }
  onUpdateStatus = (id)=>{
    var {tasks} = this.state; 
    var index =this.findIndex(id);
    if(index !== -1){
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks' , JSON.stringify(tasks))
    }
  }
  onDelete = (id) =>{
    var {tasks} = this.state; 
    var index =this.findIndex(id);
    if(index !== -1){
      tasks.splice(index , 1)
      this.setState({
        tasks: tasks,
      })
      localStorage.setItem('tasks' , JSON.stringify(tasks))
    }
    this.onCloseForm();
  }
  onUpdate = (id) =>{
    var {tasks} = this.state;
    var index =this.findIndex(id);
    var tasksEditing = tasks[index]
      this.setState({
        tasksEditing: tasksEditing
      },function (){console.log(this.state.tasksEditing)});
    this.onShowForm();
  }
  onFilter = (filterName , filterStatus) =>{
    filterStatus = parseInt(filterStatus)
    this.setState({
      filter:{
        name:filterName,
        status: filterStatus
      }
    })
  }
  onClickFilter =(filterName) =>{
    this.setState({
      filter:filterName
    },()=> console.log(this.state.filter))
    
  }
  onClickSort =(sortName,sortValue)=>{
    this.setState({
      sortBy:sortName,
      sortValue:sortValue
    })
    
  }
  onclickLogout = () =>{
    window.location.replace('/login')
    localStorage.removeItem('user');
  }
  render(){
    var {tasks,isDislayForm,tasksEditing,filter,sortBy,sortValue} = this.state ; // tường đương var tasks= this.state.tasks
    if(filter){
      if(filter.name){
        tasks = tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filter.name) !== -1
        })
      }
      tasks = tasks.filter((task)=>{
        if(filter.status === -1){
          return task
        }
        else{
          return task.status === (filter.status === 1 ? true : false) 
        }
      })
    }
    if (sortBy === 'name') {
      tasks.sort((a,b)=>{
        if (a.name>b.name) return sortValue;
        else if(a.name <b.name) return -sortValue;
        else return 0;
      })
    }
    else {
      tasks.sort((a,b)=>{
        if (a.status>b.status) return -sortValue;
        else if(a.status <b.status) return sortValue;
        else return 0;
      })
    }
    var elmTaskForm = isDislayForm === true ? <TaskForm
                                              onSubmit = {this.onSubmit}
                                              tasks = {tasksEditing}
                                              onCloseForm = {this.onCloseForm}></TaskForm> : '';
    return (
      <div className='main'>
        <div className="container mt-50">
        <div >
          <h1 className="text-center" style={{color: 'blue'}}>Quản Lý Công Việc</h1>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 icon-logout'>
            <Button variant="outlined" startIcon={<LogoutIcon /> } onClick = {this.onclickLogout}>
              Logout
            </Button>
          </div>
          
          <hr />
          
        </div>
        
        <div className="row">
          <div className={isDislayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {elmTaskForm}
          </div>
          <div className={isDislayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary mb-15 mr-5"
              onClick={this.onAddJob}
            >
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <button type="button" className="btn btn-primary mb-15 mr-5"
            onClick={this.onLeaning}
            >
              <i className="fas fa-user-clock"  />&nbsp;Kiểm tra
            </button>
            <Control onClickFilter = {this.onClickFilter} 
                    onClickSort = {this.onClickSort}
                    sortBy={sortBy}
                    sortValue={sortValue}
            ></Control>
            <TaskList tasks = {tasks} 
              onUpdateStatus = {this.onUpdateStatus}
              onDelete = {this.onDelete}
              onUpdate = {this.onUpdate}
              onFilter = {this.onFilter}
            ></TaskList>
          </div>
        </div>
      </div>
      </div>
    );

  }
}

export default Main;
