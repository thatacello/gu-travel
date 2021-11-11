import { Typography } from 'antd';
import { LoginButton, Col, Container, Icon, Row } from './styles';
import logo from '../../assets/logo/logo.svg';
import gmail from '../../assets/icons/gmail-icon.png';

import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import {  } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const FormLayout = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  return (
    <>
      <Form
        {...null}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item className="text" label="E-mail:">
          <Input className="input-form" />
        </Form.Item>
        <Form.Item className="text" label="Senha:">
          <Input className="input-form" />
        </Form.Item>
        <Form.Item {...null}>
          <Button className="entrar" type="primary">Entrar</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default function Login() {
  return (
    <Container>
      <Row>
        <Col>
          <Icon className="logo" src={logo} />
          <LoginButton className="login-email">
          <Icon className="gmail" src={gmail} />Entre com sua conta de e-mail
          </LoginButton>
          <Typography className="subtitle">
            Ou entre com seu cadastro
          </Typography>
          <FormLayout />
          <Typography className="text-bottom">
            Planeje aqui seu sonho.{' '}
            <Link to="/cadastro" aria-label="Gu->travel - Cadastro">
              Registre-se!
            </Link>
          </Typography>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
