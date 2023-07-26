import { useEffect } from 'react';
import { Button,notification } from 'antd';
import './notification.css';


const NotificationComponent = (props) => {
  
    const [api, contextHolder] = notification.useNotification();
    const {type,message} = props;
    useEffect(()=>{
      api[type]({
        duration:150,
        message: message,
        placement:'center'
      });
    },[])
    //const {type,message} = props;
    return (<>
    {contextHolder}
    </>)
}

export default NotificationComponent