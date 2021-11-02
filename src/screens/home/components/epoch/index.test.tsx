import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Epoch from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

// ==================================
// unit tests
// ==================================
describe('screen: Home/Epoch', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Epoch />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
