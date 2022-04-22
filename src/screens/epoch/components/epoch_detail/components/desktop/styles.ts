import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiTableCell-root': {
            overflow: 'auto',
          },
          '& .memo': {
            alignItems: 'flex-start',
            '& .label': {
              marginRight: theme.spacing(5),
            },
          },
        },
      });
    },
  )();

  return styles;
};
