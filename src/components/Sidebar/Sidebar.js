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
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/29edd0a826772c6ef5a39ea5cb86134b.jpeg?x-expires=1658397600&x-signature=mSmSDUfJFfAmB1ewk9SUeTwUuks%3D',
        full_name: 'dudoanjr',
        nickname: 'Du Doan',
        followers: '17',
        like: '0',
        tick: true,
    },
    {
        id: 2,
        avatar: '/https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/148985770_176097087641595_863917603171557104_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=tcDyCnQKDhgAX_ZlUNZ&tn=DcOUJ_ilZamvTKmY&_nc_ht=scontent.fhan15-2.fna&oh=00_AT-uAlcjABe8JjeV-LQb3tYSRKdvejueyhrVa9tk_bpSXQ&oe=62FC4C71',
        full_name: 'Nguyen Ngoc Thanhh',
        nickname: 'My Love',
        followers: '4.5M',
        like: '10.5M',
        tick: true,
    },
    {
        id: 3,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1c60bd6f6e3f9647081fda5206dcbfd9~c5_100x100.jpeg?x-expires=1657443600&x-signature=GCOFzexPILqm7doDkqC2gRqUBa4%3D',
        full_name: 'thinkaboutisyou_',
        nickname: '@th',
        followers: '9',
        like: '0',
        tick: true,
    },
    {
        id: 4,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1658401200&x-signature=WPKCkFmPinSsrsP2q%2BecxvRbTwk%3D',
        full_name: 'theanh28entertainment',
        nickname: 'Theanh28 Entertainment',
        followers: '6.4M',
        like: '398',
        tick: true,
    },
    {
        id: 5,
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_100x100.jpeg?x-expires=1658397600&x-signature=XWsXY2i3MH%2FluLDz%2BCY5lCSW2B8%3D',
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
        avatar: '/https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/29edd0a826772c6ef5a39ea5cb86134b.jpeg?x-expires=1658397600&x-signature=mSmSDUfJFfAmB1ewk9SUeTwUuks%3D',
        full_name: 'Du Doan Van',
        nickname: 'Du Doan',
        followers: '17',
        like: '0',
        tick: true,
    },
    {
        id: 2,
        avatar: '/https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/148985770_176097087641595_863917603171557104_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=tcDyCnQKDhgAX_ZlUNZ&tn=DcOUJ_ilZamvTKmY&_nc_ht=scontent.fhan15-2.fna&oh=00_AT-uAlcjABe8JjeV-LQb3tYSRKdvejueyhrVa9tk_bpSXQ&oe=62FC4C71',
        full_name: 'Ngoc Thanhh',
        nickname: 'My Love',
        followers: '4.5M',
        like: '10.5M',
        tick: false,
    },
    {
        id: 3,
        avatar: '/https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1c60bd6f6e3f9647081fda5206dcbfd9~c5_100x100.jpeg?x-expires=1657443600&x-signature=GCOFzexPILqm7doDkqC2gRqUBa4%3D',
        full_name: 'thinkaboutisyou_',
        nickname: '@th',
        followers: '9',
        like: '0',
        tick: true,
    },
    {
        id: 4,
        avatar: '/https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1658401200&x-signature=WPKCkFmPinSsrsP2q%2BecxvRbTwk%3D',
        full_name: 'Radio Status',
        nickname: 'So Happy',
        followers: '6.4M',
        like: '398',
        tick: false,
    },
    {
        id: 5,
        avatar: '/https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f485490f970a0c1ccbf158b9e468450b~c5_100x100.jpeg?x-expires=1658397600&x-signature=XWsXY2i3MH%2FluLDz%2BCY5lCSW2B8%3D',
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
        title: 'My Love',
    },
    {
        different: true,
        music: false,
        title: 'One More Time',
    },
    {
        different: true,
        music: false,
        title: 'Nguyen Ngoc Thanh',
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
        title: 'Send My Love - Ngoc Thanhh',
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
            title: 'Ngoc Thanhh',
        },
        {
            title: 'My love',
        },
        {
            title: 'I Need You',
        },
        {
            title: 'Messi',
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
