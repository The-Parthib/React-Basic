const ErrorMessage = ( {item} ) => {

  return (
    <>
      {item.length === 0 ? <h3>I'm Still Hungry...!! get me foods</h3> : null}
    </>
  )
};


export default ErrorMessage;