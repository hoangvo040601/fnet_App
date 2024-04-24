import { List, UserCircle } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import fnet from '../../assets/logo/fnet_logo.png'
import './Header.scss'
const Header = () => {
    //open menu on mobile
    const [openMenuMb, setopenMenuMb] = useState(false);
    const handleClickOpenMenuMb = () => {
        setopenMenuMb(!openMenuMb);
    }
    return (
        <div className='header_container header_container_mb'>
            <div className="header_pc_wraper">
                <div className="header_logo">
                    <Link to='/'>
                        <img src={fnet} alt="fnet" className='fnet' />
                    </Link>
                </div>
                <div className='header_list'>
                    <ul>
                        <NavLink to='/' className={({ isActive, isPending }) => isActive ? "active list_item" : "list_item"}>Trang chủ</NavLink>
                        <NavLink to='infor' className='list_item'>Về FNet</NavLink>
                        <NavLink to='prize' className='list_item'>Bảng Giá</NavLink>
                        <a href='https://fus.gitbook.io/fnet' className='list_item' target="_blank" rel="noreferrer">Hướng Dẫn</a>
                        <NavLink to='dowload' className='list_item'>Tải Về</NavLink>
                        <NavLink to='news' className='list_item'>Tin Tức</NavLink>
                        <NavLink to='contact' className='list_item'>Liên Hệ</NavLink>
                    </ul>
                </div>
                <div className="header_login">
                    <UserCircle size={30} color={'#008cfc'} />
                    <span>Đăng nhập</span>
                </div>
            </div>
            <div className="header_mb_wraper">
                <div className="header_logo_mb">
                    <Link to='/'>
                        <img src={fnet} alt="fnet" className='fnet' />
                    </Link>
                </div>
                <div className="header_menu_mb " onClick={() => handleClickOpenMenuMb()}>
                    <List size={32} color={'#008cfc'} />
                </div>
            </div>
            {
                openMenuMb ?
                    <div className="header_menu_mb_list ">
                        <ul>
                            <NavLink to='/' onClick={() => handleClickOpenMenuMb()} className={({ isActive, isPending }) => isActive ? "list_item_mb active" : "list_item_mb"}>Trang chủ</NavLink>
                            <NavLink to='infor' onClick={() => handleClickOpenMenuMb()} className='list_item_mb'>Về FNet</NavLink>
                            <NavLink to='prize' onClick={() => handleClickOpenMenuMb()} className='list_item_mb'>Bảng Giá</NavLink>
                            <a href='https://fus.gitbook.io/fnet'onClick={() => handleClickOpenMenuMb()} className='list_item_mb' target="_blank" rel="noreferrer">Hướng Dẫn</a>
                            <NavLink to='dowload' onClick={() => handleClickOpenMenuMb()} className='list_item_mb'>Tải Về</NavLink>
                            <NavLink to='news' onClick={() => handleClickOpenMenuMb()} className='list_item_mb'>Tin Tức</NavLink>
                            <NavLink to='contact' onClick={() => handleClickOpenMenuMb()} className='list_item_mb'>Liên Hệ</NavLink>
                        </ul>
                    </div> : <></>
            }
        </div>
    );

}
export default Header;