import React from 'react'
import LOGO from '../assets/logo.png'
import Badge from '@material-ui/core/Badge'
import { IoMdNotifications } from 'react-icons/io'
import { AiOutlinePhone } from 'react-icons/ai'
import { Box, Typography } from '@material-ui/core'
import CustomizedMenus from './Menu'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/">
                    <img src={LOGO} alt="logo" />
                </a>
            </div>
            <div className="menu">
                <Badge badgeContent={2} color="secondary">
                    <IoMdNotifications size="28px" />
                </Badge>
                <Box display="flex" alignItems="center" gridGap="10px">
                    <AiOutlinePhone size="24px" />
                    <Box display="flex" flexDirection="column">
                        <Typography variant="caption">
                            +91 33 22 11 333
                        </Typography>
                        <CustomizedMenus menuName="Help and Contact" />
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column">
                    <Typography variant="caption">Member Name</Typography>
                    <CustomizedMenus menuName="My Account" />
                </Box>
            </div>
        </div>
    )
}

export default NavBar
