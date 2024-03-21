import { Edit } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { getPostAction, loginAction, updateUserAction } from '../../Redux/Action/AuthenticationAction';
import { baseUrl } from '../../Redux/Fetch/Fetch';
import AppImages from '../../Themes/AppImages'

export default function Profile() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [about,setAbout]=useState('')
  const [intrested,setintrested]=useState('')

  useEffect(() => {
    if (!localStorage.token) {
        history.push("/Login")
    }
}, [])

  useEffect(()=>{
    setAbout(JSON.parse(localStorage?.userInfo)?.about)
    setintrested(JSON.parse(localStorage?.userInfo)?.intrest)
  },[JSON.parse(localStorage?.userInfo)?.about,JSON.parse(localStorage?.userInfo)?.intrest])
  return(
 
    <div class="main">
   
      <section class="mt-3">
        <div class="container">
          <div class="row">
            <div
            onClick={()=>{
              localStorage.clear()
              history.replace('./Login')
            }}
            style={{color:'#3248BCF0'}}
            class=" text-end col-12">
              
               LOGOUT
            </div>
            <div
            onClick={()=>{
              dispatch(updateUserAction({about,intrested},history))
            }}
            class=" text-end col-12">
              
                <Edit/>
               Edit
            </div>
            <div class="col-12 text-center">
                <img src="./profilr-pic.png" alt=""/>
                <p class="fw-bold">
                    {JSON.parse(localStorage?.userInfo)?.name} 
                </p>
            </div>
             
             
          </div>
        </div>
      </section>
      
      <section class="my-3">
        <div class="container">
            <div class="form-floating">
                <textarea 
                value={about}
                onChange={(e)=>{
                  setAbout(e.target.value)
                }}
                class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:100}}></textarea>
                <label for="floatingTextarea2">About me
                </label>
              </div>
        </div>
       
      </section>

      <section class="my-3">
        <div class="container">
            <div class="form-floating">
                <textarea
                onChange={(e)=>{
                  setintrested(e.target.value)
                }}
                value={intrested}
                class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:300}}></textarea>
                <label for="floatingTextarea2">I am interested in</label>
              </div>
        </div>
       
      </section>

     
       
      
       

      <section class="mt-3">
        <div class="container">
          <div class="row bottom-menu">
            <div class="col">
              <button
               onClick={()=>{history.push('./HomeClubbox')}}
              class="feed-btn-bottom">HOME</button>
            </div>
            <div class="col">
              <button 
    onClick={()=>{history.push('./Engagement')}}
              
              class="feed-btn-bottom">ENGAGEMENTS</button>
            </div>
            <div class="col">
              <button class="feed-btn-bottom">PROFILE</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  }

