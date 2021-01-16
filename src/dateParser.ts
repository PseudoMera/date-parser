import { format, Locale } from 'date-fns';
import { PseudoDate } from './date';

function getDateFromString(data: string | number | Date, locale?: Locale | undefined): PseudoDate {
  //Note: I made this line in a hurry but I'm almost positive that we don't need to do this.
  const date: string | number = typeof(data) === 'number' ? data : data.toString();

  try {
    const myDate = new Date(date);
    const year = format(myDate, 'YYY', { locale: locale });
    const month = format(myDate, 'MMMMMMM', { locale: locale });
    const day = format(myDate, 'dd');
    const dayOfTheWeek = format(myDate, 'iiii', { locale: locale });
    const hour = format(myDate, 'HH');
    const minutes = format(myDate, 'mm', { locale: locale });
    const seconds = format(myDate, 'ss', { locale: locale });
    const miliseconds = date.toString().substring(20, 26);
    const amOrPm = hour >= '12' ? 'pm' : 'am';
    const monthNumber = format(myDate, 'MM', { locale: locale });
    const monthShort = format(myDate, 'MMM', { locale: locale });

    const yourDate: PseudoDate = {
      day: day,
      month: month,
      year: year,
      dayOfTheWeek: dayOfTheWeek,
      hour: hour,
      minutes: minutes,
      seconds: seconds,
      miliseconds: miliseconds,
      amOrPm: amOrPm,
      monthNumber: monthNumber,
      monthShort: monthShort,
    };

    return yourDate;
  } catch (error) {
    console.error(`getDateFromString ERROR: ${error}`);
    return error;
  }
}

export default getDateFromString;