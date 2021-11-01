import { Component } from 'react';

class TaskSearchControl extends Component {
    constructor(props){
        super(props);
        this.state ={
            filter: {
                name: '',
                status: -1
            }
        }
    }
    onChange = (event) =>{
        var name = event.target.value;
        this.setState({
            filter: {
                name: name,
                status: -1
            }
        })

    }
    onClickFilter = () =>{
        this.props.onClickFilter(this.state.filter)
    }
    render(){
        var {filterName} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa..."  name='filterName' value={filterName}
                                onChange={this.onChange}/>
                    <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.onClickFilter}>
                        <span className="fa fa-search mr-5" />Tìm
                    </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default TaskSearchControl;
