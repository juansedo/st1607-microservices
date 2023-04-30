import styles from "./FormSelect.module.css";

const FormSelect = ({
  selectedId,
  onClick,
}: {
  selectedId: number;
  onClick: (id: number) => void;
}) => {
  return (
    <ul className={styles.listContainer}>
      <li
        className={[
          styles.listItem,
          ...(selectedId === 1 ? [styles.listItemSelected] : []),
        ].join(" ")}
        onClick={() => onClick(1)}
      >
        Create bicycle
      </li>
      <li
        className={[
          styles.listItem,
          ...(selectedId === 2 ? [styles.listItemSelected] : []),
        ].join(" ")}
        onClick={() => onClick(2)}
      >
        Show bicycle
      </li>
      <li
        className={[
          styles.listItem,
          ...(selectedId === 3 ? [styles.listItemSelected] : []),
        ].join(" ")}
        onClick={() => onClick(3)}
      >
        Delete bicycle
      </li>
    </ul>
  );
};

export default FormSelect;
