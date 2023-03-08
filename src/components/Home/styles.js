import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
  mainContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  posts: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
    },
  },

  heading: {
    color: '#fff',
    fontWeight: '600',
  },
}));
