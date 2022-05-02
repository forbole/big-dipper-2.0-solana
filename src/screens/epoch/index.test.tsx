/* eslint-disable */
import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  MockTheme, wait,
} from '@tests/utils';
import { EpochDocument } from '@graphql/types';
import Epoch from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

jest.mock('./components', () => ({
  EpochDetail: (props) => <div id="EpochDetail" {...props} />,
}));

const mockEpochDocument = jest.fn().mockResolvedValue({
  "data": {
    "inflation": {
        "epoch": 305,
        "foundation": 0,
        "total":0.06963020582432754,
        "validator": 0.06963020582432754,
    },
    "inflationGovernon": {
        "foundation": 0,
        "foundationTerm": 0,
        "initial": 0.08,
        "taper": 0.15,
        "terminal": 0.015,
    },
    "epochSchedule": {
        "firstNormalEpoch": 0,
        "firstNormalSlot": 0,
        "leaderScheduleSlotOffset": 432000,
        "slotsPerEpoch": 432000,
        "warmup": false,
    }
  }
});


epochSchedule:






// ==================================
// unit tests
// ==================================
describe('screen: Epoch', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();

    mockClient.setRequestHandler(
      EpochDocument,
      mockEpochDocument,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <Epoch />
            </MockTheme>
          </ApolloProvider>
        </RecoilRoot>,
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
