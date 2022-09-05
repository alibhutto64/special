import styles from "../styles/gallery.module.scss";
export default function gallery() {
  return (
    <ul className={styles['honeycomb']} lang="es">
      <li className={styles['honeycomb-cell']}>
        <img
          className={styles['honeycomb-cell__image']}
          src="https://source.unsplash.com/random/1"
        />
        <div className={styles['honeycomb-cell__title']}>Diseño exclusivo</div>
      </li>
      <li className={styles['honeycomb-cell']}>
        <img
          className={styles['honeycomb-cell__image']}
          src="https://source.unsplash.com/random/2"
        />
        <div className={styles['honeycomb-cell__title']}>Impermeables</div>
      </li>
      <li className={styles['honeycomb-cell']}>
        <img
          className={styles['honeycomb-cell__image']}
          src="https://source.unsplash.com/random/3"
        />
        <div className={styles['honeycomb-cell__title']}>Tablero doble cara</div>
      </li>
      <li className={styles['honeycomb-cell']}>  
        <img
          className={styles['honeycomb-cell__image']}
          src="https://source.unsplash.com/random/4"
        />
        <div className={styles['honeycomb-cell__title']}>Maletín de empaque</div>
      </li>
      <li className={styles['honeycomb-cell']}>
        <img
          className={styles['honeycomb-cell__image']}
          src="https://source.unsplash.com/random/5"
        />
        <div className={styles['honeycomb-cell__title']}>
          Antireflectivo<small>No vidrio</small>
        </div>
      </li>
      <li className={styles['honeycomb-cell']}>
        <img
          className={styles['honeycomb-cell__image']}
          src="https://source.unsplash.com/random/6"
        />
        <div className={styles['honeycomb-cell__title']}>
          6 fichas<small>1 de repuesto</small>
        </div>
      </li>
      <li className={styles['honeycomb-cell']}>
        <img
          className={styles['honeycomb-cell__image']}
          src="https://source.unsplash.com/random/7"
        />
        <div className={styles['honeycomb-cell__title']}>Tablero magnético</div>
      </li>
      <li className={styles['honeycomb-cell.honeycomb__placeholder']} />
    </ul>
  );
}
