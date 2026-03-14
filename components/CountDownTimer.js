// import { useEffect, useState } from "react";

// const CountdownTimer = () => {
//   const [timeLeft, setTimeLeft] = useState(null);

//   useEffect(() => {
//     const getNewEndTime = () => {
//       const newTime = new Date();
//       newTime.setHours(newTime.getHours() + 24);
//       localStorage.setItem("courseCountdownEnd", newTime);
//       return newTime;
//     };

//     let endTime;
//     const savedTime = localStorage.getItem("courseCountdownEnd");

//     if (savedTime) {
//       endTime = new Date(savedTime);
//     } else {
//       endTime = getNewEndTime();
//     }

//     const timer = setInterval(() => {
//       const now = new Date();
//       const distance = endTime - now;

//       if (distance <= 0) {
//         endTime = getNewEndTime(); // Reset countdown
//       }

//       const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((distance / (1000 * 60)) % 60);
//       const seconds = Math.floor((distance / 1000) % 60);
//       setTimeLeft({ hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   if (!timeLeft) return null;

//   return (
//     <div className="countdown">
//       <div>
//         <span>{timeLeft.hours}</span>
//         <span>Годин</span>
//       </div>
//       <div>
//         <span>{timeLeft.minutes}</span>
//         <span>Хвилин</span>
//       </div>
//       <div>
//         <span>{timeLeft.seconds}</span>
//         <span>Секунд</span>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;