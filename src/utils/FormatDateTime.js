import { format, parseISO } from 'date-fns'


export default function formatDateTime(date, hour) {
  return format(parseISO(`${date} ${hour}`), "dd/MM/yyyy HH:mm")

};

