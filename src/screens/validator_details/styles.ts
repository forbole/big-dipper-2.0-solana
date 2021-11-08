import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          ...theme.mixins.layout,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: 'auto',
          gridGap: theme.spacing(1),
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
            gridTemplateColumns: 'repeat(2, 1fr) 500px',
          },
        },
        address: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        status: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        profile: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        staking: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        skipRate: {
          background: '#31326f',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        transactions: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
      });
    },
  )();

  return styles;
};
