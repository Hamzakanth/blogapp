import React from 'react';
import styled from 'styled-components';
import BlogList from './components/BlogList';

const AppContainer = styled.div`
  background-color: #e9ecef;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  margin-bottom: 40px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: #343a40;
`;

const App = () => {
  return (
    <AppContainer>
      <Header>
        <Title>Blog Posts</Title>
      </Header>
      <BlogList />
    </AppContainer>
  );
};

export default App;
