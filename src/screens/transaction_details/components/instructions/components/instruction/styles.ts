import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          background: theme.palette.custom.general.surfaceTwo,
          padding: theme.spacing(2),
          borderRadius: theme.spacing(0.5),
          marginBottom: theme.spacing(2),
          '&:last-child': {
            marginBottom: 0,
          },
        },
        title: {
          display: 'flex',
          flexDirection: 'column',
          '& .title__content': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          },
          '& .title__index': {
            padding: theme.spacing(0, 1.5),
            textAlign: 'center',
            background: theme.palette.divider,
            borderRadius: theme.spacing(3),
            marginBottom: theme.spacing(2),
          },
        },
      });
    }, { index: 1 },
  )();
  return styles;
};
