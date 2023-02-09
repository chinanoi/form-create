import React from 'react';
import styles from './FormSetting.module.scss';
import {
    RightOutlined,
    DownOutlined,
    RadiusUprightOutlined,
    CreditCardOutlined,
    BorderlessTableOutlined,
    TableOutlined,
    EditOutlined
} from '@ant-design/icons';
import cx from 'classnames';
import { Form, Input } from 'antd';

const FormSetting = () => {
    const [form] = Form.useForm();

    return (
        <Form form={form} layout="vertical">
            <div className={styles.allComponents}>
                <div className={styles.layoutCompnents}>
                    <div className={styles.boxHeader}>
                        基本属性
                        <DownOutlined />
                    </div>
                    <div className={styles.componnetsBox}>
                        <Form.Item
                            className={styles.formItemStyles}
                            name="uniqueName"
                            label="全局组件大小"
                        >
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item
                            className={styles.formItemStyles}
                            name="label"
                            label="字段标签位置"
                        >
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item
                            className={styles.formItemStyles}
                            name="showType"
                            label="标签对齐"
                        >
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item
                            className={styles.formItemStyles}
                            name="showType"
                            label="标签宽度"
                        >
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                    </div>
                </div>
                <div className={styles.advancedCompnents}>
                    <div className={cx(styles.boxHeader, styles.underBox)}>
                        事件属性
                        {/* <RightOutlined /> */}
                        <DownOutlined />
                    </div>
                    <div className={styles.componnetsBox}>
                        <div className={styles.componentItem}>
                            <div>onFormDataChange</div>
                            <div className={styles.rightButton}>
                                <EditOutlined />
                                <span>编写代码</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default FormSetting;