export const EVENTS = [
  {
    id: 'saturday-coffee-and-chat',
    name: 'Coffee & Chat with a Conservative',
    date: 'Every Saturday',
    time: '8:00 AM – 11:00 AM',
    category: 'Weekly',
    location: '93677 Newport Ln, Coos Bay, OR 97420',
    description:
      'Open-door morning at HQ. Free coffee, real conversation, candidates and committee members on hand. No RSVP needed. Walk in, introduce yourself, ask anything.',
  },
  {
    id: 'wednesday-pizza-night',
    name: 'Wednesday Pizza & Drinks',
    date: 'Every Wednesday',
    time: '7:00 PM – 9:00 PM',
    category: 'Weekly',
    location: '93677 Newport Ln, Coos Bay, OR 97420',
    description:
      'Evening drop-in at HQ. Pizza, snacks, and easy conversation about issues currently in front of the county. First-timers welcome.',
  },
]

export const getEventById = (id) => EVENTS.find((event) => event.id === id)
