import React from 'react'
import Slider from 'react-slick'
import { settings, settings1 } from '../../views/LandingPage/sliderSettings'
import { Grid, Box } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import BOOK from '../../assets/book.jpeg'

const ReviewLayout = () => {
    return (
        <Grid
            container
            item
            md={9}
            xs={12}
            spacing={3}
            className="review-container"
        >
            <div className="slider">
                <Box fontWeight={700} fontSize="20px" textAlign="center" pt={1}>
                    That's what our customers say
                </Box>
                <Slider {...settings}>
                    <div className="slider-item">
                        <Box
                            fontWeight={500}
                            fontSize="14px"
                            textAlign="center"
                            mt={3}
                        >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without
                            relying on meaningful content. Lorem ipsum may be
                            used as a placeholder before final copy is
                            available.
                        </Box>
                    </div>
                    <div className="slider-item">
                        <Box
                            fontWeight={500}
                            fontSize="14px"
                            textAlign="center"
                            mt={3}
                        >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text commonly used to demonstrate the
                            visual form of a document or a typeface without
                            relying on meaningful content. Lorem ipsum may be
                            used as a placeholder before final copy is
                            available.
                        </Box>
                    </div>
                </Slider>
            </div>

            <Slider {...settings} className="slider">
                <div className="slider-item">
                    <Box fontWeight={700} fontSize="20px" textAlign="center">
                        Our reviews
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        className="slider-item"
                        mt={0}
                    >
                        <Box fontSize="12px" fontWeight={600}>
                            finances
                        </Box>
                        <Box display="flex" alignItems="center" gridGap="10px">
                            <Rating name="simple-controlled" value={4.5} />
                            <Box fontSize="14px" fontWeight={600}>
                                4.9/5
                            </Box>
                        </Box>
                        <Box fontSize="12px" fontWeight={600} mt={1}>
                            11,595 reviews(last 12 months)
                        </Box>
                        <Box fontSize="12px" fontWeight={600}>
                            111,595 total
                        </Box>
                        <Box
                            fontSize="12px"
                            fontWeight={600}
                            color="blue"
                            mt={1}
                        >
                            review all reviews
                        </Box>
                    </Box>
                </div>
            </Slider>
            <div className="slider">
                <Box
                    mb={3}
                    fontWeight={700}
                    textAlign="center"
                    fontSize="20px"
                    pt={1}
                >
                    we are the test winner
                </Box>
                <Slider {...settings1}>
                    <div className="slider-item">
                        <img src={BOOK} width="40" alt="book" />
                    </div>
                    <div className="slider-item">
                        <img src={BOOK} width="40" alt="book" />
                    </div>
                    <div className="slider-item">
                        <img src={BOOK} width="40" alt="book" />
                    </div>
                    <div className="slider-item">
                        <img src={BOOK} width="40" alt="book" />
                    </div>
                </Slider>
            </div>
        </Grid>
    )
}

export default ReviewLayout
