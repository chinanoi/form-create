import React from 'react';
import styles from './FormTemplate.module.scss';
import { Button, Popover } from 'antd';
import itemPicture from '../../assets/bq.jpg';

const BigPic = () => {
    return (
        <div>
            <img style={{ width: '600px' }} src={itemPicture} alt="" />
        </div>
    );
};

const FormTemplate = () => {

    return (
        <div className={styles.templateExample}>
            <div className={styles.templateItem}>
                <div className={styles.cardBox}>
                    <Popover placement="right" content={<BigPic />} title="Title">
                        <img className={styles.templatePhoto} src={itemPicture} alt="" />
                    </Popover>
                    <div className={styles.templateName}>
                        <div className={styles.name}>#3 分组表单</div>
                        <div className={styles.loading}>加载此模板</div>
                    </div>
                </div>
            </div>
            <div className={styles.templateItem}>
                <div className={styles.cardBox}>
                    <Popover placement="right" content={<BigPic />} title="Title">
                        <img className={styles.templatePhoto} src={itemPicture} alt="" />
                    </Popover>
                    <div className={styles.templateName}>
                        <div className={styles.name}>#3 分组表单</div>
                        <div className={styles.loading}>加载此模板</div>
                    </div>
                </div>
            </div>
            <div className={styles.templateItem}>
                <div className={styles.cardBox}>
                    <Popover placement="right" content={<BigPic />} title="Title">
                        <img className={styles.templatePhoto} src={itemPicture} alt="" />
                    </Popover>
                    <div className={styles.templateName}>
                        <div className={styles.name}>#3 分组表单</div>
                        <div className={styles.loading}>加载此模板</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormTemplate;