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
        header: {
          '& .MuiTypography-body1': {
            wordBreak: 'break-all',
          },
          '& .header__index': {
            padding: theme.spacing(0, 1.5),
            textAlign: 'center',
            background: theme.palette.divider,
            borderRadius: theme.spacing(3),
          },
          '& .header__content--mobile': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(1),
          },
        },
      });
    }, { index: 1 },
  )();
  return styles;
};
