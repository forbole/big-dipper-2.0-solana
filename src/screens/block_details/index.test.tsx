/* eslint-disable */
import React from 'react';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
BlockDetailsDocument,
} from '@graphql/types';
import BlockDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      height: 300,
    },
  }),
}));

jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

jest.mock('./components', () => ({
  Overview: (props) => <div id="Overview" {...props} />,
  Transactions: (props) => <div id="Transactions" {...props} />,
  Signatures: (props) => <div id="Signatures" {...props} />,
}));

const mockAverageBlockTime = jest.fn().mockResolvedValue({
  data: {
    transaction: [
      {
        "slot": 112673814,
        "hash": "5uyxVvn5DsQJwm1XocYHDaY78hrgX3WcoBKY3NcU7Sipy3Gx8GmA2695E2AQA7cEK5z3hZZdzw4ganaTboMdyb22",
        "error": true,
        "block": {
          "timestamp": "2021-12-22T01:56:19"
        },
        "messages": [
          {
            "type": "vote"
          }
        ]
      }
    ],
    block: [
      {
        "slot": 112673814,
        "hash": "8bti9xLpyuicxYwEPmQ4Xfb8toPeZ1t5zvNqYxkE41B5",
        "proposer": "DDnAqxJVFo2GVTujibHt5cjevHMSE9bo8HJaydHoshdp",
        "timestamp": "2021-12-22T01:56:19"
      }
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      BlockDetailsDocument,
      mockAverageBlockTime,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <BlockDetails />
          </MockTheme>
        </ApolloProvider>,
      );
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
