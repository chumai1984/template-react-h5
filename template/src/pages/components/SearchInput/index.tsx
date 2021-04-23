import React from 'react'
import { Input, Icon } from 'antd';
import Screen from './Screen'
import HistoryList from './HistoryList'
import { WIcon } from '@/utils/tool';
import styles from './index.less';
const SearchInputDumb = ({
    placeholder = '智能搜索，请输入任意关键字',
    hideSuffix = true,
    screen,
    timeTags,
    folderTags,
    history,
    searchValue,
    _toggleScreen,
    _toggleTag,
    _sureOk,
    _cancel,
    _onBlur,
    _onFocus,
    _addHistoty,
    _changeSearch,
    _getSearchData,
    _clearHistory
}) => {
    return (
        <div className={styles.searchInput}>
            <Input
                placeholder={placeholder}
                // prefix={<WIcon type='iconsearch' className='search' onClick={() => _getSearchData()} />}
                suffix={<div>
                    {
                        hideSuffix ? null : <span onClick={_toggleScreen} className='suffix'><WIcon type='iconshaixuan' /></span>
                    }
                  <span onClick={() => _getSearchData()} className='search'><WIcon type='iconsearch' /></span>
                </div>}
                onBlur={_onBlur}
                onFocus={_onFocus}
                value={searchValue}
                onChange={(e) => {
                    if (e && e.target && e.target.value) {
                        let value = e.target.value;
                        _changeSearch(value)
                    } else {
                        _changeSearch('')
                    }
                }}
                onPressEnter={(e) => {
                    if (e && e.target && e.target.value) {
                        let value = e.target.value;
                        _getSearchData(value)
                    } else {
                        _getSearchData('')
                    }
                }}
            />
            {
                screen.isShow &&
                (<div className='sreen'>
                    {
                        screen.screen ? screen.screen() :
                            <Screen
                                timeTags={timeTags}
                                folderTags={folderTags}
                                toggleTag={_toggleTag}
                                sureOk={_sureOk}
                                cancel={_cancel} />
                    }
                </div>)
            }
            {
                (history.isShow && history.history.length > 0) &&
                (<div className='history'>
                    {
                        history.history ? <HistoryList history={history.history} _clearHistory={_clearHistory} _getSearchData={_getSearchData} _addHistoty={_addHistoty} /> : null
                    }

                </div>)
            }
        </div>
    )
}

export default SearchInputDumb
