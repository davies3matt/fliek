import Loadable from 'react-loadable';
import Loading from './Loading';

const AsyncProfile = Loadable({
    loader: () => import('../containers/Profile'),
    loading: Loading,
  });

const PrivateRoutes = [
    {
        title: 'Profile',
        path: '/profile',
        component: AsyncProfile,
        exact: true
    }
];

export default PrivateRoutes;