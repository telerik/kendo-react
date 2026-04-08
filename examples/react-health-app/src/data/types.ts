export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  condition: string;
  status: "Critical" | "Monitoring" | "Stable";
  ward: string;
  diagnosis: string;
  appointmentDate: Date;
  appointmentTime: string;
  room: string;
  reason: string;
  phone: string;
  email: string;
  bloodType: string;
  allergies: string[];
  avatar?: string;
  thumbnail?: string;
  heartRate?: string;
  bloodPressure?: string;
  temperature?: string;
  o2Saturation?: string;
  respiratoryRate?: string;
  department?: string;
  admissionDate?: Date;
  assignedNurse?: string;
}

export interface Message {
  id: number;
  senderName: string;
  senderInitials: string;
  preview: string;
  time: string;
  unread: boolean;
}

export interface ClinicalNote {
  id: number;
  patientId: number;
  patientName: string;
  date: Date;
  type: string;
  summary: string;
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "info" | "warning" | "success" | "error";
}

export interface LabResult {
  id: number;
  patientId: number;
  testName: string;
  date: Date;
  result: string;
  normalRange: string;
  status: "Normal" | "Abnormal" | "Critical";
  note?: string;
}

export interface Visit {
  id: number;
  patientId: number;
  date: Date;
  reason: string;
  doctor: string;
  notes: string;
}

export interface DailyTask {
  id: number;
  text: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
}

export interface DailyAlert {
  id: number;
  title: string;
  time: string;
  severity: "critical" | "warning";
}

export interface Appointment {
  time: string;
  patientName: string;
  reason: string;
  status: "Complete" | "In Progress" | "Upcoming" | "Cancelled";
  room: string;
}
