import { Component } from 'react';

class TaskSortControl extends Component {
    onClickSort =(sortBy,sortValue)=>{
        this.props.onClickSort(sortBy,sortValue)
    }
    render(){
        var {sortBy ,sortValue} = this.props;
        return (
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Sắp Xếp
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li onClick={()=> this.onClickSort('name',1)}><span className="dropdown-item" href="#"><i className="fas fa-sort-alpha-down" />&nbsp;Tên A-Z  &nbsp;{sortBy === 'name' && sortValue === 1?<i className="fas fa-check" /> : ''}</span></li>
                        <li onClick={()=> this.onClickSort('name',-1)}><span className="dropdown-item" href="#"><i className="fas fa-sort-alpha-down-alt" />&nbsp;Tên Z-A  &nbsp;{sortBy === 'name' && sortValue === -1?<i className="fas fa-check" /> : ''}</span></li>
                        <li onClick={()=> this.onClickSort('status',1)}><span className="dropdown-item" href="#">Trạng Thái Kích Hoạt  &nbsp;{sortBy === 'status' && sortValue === 1?<i className="fas fa-check" /> : ''}</span></li>
                        <li onClick={()=> this.onClickSort('status',-1)}><span className="dropdown-item" href="#">Trạng Thái Ẩn  &nbsp;{sortBy === 'status' && sortValue === -1?<i className="fas fa-check" /> : ''}</span></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TaskSortControl;
