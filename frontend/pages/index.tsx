import { Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react'
import Loading from '../components/Loading';
import { Event } from '../interface/event-Interface';
import { License } from '../interface/global-interfaces';
import { deleteEvent, getEventByName, getEvents, postEvent } from '../services/api/eventsAPI';


interface Props {
}

export default function index({ }: Props) {
  const event: Event = {
    name: "posted event"
  }

  const [events, setEvents] = useState<Event[]>([])

  return (
    <Box color='white'>
      <Box onClick={() => postEvent(event)}>add</Box>
      <Box onClick={() => {
        const res = getEventByName(event.name)
        console.log(res)
      }}>
        get event
      </Box>
      <Box onClick={async () => {
        const events = await getEvents()
        console.log(events)

      }}>getall</Box>
      <Box onClick={() => deleteEvent(event)}>deleteEvent</Box>


      <Box>
        <Loading />
      </Box>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const licenses: License[] = [];


  return { props: { licensesArray: licenses } };
};
