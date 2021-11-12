import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        overview: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        balance: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        accounts: {
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
