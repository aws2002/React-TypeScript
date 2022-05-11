type StatusProps = {
    status: 'loading'|'success'|'error'; //! status: string 
};
export default function Status(props: StatusProps) {
    let msg
    if(props.status === "loading"){
        msg="loading"
    }else if(props.status === "success"){
        msg="success"
    }else if(props.status === "error"){
        msg="error"
    }
  return (
    <>
      <h2>Status - {msg}</h2>
    </>
  );
}
