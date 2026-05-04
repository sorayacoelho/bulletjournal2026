import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../stlyes/Month.scss"

function Month() {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const year = date.getFullYear();
  const month = date.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(year, month + 1, 1));
  };

  const goToDay = (day) => {
    const selectedDate = new Date(year, month, day);
    const formattedDate = selectedDate.toISOString().split("T")[0];
    navigate(`/day/${formattedDate}`);
  };

  return (
    <div className="calendar">
      {/* HEADER DEL MES */}
      <div className="calendar-header">
        <button onClick={prevMonth}>←</button>

        <h2>
          {date.toLocaleString("es", {
            month: "long",
            year: "numeric",
          })}
        </h2>

        <button onClick={nextMonth}>→</button>
      </div>

      {/* GRID DEL CALENDARIO */}
      <div className="calendar-grid">
        {[...Array(daysInMonth)].map((_, i) => (
          <div
            key={i}
            className="calendar-day"
            onClick={() => goToDay(i + 1)}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Month;