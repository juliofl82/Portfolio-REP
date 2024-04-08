import Vector from "../../../../assets/Vector.svg";
import styles from "./styles.module.css";

export const ProjectCard = ({ children }) => {
    return (        
        <div className={styles.cardBox}>
            <li className={styles.liBox}>
                {children}
                <div className={styles.imgBox}>
                    <img className={styles.imgVector} src={Vector} alt="Imagem vetor" />
                </div>
            </li>
        </div>        
    );
};
