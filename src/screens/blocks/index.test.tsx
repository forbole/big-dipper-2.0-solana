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
// BlocksListenerDocument,
// BlocksDocument,
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
        slot: 812768640,
        leader: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
        hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
        parentHash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
        txs: 2,
        timestamp: '2021-09-13T20:06:17.363145',
      },
    ],
  },
};

const mockBlocksDocument = jest.fn().mockResolvedValue({
  data: {
    blocks: [{
      slot: 812768640,
      leader: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
      hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
      parentHash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
      txs: 2,
      timestamp: '2021-09-13T20:06:17.363145',
    },
    ],
    total: {
      aggregate: {
        count: 379619,
      },
    },
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Blocks', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    const mockSubscription = createMockSubscription();

    // mockClient.setRequestHandler(
    //   BlocksListenerDocument,
    //   () => mockSubscription,
    // );

    // mockClient.setRequestHandler(
    //   BlocksDocument,
    //   mockBlocksDocument,
    // );

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
