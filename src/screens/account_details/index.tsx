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
  // NonceAccount,
  // StakeAccount,
  // TokenAccount,
  // VoteAccount,
  // MintAccount,
} from './components';
import { useStyles } from './styles';
import { useAccountDetails } from './hooks';

const ACCOUNT_TYPE = 'stake' as string;

const AccountDetails = () => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { state } = useAccountDetails();

  const component = <NativeAccount />; // default

  // if (ACCOUNT_TYPE === 'nonce') { // done
  //   component = <NonceAccount />;
  // }
  // if (ACCOUNT_TYPE === 'stake') { // done
  //   component = <StakeAccount />;
  // }
  // if (ACCOUNT_TYPE === 'token') { // done
  //   component = <TokenAccount />;
  // }
  // if (ACCOUNT_TYPE === 'vote') {
  //   component = <VoteAccount />;
  // }
  // if (ACCOUNT_TYPE === 'mint') {
  //   component = <MintAccount />;
  // }

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
            {(!!state.desmosProfile && ACCOUNT_TYPE === 'native') && (
            <DesmosProfile
              className={classes.profile}
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
