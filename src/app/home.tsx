import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import TaskCard from "../components/TaskCard";
import { Task, initialTasks } from "../data/tasks";

export default function HomeScreen() {
  const router = useRouter();
  const { username } = useLocalSearchParams<{
    username?: string;
  }>();

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

 const [showAddForm, setShowAddForm] = useState(false);
 const [newTitle, setNewTitle] = useState("");
 const [newSubject, setNewSubject] = useState("");
 const [newDeadline, setNewDeadline] = useState("");
 const [addTaskError, setAddTaskError] = useState("");

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.length - completedTasks;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  const toggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const addTask = () => {
  if (
    !newTitle.trim() ||
    !newSubject.trim() ||
    !newDeadline.trim()
  ) {
    setAddTaskError("Semua kolom wajib diisi!");
    return;
  }

  const newTask: Task = {
    id: Date.now(),
    title: newTitle.trim(),
    subject: newSubject.trim(),
    deadline: newDeadline.trim(),
    completed: false,
  };

  setTasks((currentTasks) => [
    ...currentTasks,
    newTask,
  ]);

  setNewTitle("");
  setNewSubject("");
  setNewDeadline("");
  setAddTaskError("");
  setShowAddForm(false);
};

  return (
    <LinearGradient
      colors={["#F5F3FF", "#EDE9FE", "#DDD6FE"]}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.brandRow}>
            <View style={styles.brandIcon}>
              <Text style={styles.brandIconText}>S</Text>
            </View>
            <Text style={styles.brandName}>StudyMate</Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {(username?.trim().charAt(0) || "S").toUpperCase()}
            </Text>
          </View>
        </View>

        {/* Greeting */}
        <View style={styles.greetingSection}>
          <Text style={styles.eyebrow}>YOUR STUDY SPACE</Text>
          <Text style={styles.greeting}>
            Halo, {username || "Mahasiswa"}! 👋
          </Text>
          <Text style={styles.subtitle}>
            Siap membuat harimu lebih produktif?
          </Text>
        </View>

        {/* Summary */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>📚</Text>
            <Text style={styles.statNumber}>{tasks.length}</Text>
            <Text style={styles.statLabel}>Total tugas</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>⏳</Text>
            <Text style={styles.statNumber}>{pendingTasks}</Text>
            <Text style={styles.statLabel}>Belum selesai</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>✅</Text>
            <Text style={styles.statNumber}>{completedTasks}</Text>
            <Text style={styles.statLabel}>Selesai</Text>
          </View>
        </View>

        {/* Progress */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <View>
              <Text style={styles.cardTitle}>Progress belajarmu</Text>
              <Text style={styles.mutedText}>
                Sedikit demi sedikit, pasti selesai!
              </Text>
            </View>
            <Text style={styles.progressPercent}>{progress}%</Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                { width: `${progress}%` },
              ]}
            />
          </View>

          <Text style={styles.progressCaption}>
            {completedTasks} dari {tasks.length} tugas selesai
          </Text>
        </View>

        {/* Tasks */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Tugas Saya</Text>
            <Text style={styles.sectionSubtitle}>
              Centang tugas yang sudah selesai
            </Text>
          </View>
          <Text style={styles.sectionIcon}>📝</Text>
        </View>
<Pressable
  style={styles.addTaskButton}
  onPress={() => {
    setShowAddForm(!showAddForm);
    setAddTaskError("");
  }}
>
  <Text style={styles.addTaskButtonText}>
    + Tambah Tugas
  </Text>
</Pressable>

{showAddForm && (
  <View style={styles.addTaskForm}>
    <Text style={styles.formTitle}>
      Tugas Baru 📝
    </Text>

    <TextInput
      style={styles.formInput}
      placeholder="Nama tugas"
      value={newTitle}
      onChangeText={setNewTitle}
    />

    <TextInput
      style={styles.formInput}
      placeholder="Nama mata kuliah"
      value={newSubject}
      onChangeText={setNewSubject}
    />

    <TextInput
      style={styles.formInput}
      placeholder="Deadline (contoh: 5 Nov 2026)"
      value={newDeadline}
      onChangeText={setNewDeadline}
    />

    {addTaskError !== "" && (
      <Text style={styles.formError}>
        {addTaskError}
      </Text>
    )}

    <Pressable
      style={styles.submitTaskButton}
      onPress={addTask}
    >
      <Text style={styles.submitTaskText}>
        Simpan Tugas
      </Text>
    </Pressable>

    <Pressable
      style={styles.cancelTaskButton}
      onPress={() => {
        setShowAddForm(false);
        setAddTaskError("");
      }}
    >
      <Text style={styles.cancelTaskText}>
        Batal
      </Text>
    </Pressable>
  </View>
)}

{tasks.map((task) => (
  <TaskCard
    key={task.id}
    task={task}
    onToggle={toggleTask}
    onPressDetail={() =>
      router.push({
        pathname: "/task-detail",
        params: {
          id: String(task.id),
          title: task.title,
          subject: task.subject,
          deadline: task.deadline,
          completed: String(task.completed),
          username: username || "",
        },
      })
    }
  />
))}

        {/* Schedule */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Jadwal Kuliah</Text>
            <Text style={styles.sectionSubtitle}>
              Contoh jadwal mingguanmu
            </Text>
          </View>
          <Text style={styles.sectionIcon}>🗓️</Text>
        </View>

        <View style={styles.scheduleCard}>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>08.00</Text>
            <Text style={styles.timeEnd}>09.40</Text>
          </View>
          <View style={styles.scheduleDivider} />
          <View style={styles.scheduleInfo}>
            <Text style={styles.scheduleTitle}>
              Mobile Programming
            </Text>
            <Text style={styles.scheduleSubtitle}>
              Ruang kelas • Contoh jadwal
            </Text>
          </View>
          <View style={styles.scheduleDot} />
        </View>

        <View style={styles.scheduleCard}>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>10.00</Text>
            <Text style={styles.timeEnd}>11.40</Text>
          </View>
          <View style={styles.scheduleDivider} />
          <View style={styles.scheduleInfo}>
            <Text style={styles.scheduleTitle}>Basis Data</Text>
            <Text style={styles.scheduleSubtitle}>
              Ruang kelas • Contoh jadwal
            </Text>
          </View>
          <View
            style={[styles.scheduleDot, styles.scheduleDotBlue]}
          />
        </View>

<Pressable
  onPress={() => router.push("/schedule")}
  style={({ pressed }) => ({
    backgroundColor: "#7C3AED",
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 12,
    marginBottom: 20,
    opacity: pressed ? 0.7 : 1,
  })}
>
  <Text
    style={{
      color: "#FFFFFF",
      fontSize: 13,
      fontWeight: "800",
    }}
  >
    Lihat Jadwal Lengkap →
  </Text>
</Pressable>


        {/* Logout */}
        <Pressable
          style={({ pressed }) => [
            styles.logoutButton,
            pressed && styles.pressed,
          ]}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.logoutText}>Keluar dari StudyMate</Text>
        </Pressable>

        <Text style={styles.footer}>
          StudyMate • Your companion in learning 💜
        </Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: 22,
    paddingTop: 30,
    paddingBottom: 40,
    width: "100%",
    maxWidth: 720,
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  brandIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: "#7C3AED",
    alignItems: "center",
    justifyContent: "center",
  },
  brandIconText: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "800",
  },
  brandName: {
    color: "#312E81",
    fontSize: 22,
    fontWeight: "800",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#DDD6FE",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  avatarText: {
    color: "#5B21B6",
    fontSize: 19,
    fontWeight: "800",
  },
  greetingSection: {
    marginBottom: 24,
  },
  eyebrow: {
    color: "#7C3AED",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  greeting: {
    color: "#1F1647",
    fontSize: 27,
    fontWeight: "800",
    marginBottom: 8,
  },
  subtitle: {
    color: "#6B6480",
    fontSize: 14,
    lineHeight: 21,
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
  },
  statCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 17,
    paddingHorizontal: 7,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#312E81",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 7,
  },
  statEmoji: {
    fontSize: 21,
    marginBottom: 9,
  },
  statNumber: {
    color: "#4C1D95",
    fontSize: 23,
    fontWeight: "800",
  },
  statLabel: {
    color: "#8B849F",
    fontSize: 10,
    textAlign: "center",
    marginTop: 5,
  },
  progressCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 22,
    marginBottom: 28,
    elevation: 2,
    shadowColor: "#312E81",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 7,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginBottom: 18,
  },
  cardTitle: {
    color: "#312E81",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 6,
  },
  mutedText: {
    color: "#8B849F",
    fontSize: 11,
  },
  progressPercent: {
    color: "#7C3AED",
    fontSize: 24,
    fontWeight: "800",
  },
  progressTrack: {
    height: 10,
    borderRadius: 10,
    backgroundColor: "#EDE9FE",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#8B5CF6",
    borderRadius: 10,
  },
  progressCaption: {
    color: "#8B849F",
    fontSize: 11,
    marginTop: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
    marginTop: 2,
  },
  sectionTitle: {
    color: "#312E81",
    fontSize: 19,
    fontWeight: "800",
  },
  sectionSubtitle: {
    color: "#8B849F",
    fontSize: 11,
    marginTop: 5,
  },
  sectionIcon: {
    fontSize: 24,
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 15,
    marginBottom: 11,
    gap: 12,
  },
  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#C4B5FD",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#7C3AED",
    borderColor: "#7C3AED",
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    color: "#312E81",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
  },
  taskCompleted: {
    color: "#9CA3AF",
    textDecorationLine: "line-through",
  },
  taskSubject: {
    color: "#9CA3AF",
    fontSize: 10,
    marginTop: 5,
  },
  deadlineBadge: {
    backgroundColor: "#F3F0FF",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  deadlineText: {
    color: "#7C3AED",
    fontSize: 9,
    fontWeight: "700",
  },
  urgentBadge: {
    backgroundColor: "#FEE2E2",
  },
  urgentText: {
    color: "#DC2626",
  },
  scheduleCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 16,
    marginBottom: 11,
    gap: 14,
  },
  timeBox: {
    alignItems: "center",
    minWidth: 43,
  },
  timeText: {
    color: "#5B21B6",
    fontSize: 13,
    fontWeight: "800",
  },
  timeEnd: {
    color: "#A78BFA",
    fontSize: 10,
    marginTop: 5,
  },
  scheduleDivider: {
    width: 3,
    height: 38,
    borderRadius: 3,
    backgroundColor: "#C4B5FD",
  },
  scheduleInfo: {
    flex: 1,
  },
  scheduleTitle: {
    color: "#312E81",
    fontSize: 12,
    fontWeight: "700",
  },
  scheduleSubtitle: {
    color: "#9CA3AF",
    fontSize: 10,
    marginTop: 6,
  },
  scheduleDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#8B5CF6",
  },
  scheduleDotBlue: {
    backgroundColor: "#60A5FA",
  },
  logoutButton: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDD6FE",
    borderRadius: 14,
    paddingVertical: 15,
    marginTop: 22,
  },
  logoutText: {
    color: "#6D28D9",
    fontSize: 13,
    fontWeight: "800",
  },
  addTaskButton: {
  backgroundColor: "#7C3AED",
  borderRadius: 14,
  paddingVertical: 14,
  alignItems: "center",
  marginBottom: 16,
},

addTaskButtonText: {
  color: "#FFFFFF",
  fontSize: 14,
  fontWeight: "800",
},

addTaskForm: {
  backgroundColor: "#FFFFFF",
  borderRadius: 18,
  padding: 18,
  marginBottom: 18,
  elevation: 2,
  shadowColor: "#312E81",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.06,
  shadowRadius: 7,
},

formTitle: {
  color: "#312E81",
  fontSize: 17,
  fontWeight: "800",
  marginBottom: 15,
},

formInput: {
  backgroundColor: "#F5F3FF",
  borderWidth: 1,
  borderColor: "#DDD6FE",
  borderRadius: 11,
  paddingHorizontal: 13,
  paddingVertical: 12,
  fontSize: 13,
  color: "#312E81",
  marginBottom: 12,
},

formError: {
  color: "#DC2626",
  fontSize: 12,
  marginBottom: 12,
},

submitTaskButton: {
  backgroundColor: "#7C3AED",
  borderRadius: 11,
  padding: 13,
  alignItems: "center",
  marginTop: 4,
},

submitTaskText: {
  color: "#FFFFFF",
  fontWeight: "800",
  fontSize: 13,
},

cancelTaskButton: {
  padding: 12,
  alignItems: "center",
},

cancelTaskText: {
  color: "#7C3AED",
  fontWeight: "700",
  fontSize: 13,
},
  pressed: {
    opacity: 0.7,
  },
  footer: {
    textAlign: "center",
    color: "#7C3AED",
    fontSize: 10,
    marginTop: 22,
  },
});
