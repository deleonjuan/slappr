import {useDispatch, useSelector} from 'react-redux';
import uuid from 'react-native-uuid';
import {authActions} from '@store/slices/auth';

export const useUserId = () => {
  const dispatch = useDispatch();
  const {userId} = useSelector((state: any) => state.authReducer);

  const configureUser = () => {
    if (!userId) {
      const newUserId = uuid.v4();
      dispatch(authActions.setUserId(newUserId));
    }
  };

  return configureUser;
};
