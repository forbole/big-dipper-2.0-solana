import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    () => {
      return ({
        root: {
          minHeight: '50px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
      });
    },
  )();

  return styles;
};
