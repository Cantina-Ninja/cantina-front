import { parseISO, isBefore } from 'date-fns';

export default function getExpiredProduct(dtPt: string): boolean {
  const [dd, mm, yyyy]: any = dtPt.split('/');

  const date = `${yyyy}-${mm}-${dd} 00:00:00`;
  const parsedDate = parseISO(date);

  // true expired, false not expired
  return isBefore(parsedDate, new Date());
}
