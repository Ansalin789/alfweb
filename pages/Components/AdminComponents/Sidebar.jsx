import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Sidebar.module.css'; // Adjust the path if needed
// import { assets } from '@/Assets/assets';

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {/* <Image src={assets.logo} width={120} alt="Logo" /> */}
            </div>
            <div className={`${styles.sidebar} ${styles.sidebarWide}`}>
                <div className={`${styles.linksContainer} ${styles.linksContainerWide}`}>
                    <Link href="/addBlog" className={styles.link}>
                        {/* <Image src={assets.add_icon} alt="Add Icon" width={28} /> */}
                        <p className={`${styles.linkText} ${styles.linkTextWide}`}>Add blogs</p>
                    </Link>
                    <Link href="/blogList" className={styles.link}>
                        {/* <Image src={assets.blog_icon} alt="Blog Icon" width={28} /> */}
                        <p className={`${styles.linkText} ${styles.linkTextWide}`}>Blog lists</p>
                    </Link>
                    <Link href="/subscriptions" className={styles.link}>
                        {/* <Image src={assets.email_icon} alt="Email Icon" width={28} /> */}
                        <p className={`${styles.linkText} ${styles.linkTextWide}`}>Subscriptions</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
