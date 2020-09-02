import React from 'react'
import 'antd/dist/antd.css'
import './index.css';
import { Row, Col, Divider,Card,Avatar,Input,Comment} from 'antd';
const { Meta } = Card;
const { Search } = Input;
export class ChatLayout extends React.Component {
 
  render() {
    return (
        <>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
        <Card title="Contacts" className="contacts-card">
         <p>Person 1</p>
         <p>Person 2</p>
         <p>Person 3</p>
        </Card>
        </Col>
        <Col className="gutter-row" span={18}>
          <Card className = "chat-card">
            <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Person - 1"
            />
            <br/>
            <Card className = "message-history-card">
            <Comment className = "sent"
            actions={[<span key="comment-nested-reply-to">3:25.44PM Sunday 9th of August, 2020</span>]}
            content={
               <p> hi.</p>
             }>
            </Comment>
            <Comment className = "received"
             actions={[<span key="comment-nested-reply-to">3:25.44PM Sunday 9th of August, 2020</span>]}
            content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
  </Comment>
  <Comment className = "received"
    actions={[<span key="comment-nested-reply-to">3:25.44PM Sunday 9th of August, 2020</span>]}
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
  </Comment>
            </Card>
            <br/>
              <Search
              placeholder="Type your message ...."
              enterButton="Send"
              onSearch={value => console.log(value)}
           />
          </Card>
          </Col>
        </Row>
        </>
    );
  }
}

export default ChatLayout;