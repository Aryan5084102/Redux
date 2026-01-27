import React, { useState } from 'react'

const Pagination = ({data}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const ItemPerPage = 5;

    const indexOfLastItem = currentPage * ItemPerPage
    const indexOfFirstItem = indexOfLastItem - ItemPerPage

    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil(data.length / ItemPerPage)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
                <div style={{display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'center'}}>
                    <button 
                        onClick={() => paginate(currentPage -1)}
                        disabled={currentPage === 1}
                        >Prev</button>
                        {[...Array(totalPages)].map((_, id) =>(
                            <button>{id + 1}</button>
                        ))}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >Next</button>
                </div>
  )
}

export default Pagination