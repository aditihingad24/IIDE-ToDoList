import React,{Component} from 'react';
import { Input, Button } from 'antd';

class AddItems extends Component{
    constructor(props) {
        super(props);
        this.state= {
            inputVal: '',
            
        }
    }

    onChangeInput=(event)=>{
        this.setState({inputVal:event.target.value})
    }

    onClickHandler=()=>{
        this.setState({
            inputVal:'',
        })
        this.props.onClickHandler(this.state.inputVal);
    }

    render(){
        return(
            <div>
                <h2>TO DO LIST</h2>
                <div style={{display:'flex'}}>
                    <Input 
                    name='inputVal'
                    placeholder="type here... "
                    size='large'
                    onChange={this.onChangeInput}
                    value={this.state.inputVal}
                    />
                    <Button className="my-button"
                    size='large'
                    type='primary' 
                    onClick={this.onClickHandler}
                    >Add +</Button>
                </div>
            </div>
        )
    }
}
export default AddItems;