import images from '~/assets/images';
import { Link } from 'react-router-dom';
import configs from '~/configs';
import InputSearch from '../InputSearch';
import Image from '~/components/Image';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { MailboxIcon, MessengerIcon } from '~/components/Icons';
import Button from '~/components/Button';
import Menu from '~/components/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faGear,
    faArrowUpFromBracket,
    faUser,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

const image = require('../../assets/images/DuDoan.png');

function Header() {
    const currentUser = true;

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Korea',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'American',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'Espanol',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'French',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Chinese',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Japan',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'Italiano',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Brazil',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Australian',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Singapore',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'Germany',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Argentina',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Chile',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Thai',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shorcuts',
        },
    ];

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@messi',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log('Change language!');
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={configs.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <InputSearch />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-btn', 'upload')}>
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                </button>
                            </Tippy>
                            <Tippy content="Messenger" placement="bottom">
                                <button className={cx('action-btn', 'messenger')}>
                                    <MessengerIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Mailbox" placement="bottom">
                                <button className={cx('action-btn', 'mailbox')}>
                                    <MailboxIcon />
                                    <span className={cx('badge')}>99</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu onChange={handleMenuChange} items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image src={image} className={cx('user-avatar')} alt="Username" />
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
