import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiTypography-h2': {
            marginBottom: theme.spacing(2),
          },
        },
        logs: {
          '& .log': {
            background: theme.palette.custom.general.surfaceTwo,
            borderRadius: theme.spacing(0.5),
            marginBottom: theme.spacing(2),
            '&:last-child': {
              marginBottom: 0,
            },
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
