import styles from "./CasillaVacia.module.css"

export const CasillaVacia = ({ color = null, onClick }) => {

    return (
        <button
            type="button"
            aria-label={color ? "Casilla pintada" : "Casilla vacía"}
            className={`${styles.casilla} ${color ? styles["casilla--filled"] : ""}`}
            style={color ? { "--peg-color": color } : undefined}
            onClick={onClick}
        />
    )
}
