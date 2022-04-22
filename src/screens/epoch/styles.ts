import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          ...theme.mixins.layout,
          display: 'grid',
          gridGap: theme.spacing(1),
          height: '100%',
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
          },
        },
        // box: {
        //   minHeight: '500px',
        //   height: '50vh',
        //   margin: '50px 0',
        //   [theme.breakpoints.up('lg')]: {
        //     height: '100%',
        //     minHeight: '30vh',
        //   },
        // },
      });
    },
  )();

  return styles;
};
