
export type ScheduleItem = {
  id: number;
  day: string;
  subject: string;
  startTime: string;
  endTime: string;
  room: string;
  icon: string;
};

export const scheduleData: ScheduleItem[] = [
  {
    id: 1,
    day: "Senin",
    subject: "Mobile Programming",
    startTime: "08.00",
    endTime: "09.40",
    room: "Ruang Kelas A",
    icon: "📱",
  },
  {
    id: 2,
    day: "Senin",
    subject: "Basis Data",
    startTime: "10.00",
    endTime: "11.40",
    room: "Ruang Kelas B",
    icon: "💾",
  },
  {
    id: 3,
    day: "Selasa",
    subject: "Pemrograman Web",
    startTime: "09.00",
    endTime: "10.40",
    room: "Lab Komputer",
    icon: "💻",
  },
  {
    id: 4,
    day: "Rabu",
    subject: "Rekayasa Perangkat Lunak",
    startTime: "08.00",
    endTime: "09.40",
    room: "Ruang Kelas C",
    icon: "⚙️",
  },
  {
    id: 5,
    day: "Kamis",
    subject: "Desain UI/UX",
    startTime: "10.00",
    endTime: "11.40",
    room: "Lab Desain",
    icon: "🎨",
  },
  {
    id: 6,
    day: "Jumat",
    subject: "Kecerdasan Buatan",
    startTime: "08.00",
    endTime: "09.40",
    room: "Ruang Kelas D",
    icon: "🤖",
  },
];
