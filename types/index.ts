export interface ParticipantProps {
  user: {
    name: string;
    profilePic: string;
  };
  isOrganizer: boolean;
  title: string;
  country: {
    name: string;
    flag: string;
    location: string;
    timeZone: string;
    localTime: string;
  };
  weather: {
    temp: string;
    type: string;
  };
}
