import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
  DesmosProfile,
} from '@components';
import {
  NativeAccount,
  NonceAccount,
  StakeAccount,
  TokenAccount,
  // VoteAccount,
  TokenDetailsAccount,
} from './components';
import { useStyles } from './styles';
import { ACCOUNT_TYPES } from './types';
import { useAccountDetails } from './hooks';

const AccountDetails = () => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { state } = useAccountDetails();

  let component = <NativeAccount />; // default

  if (state.accountType === ACCOUNT_TYPES.NONCE_ACCOUNT) { // done
    component = <NonceAccount />;
  }
  if (state.accountType === ACCOUNT_TYPES.STAKE_ACCOUNT) {
    component = <StakeAccount />;
  }
  if (state.accountType === ACCOUNT_TYPES.TOKEN_ACCOUNT) {
    component = <TokenDetailsAccount />;
  }
  // if (ACCOUNT_TYPE === 'vote') {
  //   component = <VoteAccount />;
  // }
  if (state.accountType === ACCOUNT_TYPES.TOKEN) {
    component = <TokenAccount />;
  }

  return (
    <>
      <NextSeo
        title={t('accountDetails')}
        openGraph={{
          title: t('accountDetails'),
        }}
      />
      <Layout navTitle={t('accountDetails')}>
        <LoadAndExist
          loading={state.loading}
          exists={state.exists}
        >
          <span className={classes.root}>
            {(!!state.desmosProfile && state.accountType === ACCOUNT_TYPES.NATIVE_ACCOUNT) && (
            <DesmosProfile
              dtag={state.desmosProfile.dtag}
              nickname={state.desmosProfile.nickname}
              imageUrl={state.desmosProfile.imageUrl}
              bio={state.desmosProfile.bio}
              connections={state.desmosProfile.connections}
              coverUrl={state.desmosProfile.coverUrl}
            />
            )}
            {component}
          </span>
        </LoadAndExist>
      </Layout>
    </>

  );
};

export default AccountDetails;
