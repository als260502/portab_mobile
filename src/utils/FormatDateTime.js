import { format, parseISO } from 'date-fns'


export default function formatDateTime(date, hour) {
  return format(parseISO(`${date} ${hour}`), "dd/mm/yyy HH:mm")

};

