import docDP from "../assets/doc.jpg";
import docDP2 from "../assets/doc2.jpg";

export const doctorData = [
  {
    name: "Dr.JANVI",
    dp: docDP,
    contact: [
      { detail: "256576657", icon: "phone_iphone" },
      { detail: "janvi60@gmail.com", icon: "mail" },
      { detail: "Sharjah", icon: "location_on" },
    ],
    meta: [
      { field: "Specialisation", entry: "Optometric" },
      { field: "Experience", entry: "7 years" },
      { field: "Nationality", entry: "UAE", },
    ],
  },
  {
    name: "Dr.Usman",
    dp: docDP2,
    contact: [
      { detail: "625756657", icon: "phone_iphone" },
      { detail: "usman10@gmail.com", icon: "mail" },
      { detail: "Amsterdam", icon: "location_on" },
    ],
    meta: [
      { field: "Specialisation", entry: "Pediatric" },
      { field: "Experience", entry: "5 years" },
      { field: "Nationality", entry: "UK" },
    ],
  },
];
