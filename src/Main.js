import React from 'react';
import { Layout, Row } from 'antd';

import AddItems from './AddItems';
import ListItems from './ListItems';

const { Content } = Layout;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    list:[]
    }
  }

  onClickHandler=(val)=>{
    const {list} = this.state;
    this.setState({
      list:[
        ...list,
        val
      ],
    })   
  }

  render() {
    return (
      <Layout>
        <Content 
          style={{height: '100vh',backgroundColor:'pink'}}
        >
          <Row style={{height: '50%',
                      display:'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                     }}>
              <AddItems onClickHandler={this.onClickHandler} />
          </Row> 
          <Row  style={{
                height: '50%', 
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} >
            
              <ListItems list={this.state.list} />
            
          </Row>
          
        </Content>
      </Layout>
    )
  }
}

export default Main;