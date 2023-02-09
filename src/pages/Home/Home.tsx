import React, { useState } from 'react';
import styles from "./Home.module.scss";
import type { TabsProps, MenuProps } from 'antd';
import { Button, Tabs } from 'antd';
import {
    FormOutlined,
    ControlOutlined,
    LeftSquareOutlined,
    RightSquareOutlined,
    UnorderedListOutlined,
    DeleteOutlined,
    EyeOutlined
} from '@ant-design/icons';
import Header from '../Header';
import ComponentsRepository from '../ComponentsRepository';
import FormTemplate from '../FormTemplate';
import CanvasEmpty from '../CanvasEmpty';
import ComponentsSetting from '../ComponentsSetting';
import FormSetting from '../FormSetting';
import cx from 'classnames';
// import TreeListISvg from '../../components/Svgs/TreeListISvg';


const Home = () => {
    const [leftTabActiveKey, setLeftTabActiveKey] = useState('componentRepository');
    const [rightTabActiveKey, setRightTabActiveKey] = useState('formSetting');

    const leftTabsChange = (key: string) => {
        setLeftTabActiveKey(key);
    };
    const rightTabsChange = (key: string) => {
        setRightTabActiveKey(key);
    };

    const leftTabsItems: TabsProps['items'] = [
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
    const rightTabsItems: TabsProps['items'] = [
        {
            key: 'componentsSetting',
            label: <div>组件设置</div>,
            children: <ComponentsSetting />,
        },
        {
            key: 'formSetting',
            label: <div>表单设置</div>,
            children: <FormSetting />,
        }
    ];

    return (
        <div className={styles.homeBox}>
            <Header />
            <div className={styles.contentBox}>
                <div className={styles.leftComponentBox}>
                    <Tabs activeKey={leftTabActiveKey} items={leftTabsItems} onChange={leftTabsChange} />
                </div>
                <div className={styles.middleContainer}>
                    <div className={styles.toolBarHeader}>
                        <div className={styles.leftBar}>
                            <LeftSquareOutlined className={styles.stepOperator} />
                            <RightSquareOutlined className={cx(styles.stepOperator, styles.rightStep)} />
                            <Button className={styles.treeButton}>
                                <UnorderedListOutlined />
                            </Button>
                        </div>
                        <div className={styles.rightBar}>
                            <div>
                                <DeleteOutlined />
                                <span className={styles.rightText}>清空</span>
                            </div>
                            <div className={styles.rightBarItem}>
                                <EyeOutlined />
                                <span className={styles.rightText}>预览</span>
                            </div>
                            <div className={styles.rightBarItem}>
                                导入JSON
                            </div>
                            <div className={styles.rightBarItem}>
                                导出JSON
                            </div>
                            <div className={styles.rightBarItem}>
                                导出代码
                            </div>
                        </div>
                    </div>
                    <div className={styles.formWidgetMain}>
                        <CanvasEmpty />
                    </div>
                </div>
                <div className={styles.rightPropertyBox}>
                    <Tabs activeKey={rightTabActiveKey} items={rightTabsItems} onChange={rightTabsChange} />
                </div>
            </div>
        </div>
    );
};

export default Home;