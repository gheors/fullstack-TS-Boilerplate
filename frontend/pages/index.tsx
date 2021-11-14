import { Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react'
import Loading from '../components/Loading';
import { MyContext } from '../context/MyContext';
import { Event } from '../interface/event-Interface';
import { deleteEvent, getEventByName, getEvents, postEvent } from '../services/api/eventsAPI';


interface Props {
}

export default function index({ }: Props) {

  const [events, setEvents] = useState<Event[]>([])
  const { user } = React.useContext(MyContext);

  return (
    <Box color='white'>
      {/* <Box onClick={() => postEvent(event)}>add</Box>
      <Box onClick={() => {
        const res = getEventByName(event.name)
        console.log(res)
      }}>
        get event
      </Box>

      <Box onClick={() => deleteEvent(event)}>deleteEvent</Box> */}


      <Box>
        <Loading />
      </Box>

    </Box>
  )
}

