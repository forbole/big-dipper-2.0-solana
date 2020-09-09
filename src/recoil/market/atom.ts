import { atom } from 'recoil';
import { AtomState } from './types';

const initialState: AtomState = {
  marketCap: 234,
  maxSupply: 1000342,
  price: 1.05,
  inflation: 0.6,
};

export const atomState = atom<AtomState>({
  key: 'market',
  default: initialState,
});
