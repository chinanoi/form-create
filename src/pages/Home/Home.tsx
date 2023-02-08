import React, { useState } from 'react';
import styles from "./Home.module.scss";
import type { TabsProps, MenuProps } from 'antd';
import { Button, Tabs } from 'antd';
import { FormOutlined, ControlOutlined } from '@ant-design/icons';
import Header from '../Header';
import ComponentsRepository from '../ComponentsRepository';
import FormTemplate from '../FormTemplate';


const Home = () => {
    const [tabActiveKey, setTabActiveKey] = useState('formTemplate');

    const tabsChange = (key: string) => {
        setTabActiveKey(key);
    };

    const tabsItems: TabsProps['items'] = [
        {
            key: 'componentRepository',
            label: <div><ControlOutlined />组件库</div>,
            children: <ComponentsRepository />,
        },
        {
            key: 'formTemplate',
            label: <div><FormOutlined />表单模板</div>,
            children: <FormTemplate />,
        }
    ];

    return (
        <div className={styles.homeBox}>
            <Header />
            <div className={styles.contentBox}>
                <div className={styles.leftComponentBox}>
                    <Tabs activeKey={tabActiveKey} items={tabsItems} onChange={tabsChange} />
                </div>
                <div className="minddleDrawBox"></div>
                <div className="rightPropertyBox"></div>
            </div>
        </div>
    );
};

export default Home;