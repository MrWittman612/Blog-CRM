import React from 'react';
import Axios from 'axios';

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
    <div>
      {!blogs && <h1>Loading blogs</h1>}
      {blogs &&
        blogs.map((blog) => (
          <>
            <h1>{blog.title}</h1>
            <p>{blog.text}</p>
          </>
        ))}
    </div>
  );
}
