import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          minHeight: '200px',
          height: '20vh',
          display: 'flex',
          flexDirection: 'column',
          [theme.breakpoints.up('lg')]: {
            height: '40%',
          },
        },
        header: {
          marginBottom: theme.spacing(2),
          [theme.breakpoints.up('lg')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        },
        list: {
          flex: 1,
        },
      });
    },
  )();

  return styles;
};
