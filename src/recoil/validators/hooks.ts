/* eslint-disable */
/* eslint-disable max-len */
import { useState } from 'react';
import {
  useRecoilCallback,
} from 'recoil';
import {
  useValidatorAddressesQuery,
  ValidatorAddressesQuery,
} from '@graphql/types';
import {
  atomFamilyState as validatorAtomState,
} from '@recoil/validators';
import {
  atomFamilyState as profileAtomFamilyState,
} from '@recoil/profiles';

export const useValidatorRecoil = () => {
  const [loading, setLoading] = useState(true);

  useValidatorAddressesQuery({
    onError: (error) => {
      console.error(error.message);
      setLoading(false);
    },
    onCompleted: async (data) => {
      await formatValidatorsAddressList(data);
      await setProfiles(data);
      setLoading(false);
    },
  });

  const formatValidatorsAddressList = useRecoilCallback(({ set }) => async (data: ValidatorAddressesQuery) => {
    data?.validatorConfig?.forEach((x) => {
      const { owner, address } = x;
      set(validatorAtomState(owner), {
        address,
        owner
      });
    })
  });

  const setProfiles = useRecoilCallback(({ set }) => async (data: ValidatorAddressesQuery) => {
    data?.validatorConfig?.forEach((x, i) => {
      const { owner, name, avatarUrl } = x;

      const moniker = name || ''
      const imageUrl = avatarUrl || ''

      set(profileAtomFamilyState(owner), {
        moniker: moniker || owner,
        imageUrl,
      });
    });
  });

  return {
    loading,
  };
};
