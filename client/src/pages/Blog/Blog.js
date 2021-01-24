import React from 'react';
import Axios from 'axios';

import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Grid,
  makeStyles,
  Button,
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(() => ({
  main: { paddingTop: 125 },
  title: { flexGrow: 1 },
}));

export function Blog() {
  const [blogs, setBlogs] = React.useState(null);
  const classes = useStyles();

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
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton color='inherit' size='medium'>
            <AccountCircleIcon />
          </IconButton>
          <Typography className={classes.title}>Blog</Typography>
          <Grid container direction='row' justify='flex-end' spacing={3}>
            <Grid item>
              <Button
                color='inherit'
                variant='outlined'
                component={Link}
                to={'/admin'}
              >
                Admin
              </Button>
            </Grid>
            <Grid item>
              <Button
                color='secondary'
                variant='contained'
                component={Link}
                to={'/newsletter'}
              >
                News
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Container className={classes.main} maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Typography variant='h3'>Featured Blog</Typography>
            <Typography variant='p'>
              Sint velit est enim irure velit cillum enim voluptate duis amet.
              Occaecat culpa esse laboris enim officia nulla qui ullamco commodo
              magna nisi. Commodo velit minim deserunt dolor exercitation
              excepteur officia incididunt tempor exercitation cillum ut ut.
              Voluptate id cillum qui velit laborum quis ea excepteur velit.
              Incididunt cupidatat fugiat labore anim aliqua. Ex sunt excepteur
              ipsum non commodo do officia labore excepteur reprehenderit duis
              sit nisi.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container direction='column' spacing={3}>
              <Grid item>
                <Typography variant='h4'>Recent posts</Typography>
                {!blogs && <h1>Loading blogs</h1>}
                {blogs &&
                  blogs.map((blog) => (
                    <>
                      <Typography variant='h5'>{blog.title}</Typography>
                    </>
                  ))}
              </Grid>
              <Grid item>
                <Typography variant='h4'>Links</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
