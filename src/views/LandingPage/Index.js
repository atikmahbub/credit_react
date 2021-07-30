import React from 'react'
import NavBar from '../../components/NavBar'
import { Grid, TextField, Typography, Box, Button } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import CustomizedSelects from '../../components/CustomSelect'
import { FaArrowCircleUp } from 'react-icons/fa'
import Footer from '../../components/Footer'
import CHECK from '../../assets/check.svg'
import TUV from '../../assets/tuv.jpeg'
import { useHistory } from 'react-router'
import FooterMenu from '../../Layouts/Landing/FooterMenu'
import AccountMenu from '../../Layouts/Landing/AccountMenu'
import Comparison from '../../Layouts/Landing/Comparison'
import Hero from '../../Layouts/Landing/Hero'
import Login from '../../Layouts/Landing/Login'
import Partners from '../../Layouts/Landing/Partners'
import ReviewLayout from '../../Layouts/Landing/ReviewLayout'

const Index = () => {
  const history = useHistory()
  const [state, setState] = React.useState({
    price: '',
    usage: '',
  })

  const handleClickComparison = (e) => {
    e.preventDefault()
    history.push({
      pathname: '/credit',
      state: {
        value: state,
      },
    })
  }

  const usageOptions = [
    { name: 'Free Usage', value: 'free' },
    { name: 'Trial Usage', value: 'trial' },
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
        <Hero />
        <Comparison />
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
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                }}
                onChange={(e) =>
                  setState({
                    ...state,
                    price: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <Box fontWeight={700} fontSize="14px" mb={1}>
                Usage
              </Box>
              <CustomizedSelects
                selectItem={usageOptions}
                getValue={(value) =>
                  setState({
                    ...state,
                    usage: value,
                  })
                }
              />
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
                  onClick={handleClickComparison}
                >
                  Start Credit Comparison
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography variant="caption">
              * € 1,000 net loan amount, -0.4% eff. Annual interest, -0.4%
              borrowing interest pa, 12 months, total amount € 997.83, monthly
              Installment € 83.15, SWK Bank. Corresponds to the repr. Example
              according to § 6a PAngV.
            </Typography>
          </Grid>
        </Grid>
        <Login />
        <ReviewLayout />
        <Partners />
        <AccountMenu />
        <FooterMenu />
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
