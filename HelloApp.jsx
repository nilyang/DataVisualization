import React,{Component} from 'react';
import styles from './index.less';
import { Button } from 'antd';
import 'antd/dist/antd.css';

function HelloApp(){
    return(
    <div>
        <p className={styles.normal}>
            <div>hello world</div>
            
            <Button type="primary">Primary</Button>
        </p>
    </div>
    );
}

export default HelloApp;