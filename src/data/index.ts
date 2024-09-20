import DasboardIcon from "../assets/DasboardIcon";
import DocumentIcon from "../assets/DocumentIcon";
import HomeIcon from "../assets/HomeIcon";
import ReminderIcon from "../assets/ReminderIcon";
import Confetti from "../assets/Confetti";
import { ParticipantProps } from "./../../types/index";
import avatar from "../assets/Avatar.png";

interface SidebarItem {
  route: string;
  icon: string;
  label: string;
}

export const sidebarList: SidebarItem[] = [
  {
    label: "Dashboard",
    route: "/",
    icon: "dashboard",
  },
  {
    label: "Agenda",
    route: "/agenda",
    icon: "agenda",
  },
  {
    label: "Reminders",
    route: "/reminders",
    icon: "reminders",
  },
  {
    label: "Celebration/Updates",
    route: "/updates",
    icon: "updates",
  },
];

export const participantsData: ParticipantProps = {
  user: {
    name: "Rafael Dominguez",
    profilePic: avatar,
  },
  isOrganizer: true,
  title: "Global division officer",
  country: {
    name: "USA",
    flag: "https://simplelocalize.io/_next/static/media/us.6c459052.svg",
    location: "Seattle, WA, USA",
    timeZone: "Pacific standard time (PST)",
    localTime: "4:06 PM",
  },
  weather: {
    temp: "-2°C",
    type: "Snow",
  },
};
