import React,{Component} from 'react';
import styles from './index.less';
import { Button } from 'antd';
import 'antd/dist/antd.css';

import HelloBox from './HelloBox';

function HelloApp(){
    return(
    <div>
        <p className={styles.normal}>
            <div>hello world</div>
            <HelloBox/>
            <Button type="primary">Primary</Button>
        </p>
    </div>
    );
}



export default HelloApp;