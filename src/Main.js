import React from 'react';
import { Layout, Row, Col } from 'antd';

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
          <Row style={{height: '100%'}}>
            <Col 
              style={{
                height: '100%', 
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} 
              span={12}
            >
              <AddItems onClickHandler={this.onClickHandler} />
            </Col>          
            <Col 
              style={{
                height: '100%', 
                display:'flex',
                alignItems: 'center',
              }} 
              span={12}
            >
              <ListItems list={this.state.list} />
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Main;