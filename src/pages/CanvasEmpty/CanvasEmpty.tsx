import React from 'react';
import styles from './CanvasEmpty.module.scss';

const CanvasEmpty = () => {

    return (
        <div className={styles.empty}>
            请从左侧列表中选择一个组件, 然后用鼠标拖动组件放置于此处.
        </div>
    );
};

export default CanvasEmpty;