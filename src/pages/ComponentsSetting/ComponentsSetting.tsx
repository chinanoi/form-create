import React from 'react';
import styles from './ComponentsSetting.module.scss';
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

const ComponentsSetting = () => {
    const [form] = Form.useForm();

    return (
        <Form form={form} layout="vertical">
            <div className={styles.allComponents}>
                <div className={styles.layoutCompnents}>
                    <div className={styles.boxHeader}>
                        基础属性
                        <DownOutlined />
                    </div>
                    <div className={styles.componnetsBox}>
                        <Form.Item
                            className={styles.formItemStyles}
                            tooltip="修改名称后需按回车确认"
                            name="uniqueName"
                            label="唯一名称"
                            rules={[{ required: true }]}
                        >
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item
                            className={styles.formItemStyles}
                            name="label"
                            label="标题"
                        >
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item
                            className={styles.formItemStyles}
                            name="showType"
                            label="显示类型"
                        >
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                    </div>
                </div>
                <div className={styles.basicCompnents}>
                    <div className={cx(styles.boxHeader, styles.underBox)}>
                        高级属性
                        {/* <RightOutlined /> */}
                        <DownOutlined />
                    </div>
                    <div className={styles.componnetsBox}>
                        <Form.Item
                            className={styles.formItemStyles}
                            name="minLength"
                            label="最小长度"
                        >
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item
                            className={styles.formItemStyles}
                            name="maxLength"
                            label="最大长度"
                        >
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item
                            className={styles.formItemStyles}
                            name="showTextNumber"
                            label="显示字数统计"
                        >
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item
                            className={styles.formItemStyles}
                            name="uniqueName"
                            label="头部Icon"
                        >
                            <Input className={styles.inputStyle} />
                        </Form.Item>
                        <Form.Item
                            className={styles.formItemStyles}
                            name="uniqueName"
                            label="尾部Icon"
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
                            <div>onChange</div>
                            <div className={styles.rightButton}>
                                <EditOutlined />
                                <span>编写代码</span>
                            </div>
                        </div>
                        <div className={styles.componentItem}>
                            <div>onClick</div>
                            <div className={styles.rightButton}>
                                <EditOutlined />
                                <span>编写代码</span>
                            </div>
                        </div>
                        <div className={styles.componentItem}>
                            <div>onFocus</div>
                            <div className={styles.rightButton}>
                                <EditOutlined />
                                <span>编写代码</span>
                            </div>
                        </div>
                        <div className={styles.componentItem}>
                            <div>onBlur</div>
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

export default ComponentsSetting;