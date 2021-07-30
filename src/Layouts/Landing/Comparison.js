import React from 'react'
import { Grid, Box } from '@material-ui/core'
import { BiRightArrowAlt } from 'react-icons/bi'
import { AiFillEuroCircle } from 'react-icons/ai'

const Comparison = () => {
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

            <Grid item md={12} xs={12} className="comparison-card-container">
                {comparisonCardData.map((item) => (
                    <Box className="card">
                        <Box display="flex" alignItems="center" gridGap="10px">
                            <AiFillEuroCircle color="white" fontSize="24px" />
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
    )
}

export default Comparison
