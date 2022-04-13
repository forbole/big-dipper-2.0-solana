import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          ...theme.mixins.layout,
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
        },
        box: {
          minHeight: '200px',
          height: '20vh',
          margin: '20px 0',
          [theme.breakpoints.up('lg')]: {
            height: '40%',
            minHeight: '30vh',
          },
        },
      });
    },
  )();

  return styles;
};
