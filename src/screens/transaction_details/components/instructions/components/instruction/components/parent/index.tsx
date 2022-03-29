import React from 'react';
import { InstructionBase } from '@models';

const Parent: React.FC<{instruction: InstructionBase} & ComponentDefault> = (props) => {
  return (
    <div>
      Parent
    </div>
  );
};

export default Parent;
