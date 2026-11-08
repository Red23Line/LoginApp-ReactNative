import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Task } from "../data/tasks";

type TaskCardProps = {
  task: Task;
  onToggle: (id: string | number) => void;
  onPressDetail: () => void;
};

export default function TaskCard({
  task,
  onToggle,
  onPressDetail,
}: TaskCardProps) {
  return (
    <View style={styles.taskCard}>
      {/* Checklist */}
      <Pressable
        style={[
          styles.checkbox,
          task.completed && styles.checkboxChecked,
        ]}
        onPress={() => onToggle(task.id)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: task.completed }}
      >
        {task.completed && (
          <Text style={styles.checkmark}>✓</Text>
        )}
      </Pressable>

      {/* Informasi Tugas */}
      <Pressable
        style={styles.taskInfo}
        onPress={onPressDetail}
      >
        <Text
          style={[
            styles.taskTitle,
            task.completed && styles.taskCompleted,
          ]}
        >
          {task.title}
        </Text>

        <Text style={styles.taskSubject}>
          {task.subject}
        </Text>
      </Pressable>

      {/* Deadline */}
      <View
        style={[
          styles.deadlineBadge,
          task.deadline === "Hari ini" &&
            !task.completed &&
            styles.urgentBadge,
        ]}
      >
        <Text
          style={[
            styles.deadlineText,
            task.deadline === "Hari ini" &&
              !task.completed &&
              styles.urgentText,
          ]}
        >
          {task.completed ? "Selesai" : task.deadline}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 16,
    marginBottom: 12,
    gap: 12,
    elevation: 2,
    shadowColor: "#312E81",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
  },

  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#A78BFA",
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxChecked: {
    backgroundColor: "#7C3AED",
    borderColor: "#7C3AED",
  },

  checkmark: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  taskInfo: {
    flex: 1,
  },

  taskTitle: {
    color: "#312E81",
    fontSize: 13,
    fontWeight: "800",
  },

  taskCompleted: {
    textDecorationLine: "line-through",
    color: "#9CA3AF",
  },

  taskSubject: {
    color: "#9690A8",
    fontSize: 11,
    marginTop: 5,
  },

  deadlineBadge: {
    backgroundColor: "#EDE9FE",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 9,
  },

  urgentBadge: {
    backgroundColor: "#FEE2E2",
  },

  deadlineText: {
    color: "#7C3AED",
    fontSize: 10,
    fontWeight: "800",
  },

  urgentText: {
    color: "#DC2626",
  },
});
