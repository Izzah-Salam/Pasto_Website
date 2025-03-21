// utils/dateFormatter.js
export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[date.getUTCMonth()]; // Get the month name
  const day = date.getUTCDate(); // Get the day of the month
  const year = date.getUTCFullYear(); // Get the year

  return `${month} ${day}, ${year}`; // Format as "Month Day, Year"
};
