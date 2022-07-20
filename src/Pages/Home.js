import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../Component/HeroBanner'
import Exercise from '../Component/Exercise'
import SearchExercise from '../Component/SearchExercise'

const Home = () => {
  return (
    <>
        <Box>
          <HeroBanner />
          <SearchExercise />
          <Exercise />
        </Box>
    </>
  )
}

export default Home