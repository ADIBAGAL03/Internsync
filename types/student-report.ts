type StudentReport = {
  report_date: string;
  user_name: string;
  college_mentor_uid: string;
  college_mentor_name: string;
  has_internship: boolean;
  attendance_id: string | null;
  attendance_status: string | null;
  in_time: string | null;
  out_time: string | null;
  work_from_home: boolean | null;
  report_division: string | null;
  report_details: string | null;
  report_main_points: string | null;
  report_feedback: string | null;
  report_status: string | null;
  is_holiday: boolean;
};

export default StudentReport;
