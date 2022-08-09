import styles from"./paginate.module.css";

const Paginate = ({
  data,
  recetas,
  setData,
}) => {

  const pages = [];

  if(recetas !== undefined) {
    for (let i = 1; i <= Math.ceil(recetas.length / data.itemsPerPage); i++) {
      pages.push(i);
    }
  }

  const handleClickPageNumbers = (number) => {
    setData({ ...data, currentPage: number})
  }

  const { currentPage, pageNumberLimit } = data


  const renderPageNumbers = pages.map(number => {
    // if (number < maxpageNumberLimit + 1 && number > minpageNumberLimit) {
      return (
          <li
            key={number}
            id={number}
            value={number}
            onClick={(e) => handleClickPageNumbers(e.target.value)}
            className={currentPage === number ? `${styles.active}` : null}
          >
            {number}
          </li>
      );
    // } else {
    //   return null;
    // }
  });

  const previusPage = () => {
    setData({...data, currentPage: currentPage - 1});
      // if (Math.ceil((currentPage - 1) % pageNumberLimit) === 0) { 
      //   setMaxPageNumberLimit(maxpageNumberLimit - pageNumberLimit); 
      //   setMinPageNumberLimit(minpageNumberLimit - pageNumberLimit); 
      // }
  };

  const nextPage = () => {
    setData({...data, currentPage: currentPage + 1});
    // if (currentPage + 1 > maxpageNumberLimit) {
    //   setMaxPageNumberLimit(maxpageNumberLimit + pageNumberLimit); 
    //   setMinPageNumberLimit(minpageNumberLimit + pageNumberLimit); 
    // }
  };

  return (
    <div className={styles.containerPaginate}>
      <ul className={styles.pageNumber}>
        <button className={styles.pagPrev} disabled={currentPage === pages[0] ? true : false} onClick={previusPage}>prev</button>
        {renderPageNumbers}
        <button className={styles.pagNext} disabled={currentPage === pages[pages.length - 1] ? true : false} onClick={nextPage}>next</button>
      </ul>
    </div>
  );
};

export default Paginate;
