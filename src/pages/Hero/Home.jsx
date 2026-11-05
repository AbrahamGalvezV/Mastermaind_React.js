import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Page } from "../../components/Page/Page";
import { Title } from "../../components/Title/Title";
import homeBg from "../../assets/img/home.png";
import styles from "./Home.module.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Page background={homeBg} className={styles.home}>
      <div className={styles.home__content}>
        <Title>Mastermind</Title>
        <p className={styles.home__subtitle}>Descifra el código secreto</p>
        <Button onClick={() => navigate("/level")}>Jugar</Button>
      </div>
    </Page>
  );
};
