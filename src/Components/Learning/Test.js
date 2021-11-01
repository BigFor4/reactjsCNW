import { Component } from 'react';
import './test.css'
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onChange = () =>{
        
    }
    render(){
        const { listItem,onTestClick} = this.props;
        var elmListItem = listItem.map((listItem,index)=>{
            return <div key={index} className='col-xs-12 col-sm-12 col-md-6 col-lg-4 mt-15 card-test'>
                        <div className='card'>
                            <div className=' ml-10 mr-10 mt-25'>
                                <div className='tieude'>
                                    <h4>Test: {listItem.id}</h4>
                                    <input type="checkbox" className='form-check-input' checked={listItem.past === true ? true : false}
                                    onChange={this.onChange}/>
                                </div>
                                <div className='thongso-test'>
                                    <div className='row'>
                                        <div className='col-xs-12 col-sm-8 col-md-6 col-lg-6'>
                                            <h5>Name:&nbsp;{listItem.name}</h5>
                                            <h6>Point:&nbsp;{listItem.point}</h6>
                                            <h6>Time:&nbsp;{listItem.time}</h6>
                                        </div>
                                        <div className='col-xs-12 col-sm-4 col-md-6 col-lg-6 start'>
                                            <button className='btn btn-success' onClick={()=>onTestClick(listItem.id)}>Bắt đầu</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                                    <h6>
                                        <ul className="stars">
                                            <li><span className="fa fa-star" aria-hidden="true"></span></li>
                                            <li><span className="fa fa-star" aria-hidden="true"></span></li>
                                            <li><span className="fas fa-star-half-alt" aria-hidden="true"></span></li>
                                            <li><span className="fas fa-star-half-alt" aria-hidden="true"></span></li>
                                            <li><span className="fas fa-star-half-alt" aria-hidden="true"></span></li>
                                        </ul>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        
                    </div>
        })
        return (
            <div className='row'>
                {elmListItem}
            </div>
        );
    }
}

export default Test;
