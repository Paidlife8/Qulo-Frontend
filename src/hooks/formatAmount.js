// export function formatAmount(amount) {
//   // Check if the input is a number
//   if (typeof amount !== "number") {
//     return "Invalid input. Please enter a number.";
//   }

//   // Add commas for thousands separators
//   const formattedAmount = amount.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//   });

//   // Remove the currency symbol and return only two decimal places
//   return formattedAmount.slice(1).toFixed(2);
// }

export function formatAmount(amount) {
  const parts = amount.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (parts.length === 1) {
    parts.push("00");
  } else if (parts[1].length === 1) {
    parts[1] += "0";
  }
  return parts.join(".");
}

export function parseFormattedAmount(formattedAmount) {
  return parseFloat(formattedAmount.replace(/,/g, ""));
}

// utils/formatDateTime.js
export function formatDate(mongoDate) {
  const date = new Date(mongoDate);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}

export function formatTime(mongoDate) {
  const date = new Date(mongoDate);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  return date.toLocaleTimeString("en-US", options);
}
