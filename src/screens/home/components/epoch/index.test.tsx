import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme,
  wait,
} from '@tests/utils';
import { ApolloProvider } from '@apollo/client';
import { createMockClient } from 'mock-apollo-client';
import {
  EpochDocument,
} from '@graphql/types';
import Epoch from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Box: (props) => <div id="box" {...props} />,
}));

const mockEpoch = jest.fn().mockResolvedValue({
  data: {
    average_time: 0.535677777,
    slot: 420000,
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home/Epoch', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();

    mockClient.setRequestHandler(
      EpochDocument,
      mockEpoch,
    );

    const component = renderer.create(
      <ApolloProvider client={mockClient}>
        <MockTheme>
          <Epoch />
        </MockTheme>
      </ApolloProvider>,
    );
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
