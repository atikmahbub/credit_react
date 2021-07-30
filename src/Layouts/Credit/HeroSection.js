import React from 'react'
import CHECK from '../../assets/check.svg'
import TUV from '../../assets/tuv.jpeg'
import { Grid } from '@material-ui/core'

const HeroSection = () => {
    return (
        <Grid item md={10} xs={12} className="header">
            <div className="upper-container">
                <div className="title">
                    Credit Comparison with <span>insta payout</span>
                </div>
                <div className="image-container">
                    <img src={CHECK} alt="check" />
                    <img src={TUV} alt="tuv" />
                </div>
            </div>
        </Grid>
    )
}

export default HeroSection
