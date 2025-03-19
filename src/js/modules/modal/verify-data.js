import dayjs from "dayjs";

export function verifyData(date){
  const today = dayjs(new Date());

  const isHourPast = date < today;
  const unavailableHour = dayjs(date).format("HH:mm");

  return {
    isHourPast,
    unavailableHour,
  }
}
