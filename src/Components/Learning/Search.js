import { Component } from 'react';
import {
    Filter
} from '../../constant/main';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: '',
        };
    }
    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })

    }

    render(){
        const {
            searchOnClick,
            sortFilter,
            sortFilterOnChange,
        } = this.props;
        const {keyWord} = this.state;
        return (
            
                <div className='row search'>
                    <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                        <div className="input-group search-input">
                            <input type="text" name='keyWord' className="form-control" placeholder="Nhập từ khóa..." value={keyWord}
                                onChange={this.onChange }/>
                            <span className="input-group-btn">
                                <button className="btn btn-primary" type="button"  onClick={() => searchOnClick(keyWord)}>
                                    <span className="fa fa-search mr-5" />Tìm
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                        <select name="filter" className="form-select search-select"
                            id="filter"
                            value={sortFilter}
                            onChange={(event) => {
                                sortFilterOnChange(parseInt(event.target.value))
                            }} >
                            <option value={Filter.All}>All</option>
                            <option value={Filter.Time}>Time</option>
                            <option value={Filter.Point}>Point</option>
                        </select>
                    </div>
                </div>
            
        );
    }
}

export default Search;
