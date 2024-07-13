import { Container } from "../Container";
import { Text } from "../Text";
import { Event, EventCard } from "./EventCard";

const events: Event[] = [
  {
    id: "string",
    name: "Ekubo Extension Hack",
    description:
      "Contribute to building next gen extensions to power the leading DEX on Starknet",
    startDate: "2024-9-04",
    endDate: "2024-12-02",
    location: "string",
    image: "nyc.jpeg",
    link: "#",
  },
];

export const EventRow = () => {
  return (
    <Container>
      <div>
        <Text className="mb-8 " textStyle="headline2">
          Upcoming events
        </Text>
      </div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </Container>
  );
};
