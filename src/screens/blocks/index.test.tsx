/* eslint-disable */
import React from 'react';
import { RecoilRoot } from 'recoil';
import {
  createMockClient, createMockSubscription,
} from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
BlocksListenerDocument,
BlocksDocument,
} from '@graphql/types';
import Blocks from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  Box: (props) => <div id="Box" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
  NoData: (props) => <div id="NoData" {...props} />,
}));

const mockBlocksListenerDocument = {
  data: {
    blocks: [
      {
        "slot": 124253814,
        "hash": "71YDg64otxW5ZFuUugtSLS3hpVn6fWoEZgvbP47MQEA",
        "timestamp": "2022-03-10T02:35:25",
        "numTxs": 839,
        "validator": [
          {
            "address": "3VyAAWmYecqmzq2zzwhDRXmrLSRh3616n2zsDpWXseeb"
          }
        ]
      }
    ],
  },
};

const mockBlocksDocument = jest.fn().mockResolvedValue({
  data: {
    "blocks": [
      {
        "slot": 124253813,
        "hash": "71YDg64otxW5ZFuUugtSLS3hpVn6fWoEZgvbP47MQEA",
        "timestamp": "2022-03-10T02:35:25",
        "numTxs": 839,
        "validator": [
          {
            "address": "3VyAAWmYecqmzq2zzwhDRXmrLSRh3616n2zsDpWXseeb"
          }
        ]
      }
    ]
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Blocks', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    const mockSubscription = createMockSubscription();

    mockClient.setRequestHandler(
      BlocksListenerDocument,
      () => mockSubscription,
    );

    mockClient.setRequestHandler(
      BlocksDocument,
      mockBlocksDocument,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <Blocks />
            </MockTheme>
          </ApolloProvider>
        </RecoilRoot>,
      );
    });
    await wait();

    renderer.act(() => {
      mockSubscription.next(mockBlocksListenerDocument);
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
