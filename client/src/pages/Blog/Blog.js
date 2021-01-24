import React from 'react';
import Axios from 'axios';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { StopOutlined } from '@material-ui/icons';

export function Blog() {
  const [blogs, setBlogs] = React.useState(null);

  React.useEffect(() => {
    const getBlogs = async () => {
      try {
        const dbResponse = await Axios.get('/api/blogs');
        setBlogs(dbResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBlogs();
  }, []);

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <IconButton>
            <StopOutlined />
          </IconButton>
          <Typography>Blog</Typography>
        </Toolbar>
      </AppBar>
      {!blogs && <h1>Loading blogs</h1>}
      {blogs &&
        blogs.map((blog) => (
          <>
            <h1>{blog.title}</h1>
            <p>{blog.text}</p>
          </>
        ))}
    </React.Fragment>
  );
}
