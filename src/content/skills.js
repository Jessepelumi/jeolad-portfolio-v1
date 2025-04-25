import {
  AppWindow,
  Database,
  HardDrives,
  ChartBar,
  ChartPieSlice,
  Network,
  Cloud,
  Desktop,
} from "@phosphor-icons/react";

export const skills = [
  {
    id: 1,
    name: "Data Analysis/Science",
    icon: [<ChartBar size={24} />, <ChartPieSlice size={24} />],
  },
  {
    id: 3,
    name: "Database Administration",
    icon: [<Database size={24} />, <HardDrives size={24} />],
  },
  {
    id: 3,
    name: "Network Security",
    icon: [<Network size={24} />, <AppWindow size={24} />],
  },
  {
    id: 4,
    name: "Cloud Computing",
    icon: [<Cloud size={24} />, <Desktop size={24} />],
  },
];
