let eventGuid = 0;
let today = new Date();
let parisOffset = 2; // décalage horaire de Paris par rapport à UTC
let todayParis = new Date(today.getTime() + parisOffset * 60 * 60 * 1000); // date et heure actuelles de Paris
let todayStr = todayParis.toISOString().replace(/T.*$/, ""); // YYYY-MM-DD de Paris
let selectedSlot = JSON.parse(localStorage.getItem("selectedSlot"));
// const start = new Date(selectedSlot.start).getTime();
// const end = new Date(selectedSlot.end).getTime();
// console.log(start, end);

export const INITIAL_EVENTS = [
  // {
  //   id: createEventId(),
  //   start,
  //   end,
  // },
];

export function createEventId() {
  return String(eventGuid++);
}
