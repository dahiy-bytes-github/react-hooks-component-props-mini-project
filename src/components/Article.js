import React from 'react';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Determine the emoji to display based on the time
  let emoji = "";
  let timeDisplay = "";

  if (minutes < 30) {
    // Use coffee cup emoji for articles less than 30 minutes
    const cups = Math.ceil(minutes / 5);
    emoji = "☕️".repeat(cups);
    timeDisplay = `${emoji} ${minutes} min read`;
  } else {
    // Use bento box emoji for articles 30 minutes or longer
    const bentoBoxes = Math.ceil(minutes / 10);
    emoji = "🍱".repeat(bentoBoxes);
    timeDisplay = `${emoji} ${minutes} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{timeDisplay}</p>
    </article>
  );
}

export default Article;
