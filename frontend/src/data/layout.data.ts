import { MenuItem } from "../@types/type"; 
import { DashboardIcon, GraduateIcon } from "../icons/navigation.icons";




// admin menu
export const adminMenuItems: MenuItem[] = [
  {
    label: "Dashboard",
    to: "dashboard/admin",
    icon: DashboardIcon,
  },
  {
    label: "Create Investment",
    to: "create/investment",
    icon: GraduateIcon,
   
  },
  {
    label: "Teachers",
    to: "teachers",
    icon: GraduateIcon,
    subItems: [
      { label: "Teacher List", to: "teachers/list" },
      { label: "Teacher Add", to: "teachers/add" },
    ],
  },
  {
    label: "Classes",
    to: "departments",
    icon: GraduateIcon,
    subItems: [
      { label: "Class  Management", to: "departments/add" },
      { label: "Session/Term Update ", to: "term/update" },
      // { label: "Attendance", to: "/attendance/list" },
    ],
  },
  {
    label: "Timetable",
    to: "timetable",
    icon: GraduateIcon,
    subItems: [
      { label: "Timetable List", to: "timetable/list" },
      { label: "Timetable Edit", to: "timetable/edit" },
      { label: "Timetable Upload", to: "timetable/upload" },
    ],
  },
  {
    label: "Subjects",
    to: "subjects",
    icon: GraduateIcon,
    subItems: [
      { label: "Subject Add", to: "subjects/add" },
      { label: "Subject Edit", to: "subjects/edit" },
      { label: "Subject List", to: "subjects/list" },
    ],
  },
  {
    label: "Fees",
    to: "fees",
    icon: GraduateIcon,
    subItems: [
      { label: "Tuition Fee Setup", to: "fees/static/values" },
      { label: "List of Tuition Fees", to: "static/fee/list" },
      { label: "Register Payment", to: "fees/collection" },
      { label: "List Fee Payments", to: "fees/list" },
    ],
  },

  {
    label: "Announcements",
    to: "announcements/all",
    icon: GraduateIcon,
    subItems: [
      { label: " Announcement List", to: "announcements/all" },
      { label: "Create Announcement", to: "announcement/create" },
    ],
  },
 
];

// teacher menu
// export const teacherMenuItems: MenuItem[] = [
//   {
//     label: "Dashboard",
//     to: "dashboard/teacher",
//     icon: DashboardIcon,
//   },
//   {
//     label: "Pupils",
//     to: "/teacher/students/list",
//     icon: GraduateIcon,
//   },

//   {
//     label: "Attendance",
//     to: "attendance",
//     icon: Department,
//     subItems: [
//       { label: "Attendance Add", to: "teacher/attendance/upload" },
//       { label: "Attendance List", to: "/teacher/attendance/list" },
//       { label: "Attendance Filter", to: "/teacher/attendance/filter" },
//     ],
//   },

//   {
//     label: "Result",
//     to: "",
//     icon: ResultIcon,
//     subItems: [
//       { label: "View Result", to: "teacher/result/view" },
//       { label: "Upload Result", to: "teacher/result/upload" },
//     ],
//   },

//   {
//     label: "Timetable",
//     to: "teacher/timetable/view",
//     icon: TimeTableIcon,
//   },
//   {
//     label: "Announcement",
//     to: "/teacher/announcement/view",
//     icon: Announcements,
//   },
//   {
//     label: "Promotion",
//     to: "/teacher/promotion/upload",
//     icon: StudentIcon,
//   },
// ];

// // student menu
// export const studentMenuItems: {
//   label: string;
//   to: string;
//   icon: React.FC;
// }[] = [
//   {
//     label: "Dashboard",
//     to: "pupil/Dashboard",
//     icon: DashboardIcon,
//   },

//   {
//     label: "Attendance",
//     to: "pupil/attendance",
//     icon: Subjects,
//   },
//   {
//     label: "Check Result",
//     to: "pupil/result",
//     icon: Fees,
//   },
//   {
//     label: "Timetable",
//     to: "pupil/timetable",
//     icon: CalenderIcon2,
//   },
//   {
//     label: "Announcement",
//     to: "/students/announcements/all",
//     icon: Announcements,
//   },
// ];
