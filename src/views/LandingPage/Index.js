import React from 'react'
import NavBar from '../../components/NavBar'
import { Grid, TextField, Typography, Box, Button } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import CustomizedSelects from '../../components/CustomSelect'
import { FaUserCheck, FaArrowCircleUp } from 'react-icons/fa'
import { AiFillEuroCircle } from 'react-icons/ai'
import { BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'
import Rating from '@material-ui/lab/Rating'
import BOOK from '../../assets/book.jpeg'
import { settings, settings1, settings2 } from './sliderSettings'
import P1 from '../../assets/p1.png'
import P2 from '../../assets/p2.png'
import P3 from '../../assets/p3.png'
import P4 from '../../assets/p4.png'
import P5 from '../../assets/p5.png'
import P6 from '../../assets/p6.png'
import P7 from '../../assets/p7.jpeg'
import P8 from '../../assets/p8.png'
import Footer from '../../components/Footer'
import CHECK from '../../assets/check.svg'
import TUV from '../../assets/tuv.jpeg'

const Index = () => {
    const comparisonCardData = [
        { name: 'Rescheduling', hint: 'up to 80 € bonuses' },
        { name: 'Car Load', hint: 'up to 80 € bonuses' },
        { name: 'Mortage Lending', hint: 'up to 80 € bonuses' },
        { name: 'Overnight money', hint: 'up to 80 € bonuses' },
        {
            name: 'Credit card',
            hint: 'up to 80 € bonuses',
        },
        { name: 'Checking account', hint: 'up to 80 € bonuses' },
    ]

    return (
        <>
            <NavBar />
            <Grid
                container
                justify="center"
                spacing={2}
                className="landing-page-container"
            >
                <Grid item md={8} xs={12} className="hero-container">
                    <Box display="flex" justifyContent="space-between">
                        <div>
                            <div className="title">
                                Credit Comparison with{' '}
                                <span>instant payout</span>{' '}
                            </div>
                            <div className="subtitle">
                                <span>Secure 0.4% interest now -</span> better
                                than any branch
                            </div>
                            <div className="subtitle">
                                The money will be in account by tomorrow at the
                                latest
                            </div>
                        </div>
                        <div className="coupon">
                            <div>Now</div>
                            <div>-0.4%</div>
                            <div>ef. pa*</div>
                        </div>
                    </Box>
                </Grid>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    item
                    md={8}
                    xs={12}
                    spacing={3}
                    className="input-container"
                >
                    <Grid item xs={12} className="image-container">
                        <Box display="flex" gridGap="15px">
                            <img src={CHECK} />
                            <img src={TUV} />
                        </Box>
                    </Grid>
                    <Grid
                        container
                        item
                        md={12}
                        xs={12}
                        spacing={3}
                        className="input-list"
                    >
                        <Grid item md={4} xs={12}>
                            <Box fontWeight={700} fontSize="14px" mb={1}>
                                Net loan Amount per €
                            </Box>
                            <TextField
                                fullWidth
                                variant="outlined"
                                style={{ backgroundColor: 'white' }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            €
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Box fontWeight={700} fontSize="14px" mb={1}>
                                Usage
                            </Box>
                            <CustomizedSelects />
                        </Grid>
                        <Grid
                            item
                            md={4}
                            xs={12}
                            justify="center"
                            align="center"
                            alignContent="center"
                        >
                            <Box mt={4}>
                                <Button
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                >
                                    Start Credit Comparison
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography variant="caption">
                            * € 1,000 net loan amount, -0.4% eff. Annual
                            interest, -0.4% borrowing interest pa, 12 months,
                            total amount € 997.83, monthly Installment € 83.15,
                            SWK Bank. Corresponds to the repr. Example according
                            to § 6a PAngV.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item md={12} className="login-container">
                    <div className="login">
                        <Box display="flex" gridGap="20px" alignItems="center">
                            <FaUserCheck fontSize="24px" />
                            <div className="text">
                                <span>Log in</span>to transfer data from your
                                customer account
                            </div>
                        </Box>

                        <div className="log-button">Log In</div>
                    </div>
                </Grid>

                <Grid
                    container
                    item
                    md={9}
                    xs={12}
                    justify="center"
                    spacing={3}
                    className="comparison-container"
                >
                    <Grid item md={12} xs={12} className="header">
                        <div className="title">The most used comparisons</div>
                    </Grid>

                    <Grid
                        item
                        md={12}
                        xs={12}
                        className="comparison-card-container"
                    >
                        {comparisonCardData.map((item) => (
                            <Box className="card">
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gridGap="10px"
                                >
                                    <AiFillEuroCircle
                                        color="white"
                                        fontSize="24px"
                                    />
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        gridGap="10px"
                                    >
                                        <Box
                                            fontSize={18}
                                            fontWeight={700}
                                            color="white"
                                        >
                                            {item.name}
                                        </Box>
                                        <Box
                                            fontSize={12}
                                            fontWeight={500}
                                            color="white"
                                        >
                                            {item.hint}
                                        </Box>
                                    </Box>
                                </Box>
                                <BiRightArrowAlt
                                    cursor="pointer
                                "
                                    fontSize="30px"
                                    color="white"
                                />
                            </Box>
                        ))}
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    md={9}
                    xs={12}
                    spacing={3}
                    className="review-container"
                >
                    <div className="slider">
                        <Box
                            fontWeight={700}
                            fontSize="20px"
                            textAlign="center"
                            pt={1}
                        >
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
                                    In publishing and graphic design, Lorem
                                    ipsum is a placeholder text commonly used to
                                    demonstrate the visual form of a document or
                                    a typeface without relying on meaningful
                                    content. Lorem ipsum may be used as a
                                    placeholder before final copy is available.
                                </Box>
                            </div>
                            <div className="slider-item">
                                <Box
                                    fontWeight={500}
                                    fontSize="14px"
                                    textAlign="center"
                                    mt={3}
                                >
                                    In publishing and graphic design, Lorem
                                    ipsum is a placeholder text commonly used to
                                    demonstrate the visual form of a document or
                                    a typeface without relying on meaningful
                                    content. Lorem ipsum may be used as a
                                    placeholder before final copy is available.
                                </Box>
                            </div>
                        </Slider>
                    </div>

                    <Slider {...settings} className="slider">
                        <div className="slider-item">
                            <Box
                                fontWeight={700}
                                fontSize="20px"
                                textAlign="center"
                            >
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
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gridGap="10px"
                                >
                                    <Rating
                                        name="simple-controlled"
                                        value={4.5}
                                    />
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
                        <Box
                            fontSize="12px"
                            color="blue"
                            fontWeight={600}
                            mt={1}
                        >
                            participating credit banks / intermediaries
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    md={9}
                    xs={12}
                    className="account-container"
                >
                    <Grid item md={12} className="header">
                        <div className="title">
                            Account, loan and mortgage comparisons
                        </div>
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            className="account-menu"
                            flexWrap="wrap"
                        >
                            <Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    credit{' '}
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    car loan{' '}
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Installment loan{' '}
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    personal loan{' '}
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    online credit{' '}
                                </Box>
                            </Box>
                            <Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Loan for the self-employed
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Loan calculator
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Rescheduling
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Real estate loan
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Credit cards
                                </Box>
                            </Box>
                            <Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Investment
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Overnight money
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Fixed deposit
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    checking account
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Mortgage lending
                                </Box>
                            </Box>
                            <Box className="account-item">
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    service
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    counselor
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Frequently asked questions
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Lexicons
                                </Box>
                                <Box fontSize="14px" fontWeight={500} mt={1}>
                                    Credit check
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
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
            </Grid>
            <Footer />
            <div className="top">
                <FaArrowCircleUp
                    fontSize="26px"
                    cursor="pointer"
                    color="#002984"
                    onClick={() => window.scrollTo(0, 0)}
                />
            </div>
        </>
    )
}

export default Index
