import React from 'react';
import { Button, Dropdown, Tooltip } from 'antd';
import type { TabsProps, MenuProps } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import styles from './Header.module.less';
import logo from '../../assets/bq.jpg';

const Header = () => {
    const switchLanguage = () => {
        console.log('切换中英文');
    };
    const items: MenuProps['items'] = [
        {
            key: 'chinese',
            label: (
                <div onClick={switchLanguage}>
                    简体中文
                </div>
            ),
        },
        {
            key: 'english',
            label: (
                <div onClick={switchLanguage}>
                    English
                </div>
            ),
        },
    ];
    return (
        <header className={styles.headerBox}>
            <div className={styles.leftLogo}>
                <img className={styles.logo} src={logo} alt="" />
                <span className={styles.logoText}>React-Form-Create</span>
            </div>
            <div className={styles.logoRight}>
                <div className={styles.rightItem}>
                    <Dropdown menu={{ items }} placement="bottom" arrow>
                        <Button>简体中文</Button>
                    </Dropdown>
                </div>
                <div className={styles.rightItem}>
                    联系我
                </div>
                <Tooltip placement="bottom" title="Github">
                    <GithubOutlined />
                </Tooltip>
            </div>
        </header>
    );
};

export default Header;
