import { Box, Heading, Text, SimpleGrid, Flex, Icon } from "@chakra-ui/react";
import { FaRegCalendarDays } from "react-icons/fa6";
import PropTypes from "prop-types";

export const EventsSection = ({ events }) => {
  return (
    <Box
      mt={12}
      bg="background.primary"
      borderRadius="lg"
      p={6}
      boxShadow="lg"
      m={4}>
      <Heading as="h3" size="lg" color="primary.700" mb={4}>
        Próximos Eventos
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {events.map((event) => (
          <Box key={event.id} bg="background.secondary" p={4} borderRadius="lg">
            <Heading
              as="h4"
              size="md"
              color="primary.700"
              fontWeight="semibold">
              {event.name}
            </Heading>
            <Flex alignItems="center" mt={2} color="primary.500">
              <Icon mr={2} fontSize={20}>
                <FaRegCalendarDays />
              </Icon>
              <Text>{event.date}</Text>
            </Flex>
            <Text color="primary.500" mt={1}>
              {event.startTime} - {event.endTime}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

const eventShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
});

EventsSection.propTypes = {
  events: PropTypes.arrayOf(eventShape).isRequired,
};
