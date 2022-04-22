import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          minHeight: '50px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
        // header: {
        //   marginBottom: theme.spacing(2),
        //   [theme.breakpoints.up('lg')]: {
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'space-between',
        //   },
        // },
        // list: {
        //   flex: 1,
        // },
      });
    },
  )();

  return styles;
};
