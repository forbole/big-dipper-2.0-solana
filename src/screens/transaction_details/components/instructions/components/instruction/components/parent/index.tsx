import React from 'react';
import { FormattedInstructionType } from '../../types';

const Parent: React.FC<{instruction: FormattedInstructionType} & ComponentDefault> = (props) => {
  console.log(props, 'props');
  return (
    <div>
      Parent
    </div>
  );
};

export default Parent;
