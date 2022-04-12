import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  TransactionsList,
  Box,
} from '@components';
import { useTransactions } from './hooks';
import { useStyles } from './styles';

const Transactions: React.FC<ComponentDefault> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');
  const { state } = useTransactions();

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {t('transactions')}
      </Typography>
      <div className={classes.list}>
        <TransactionsList
          transactions={state.transactions}
          itemCount={state.transactions.length}
          className={classes.list}
          hasNextPage={false}
          isNextPageLoading={false}
          loadNextPage={() => null}
          loadMoreItems={() => null}
          isItemLoaded={() => true}
        />
      </div>
    </Box>
  );
};

export default Transactions;
