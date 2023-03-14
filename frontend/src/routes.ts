import React from 'react';

import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const DashBoard = React.lazy(() => import('./templates/DashBoard'));
const MemberPage = React.lazy(() => import('./templates/MemberPage'));
const MyBoard = React.lazy(() => import('./templates/MyBoard'));
const ProjectPage = React.lazy(() => import('./templates/ProjectPage'));
const LoginPage = React.lazy(() => import('./templates/LoginPage'));
const CallbackPage = React.lazy(() => import('./templates/Callback'));

const routes = [
    { path: '/home', label: "ホーム", icon: PersonIcon, element: MyBoard, },
    { path: '/login', label: "ログイン", icon: PersonIcon, element: LoginPage, },
    { path: '/my-board', label: "Myボード", icon: PersonIcon, element: MyBoard },
    { path: '/dashboard', label: "ダッシュボード", icon: DashboardIcon, element: DashBoard },
    { path: '/members', label: "メンバー", icon: PeopleIcon, element: MemberPage },
    { path: '/projects', label: "案件", icon: PendingActionsIcon, element: ProjectPage },
    { path: '/', label: "Callback", icon: PendingActionsIcon, element: CallbackPage },
]

export default routes;
