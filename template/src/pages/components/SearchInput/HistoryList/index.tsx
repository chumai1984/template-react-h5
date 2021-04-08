import React from 'react'
import styles from './index.scss';
import { WIcon } from '@/utils/tool';

const ListItem = ({ children, className, _getSearchData, _addHistoty }) => {


    return (
        <li className={className ? `SearchTag ${className}` : 'SearchTag'}  >
            <span className={'history'} onMouseDown={() => {
                _getSearchData(children)
            }}>
                {
                    children
                }
            </span>

            <span className={'historyDel'}>
                <WIcon type='icondelete' style={{ color: '#aaaaaa' }} onMouseDown={() => {
                    _addHistoty(children, 'remove')
                }} />
            </span>

        </li>
    )
}


const HisTory = ({
    history,
    _clearHistory,
    _addHistoty,
    _getSearchData
}) => {
    return (
        <div className={styles.history}>
            <ul>
                {
                    history.map((item) => (
                        <ListItem
                            key={'timeTags' + item.key.toString()}
                            _addHistoty={_addHistoty}
                            _getSearchData={_getSearchData}
                            className={item.isSelect ? 'dev' : ''}>
                            {item.text}
                        </ListItem>))
                }
            </ul>

            <div className='clearBox'>
                <a onMouseDown={_clearHistory}>清除历史</a>
            </div>
        </div>
    )
}

export default HisTory