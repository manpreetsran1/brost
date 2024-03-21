import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { getPostAction, loginAction } from '../../Redux/Action/AuthenticationAction';
import { baseUrl } from '../../Redux/Fetch/Fetch';
import AppImages from '../../Themes/AppImages'

export default function Home() {
  const history = useHistory();

  const dispatch=useDispatch()
  const postData=useSelector(state=>state.signUpReducer?.postData)
  const [search,setSearch]=useState('')
  const [selectedIndex,setSelectedIndex]=useState(0)

  useEffect(() => {
    if (!localStorage.token) {
        history.push("/Login")
    }
}, [])
  useEffect(() => {
    
    dispatch(getPostAction(history,search,'follow'))
  }, [])
  useEffect(() => {
    
    dispatch(getPostAction(history,search,selectedIndex==0?'follow':''))
  }, [search])
  
  return (
    <div class="main">
    <section>
        <div class="navvar">
          <div class="container">
            <div class="py-2">
              <div class="row">
                <div
                 onClick={()=>{
                  history.push('./Clubbox')
                }}
                class="col-2">
                  <img
                    src={AppImages.clubboxxlogo1}
                    class="img-fluid logo-clubbox"
                    alt=""
                  />
                </div>
                <div class="col-6 d-flex align-items-center">
                  <form class=" " role="search" style={{width: "100%"}}>
                    <input
                    onChange={(t)=>{setSearch(t.target.value)}}
                      class="form-control me-2 border-rounded"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center"
                >
                  <img src={AppImages.brost} class="img-fluid" alt="" />
                </div>
                <div class="col-2 d-flex justify-content-center align-items-center"
                >
                  <img src={AppImages.userIcon} class="img-fluid" alt="" />
                </div>
              </div>
            </div>
             
          </div>
         
        </div>
      </section>
<section class="mt-3">
<div class="container">
<div class="row">
    <div 
    onClick={()=>{
      dispatch(getPostAction(history,search,'follow'))
      setSelectedIndex(0)}}
    class="col" >
      {
        selectedIndex==0?
        
      <div class="feed-btn-active">
        <button class="feed-btn ">Feeds</button>
      </div>
        :
        <button class="feed-btn ">Feeds</button>
      }
        
    </div>
    <div class="  col" 
    onClick={()=>{
      dispatch(getPostAction(history,search,''))
      setSelectedIndex(1)}}
    >
      {
        selectedIndex==1?
        <div class="feed-btn-active">
          <button class="feed-btn">Trending</button>
          </div>:
      <button class="feed-btn">Trending</button>
      }
    </div>
    <div class="  col" 
    onClick={()=>{setSelectedIndex(2)}}
    >
      {
        selectedIndex==2?
        <div class="feed-btn-active">
      <button class="feed-btn">Notifications</button>
      </div>:
      <button class="feed-btn">Notifications</button>
      }
    </div>

</div>

</div>

</section>
<div style={{overflow:'auto',width: "100%", /* Set the desired width */
  height: "400px", /* Set the desired height */
  border: "1px solid #ccc;"}}>

{
  selectedIndex!==2?
  postData?.map((x)=>{
    return(
      <section class="mt-3">
      <div  class="container">
        <div class="row">
          <div class="col-12 col-md-12 mt-3">
            <div class="services-card border-0 p-4">
              <div class="row">
                <div
                onClick={()=>{
                  console.log(JSON.parse(localStorage?.userInfo)?._id==x?.data?.user?._id);
                  if(JSON.parse(localStorage?.userInfo)?._id==x?.data?.user?._id){
                    history.push('./Profile')
                  }
                  else{

                    history.push({pathname:'./otheruser',state:x})
                  }
                }}
                class="col-2">
                  <img src={
                    require("./blank-profile.webp").default} class="img-fluid services-image" alt="no-image" srcset=""/>
                </div>
                <div class="col-10 services-text ps-4 d-flex align-items-center">
                  {x?.data?.user?.name} <br/>{x?.data?.title}
                </div>
                <div class="col-12 my-4 ps-4 subtitle-card">
                  {x?.data?.content}
                </div>
                {x?.data?.imageUrl?<img
                src={x.data?.imageUrl}
                />:null}
              </div>
              <div class="row">
                <div class="col-6"><img src={require('./members.png').default}  alt=""/><span class="ms-2">{x.members} Members</span></div>
                <div onClick={()=>{history.push({pathname:'./RecentMessage',state:x})}} class="col-6 text-end">{x?.comment?.length} Messages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  })
  :(<div></div>)
 }
 </div>

<section style={{position:'absolute',right:'5%',top:'60%'}} class="add-btn my-3">
  <div class="container text-end">
    <button
    onClick={()=>{history.push('./createPost')}}
    class="add-chat"><img src={require('./add-btn.png').default} class="img-fluid" alt=""/></button>
  </div>

</section>

<section class="mt-3">
  <div class="container">
  <div class="row bottom-menu">
      <div class="col" >
          <button class="feed-btn-bottom">HOME</button>
      </div>
      <div class="col" >
        <button 
    onClick={()=>{history.push('./Engagement')}}
    
    class="feed-btn-bottom">ENGAGEMENTS</button>
      </div>
      <div class="col" >
        <button 
    onClick={()=>{history.push('./Profile')}}
        class="feed-btn-bottom">PROFILE</button>
      </div>
  
  </div>
  
  </div>
  
  </section>


    
</div>
  )
}