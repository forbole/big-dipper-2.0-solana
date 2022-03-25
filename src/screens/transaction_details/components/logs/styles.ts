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
            padding: theme.spacing(2),
            borderRadius: theme.spacing(0.5),
            marginBottom: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            '&:last-child': {
              marginBottom: 0,
            },
            [theme.breakpoints.up('md')]: {
              flexDirection: 'row',
            },
          },
          '& .log__count': {
            background: theme.palette.divider,
            width: theme.spacing(4),
            textAlign: 'center',
            borderRadius: theme.spacing(3),
            marginBottom: theme.spacing(2),
            [theme.breakpoints.up('md')]: {
              marginBottom: 0,
              marginRight: theme.spacing(2),
            },
          },
          '& .log__content': {
            flex: 1,
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
