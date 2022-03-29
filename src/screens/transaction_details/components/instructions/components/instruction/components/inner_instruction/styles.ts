import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          background: theme.palette.custom.general.surfaceThree,
          borderRadius: theme.spacing(0.5),
          padding: theme.spacing(2),
          marginBottom: theme.spacing(2),
          overflow: 'auto',
          '&:last-child': {
            marginBottom: 0,
          },
        },
      });
    }, { index: 1 },
  )();
  return styles;
};
