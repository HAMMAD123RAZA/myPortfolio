import React from 'react'

const Content = ({props}) => {
  return (
    <>

 <div className="card mt-3" style={{width:'11rem'}}>
  <div className="card-body">
    <div className="card-img-top">
      <img src={props} className='w-75' alt="" />
    </div>
  </div>
</div>

    </>
  )
}

export default Content