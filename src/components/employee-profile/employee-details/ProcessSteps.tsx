import React from 'react';
import { Divider, Steps } from 'antd';
import { processSteps } from '../mock/MockData';
import Styles from './EmployeeDetails.Style';

function ProcessStepsScreen() {
  return (
    <div style={Styles.StepsDiv}>
      <Steps
        size='small'
        progressDot
        current={0}
        items={processSteps}
      />
    </div>
  );
}

export default ProcessStepsScreen;
