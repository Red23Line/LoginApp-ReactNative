
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function TaskDetailScreen() {
const router = useRouter();

const {
  title,
  subject,
  deadline,
  completed,
  username,
} = useLocalSearchParams<{
  title?: string;
  subject?: string;
  deadline?: string;
  completed?: string;
  username?: string;
}>();

const isCompleted = completed === "true";


  return (
    <LinearGradient
      colors={["#F5F3FF", "#EDE9FE", "#DDD6FE"]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content}>

        {/* Header */}
        <Pressable
          style={styles.backButton}
          onPress={() =>
  router.replace({
    pathname: "/home",
    params: {
      username: username || "",
    },
  })
}
        >
          <Text style={styles.backText}>
            ← Kembali
          </Text>
        </Pressable>

        <Text style={styles.eyebrow}>
          STUDYMATE • TASK DETAIL
        </Text>

        <Text style={styles.heading}>
          Detail Tugas
        </Text>

        <Text style={styles.subtitle}>
          Informasi lengkap tugas kuliahmu.
        </Text>

        {/* Detail Card */}
        <View style={styles.detailCard}>
          <Text style={styles.cardLabel}>
            NAMA TUGAS
          </Text>

          <Text style={styles.taskTitle}>
            {title || "Tugas tidak ditemukan"}
          </Text>

          <View style={styles.divider} />

          <Text style={styles.cardLabel}>
            MATA KULIAH
          </Text>

          <Text style={styles.detailText}>
            {subject || "-"}
          </Text>

          <View style={styles.divider} />

          <Text style={styles.cardLabel}>
            DEADLINE
          </Text>

          <Text style={styles.detailText}>
            {deadline || "-"}
          </Text>

          <View style={styles.divider} />

          <Text style={styles.cardLabel}>
            STATUS TUGAS
          </Text>

          <View
            style={[
              styles.statusBadge,
              isCompleted && styles.completedBadge,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                isCompleted && styles.completedText,
              ]}
            >
              {isCompleted ? "Selesai ✓" : "Belum selesai"}
            </Text>
          </View>
        </View>

        {/* Information */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            💡 Tips Belajar
          </Text>

          <Text style={styles.infoText}>
            Kerjakan tugas secara bertahap agar
            semua deadline dapat diselesaikan
            tepat waktu.
          </Text>
        </View>

        <Pressable
          style={styles.backHomeButton}
          onPress={() =>
  router.replace({
    pathname: "/home",
    params: {
      username: username || "",
    },
  })
}
        >
          <Text style={styles.backHomeText}>
            Kembali ke Dashboard
          </Text>
        </Pressable>

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
    paddingTop: 35,
    paddingBottom: 40,
    width: "100%",
    maxWidth: 720,
    alignSelf: "center",
  },

  backButton: {
    marginBottom: 28,
  },

  backText: {
    color: "#7C3AED",
    fontSize: 14,
    fontWeight: "700",
  },

  eyebrow: {
    color: "#7C3AED",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  heading: {
    color: "#1F1647",
    fontSize: 28,
    fontWeight: "800",
  },

  subtitle: {
    color: "#6B6480",
    fontSize: 13,
    marginTop: 8,
    marginBottom: 25,
  },

  detailCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 22,
    elevation: 3,
    shadowColor: "#312E81",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  cardLabel: {
    color: "#9B91B2",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 9,
  },

  taskTitle: {
    color: "#4C1D95",
    fontSize: 21,
    fontWeight: "800",
    lineHeight: 29,
  },

  detailText: {
    color: "#312E81",
    fontSize: 15,
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "#EDE9FE",
    marginVertical: 19,
  },

  statusBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 9,
  },

  completedBadge: {
    backgroundColor: "#DCFCE7",
  },

  statusText: {
    color: "#B45309",
    fontSize: 12,
    fontWeight: "800",
  },

  completedText: {
    color: "#15803D",
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginTop: 20,
  },

  infoTitle: {
    color: "#5B21B6",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 9,
  },

  infoText: {
    color: "#6B6480",
    fontSize: 12,
    lineHeight: 20,
  },

  backHomeButton: {
    backgroundColor: "#7C3AED",
    borderRadius: 14,
    padding: 15,
    alignItems: "center",
    marginTop: 22,
  },

  backHomeText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
});
