import { Grid, TextField, Box, Typography } from '@material-ui/core'
import React from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import CustomizedSelects from '../../components/CustomSelect'
import InputAdornment from '@material-ui/core/InputAdornment'
import { BiFilterAlt, BiSort } from 'react-icons/bi'
import CustomizedMenus from '../../components/Menu'
import { useLocation } from 'react-router'
import CardType1 from '../../components/CardType1'
import CardType2 from '../../components/CardType2'
import HeroSection from '../../Layouts/Credit/HeroSection'

const Credit = () => {
    const routes = useLocation()
    const [activeTab, setActiveTab] = React.useState('interest')
    const [data, setData] = React.useState()
    const [data1, setData1] = React.useState()
    const [random, setRandom] = React.useState()
    const [state, setState] = React.useState({
        price: '',
        usage: '',
    })

    const handleSelectTab = (value) => {
        setActiveTab(value)
    }

    const fetchData = () => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (myJson) {
                setData(myJson)
            })
        fetch('data1.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (myJson) {
                setData1(myJson)
            })
    }

    React.useEffect(() => {
        fetchData()
        window.scrollTo(0, 0)
    }, [])

    React.useEffect(() => {
        if (routes?.state?.value) {
            const newValue = routes?.state?.value
            setState({
                ...state,
                price: newValue.price,
                usage: newValue.usage,
            })
        }
    }, [])

    React.useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 3)
        setRandom(randomNumber)
    }, [state])

    const usageOptions = [
        { name: 'Free Usage', value: 'free' },
        { name: 'Trial Usage', value: 'trial' },
    ]
    return (
        <>
            <NavBar />
            <Grid
                container
                spacing={3}
                justify="center"
                className="credit-container"
            >
                <HeroSection />
                <Grid
                    container
                    item
                    md={12}
                    xs={12}
                    justify="center"
                    className="input-container"
                >
                    <Grid container item md={10} xs={12} spacing={3}>
                        <Grid item md={4} xs={12}>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Box fontWeight={700} fontSize="18px" mb={1}>
                                    How Much
                                </Box>
                                <Typography
                                    variant="caption"
                                    color="textSecondary"
                                >
                                    Net loan amount
                                </Typography>
                            </Box>

                            <TextField
                                fullWidth
                                variant="outlined"
                                style={{ backgroundColor: 'white' }}
                                value={state.price}
                                onChange={(e) =>
                                    setState({
                                        ...state,
                                        price: e.target.value,
                                    })
                                }
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
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Box fontWeight={700} fontSize="18px" mb={1}>
                                    For What?
                                </Box>
                                <Typography
                                    variant="caption"
                                    color="textSecondary"
                                >
                                    Term/Number of Installment
                                </Typography>
                            </Box>
                            <CustomizedSelects />
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Box fontWeight={700} fontSize="18px" mb={1}>
                                    For What?
                                </Box>
                                <Typography
                                    variant="caption"
                                    color="textSecondary"
                                >
                                    Usage
                                </Typography>
                            </Box>
                            <CustomizedSelects
                                selectItem={usageOptions}
                                defaultValue={state.usage}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={10} xs={12} className="tab-container">
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        className="tab-div"
                    >
                        <Box display="flex" alignItems="center" gridGap="10px">
                            <div
                                className={
                                    activeTab === 'interest'
                                        ? 'tab-item active'
                                        : 'tab-item'
                                }
                                onClick={() => handleSelectTab('interest')}
                            >
                                Our Interest
                            </div>
                            <div
                                className={
                                    activeTab === 'area'
                                        ? 'tab-item active'
                                        : 'tab-item'
                                }
                                onClick={() => handleSelectTab('area')}
                            >
                                interests in your area
                            </div>
                        </Box>
                        <Box display="flex" alignItems="center" gridGap="20px">
                            <Box
                                display="flex"
                                alignItems="center"
                                gridGap="5px"
                            >
                                <BiFilterAlt />
                                <CustomizedMenus menuName="filter" />
                            </Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                gridGap="5px"
                            >
                                <BiSort />
                                <CustomizedMenus menuName="sort by" />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={10} xs={12}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Typography variant="caption">Bank</Typography>
                        <Typography variant="caption">Eigenscaften</Typography>
                        <Typography variant="caption">
                            monatliche Rate
                        </Typography>
                        <Typography variant="caption">
                            effektiver Jaherzins
                        </Typography>
                    </Box>
                    <CardType1 data={data && data[random]} />
                    <CardType2 data={data1 && data1[random]} />
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default Credit
