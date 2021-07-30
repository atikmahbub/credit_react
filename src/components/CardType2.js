import { Box, Typography } from '@material-ui/core'
import React from 'react'

const CardType2 = ({ data }) => {
    return (
        <Box className="credit-card-container">
            <div className="second-card" style={{ width: '45%' }}>
                <Box fontWeight={700} fontSize={16}>
                    one request-all top rates
                </Box>
                <Box fontSize={14} mt={2}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                </Box>
            </div>

            <div className="second-card">
                <Box display="flex" alignItems="center" gridGap="5px" mt={4}>
                    <Box color="blue" fontWeight={600}>
                        1.
                    </Box>
                    <Box fontSize={14}>Fill out loan application</Box>
                </Box>
                <Box display="flex" alignItems="center" gridGap="5px" mt={1}>
                    <Box color="blue" fontWeight={600}>
                        2.
                    </Box>
                    <Box fontSize={14}>
                        receive orders from our partner bank
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" gridGap="5px" mt={1}>
                    <Box color="blue" fontWeight={600}>
                        3.
                    </Box>
                    <Box fontSize={14}>select a plan & take out loan</Box>
                </Box>
            </div>
            <div className="second-card">
                <Box
                    fontSize={12}
                    fontWeight={700}
                    width={150}
                    style={{
                        padding: '5px',
                        backgroundColor: 'tomato',
                        color: 'white',
                        display: 'block',
                        marginLeft: 'auto',
                    }}
                >
                    only with us until july 31st
                </Box>

                <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    flexDirection="column"
                >
                    <Box style={{ textDecoration: 'line-through' }} mt={1}>
                        {data && data?.average}
                    </Box>
                    <Box
                        mt={1}
                        color="red"
                        fontSize={18}
                        fontWeight={700}
                        mb={1}
                    >
                        {data && data.totalReview}€
                    </Box>
                    <Typography variant="caption">
                        Up to {data && data.monthlySave}
                    </Typography>

                    <Box>
                        <Typography className="further-icon">
                            further
                        </Typography>
                    </Box>
                </Box>
            </div>
        </Box>
    )
}

export default CardType2
