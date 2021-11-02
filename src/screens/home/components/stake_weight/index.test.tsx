import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import StakeWeight from '.';

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
describe('screen: Home/StakeWeight', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <StakeWeight />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
