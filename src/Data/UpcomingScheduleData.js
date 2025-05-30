import syringe from "../Assets/syringe.png";
import eye from "../Assets/eye.png";
import heart from "../Assets/heart.png";
import doctor from "../Assets/doctor.png";

export const UpcomingScheduleData = [
  {
    day: "Thursday",
    events: [
      {
        label: "Health Checkup Complete",
        time: "11:00 AM",
        icon: syringe,
      },
      {
        label: "Ophthalmologist",
        time: "14:00 PM",
        icon: eye,
      },
    ],
  },
  {
    day: "Friday",
    events: [
      {
        label: "Cardiologist",
        time: "12:00 AM",
        icon: heart,
      },
      {
        label: "Neurologist",
        time: "16:00 PM",
        icon: doctor,
      },
    ],
  },
];
