import { useParams } from "react-router-dom";
import '../stlyes/Day.scss'

function Day() {
  const { date } = useParams();
  const selectedDate = new Date(date);

  return (
    <div className="day-page">
      <h2>
        {selectedDate.toLocaleDateString("es", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h2>

      <div className="hours">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="hour-block">
            {String(i).padStart(2, "0")}:00
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day;