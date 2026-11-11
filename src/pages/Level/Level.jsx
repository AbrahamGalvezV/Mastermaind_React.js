import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { Button } from "../../components/Button/Button";
import { Page } from "../../components/Page/Page";
import { Title } from "../../components/Title/Title";
import levelBg from "../../assets/img/fondo.png";
import styles from "./Level.module.css";

export const Level = ({ levels = [] }) => {
  const navigate = useNavigate();

  return (
    <Page background={levelBg} centered>
      <BackButton to="/" />

      <Title size="md" className={styles.level__title}>
        Seleccione un nivel
      </Title>

      <ul className={styles.level__list}>
        {levels.map(({ id, difficulty }) => (
          <li key={id}>
            <Button
              className={styles.level__option}
              onClick={() => navigate(`/game/${id}`)}
            >
              Nivel {id}
              <span className={styles.level__difficulty}>{difficulty}</span>
            </Button>
          </li>
        ))}
      </ul>
    </Page>
  );
};
