

const Pagination = ({ totalProducts, productPerPage, setcurrentPage, currentPage }) => {

    // Setting Page numbers
    let pages = []
    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pages.push(i)
    }

    // Previous page button configuration
    const handlePrev = () => {
        if (currentPage > 1) {
            setcurrentPage(currentPage - 1)
        }
    }

    // Next page button configuration
    const handleNext = () => {
        if (currentPage < pages.length) {
            setcurrentPage(currentPage + 1)
        }
    }

    return (
        <div>

            {/* Page number and direction buttons */}
            {pages.length > 0 &&
                <div>
                    <button disabled={currentPage == 1} onClick={handlePrev} className='me-2 btn border-0' style={{ color: '#36723fff' }}><i className="fa-solid fa-angles-left"></i></button>

                    {pages.map(page =>
                        <button onClick={() => setcurrentPage(page)} key={page} type="button" className={`btn btn-secondary me-2 py-1 px-3 border-0 text-light ${currentPage == page ? 'active' : ''}`} fdprocessedid="g6vgh">{page}</button>
                    )}

                    <button disabled={currentPage == pages.length} onClick={handleNext} className='btn border-0' style={{ color: '#36723fff' }}><i className="fa-solid fa-angles-right"></i></button>
                </div>}


        </div>
    )
}

export default Pagination