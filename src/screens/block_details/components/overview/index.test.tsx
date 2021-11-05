import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Overview from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  BoxDetails: (props) => <div id="BoxDetails" {...props} />,
  AvatarName: (props) => <div id="BoxDetailAvatarName" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Overview', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Overview
            {...{
              slot: 40000,
              hash: '35SD2SaqLUvPBnEBRFUxQjjvS6tmzaPvLeJYQC1QV5E1',
              leader: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
              timestamp: '2021-09-13T20:06:17.363145',
              parentSlot: 60000,
              parentHash: '35SD2SaqLUvPBnEBRFUxQjjvS6tmzaPvLeJYQC1QV5E1',
              processedTx: 300,
              successfulTx: 249,
            }}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
