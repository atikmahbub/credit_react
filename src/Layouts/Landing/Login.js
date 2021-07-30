import React from 'react'
import { Grid, Box } from '@material-ui/core'
import { FaUserCheck, FaArrowCircleUp } from 'react-icons/fa'

const Login = () => {
    return (
        <Grid item md={12} className="login-container">
            <div className="login">
                <Box display="flex" gridGap="20px" alignItems="center">
                    <FaUserCheck fontSize="24px" />
                    <div className="text">
                        <span>Log in</span>to transfer data from your customer
                        account
                    </div>
                </Box>

                <div className="log-button">Log In</div>
            </div>
        </Grid>
    )
}

export default Login
