import React from 'react'
import { Grid, Box } from '@material-ui/core'
import P1 from '../../assets/p1.png'
import P2 from '../../assets/p2.png'
import P3 from '../../assets/p3.png'
import P4 from '../../assets/p4.png'
import P5 from '../../assets/p5.png'
import P6 from '../../assets/p6.png'
import P7 from '../../assets/p7.jpeg'
import P8 from '../../assets/p8.png'
import Slider from 'react-slick'
import { settings2 } from '../../views/LandingPage/sliderSettings'

const Partners = () => {
    return (
        <Grid
            container
            item
            md={9}
            xs={12}
            spacing={3}
            className="partners-container"
        >
            <Grid item md={12} xs={12} className="header">
                <div className="title">Our Partners</div>
            </Grid>

            <Grid item md={12} xs={12} className="partner">
                <Slider {...settings2} className="partner-div">
                    <div>
                        <img
                            className="partner-image"
                            src={P1}
                            alt="partners-logo"
                        />
                    </div>
                    <div>
                        <img
                            className="partner-image"
                            src={P2}
                            alt="partners-logo"
                        />
                    </div>
                    <div>
                        <img
                            className="partner-image"
                            src={P3}
                            alt="partners-logo"
                        />
                    </div>
                    <div>
                        <img
                            className="partner-image"
                            src={P4}
                            alt="partners-logo"
                        />
                    </div>
                    <div>
                        <img
                            className="partner-image"
                            src={P5}
                            alt="partners-logo"
                        />
                    </div>
                    <div>
                        <img
                            className="partner-image"
                            src={P6}
                            alt="partners-logo"
                        />
                    </div>
                    <div>
                        <img
                            className="partner-image"
                            src={P7}
                            alt="partners-logo"
                        />
                    </div>
                    <div>
                        <img
                            className="partner-image"
                            src={P8}
                            alt="partners-logo"
                        />
                    </div>
                </Slider>
                <Box fontSize="12px" color="blue" fontWeight={600} mt={1}>
                    participating credit banks / intermediaries
                </Box>
            </Grid>
        </Grid>
    )
}

export default Partners
