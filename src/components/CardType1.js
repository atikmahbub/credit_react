import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { TiTick } from 'react-icons/ti'
import CustomizedMenus from './Menu'
import Rating from '@material-ui/lab/Rating'
import P1 from '../assets/p1.png'
import { AiFillLike } from 'react-icons/ai'

const CardType1 = ({ data }) => {
  return (
    <Box className="credit-card-container">
      <div className="card">
        <Box textAlign="center" mb={4}>
          <img src={P1} alt="logo" width="100" />
        </Box>
        <Box display="flex" flexDirection="column">
          <Box textAlign="center" fontSize={12}>
            {data && data?.totalValue} total
          </Box>
          <Box display="flex" gridGap="10px" alignItems="center">
            <Rating value={5} />
            <Box>62</Box>
            <CustomizedMenus menuName="12 months" />
          </Box>
        </Box>
      </div>
      <div className="card">
        <Box fontSize={18} fontWeight={600}>
          Payout today
        </Box>
        <Box fontSize={12}>online payout with no paperwork</Box>
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexDirection="column" mt={2}>
            <Box display="flex" gridGap="10px" alignItems="center">
              <TiTick />
              <Typography variant="caption">free special replyment</Typography>
            </Box>
            <Box display="flex" gridGap="10px" alignItems="center">
              <TiTick />
              <Typography variant="caption">free special replyment</Typography>
            </Box>
          </Box>
        </Box>

        <Box display="flex" gridGap="15px" alignItems="center" mt={2}>
          <AiFillLike color="green" />
          <CustomizedMenus menuName="Fastest Loan" />
        </Box>
      </div>
      <div className="card">
        <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
          <Typography variant="caption">
            you save monthly 45.43 €{' '}
            <span
              style={{
                padding: '4px',
                backgroundColor: 'red',
                color: 'white',
              }}
            >
              {data && data?.monthlySave}
            </span>
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
          flexDirection="column"
        >
          <Box mt={3} color="red" fontSize={18} fontWeight={700} mb={4}>
            {data && data?.totalReview}€
          </Box>
          <Box>
            <CustomizedMenus menuName="Credit Details" />
          </Box>
        </Box>
      </div>
      <div className="card">
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
          <Box mt={1} color="red" fontSize={18} fontWeight={700} mb={1}>
            €{data && data.review}€
          </Box>
          <Typography variant="caption">Up to 5.99%</Typography>

          <Box>
            <Typography className="further-icon">further</Typography>
          </Box>
        </Box>
      </div>
    </Box>
  )
}

export default CardType1
