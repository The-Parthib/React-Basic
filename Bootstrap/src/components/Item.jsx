import styles from './BuyButton.module.css';


const List = ( {fooditem ,bought , handle} ) => {
  return (
    <>
      <li className={`list-group-item ${bought && 'active'} `}>
        {fooditem}
        <button
          className={`${styles.buybtn} btn btn-outline-info`}
          onClick={handle}
        >
          Buy Now
        </button>
      </li>
    </>
  );
};

export default List;
