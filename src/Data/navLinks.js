import {
  LayoutDashboard,
  ArrowDownUp,
  CalendarRange,
  BriefcaseMedical,
  ChartNoAxesCombined,
  MessageCircleCode,
  Phone,
  Settings
} from "lucide-react";

const navLinks = [
  { label: "Dashboard", icon: <LayoutDashboard /> },
  { label: "History", icon: <ArrowDownUp /> },
  { label: "Calendar", icon: <CalendarRange /> },
  { label: "Appointments", icon: <BriefcaseMedical /> },
  { label: "Statistics", icon: <ChartNoAxesCombined /> },
  { label: "Chat", icon: <MessageCircleCode /> },
  { label: "Support", icon: <Phone /> },
  { label: "Setting", icon: <Settings /> }
];

export default navLinks;
