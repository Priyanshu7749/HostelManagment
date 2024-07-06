import React, { useState, useEffect } from 'react';

function CurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(new Date());
    };

    updateDate(); // Initial update

    const intervalId = setInterval(updateDate, 1000 * 60 * 60 * 24); // Milliseconds in a day

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }); // Ensure US date format (MM/DD/YYYY)

  return (
    <div className="date">
      <p className="d1">Date: {formattedDate}</p>
    </div>
  );
}

export default CurrentDate;
