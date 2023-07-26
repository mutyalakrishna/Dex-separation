import React from 'react';
import { Upload, Button } from 'antd';
import { processSteps } from '../mock/MockData';
import { CloudUploadOutlined } from '@ant-design/icons';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import Styles from './UploadResume.Style'
const { Dragger } = Upload;

const props: UploadProps = {
    onRemove: (file: any) => {

    },
    beforeUpload: (file: any) => {
console.log("uploading", file)
    },
    // fileList,
    name: 'file',
    multiple: false,

};

function FileUploadScreen() {
    return (
        <div>
            <div style={Styles.uploadResumeTitleDiv}>
                <p style={Styles.uploadResumeTitle}>Upload Your Resume For Extracting Your Skills</p>
                <Button>Default Button</Button>

            </div>
            <Dragger {...props} style={{ height: '60%' }} accept=".pdf,.doc,.docx" listType="picture"
                maxCount={1}

            >
                <p className="ant-upload-drag-icon">
                <CloudUploadOutlined />                </p>
                <p className="ant-upload-text">Click here to upload or drag</p>
                <p className="ant-upload-hint">
                    Format accepted PDF, DOCX
                </p>
            </Dragger>
        </div>
    );
}

export default FileUploadScreen;
