import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Page } from "../../components/Page/Page";
import { Title } from "../../components/Title/Title";
import levelBg from "../../assets/img/fondo.png";
import styles from "./Level.module.css";

const LEVELS = [
  { id: 1, difficulty: "Fácil" },
  { id: 2, difficulty: "Medio" },
  { id: 3, difficulty: "Difícil" },
];

export const Level = () => {
  const navigate = useNavigate();

  return (
    <Page background={levelBg} className={styles.level}>
      <Title size="md" className={styles.level__title}>
        Seleccione un nivel
      </Title>

      <ul className={styles.level__list}>
        {LEVELS.map(({ id, difficulty }) => (
          <li key={id}>
            <Button
              className={styles.level__option}
              onClick={() => navigate(`/level${id}`)}
            >
              Nivel {id}
              <span className={styles.level__difficulty}>{difficulty}</span>
            </Button>
          </li>
        ))}
      </ul>

      <Button variant="ghost" onClick={() => navigate("/")}>
        Volver
      </Button>
    </Page>
  );
};
