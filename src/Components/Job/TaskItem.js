import { Component } from 'react';

class TaskItem extends Component {
  onUpdateStatus= () =>{
    this.props.onUpdateStatus(this.props.tasks.id)
  }
  onDelete= () =>{
    this.props.onDelete(this.props.tasks.id)
  }
  onUpdate= () =>{
    this.props.onUpdate(this.props.tasks.id)
  }
  render(){
    var {tasks,index} = this.props;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{tasks.name}</td>
            <td className="text-center">
                <span className={tasks.status === true ? 'btn btn-success btn-pd': 'btn btn-info btn-pd' } 
                onClick={this.onUpdateStatus}>
                  &nbsp; {tasks.status === true ? 'Kích Hoạt': 'Ẩn' }&nbsp;
                </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning mr-5"
                onClick = {this.onUpdate}>
                <span className="fa fa-pencil" />Sửa
                </button>
                <button type="button" className="btn btn-danger"
                  onClick={this.onDelete}
                >
                <span className="fa fa-trash" />Xóa
                </button>
            </td>
        </tr>
    );

  }
}

export default TaskItem;
