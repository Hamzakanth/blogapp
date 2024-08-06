import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ListContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f4f4f9;
`;

const BlogItem = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-left: 6px solid #007bff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e9ecef;
  }
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 1.8rem;
  color: #333;
`;

const Author = styled.h3`
  margin: 0 0 10px;
  font-size: 1.2rem;
  color: #555;
`;

const Content = styled.p`
  color: #666;
  line-height: 1.6;
`;

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/blogs.json');
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          setError('Fetched data is not an array');
        }
      } catch (error) {
        setError('Error fetching the blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ListContainer>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <BlogItem key={blog.id}>
            <Title>{blog.title}</Title>
            <Author>by {blog.author}</Author>
            <Content>{blog.content}</Content>
          </BlogItem>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </ListContainer>
  );
};

export default BlogList;
