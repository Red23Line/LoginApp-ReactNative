
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { scheduleData } from "../data/schedule";

const days = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
];

export default function ScheduleScreen() {
  const router = useRouter();

  const [selectedDay, setSelectedDay] = useState("Senin");

  const filteredSchedule = scheduleData.filter(
    (item) => item.day === selectedDay
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Pressable
          onPress={() =>
            router.replace("/home")
          }
          style={styles.backButton}
        >
          <Text style={styles.backText}>
            ← Kembali ke Dashboard
          </Text>
        </Pressable>

        <Text style={styles.eyebrow}>
          STUDYMATE • EDUCATION
        </Text>

        <Text style={styles.heading}>
          Jadwal Kuliah 📅
        </Text>

        <Text style={styles.subtitle}>
          Atur waktu belajar dan kegiatan kuliahmu.
        </Text>

        {/* Pilihan Hari */}
        <Text style={styles.sectionTitle}>
          Pilih Hari
        </Text>

        <View style={styles.dayContainer}>
          {days.map((day) => (
            <Pressable
              key={day}
              style={[
                styles.dayButton,
                selectedDay === day &&
                  styles.activeDayButton,
              ]}
              onPress={() => setSelectedDay(day)}
            >
              <Text
                style={[
                  styles.dayText,
                  selectedDay === day &&
                    styles.activeDayText,
                ]}
              >
                {day.substring(0, 3)}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Daftar Jadwal */}
        <Text style={styles.sectionTitle}>
          Jadwal {selectedDay}
        </Text>

        {filteredSchedule.length > 0 ? (
          filteredSchedule.map((item) => (
            <View
              key={item.id}
              style={styles.scheduleCard}
            >
              <View style={styles.iconBox}>
                <Text style={styles.subjectIcon}>
                  {item.icon}
                </Text>
              </View>

              <View style={styles.scheduleInfo}>
                <Text style={styles.subjectTitle}>
                  {item.subject}
                </Text>

                <Text style={styles.timeText}>
                  {item.startTime} - {item.endTime}
                </Text>

                <Text style={styles.roomText}>
                  📍 {item.room}
                </Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>
              🎉 Tidak ada jadwal kuliah hari ini.
            </Text>
          </View>
        )}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            💜 Study Tip
          </Text>

          <Text style={styles.infoText}>
            Persiapkan materi sebelum kelas dimulai
            agar kegiatan belajar lebih efektif.
          </Text>
        </View>

        <Text style={styles.footer}>
          StudyMate • Your companion in learning
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3FF",
  },

  content: {
    width: "100%",
    maxWidth: 720,
    alignSelf: "center",
    padding: 22,
    paddingTop: 35,
    paddingBottom: 45,
  },

  backButton: {
    marginBottom: 25,
  },

  backText: {
    color: "#7C3AED",
    fontSize: 13,
    fontWeight: "700",
  },

  eyebrow: {
    color: "#8B5CF6",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  heading: {
    color: "#312E81",
    fontSize: 27,
    fontWeight: "800",
    marginTop: 8,
  },

  subtitle: {
    color: "#8B85A3",
    fontSize: 13,
    marginTop: 8,
    marginBottom: 28,
  },

  sectionTitle: {
    color: "#312E81",
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 14,
    marginTop: 12,
  },

  dayContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 25,
  },

  dayButton: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD6FE",
  },

  activeDayButton: {
    backgroundColor: "#7C3AED",
    borderColor: "#7C3AED",
  },

  dayText: {
    color: "#6B6480",
    fontSize: 12,
    fontWeight: "700",
  },

  activeDayText: {
    color: "#FFFFFF",
  },

  scheduleCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 17,
    marginBottom: 13,
    elevation: 2,
    shadowColor: "#312E81",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 7,
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#EDE9FE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  subjectIcon: {
    fontSize: 24,
  },

  scheduleInfo: {
    flex: 1,
  },

  subjectTitle: {
    color: "#312E81",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 6,
  },

  timeText: {
    color: "#7C3AED",
    fontSize: 12,
    fontWeight: "700",
  },

  roomText: {
    color: "#9690A8",
    fontSize: 11,
    marginTop: 5,
  },

  emptyCard: {
    backgroundColor: "#FFFFFF",
    padding: 22,
    borderRadius: 16,
    alignItems: "center",
  },

  emptyText: {
    color: "#7C3AED",
    fontSize: 13,
    fontWeight: "600",
  },

  infoCard: {
    backgroundColor: "#EDE9FE",
    padding: 18,
    borderRadius: 17,
    marginTop: 20,
  },

  infoTitle: {
    color: "#6D28D9",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 8,
  },

  infoText: {
    color: "#6B6480",
    fontSize: 12,
    lineHeight: 20,
  },

  footer: {
    color: "#A29BB5",
    fontSize: 11,
    textAlign: "center",
    marginTop: 30,
  },
});