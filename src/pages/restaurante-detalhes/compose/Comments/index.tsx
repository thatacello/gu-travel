import 'antd/dist/antd.css';
import { Container, Row, TextArea } from './styles';
import { Form, Button, Tooltip, Comment, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { createElement, useState } from 'react';
import React from 'react';

const Demo = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState('');

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  return (
    <Comment className="comment"
      actions={actions}
      author={<a>Han Solo</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};
const Comments = () => {
  return (
    <Container>
      <Form.Item className="form">
        <TextArea rows={4} placeholder="Escreva aqui sua experiência nesse local." />
      </Form.Item>
      <Form.Item className="form">
        <Button>Publicar</Button>
      </Form.Item>
      <Row>
      <Demo />
      <Demo />
      <Demo />
      </Row>
      <a href="#">Ver mais</a>
    </Container>
  );
};

export default Comments;