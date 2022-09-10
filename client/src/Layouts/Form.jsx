const Form = ({children, title, title2}) => {
    return (
      <>
        <div class="card m-2 shadow">
          
          <div><h3 class="card-header"><b>{title}</b></h3></div>
          
          <div class="card-body">
            <h5 class="card-title">{title2}</h5>
            <p class="card-text">
              {children}
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default Form