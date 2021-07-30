import React from 'react'
import { Grid, Box } from '@material-ui/core'

const Hero = () => {
    return (
        <Grid item md={8} xs={12} className="hero-container">
            <Box display="flex" justifyContent="space-between">
                <div>
                    <div className="title">
                        Credit Comparison with <span>instant payout</span>{' '}
                    </div>
                    <div className="subtitle">
                        <span>Secure 0.4% interest now -</span> better than any
                        branch
                    </div>
                    <div className="subtitle">
                        The money will be in account by tomorrow at the latest
                    </div>
                </div>
                <div className="coupon">
                    <div>Now</div>
                    <div>-0.4%</div>
                    <div>ef. pa*</div>
                </div>
            </Box>
        </Grid>
    )
}

export default Hero
