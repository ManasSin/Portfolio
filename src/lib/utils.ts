import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertTo12Hour = () => {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const day = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const [hour, minute, second] = time.split(":");
  let hourIn12Format = parseInt(hour, 10);

  if (hourIn12Format > 12) {
    hourIn12Format = hourIn12Format - 12;
  }

  return `${hourIn12Format}:${minute} ${day}`;
};

export const timer = () => {
  const date = new Date();
  const [seconds, minutes, hours] = [
    date.getSeconds(),
    date.getMinutes(),
    date.getHours(),
  ];
  const timer = setTimeout(() => {
    if (seconds === 59) {
      if (minutes === 59) {
        if (hours === 23) {
          clearTimeout(timer);
          return `00:00:00`;
        }
        return `${(hours + 1).toString().padStart(2, "0")}:00:00`;
      }
      return `${hours.toString().padStart(2, "0")}:${(minutes + 1)
        .toString()
        .padStart(2, "0")}:00`;
    }
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${(seconds + 1).toString().padStart(2, "0")}`;
  }, 1000);
  return timer;
};
