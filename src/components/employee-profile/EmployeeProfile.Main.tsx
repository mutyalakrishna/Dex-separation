import React from 'react'
import EmployeeDetailsScreen from './employee-details/EmployeeDetailsView';
import ProcessStepsScreen from './employee-details/ProcessSteps';
import FileUploadScreen from './upload-resume/FileUpload';

function EmployeeProfileMainScreen() {

    return (
        <>
            <div>
                <EmployeeDetailsScreen />
                <ProcessStepsScreen />
            </div>
            <div>
                <FileUploadScreen />
            </div>
        </>
    );
}

export default EmployeeProfileMainScreen
