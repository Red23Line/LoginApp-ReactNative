export type Task = {
  id: string | number;
  title: string;
  subject: string;
  deadline: string;
  completed: boolean;
};

export const initialTasks: Task[] = [
  {
    id: 1,
    title: "Membuat desain UI aplikasi",
    subject: "Mobile Programming",
    deadline: "Hari ini",
    completed: false,
  },
  {
    id: 2,
    title: "Mengerjakan laporan praktikum",
    subject: "Praktikum",
    deadline: "Besok",
    completed: false,
  },
  {
    id: 3,
    title: "Belajar materi database",
    subject: "Basis Data",
    deadline: "30 Okt",
    completed: true,
  },
];