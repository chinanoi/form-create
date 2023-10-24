import React from 'react';
import styles from './ComponentsRepository.module.less';
import {
    RightOutlined,
    DownOutlined,
    RadiusUprightOutlined,
    CreditCardOutlined,
    BorderlessTableOutlined,
    TableOutlined,
    LineOutlined
} from '@ant-design/icons';
import cx from 'classnames';

const ComponentsRepository = () => {
    const switchLanguage = () => {
        console.log('切换中英文');
    };

    return (
        <div className={styles.allComponents}>
            <div className={styles.layoutCompnents}>
                <div className={styles.boxHeader}>
                    布局容器类
                    {/* <RightOutlined /> */}
                    <DownOutlined />
                </div>
                <div className={styles.componnetsBox}>
                    <div className={styles.componentItem}>
                        <RadiusUprightOutlined className={styles.icon} />
                        <span className={styles.itemText}>单行容器</span>
                    </div>
                    <div className={styles.componentItem}>
                        <CreditCardOutlined className={styles.icon} />
                        <span className={styles.itemText}>多行容器</span>
                    </div>
                    <div className={styles.componentItem}>
                        <BorderlessTableOutlined className={styles.icon} />
                        <span className={styles.itemText}>栅格布局</span>
                    </div>
                    <div className={styles.componentItem}>
                        <TableOutlined className={styles.icon} />
                        <span className={styles.itemText}>表格布局</span>
                    </div>
                    <div className={styles.componentItem}>
                        <LineOutlined className={styles.icon} />
                        <span className={styles.itemText}>分割线</span>
                    </div>
                </div>
            </div>
            <div className={styles.basicCompnents}>
                <div className={cx(styles.boxHeader, styles.underBox)}>
                    基础组件
                    {/* <RightOutlined /> */}
                    <DownOutlined />
                </div>
                <div className={styles.componnetsBox}>
                    <div className={styles.componentItem}>
                        <RadiusUprightOutlined className={styles.icon} />
                        <span className={styles.itemText}>单行输入</span>
                    </div>
                    <div className={styles.componentItem}>
                        <CreditCardOutlined className={styles.icon} />
                        <span className={styles.itemText}>多行输入</span>
                    </div>
                    <div className={styles.componentItem}>
                        <BorderlessTableOutlined className={styles.icon} />
                        <span className={styles.itemText}>单选项</span>
                    </div>
                    <div className={styles.componentItem}>
                        <TableOutlined className={styles.icon} />
                        <span className={styles.itemText}>多选项</span>
                    </div>
                    <div className={styles.componentItem}>
                        <LineOutlined className={styles.icon} />
                        <span className={styles.itemText}>下拉选项</span>
                    </div>
                    <div className={styles.componentItem}>
                        <LineOutlined className={styles.icon} />
                        <span className={styles.itemText}>开关</span>
                    </div>
                    <div className={styles.componentItem}>
                        <LineOutlined className={styles.icon} />
                        <span className={styles.itemText}>按钮</span>
                    </div>
                </div>
            </div>
            <div className={styles.advancedCompnents}>
                <div className={cx(styles.boxHeader, styles.underBox)}>
                    高级组件
                    {/* <RightOutlined /> */}
                    <DownOutlined />
                </div>
                <div className={styles.componnetsBox}>
                    <div className={styles.componentItem}>
                        <RadiusUprightOutlined className={styles.icon} />
                        <span className={styles.itemText}>图片</span>
                    </div>
                    <div className={styles.componentItem}>
                        <CreditCardOutlined className={styles.icon} />
                        <span className={styles.itemText}>文件</span>
                    </div>
                    <div className={styles.componentItem}>
                        <BorderlessTableOutlined className={styles.icon} />
                        <span className={styles.itemText}>富文本</span>
                    </div>
                    <div className={styles.componentItem}>
                        <TableOutlined className={styles.icon} />
                        <span className={styles.itemText}>级联组件</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentsRepository;
