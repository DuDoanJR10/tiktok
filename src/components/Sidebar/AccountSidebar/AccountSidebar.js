import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './AccountSidebar.module.scss';
const cx = classNames.bind(styles);

function AccountSidebar({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <h4 className={cx('fullName')}>{data.full_name}</h4>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </div>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

AccountSidebar.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountSidebar;
