import React from 'react';
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import Image from "~/components/Image";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667210400&x-signature=qqW5TOhOwTnubh8JYmDBHCJwbHg%3D" alt="vu" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Vu Do</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>vudo</span>
            </div>
        </div>
    );
}

export default AccountItem;