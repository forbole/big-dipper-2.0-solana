import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        overview: {
          height: '75px',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        balance: {
          height: '200px',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        accounts: {
          height: '200px',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        tokens: {
          height: '200px',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        transactions: {
          height: '200px',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
      });
    },
  )();

  return styles;
};
