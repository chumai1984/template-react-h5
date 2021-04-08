import React from 'react'
import styles from './index.scss';
import {TagList} from '../../SimpleList'

const Screen = ({
    toggleTag,
    folderTags,
    timeTags,
    sureOk,
    cancel,
}) => {

    return (
        <div className={styles.Screen}>
            <div className='sreenBlock'>
                <h5>按时间</h5>
                <TagList
                    list={timeTags}
                    toggleTag={toggleTag}
                    type='timeTags'
                />
            </div>
            <div className='sreenBlock'>
                <h5>文件夹</h5>
                <TagList
                    list={folderTags}
                    toggleTag={toggleTag}
                    type='folderTags'
                />
            </div>
            <div className='sreenBtnBox'>
                <a className='sreenBtn dev' onClick={sureOk}>确定</a>
                <a className='sreenBtn' onClick={cancel} >取消</a>
            </div>
        </div>
    )
}

export default Screen