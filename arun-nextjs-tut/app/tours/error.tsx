"use client";

function error({ error }: { error: Error }) {
  console.log(error)
  return <span className='text-xl capitalize'>something went wrong...</span>;
}

export default error;
