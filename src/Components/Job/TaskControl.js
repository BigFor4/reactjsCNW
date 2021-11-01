import { Component } from 'react';
import TaskSearchControl from './TaskSearchControl';
import TaskSortControl from './TaskSortControl';
class Control extends Component {
    render(){
        return (
            <div className='row'>
                <TaskSearchControl onClickFilter = {this.props.onClickFilter}></TaskSearchControl>
                <TaskSortControl onClickSort={this.props.onClickSort} sortBy={this.props.sortBy}
                    sortValue={this.props.sortValue}></TaskSortControl>
            </div>
        );
    }
}

export default Control;
