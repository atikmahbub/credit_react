import React from 'react'
import { Grid, Box } from '@material-ui/core'

const AccountMenu = () => {
    return (
        <Grid container item md={9} xs={12} className="account-container">
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
    )
}

export default AccountMenu
