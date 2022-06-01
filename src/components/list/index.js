import styles from "./List.module.css";

function List(props) {
  const width = 100 / (props.columns ? props.columns : 3);

  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {props.items?.map((d) => {
          return (
            <div className={styles.listItem} style={{ width: `${width - 3}%` }}>
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
