export function getCurrentDateAndDay(): { date: string; day: string } {
  const today: Date = new Date()

  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const day: string = days[today.getDay()]

  const months: string[] = [
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
  ]
  const month: string = months[today.getMonth()]

  const year: number = today.getFullYear()

  const date: string = `${month} ${today.getDate()}, ${year}`

  return { date, day }
}

export function getCurrentTime(): string {
  const today: Date = new Date()

  let hours: number = today.getHours()
  const minutes: number = today.getMinutes()
  const ampm: string = hours >= 12 ? "PM" : "AM"

  hours = hours % 12
  hours = hours ? hours : 12

  const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`

  return `${hours}:${formattedMinutes} ${ampm}`
}
