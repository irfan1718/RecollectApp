import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import Posts from '../posts/Posts';
import Form from '../form/Form';
import { getPosts } from '../../actions/posts';
import useStyles from './styles';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const { classes } = useStyles();
  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justify='space-between'
          alignItems='stretch'
          spacing={6}
        >
          <Grid className={classes.posts} item xs={12} sm={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
