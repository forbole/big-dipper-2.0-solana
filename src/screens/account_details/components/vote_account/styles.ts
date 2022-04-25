import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        validator: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        overview: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        skipRate: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        transactions: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
      });
    },
  )();

  return styles;
};
