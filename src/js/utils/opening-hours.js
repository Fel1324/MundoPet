const hours = document.querySelectorAll("#hours > option");
export const openingHours = [...hours].map(hour => {
  return hour.value;
});
