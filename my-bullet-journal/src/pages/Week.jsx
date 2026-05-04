import { useState } from "react";
import "../stlyes/Week.scss"

function Week() {
  const today = new Date();

  // Calcular inicio de semana (lunes)
  const startOfWeek = new Date(today);
  const day = startOfWeek.getDay() || 7; // domingo = 7
  startOfWeek.setDate(startOfWeek.getDate() - day + 1);

  const daysOfWeek = [...Array(7)].map((_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });

  // Estado de ánimo
  const [mood, setMood] = useState(null);

  // Checklist
  const [tasks, setTasks] = useState([
    { id: 1, text: "Hacer deporte", done: false },
    { id: 2, text: "Trabajar en el proyecto", done: false },
    { id: 3, text: "Descansar", done: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  return (
    <div className="week-page">
      <h2>Semana actual</h2>

      {/* 📅 Semana */}
      <div className="week-grid">
        {daysOfWeek.map((d, i) => (
          <div key={i} className="week-day">
            <strong>
              {d.toLocaleDateString("es", { weekday: "short" })}
            </strong>
            <span>{d.getDate()}</span>

            <div className="events">
              <small>+ Añadir evento</small>
            </div>
          </div>
        ))}
      </div>

      {/* 😊 Estado de ánimo */}
      <section className="mood-section">
        <h3>Estado de ánimo</h3>
        <div className="mood-buttons">
          {["😄", "🙂", "😐", "😔", "😫"].map((emoji) => (
            <button
              key={emoji}
              className={mood === emoji ? "active" : ""}
              onClick={() => setMood(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>
      </section>

      {/* ✅ Checklist */}
      <section className="todo-section">
        <h3>Cosas por hacer</h3>

        {tasks.map(task => (
          <label key={task.id} className="task">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.done ? "done" : ""}>
              {task.text}
            </span>
          </label>
        ))}
      </section>
    </div>
  );
}

export default Week;