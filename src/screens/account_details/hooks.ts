import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  AccountTypeDocument,
} from '@src/graphql/account_details_documents';
import { chainConfig } from '@src/configs';
import { useDesmosProfile } from '@hooks';
import { AccountDetailState } from './types';

const initialState: AccountDetailState = {
  loading: false,
  exists: true,
  desmosProfile: null,
  accountType: '',
};

const ACCOUNT_TYPE_MAP: {[key: string]: string} = {
  token_account: 'TOKEN_ACCOUNT',
};

export const useAccountDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<AccountDetailState>(initialState);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // Desmos Profile
  // ==========================
  const {
    fetchDesmosProfile, formatDesmosProfile,
  } = useDesmosProfile({
    onComplete: (data) => {
      handleSetState({
        desmosProfile: formatDesmosProfile(data),
      });
    },
  });

  useEffect(() => {
    handleSetState(initialState);
    if (chainConfig.extra.profile) {
      fetchDesmosProfile(R.pathOr('', ['query', 'address'], router));
    }
  },
  [R.pathOr('', ['query', 'address'], router)]);

  // ==========================
  // Fetch Data
  // ==========================
  useEffect(() => {
    getAccountType();
  }, [router.query.address]);

  const getAccountType = async () => {
    try {
      const { data } = await axios.post(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
        variables: {
          address: router.query.address,
        },
        query: AccountTypeDocument,
      });
      const accountType = R.pathOr('', ['data', 'actionsAccountInfo', 'parsed', 'type'], data);
      handleSetState({
        accountType: ACCOUNT_TYPE_MAP[accountType] || '',
      });
    } catch (error) {
      handleSetState({
        loading: false,
        exists: false,
      });
    }
  };

  return {
    state,
  };
};
