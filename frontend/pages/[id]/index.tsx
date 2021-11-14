import { Box, Flex } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import React from 'react';
import { MyContext } from '../../context/MyContext';
import { Event } from '../../interface/event-Interface';
import { getEvents, postEvent } from '../../services/api/eventsAPI';



interface Props {
    events: Event[]
}

export default function Userpage({ events }: Props) {

    const { user } = React.useContext(MyContext);

    const event: Event = {
        name: "posted event",
        userId: user._id
    }
    return (
        <Box color='white'>
            <Box>
                username: {user._id}
            </Box>
            id: {user._id}

            <Flex>
                {events.map(ev => <Box>{ev.name}</Box>)}

            </Flex>

            <Box onClick={() => postEvent(event)}>add</Box>

        </Box>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id
    console.log(id)
    const { data } = await getEvents(id as string);
    return {
        props: {
            events: data,
        },
    };
};
