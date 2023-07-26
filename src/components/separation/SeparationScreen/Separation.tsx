import React, {useState} from "react";

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ContentTable from "./ContentTable";


function SeparationScreen() {
const [allCount, setAllCount] = useState(0);
const [actionedCount, setActionedCount] = useState(0);
const [pendingCount, setPendingCount] = useState(0);

  const items: TabsProps['items'] = [
    {
      key: 'all',
      label: `All - ${allCount}`,
      children: <ContentTable />,
    },
    {
      key: 'actioned ',
      label: `To Be Actioned - ${actionedCount}`,
      children: <ContentTable />,
    },
    {
      key: 'pending',
      label: `Pending - ${pendingCount}`,
      children: <ContentTable />,
    },
  ];

    return (
      <div>
        {/* <Breadcrumb  path="Separation" /> */}
     <h1 style={{marginTop: '40px'}}>Separation Process</h1>
     <div>
        <Tabs defaultActiveKey="1"  type="card" items={items} onChange={()=>console.log("hello")} style={{marginTop: '40px'}} />
     </div>
      </div>
    );
  }

export default SeparationScreen;