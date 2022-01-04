import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          height: '100%',
        },
        cell: {
          ...theme.mixins.tableCell,
        },
        body: {
          color: theme.palette.custom.fonts.fontTwo,
        },
        flexCells: {
          '& > *': {
            display: 'flex',
            alignItems: 'center',
          },
          '&.right': {
            '& > *': {
              justifyContent: 'flex-end',
            },
          },
          '&.center': {
            '& > *': {
              justifyContent: 'center',
            },
          },
        },
        price: {
          '&.positive': {
            '&:before': {
              content: '"+"',
            },
            color: theme.palette.custom.priceData.positive,
          },
          '&.negative': {
            color: theme.palette.custom.priceData.negative,
          },
        },
      });
    },
  )();

  return styles;
};
