import React from "react"
import ReactPaginate from 'react-paginate';


const Paginate = ({data, perPage, setCurrentPage, name}) => {

  const pageCount = Math.ceil(data.length / perPage);

  const handlePageChange = (d) => {
    let selected = d.selected;
    setCurrentPage(selected);
  }

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      onPageChange={handlePageChange}
      pageRangeDisplayed={3}
      containerClassName={`pagination ${name}`}
      previousLinkClassName={"pagination_pn"}
      nextLinkClassName={"pagination_pn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
  );
};

export default Paginate
