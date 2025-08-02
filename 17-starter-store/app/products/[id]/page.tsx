function page({ params }: { params: { id: string } }) {
  return (
    <h2 className='text-xl'>
      <span className='font-bold'>Product ID: </span>
      {params.id}
    </h2>
  );
}
export default page;
