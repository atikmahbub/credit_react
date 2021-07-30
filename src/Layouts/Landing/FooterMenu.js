import React from 'react'
import { Grid, Box } from '@material-ui/core'

const FooterMenu = () => {
    return (
        <Grid container item md={9} xs={12} className="footer-menu">
            <Grid item md={12} xs={12}>
                <Box
                    display="flex"
                    gridGap="10px"
                    flexWrap="wrap"
                    alignItems="center"
                >
                    <a href="#">News</a>
                    <a href="#">Career</a>
                    <a href="#">company</a>
                    <a href="#">CHECK24 helps</a>
                    <a href="#">partner</a>
                    <a href="#">Affiliate program</a>
                    <a href="#">Coupons</a>
                    <a href="#">Contact</a>
                    <a href="#">Conditions</a>
                    <a href="#">data protection </a>
                    <a href="#">imprint</a>
                </Box>
            </Grid>
        </Grid>
    )
}

export default FooterMenu
