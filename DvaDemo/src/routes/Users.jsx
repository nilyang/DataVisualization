import React , {PropTypes} from 'react'

import UserList from '../components/Users/UserList'
import UserSearch from '../components/Users/UserSearch'
import UserModal from '../components/Users/UserModal'

import styles from './Users.less'

function Users() {
  const userSearchProps = {};
  const userListProps = {};
  const userModalProps = {};

  return (
    <div className={styles.normal}>
      {/* 用户筛选搜索框 */}
      <UserSearch {...userSearchProps} />
      {/* 用户信息展示列表 */}
      <UserList {...userListProps} />
      {/* 添加用户 & 修改用户弹出的浮层 */}
      <UserModal {...userModalProps} />
    </div>
  );

}

Users.propTypes = {

};

export default Users;