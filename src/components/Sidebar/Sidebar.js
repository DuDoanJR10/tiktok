import MenuSidebar from './MenuSidebar';
import configs from '~/configs';
import MenuItemSidebar from './MenuItemSidebar';
import MenuUserSidebar from './MenuUserSidebar';
import Copyright from './Copyright';

import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

const SugAccounts = [
    {
        id: 1,
        avatar: '',
        full_name: 'dudoanjr',
        nickname: 'Du Doan',
        followers: '17',
        like: '0',
        tick: true,
    },
    {
        id: 2,
        avatar: '',
        full_name: 'Messi',
        nickname: 'My Idol',
        followers: '4.5M',
        like: '10.5M',
        tick: true,
    },
    {
        id: 3,
        avatar: '',
        full_name: 'dudoanjr10',
        nickname: 'dukick',
        followers: '9',
        like: '0',
        tick: true,
    },
    {
        id: 4,
        avatar: '',
        full_name: 'theanh28entertainment',
        nickname: 'Theanh28 Entertainment',
        followers: '6.4M',
        like: '398',
        tick: true,
    },
    {
        id: 5,
        avatar: '',
        full_name: 'vtv24news',
        nickname: 'VTV24',
        followers: '5.1M',
        like: '144.7M',
        tick: true,
    },
];

const FollowAccounts = [
    {
        id: 1,
        avatar: '',
        full_name: 'Du Doan Van',
        nickname: 'Du Doan',
        followers: '17',
        like: '0',
        tick: true,
    },
    {
        id: 2,
        avatar: '',
        full_name: 'Manchester United',
        nickname: 'My Club',
        followers: '4.5M',
        like: '10.5M',
        tick: false,
    },
    {
        id: 3,
        avatar: '',
        full_name: 'My Story',
        nickname: '@mystory',
        followers: '9',
        like: '0',
        tick: true,
    },
    {
        id: 4,
        avatar: '',
        full_name: 'Radio Status',
        nickname: 'So Sad',
        followers: '6.4M',
        like: '398',
        tick: false,
    },
    {
        id: 5,
        avatar: '',
        full_name: 'vtv24news',
        nickname: 'VTV24',
        followers: '5.1M',
        like: '144.7M',
        tick: true,
    },
];

const DiscoverList = [
    {
        different: true,
        music: false,
        title: 'My Story',
    },
    {
        different: true,
        music: false,
        title: 'One More Time',
    },
    {
        different: true,
        music: false,
        title: 'Neymar',
    },
    {
        different: false,
        music: true,
        title: '100 Years Love - Du Doan',
    },
    {
        different: false,
        music: true,
        title: 'I Love You - dudoanjr',
    },
    {
        different: false,
        music: true,
        title: 'Send My Love - My Story',
    },
    {
        different: false,
        music: true,
        title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
    },
];

const Copyrights = [
    [
        {
            title: 'Du Doan ',
        },
        {
            title: 'Messi',
        },
        {
            title: 'My Story',
        },
        {
            title: 'I Need You',
        },
        {
            title: 'Neymar',
        },
        {
            title: 'Do What You Like',
        },
    ],
    [
        {
            title: 'Advanced',
        },
        {
            title: 'Manchester United',
        },
        {
            title: 'CNTT04',
        },
        {
            title: 'Start Football Club',
        },
        {
            title: 'One More Time',
        },
    ],
    [
        {
            title: 'FC: NONAME',
        },
        {
            title: 'I Love You In Every Universe',
        },
        {
            title: 'I Love You 3000',
        },
    ],
];

function Sidebar() {
    return (
        <div className={cx('parent')}>
            <aside className={cx('wrapper')}>
                <MenuSidebar>
                    <MenuItemSidebar
                        title="For You"
                        to={configs.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItemSidebar
                        title="Following"
                        to={configs.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItemSidebar
                        title="LIVE"
                        to={configs.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </MenuSidebar>

                <MenuUserSidebar
                    SugAccounts={SugAccounts}
                    trueFolow={true}
                    firstTitle="Suggested accounts"
                    lastTitle="See all"
                />
                <MenuUserSidebar
                    FollowAccounts={FollowAccounts}
                    trueSug={true}
                    firstTitle="Following accounts"
                    lastTitle="See more"
                />
                <MenuUserSidebar DiscoverList={DiscoverList} firstTitle="Discover" />
                <Copyright data={Copyrights} />
            </aside>
        </div>
    );
}

export default Sidebar;
