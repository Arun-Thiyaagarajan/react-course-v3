import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const newSearchParams = new URLSearchParams(search);
    newSearchParams.set('page', pageNumber);
    navigate(`${pathname}?${newSearchParams.toString()}`, { replace: true });
  }

  if (pageCount < 2) return null;

  return (
    <div className='mt-16 flex justify-end'>
      <div className="join">
        <button
          className='btn btn-xs sm:btn-md join-item'
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`btn btn-xs sm:btn-md border-none join-item 
                ${pageNumber === page ? 'bg-base-300 border-base-300' : ''}`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className='btn btn-xs sm:btn-md join-item'
          disabled={page === pageCount}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default PaginationContainer;