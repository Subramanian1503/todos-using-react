import styles from "../styles/DateMenu.module.css";

function DateMenu() {
  const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const Months = [
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

  const dayHeading = "My Day";
  const currentDate = new Date();
  const currentDay = Days[currentDate.getDay()];
  const currentMonth = Months[currentDate.getMonth()];
  const currentDayInNumber = currentDate.getDate();

  return (
    <div className={styles.dateMenuContainer}>
      {/* leftPartion */}
      <div className={styles.leftPartion}>
        {/* Day heading */}
        <div className={styles.QuoteContainer}>
          <span>{dayHeading}</span>
        </div>

        <div className={styles.DateInfoContainer}>
          {/* Date information */}
          {currentDay + ", " + currentMonth + " " + currentDayInNumber}
        </div>
      </div>
      {/* right partition */}
      <div className={styles.rightPartition}>
        {/* options three dots */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/463/463292.png"
          alt="option-3-dots"
        ></img>
      </div>
    </div>
  );
}

export default DateMenu;
