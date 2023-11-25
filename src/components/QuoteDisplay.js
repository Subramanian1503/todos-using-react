import styles from "../styles/QuoteDisplay.module.css";
import quoteData from "../resources/quotes.json";

function QuoteDisplay() {
  // Getting all the quotes from the quote data json file
  const totalQuotes = quoteData.quotes;

  // Finding the random number between 1 to 102 as w having 102 quotes totally
  const randomNumber = Math.floor(Math.random() * 101 + 1);

  // Getting the quote information with the generated number
  const quote = totalQuotes[randomNumber].quote;
  const authorName = totalQuotes[randomNumber].author;

  return (
    // quote container
    <div className={styles.quoteDisplayContainer}>
      {/* quote placeholder */}
      <div className={styles.quote_placeholder}>{`"${quote}"`}</div>
      {/* quote author name */}
      <div
        className={styles.quote_author_name_placeholder}
      >{`-${authorName}`}</div>
    </div>
  );
}

export default QuoteDisplay;
