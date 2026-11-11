import { CasillaVacia } from "../CasillaVacia/CasillaVacia"
import styles from "./TablaDeUno.module.css"

export const TablaDeUno = ({ cells = [], onCellClick }) => {

    return (
        <div className={styles.table}>
            {cells.map((color, row) => (
                <CasillaVacia
                    key={row}
                    color={color}
                    onClick={() => onCellClick?.(row)}
                />
            ))}
        </div>
    )
}
