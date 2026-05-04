import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import logoFlowerMonth from "../images/florMonth.png";
import logoFlowerWeek from "../images/florWeek.png";
import logoFlowerDay from "../images/florDay.png";

function Home() {
  const today = new Date().toISOString().split("T")[0];

  return (
    <section>
      <Header />

      <div className="cards-grid">
        <Link to="/month">
          <Card
            title="Month"
            description="Check your month schedule"
            image={logoFlowerMonth}
          />
        </Link>

        <Link to="/week">
          <Card
            title="Week"
            description="Check your week schedule"
            image={logoFlowerWeek}
          />
        </Link>

        ✅ {/* AQUÍ ESTÁ LA CLAVE */}
        <Link to={`/day/${today}`}>
          <Card
            title="Day"
            description="Check your day schedule"
            image={logoFlowerDay}
          />
        </Link>
      </div>

      <Footer />
    </section>
  );
}

export default Home;