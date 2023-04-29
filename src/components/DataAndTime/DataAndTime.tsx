import Image from 'next/image';

import ClockIcon from '../../icon/clock.svg';
import styles from './DataAndTime.module.css'

export default function DataAndTime() {
  const current = new Date();

  const monthNames = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUNE",
    "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"
  ];

  const dayMonthYear = `
    ${current.getDate()}
    ${monthNames[current.getMonth()]},
    ${current.getFullYear()}
  `;
  const hours = current.getHours() < 10 ? `0${current.getHours()}` : current.getHours();
  const minutes = current.getMinutes() < 10 ? `0${current.getMinutes()}` : current.getMinutes();
  const hoursMinutes = `${hours}:${minutes}`;
  
  return (
    <div className={styles.data}>
      <p>Today</p>
      <div className={styles.dataAndTimeWrapper}>
        <div>{dayMonthYear}</div>
        <Image
          className={styles.clock}
          src={ClockIcon}
          alt="Clock icon"
        />
        <div>{hoursMinutes}</div>
      </div>
    </div>
  )
}
