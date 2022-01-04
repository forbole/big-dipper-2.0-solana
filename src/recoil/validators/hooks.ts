/* eslint-disable */
/* eslint-disable max-len */
import { useState } from 'react';
import {
  useRecoilCallback,
} from 'recoil';
import * as R from 'ramda';
import {
  useValidatorAddressesQuery,
  ValidatorAddressesQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import { useDesmosProfile } from '@hooks';
import {
  atomFamilyState as validatorAtomState,
} from '@recoil/validators';
import {
  atomFamilyState as profileAtomFamilyState,
} from '@recoil/profiles';

export const useValidatorRecoil = () => {
  const [loading, setLoading] = useState(true);

  const {
    fetchDesmosProfile,
    formatDesmosProfile,
  } = useDesmosProfile({
    onComplete: (data) => {
      return formatDesmosProfile(data);
    },
  });

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
    data?.validator?.filter((x) => x.address).forEach((x) => {
      const { address, node } = x;
      set(validatorAtomState(address), {
        address,
        owner: node
      });
    });
  });

  const setProfiles = useRecoilCallback(({ set }) => async (data: ValidatorAddressesQuery) => {
    let profiles = [];
    if (chainConfig.extra.profile) {
      data?.validator?.filter((x) => x.address).forEach((x) => {
        const { address } = x;
        profiles.push(fetchDesmosProfile(address));
      });
    }
    // ryuash
    profiles = await Promise.allSettled([]);
    // profiles = await Promise.allSettled(profiles);
    data?.validator?.filter((x) => x.address).forEach((x, i) => {
      const { address } = x;

      const profile = R.pathOr(undefined, [i, 'value'], profiles);

      // sets profile priority
      const moniker = R.pathOr(undefined, ['nickname'], profile)
      || R.pathOr('', ['validatorConfig', 'name'], x);

      const imageUrl = (
        R.pathOr('', ['imageUrl'], profile)
        || R.pathOr('', ['validatorConfig', 'avatarUrl'], x)
      );

      set(profileAtomFamilyState(address), {
        moniker,
        imageUrl,
      });
    });
  });

  return {
    loading,
  };
};
