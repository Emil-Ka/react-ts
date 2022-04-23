import React, { useEffect } from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useDispatch} from 'react-redux';

import {fetchUser} from '../store/action-creators/user';

const UserList: React.FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.user);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchUser());
  }, []);


  return (
    <div>
      
    </div>
  );
};

export default UserList;