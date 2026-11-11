import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import styles from "./PlayScreen.module.css";
import { BackButton } from "../../components/BackButton/BackButton";
import { Page } from "../../components/Page/Page";
import levelBg from "../../assets/img/fondo.png";
import { Title } from "../../components/Title/Title";
import { TablaDeUno } from "../../components/TablaDeUno/TablaDeUno";
import { ColorSelector } from "../../components/ColorSelector/ColorSelector";
import { COLORS } from "../../components/ColorSelector/colors";

const ROWS = 11;

const createBoard = (columns) =>
  Array.from({ length: columns }, () => Array(ROWS).fill(null));

export const PlayScreen = ({ levels = [] }) => {
  const { levelId } = useParams();
  const level = levels.find(({ id }) => id === Number(levelId));

  const [selectedColor, setSelectedColor] = useState(null);
  const [board, setBoard] = useState(() => createBoard(level?.numberTables ?? 0));

  if (!level) {
    return <Navigate to="/level" replace />;
  }

  const handleCellClick = (column, row) => {
    if (!selectedColor) return;

    setBoard((prev) =>
      prev.map((cells, c) =>
        c === column
          ? cells.map((cell, r) => (r === row ? selectedColor : cell))
          : cells
      )
    );
  };

  const colorValue = (id) => COLORS.find((color) => color.id === id)?.value ?? null;

  return (
    <Page background={levelBg} centered compact fit>
      <div className={styles.play}>
        <div className={styles.play__top}>
          <header className={styles.play__header}>
            <BackButton to="/level" className={styles.play__back} />
            <Title size="md" className={styles.play__title}>
              Nivel {level.id}
            </Title>
          </header>
          <p className={styles.play__difficulty}>{level.difficulty}</p>
        </div>

        <div className={styles.play__board}>
          {board.map((cells, column) => (
            <TablaDeUno
              key={column}
              cells={cells.map(colorValue)}
              onCellClick={(row) => handleCellClick(column, row)}
            />
          ))}
        </div>

        <ColorSelector
          className={styles.play__selector}
          selected={selectedColor}
          onSelect={setSelectedColor}
        />
      </div>
    </Page>
  );
};
