import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { followUnfollowAction, getPostAction, loginAction } from '../../Redux/Action/AuthenticationAction';
import { baseUrl } from '../../Redux/Fetch/Fetch';
import AppImages from '../../Themes/AppImages'

export default function OtherUserProfile(props) {
  const history = useHistory();
  const dispatch=useDispatch()
  // useEffect(()=>{
  //   dispatch(followUnfollowAction(history,props?.location?.state?.data?.user?._id))
  // },[])
  useEffect(() => {
    if (!localStorage.token) {
        history.push("/Login")
    }
}, [])
  return(
 
    <div class="main">
   
      <section class="mt-3">
        <div class="container">
          <div class="row">
                         <div class="col-4">
                 <button
                 onClick={()=>{
                  dispatch(followUnfollowAction(history,props?.location?.state?.data?.user?._id))
                 }}
                 class="follow-btn">{JSON.parse(localStorage?.userInfo)?.followers?.includes(
                  props?.location?.state?.data?.user?._id)?'Unfollow my content':'Follow my content'}</button>
             </div>
            <div class=" text-end col-12">
                {/* <button class="edit-icon">Edit-icon</button> */}
               
            </div>
            <div class="col-12 text-center">
                <img src="./profilr-pic.png" alt=""/>
                <p class="fw-bold">
                {props?.location?.state?.data?.user?.name}
                </p>
            </div>
             
             
          </div>
        </div>
      </section>
      
      <section class="my-3">
        <div class="container">
            <div class="form-floating">
                <textarea
                value={props?.location?.state?.data?.user?.about}
                disabled class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:100}}></textarea>
                <label for="floatingTextarea2">About me
                </label>
              </div>
        </div>
       
      </section>

      <section class="my-3">
        <div class="container">
            <div class="form-floating">
                <textarea
                value={props?.location?.state?.data?.user?.intrest}
                disabled class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:300}}></textarea>
                <label for="floatingTextarea2">I am interested in</label>
              </div>
        </div>
       
      </section>

     
       
      
       

      {/* <section class="mt-3">
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
      </section> */}
    </div>
    )
  }



// <!-- <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>user profile-page</title>
//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
//       crossorigin="anonymous"
//     />
//     <link rel="stylesheet" href="style.css" />
//   </head>
//   <body>
//     <div class="main">
//       <section>
//         <div class="navvar">
//           <!-- <div class="container">
//             <div class="py-2">
//               <div class="row">
//                 <div class="col-2">
//                   <img
//                     src="./clubboxx-logo.png"
//                     class="img-fluid logo-clubbox"
//                     alt=""
//                   />
//                 </div>
//                 <div class="col-6 d-flex align-items-center">
//                   <form class=" " role="search" style="width: 100%">
//                     <input
//                       class="form-control me-2 border-rounded"
//                       type="search"
//                       placeholder="Search"
//                       aria-label="Search"
//                     />
//                   </form>
//                 </div>
//                 <div class="col-2 d-flex justify-content-center align-items-center"
//                 >
//                   <img src="./brost..png" class="img-fluid" alt="" />
//                 </div>
//                 <div class="col-2 d-flex justify-content-center align-items-center"
//                 >
//                   <img src="./icon 1.png" class="img-fluid" alt="" />
//                 </div>
//               </div>
//             </div>
             
//           </div> -->
//           <nav class="navbar navbar-expand-lg bg-body-tertiary">
//             <div class="container">
//               <a class="navbar-brand" href="#">
//                 <img
//                   src="./clubboxx-logo.png"
//                   class="img-fluid logo-clubbox"
//                   alt=""
//               /></a>
//               <div class="col-6 d-flex align-items-center">
//                 <form class=" " role="search" style="width: 100%">
//                   <input
//                     class="form-control me-2 border-rounded"
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                   />
//                 </form>
//               </div>
//               <button
//                 class="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span class="navbar-toggler-icon"></span>
//               </button>

//               <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li class="nav-item">
//                     <a class="nav-link active" aria-current="page" href="#"
//                       >Home</a
//                     >
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">Link</a>
//                   </li>
//                   <li class="nav-item dropdown">
//                     <a
//                       class="nav-link dropdown-toggle"
//                       href="#"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                     >
//                       Dropdown
//                     </a>
//                     <ul class="dropdown-menu">
//                       <li><a class="dropdown-item" href="#">Action</a></li>
//                       <li>
//                         <a class="dropdown-item" href="#">Another action</a>
//                       </li>
//                       <li><hr class="dropdown-divider" /></li>
//                       <li>
//                         <a class="dropdown-item" href="#"
//                           >Something else here</a
//                         >
//                       </li>
//                     </ul>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link disabled" aria-disabled="true"
//                       >Disabled</a
//                     >
//                   </li>
//                 </ul>
//                 <form class="d-flex" role="search">
//                   <input
//                     class="form-control me-2"
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                   />
//                   <button class="btn btn-outline-success" type="submit">
//                     Search
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </section>
//       <section class="mt-3">
//         <div class="container">
//           <div class="row">
//             <div class="col-4">
//                 <button class="follow-btn">Follow my content</button>
//             </div>
//             <div class="offset-4 col-4">
//               <div class="feed-btn-active">
//                 <button class="feed-btn">Edit-icon</button>
//               </div>
//             </div>
//             <div class="col-12 text-center">
//                 <img src="./profilr-pic.png" alt="">
//                 <p class="fw-bold">
//                     Username 
//                 </p>
//             </div>
             
             
//           </div>
//         </div>
//       </section>
//       <section class="my-3">
//         <div class="container">
//             <div class="form-floating">
//                 <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
//                 <label for="floatingTextarea2">About me</label>
//               </div>
//         </div>
       
//       </section>

//       <section class="my-3">
//         <div class="container">
//             <div class="form-floating">
//                 <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 300px"></textarea>
//                 <label for="floatingTextarea2">Question of discussion</label>
//               </div>
//         </div>
       
//       </section>

//       <section class="mt-3">
//         <div class="container">
//         <div class="row">
//             <div class="  col" >
//               <div class="feed-btn-active">
//                 <button class="feed-btn ">Feeds</button>
//               </div>
                
//             </div>
//             <div class="  col" >
//               <button class="feed-btn">Trending</button>
//             </div>
//             <div class="  col" >
//               <button class="feed-btn">Notifications</button>
//             </div>
        
//         </div>
        
//         </div>
        
//         </section>

//       <section class="mt-3">
//         <div class="container">
//           <div class="row">
//             <div class="col-12 col-md-12 mt-3">
//               <div class="services-card border-0 p-4">
//                 <div class="row">
//                   <div class="col-2">
//                     <img src="./blank-profile.webp" class="img-fluid services-image" alt="no-image" srcset="">
//                   </div>
//                   <div class="col-10 services-text ps-4 d-flex align-items-center">
//                     Aman S <br>Topic of Discussion
//                   </div>
//                   <div class="col-12 my-4 ps-4 subtitle-card">
//                     Subtitle of discussion
//                   </div>
//                 </div>
//                 <div class="row">
//                   <div class="col-6"><img src="./members.png"  alt=""><span class="ms-2">6 Members</span></div>
//                   <div class="col-6 text-end">12 Messages</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class="mt-3">
//         <div class="container">
//           <div class="row">
//             <div class="col-12 col-md-12 mt-3">
//               <div class="services-card border-0 p-4">
//                 <div class="row">
//                   <div class="col-2">
//                     <img src="./blank-profile.webp" class="img-fluid services-image" alt="no-image" srcset="">
//                   </div>
//                   <div class="col-10 services-text ps-4 d-flex align-items-center">
//                     Aman S <br>Topic of Discussion
//                   </div>
//                   <div class="col-12 my-4 ps-4 subtitle-card">
//                     Subtitle of discussion
//                   </div>
//                 </div>
//                 <div class="row">
//                   <div class="col-6"><img src="./members.png"  alt=""><span class="ms-2">6 Members</span></div>
//                   <div class="col-6 text-end">12 Messages</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class="mt-3">
//         <div class="container">
//           <div class="row">
//             <div class="col-12 col-md-12 mt-3">
//               <div class="services-card border-0 p-4">
//                 <div class="row">
//                   <div class="col-2">
//                     <img src="./blank-profile.webp" class="img-fluid services-image" alt="no-image" srcset="">
//                   </div>
//                   <div class="col-10 services-text ps-4 d-flex align-items-center">
//                     Aman S <br>Topic of Discussion
//                   </div>
//                   <div class="col-12 my-4 ps-4 subtitle-card">
//                     Subtitle of discussion
//                   </div>
//                   <div class="col-12 my-3">
//                     <img src="./Frame 2.png" class="img-fluid" alt="">
//                   </div>
//                 </div>
//                 <div class="row">
//                   <div class="col-6"><img src="./members.png"  alt=""><span class="ms-2">6 Members</span></div>
//                   <div class="col-6 text-end">12 Messages</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

      

      

     
       
      
//       <section class="add-btn create-post my-3">
//         <div class="container text-end">
//             <div class="offset-4 col-4" >
//                 <div class="feed-btn-active-1">
//                   <button class="feed-btn fw-bold">Add Posts</button>
//                 </div>
//               </div>
//         </div>
//       </section>

//       <section class="mt-3">
//         <div class="container">
//           <div class="row bottom-menu">
//             <div class="col">
//               <button class="feed-btn-bottom">HOME</button>
//             </div>
//             <div class="col">
//               <button class="feed-btn-bottom">ENGAGEMENTS</button>
//             </div>
//             <div class="col">
//               <button class="feed-btn-bottom">PROFILE</button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>

//     <script
//       src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
//       integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
//       crossorigin="anonymous"
//     ></script>
//     <script
//       src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
//       integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa"
//       crossorigin="anonymous"
//     ></script>
//   </body>
// </html> -->
