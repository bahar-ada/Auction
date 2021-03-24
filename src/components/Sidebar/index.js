import React from 'react';
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">حراجی ها</SidebarLink>
                <SidebarLink to="/">پیشنهادات ویژه</SidebarLink>
                <SidebarLink to="/">تمامی موارد</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/"> شرکت در حراج</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
