import numeral from 'numeral';
import { useRouter } from 'next/router';
import bs58 from 'bs58';
import {
  ACCOUNT_DETAILS,
  BLOCK_DETAILS,
  TRANSACTION_DETAILS,
} from '@utils/go_to_page';
import {
  useRecoilCallback,
} from 'recoil';

export const useSearchBar = () => {
  const router = useRouter();

  const handleOnSubmit = useRecoilCallback(() => (
    async (value: string, clear?: () => void) => {
      // account check
      const decoded = bs58.decode(value);
      const bytes = Buffer.byteLength(decoded);

      // block check
      const parsedValue = value.replace(/\s+/g, '');

      if (bytes === 32) {
        router.push(ACCOUNT_DETAILS(value));
      } else if (/^-?\d+$/.test(numeral(parsedValue).value())) {
        router.push(BLOCK_DETAILS(numeral(parsedValue).value()));
      } else {
        router.push(TRANSACTION_DETAILS(value));
      }

      if (clear) {
        clear();
      }
    }
  ));

  return {
    handleOnSubmit,
  };
};
