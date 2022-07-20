import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../Component/HeroBanner'
import Exercise from '../Component/Exercise'
import SearchExercise from '../Component/SearchExercise'
import BodyPart from '../Component/BodyPart'

const Home = () => {

  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <>
      <Box>
        <HeroBanner />
        <SearchExercise
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}

        />
        {/* <BodyPart /> */}
        <Exercise
        exercises = {exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
          

        />
      </Box>
    </>
  )
}

export default Home