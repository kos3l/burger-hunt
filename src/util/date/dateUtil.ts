import dayjs from 'dayjs';

function formatDate(date: Date) {
  const formattedDate = dayjs(date).format('HH:mm');
  return formattedDate;
}

export { formatDate };
