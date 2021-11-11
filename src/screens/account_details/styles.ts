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
          display: 'grid',
          gridTemplateRows: 'auto auto 1fr',
          gridTemplateColumns: '1fr',
          gridGap: theme.spacing(1),
          [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: theme.spacing(2),
          },
        },
        profile: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
      });
    },
  )();

  return styles;
};
