import React from 'react';
import styled from 'styled-components';

const TodoTemplater = styled.div`
  width: 512px;
  margin: 6rem auto 0 auto;
`;

const AppTitle = styled.div`
  background: #22b8cf;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  /* border-radius: 4px; */
`;

const Content = styled.div`
  background: white;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplater className="TodoTemplate">
      <AppTitle className="app-title">일정관리</AppTitle>
      <Content className="content">{children}</Content>
    </TodoTemplater>
  );
};

export default TodoTemplate;
