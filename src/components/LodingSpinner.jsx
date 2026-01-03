const LodingSpinner=()=>{
  return<>
  <div className="d-flex justify-content-center loding">
  <div className="spinner-border" role="status" style={{width:"5rem", height:"5rem"}}>
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
  </>
}
export default LodingSpinner;