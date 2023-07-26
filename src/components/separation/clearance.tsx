import React, { useState , CSSProperties} from 'react';
import { useNavigate,useParams } from "react-router-dom";
import './clearance.css';
import {APPROVE,HOLD,DEDUCTION,ADD_ATTACHMENT,REMARKS,SEPARATION_INFO,BACK,SUBMIT} from '../../constants'
import { UploadOutlined } from '@ant-design/icons';
import { Card, Space,Input,Radio,Row,Col,Layout,Button,Breadcrumb,Alert, message, Upload ,List,InputNumber} from 'antd';
import type { RadioChangeEvent,UploadProps } from 'antd';
import  ModalDialog  from '../common/modal'
const { Footer } = Layout;
const { TextArea } = Input;


export interface StylesDictionary {
    [Key: string]: CSSProperties;
}
const style: StylesDictionary = {
    cardStyle:{
        padding: '8px 0',
        marginBottom:'10px' 
    },
    marginBottomStyle:{
        marginBottom:'8px'
    },
    marginRightStyle:{
        marginRight:'8px'
    },
    inputFlex:{
        display: 'flex',
        marginBottom: '10px',
        alignItems: 'center'
    },
    styleAlert:{
        backgroundColor: '#fff',
        border: '1px solid #fff'
    }
   
};
const supportedFile = ['image/png','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']

const Clearance = () =>{
    const [isEnabled,setEnabled] = useState(true)
    const [isModal,setModal] = useState(false)
    const [isAttachment,setAttachment] = useState(true)
    const navigate = useNavigate();
    
    const { empId } = useParams();
    console.log(empId)
    
    /*const [list, setValue] = useState([
        {title:'Access Card Deactivated',deduction:'',attachement:'',remarks:'',status:''},
    ]);*/
    const [list, setValue] = useState([
        {title:'Access Card Deactivated',deduction:'',attachement:'',remarks:'',status:'',isValidFile:true},
        {title:'Cabin & Storage Keys & Stationaries Items',deduction:'',attachement:'',remarks:'',status:'',isValidFile:true},
        {title:'Employee ID Card',deduction:'',attachement:'',remarks:'',status:'',isValidFile:''},
        {title:'Facility Card,2 or 4 Wheeler Pass',deduction:'',attachement:'',remarks:'',status:'',isValidFile:true},
        {title:'Internet Data Card',deduction:'',attachement:'',remarks:'',status:'',isValidFile:true}
    ]);
    const beforeUpload = (file:any,index:number) =>{
        let data = [...list];
        data[index]['isValidFile'] = true;
        const isPNG = supportedFile.indexOf(file.type) > -1;
        if (!isPNG) {
            message.success(`${file.name} is not a png file`,()=>{
                console.log("jh")
            });
            let data = [...list];
            data[index]['isValidFile'] = false;
           

        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error(`${file.name} Image must smaller than 2MB!`);
            let data = [...list];
            data[index]['isValidFile'] = false;
        }
        setValue(data);
        return false
    }
    const onChange = (file:any,index:number) =>{
        let fileList = [...file.fileList];
        fileList = fileList.slice(-1);
        fileList.forEach(function (file, index) {
            let reader = new FileReader();
            reader.onload = (e:any) => {
                file.base64 = e.target.result;
                let data = [...list];
                if(data[index]['isValidFile']){                
                    data[index]['attachement'] = e.target.result;
                    setValue(data);
                }
           // data[index]['file'] = file;
            
            };
            reader.readAsDataURL(file.originFileObj);        
        });       
    }
    const onRemove = (file:any,index:number) =>{
        if(file.base64){
            file.base64 = '';
        }        
        let data = [...list];
        data[index]['attachement'] = '';
        setValue(data);
    }
    /*const props: UploadProps = {
        name: 'file',
        beforeUpload: (file) => {
            console.log(file);
            const isPNG = supportedFile.indexOf(file.type) > -1;
            if (!isPNG) {
              message.error(`${file.name} is not a png file`);
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (isLt2M) {
                message.error(`${file.name} Image must smaller than 2MB!`);
            }
        },
        onChange(info) {
          
          if (info.file.status !== 'uploading') {
            console.log("first part");
            console.log(info.file, info.fileList);  
            setAttachment(false)       
          }
          
          if (info.file.status === 'removed') {
            setAttachment(true)            
          }
          
        },
        onRemove(file){
        }
      };*/
    const typeChangeHandler = (e: RadioChangeEvent,index:number) => {
        let data = [...list];
        data[index]['status'] = e.target.value;
       // data[index]['attachement'] = e.target.value === 2 ?'':data[index]['attachement'];
      // document.getElementsByClassName('ant-upload-list-item-actions')?.classList.toggle('on');
       //let doc = document.getElementById(`row-${index}`);
       let fc =document.querySelector(`#row-${index} .anticon-delete`)  as HTMLElement
       if(fc){
        fc.click();
       }
       
       // onRemove(data[index]['file'],index);
        setValue(data);
        const type = isRadioButtonChecked();
        console.log(type)
        setEnabled(type.length==list.length ? false : true);
    }
    const isRadioButtonChecked = () =>{
        const data = [...list];
        const isSlectedCard=data.filter((item)=> item.status !='')
        return isSlectedCard
    }
    const remarksChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,index:number) => {
        let data = [...list];
        data[index]['remarks'] = e.target.value;  
        setValue(data);  
    };
    const submitHandler = () =>{
        
        setModal(true)
    }
    const okHandler = () =>{
        console.log(list);
        setModal(false)
    }
    const cancelHandler = () =>{
        setModal(false)
    }
   
    const backHandler = () =>{
        navigate("/separation")
    }
    return (
        <>
        <div className='sub-header'>
        {/*<Breadcrumb
            items={[
            {
                title: <a href="/" className='link-highlight'>My Work</a>,
            },
            {
                title: "Separation Process",
            },
            ]}
        />*/}
        <h1>Clearance and deduction details</h1>
        <div>
            <h5>Mahesh Balakrishna</h5>
            <h6>APL - 987654</h6>
        </div>
        
        </div>
        <List
            grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 1,
            lg: 2,
            xl: 2,
            xxl: 1,
            }}
            dataSource={list}
            renderItem={(element:any,index:number) => (
            <List.Item id={`row-${index}`}>
                <Card>
                    <h1>{element.title}</h1>
                    <div style={style.marginBottomStyle}>
                    <Radio.Group onChange={(event)=>typeChangeHandler(event,index)} value={element.status}>
                    <Radio value={1}>{APPROVE}</Radio>
                    <Radio value={2}>{HOLD}</Radio>
                    </Radio.Group>
                    </div>
                    <div style={style.inputFlex}>
                    <Space>
                    <InputNumber placeholder={DEDUCTION} keyboard={true} min={1} disabled={element.status!=1} style={{ display: 'inline-block', width: 'calc(100% + 30px)' }}/>                   
                    <Upload  
                        name="file" 
                        beforeUpload={(file) =>beforeUpload(file, index)}
                        onChange={(file) =>onChange(file, index)}
                        onRemove={(file) =>onRemove(file, index)}
                        showUploadList={element.isValidFile}
                        maxCount={1}
                        >
                        { element.attachement==='' && <Button icon={<UploadOutlined/>} disabled={element.status!=1} >{ADD_ATTACHMENT}</Button>}
                    </Upload>
                    </Space>    
                    {/*<Input placeholder={DEDUCTION} disabled={element.status!=1} style={style.marginRightStyle}/>*/}
                    
                    </div>
                    <div className=''>
                    <TextArea
                    showCount
                    maxLength={100}
                    style={{ height: 80, resize: 'none' }}
                    onChange={(event)=>remarksChangeHandler(event,index)}
                    placeholder={REMARKS}
                    disabled={element.status!=1}
                    />  
                    </div>
                    <div className=''>
                    <Alert
                        message={SEPARATION_INFO}
                        type="info"
                        showIcon
                        style={style.styleAlert}
                    />
                    </div>
                 </Card>
            </List.Item>
            )}
        />
       
        <Card style={{ position: "sticky", bottom: "0px" }}>
        <Row className='card-footer-section'>
            <Space>           
                    <Button onClick={backHandler}>{BACK}</Button>
                    <Button type="primary" onClick={submitHandler} disabled={isEnabled}>{SUBMIT}</Button>
            </Space>
        </Row>        
        </Card>
        {isModal && <ModalDialog showModal={isModal} ok={okHandler} cancel={cancelHandler}/>}
        </>
    )
}

export default Clearance