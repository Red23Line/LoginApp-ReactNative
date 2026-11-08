
const BASE_URL = "http://localhost:3001/api/tasks";

// Format tugas aplikasi
export type RemoteTask = {
  id: string;
  title: string;
  subject: string;
  deadline: string;
  completed: boolean;
};

// Struktur response ReqRes
type ReqResRecord = {
  id: string;
  data?: {
    title?: string;
    subject?: string;
    deadline?: string;
    completed?: boolean | string;
  };
};

type ReqResResponse = {
  data?: ReqResRecord[];
  error?: string;
  message?: string;
};

type ReqResRecordResponse = {
  data?: ReqResRecord;
  error?: string;
  message?: string;
};

// Mapping data API ke format aplikasi
function mapTask(record: ReqResRecord): RemoteTask {
  return {
    id: record.id,
    title: record.data?.title ?? "",
    subject: record.data?.subject ?? "",
    deadline: record.data?.deadline ?? "",
    completed:
      record.data?.completed === true ||
      record.data?.completed === "true",
  };
}

// GET: mengambil semua tugas
export async function getTasks(): Promise<RemoteTask[]> {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const result = (await response.json()) as ReqResResponse;

  if (!response.ok) {
    throw new Error(
      result.message ||
      result.error ||
      `API Error: ${response.status}`
    );
  }

  const records = Array.isArray(result.data)
    ? result.data
    : [];

  return records.map(mapTask);
}

// POST: menambahkan tugas baru
export async function createTask(
  task: Omit<RemoteTask, "id">
): Promise<RemoteTask> {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(task),
  });

  const result =
    (await response.json()) as ReqResRecordResponse;

  if (!response.ok) {
    throw new Error(
      result.message ||
      result.error ||
      `API Error: ${response.status}`
    );
  }

  if (!result.data?.id) {
    throw new Error("Invalid response from backend");
  }

  return mapTask(result.data);
}
