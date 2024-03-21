import React from 'react'
import AppImages from '../../Themes/AppImages'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Clubbox(props){
  const history=useHistory()
  return (
    <div className="main">
    <section>
      <div className="navvar">
        <div style={{backgroundColor:'black'}} className="container-fluid">
          <div className="py-2">
            <div className="row">
              <div className="col-2">
                <img
                style={{height:'100%',width:'100%'}}
                  src={AppImages.clubboxxlogo1}
                  // className="img-fluid logo-clubbox"
                  alt=""
                />
              </div>
              <div className="col-6 d-flex align-items-center">
                <form className=" " role="search" style={{width:'100%'}}>
                  {/* <input
                    className="form-control me-2 border-rounded"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  /> */}
                </form>
              </div>
              <div onClick={()=>{history.push('./home')}} className="col-2 d-flex justify-content-center align-items-center"
              >
                <img src={AppImages.brost} className="img-fluid" alt="" />
              </div>
              <div onClick={()=>{history.push('./login')}} className="col-2 d-flex justify-content-center align-items-center"
              >
                <img src={AppImages.userIcon} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          {/* <!-- <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                   
                     
                  <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                       
                    </form>
                    
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><img src="./brost..png" className="img-fluid" alt=""></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><img src="./icon 1.png" className="img-fluid" alt=""></a>
                </li>
                
              </ul> --> */}
        </div>
      </div>
    </section>

    <section style={{paddingTop:"5%"}} className="gif-sec">
      <div className="text-center">
        <img src={AppImages.Clubboxx_Gif_Final} className="img-fluid banner-giff" alt="" />
      </div>
    </section>
    <section className="vibract-img">
      <div className="container">
        <p className="mb-0 text-center text-vibract">
          Vibrant community for entertainment industry
        </p>
      </div>
    </section>

    <section style={{backgroundColor:'#000'}}>
      <div className="connect-sec">
        <div className="container">
          <p className="connect-center text-center">
            We connect across the entertainment world for professionals,
            enthusiasts, and fans.
          </p>
          <p className="connect-contain text-center mt-5">
            Whether you're an actor, filmmaker, musician, writer, or simply
            someone who loves to be entertained, this is the perfect place for
            you
          </p>
        </div>
      </div>
    </section>

    <section className="offer-sec">
      <div className="container">
        <p className="connect-offer text-center">WHAT WE OFFER</p>
      </div>
    </section>

    <section style={{backgroundColor: '#000',padding: '3%'}}>
      <div className="connect-sec-next mx-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="connect-center text-center  mb-5 text-white">Forums</h4>
              <p className="connect-contain  text-white ">
                 Join discussions on various topics related to entertainment and sports. You can also create your own threads and invite others to join., and fans.
              </p>
              
            </div>
            <div className="col-md-8 text-center">
              <img src={AppImages.fourm} style={{width:'95%'}} className="img-fluid" alt=""/>
            </div>
          </div>
        
        </div>
      </div>
    </section>
    <section style={{backgroundColor:'#000',padding:'3%'}}>
      <div className="connect-sec-next-2   mx-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="connect-center text-center  mb-5 text-white">Reviews</h4>
              <p className="connect-contain  text-white">
                Write reviews on the content you watch, listen to, or play. You can also read reviews from other users and rate them.
              </p>
              
            </div>
            <div className="col-md-8">
              <img src={AppImages.asd} style={{width:'95%'}} className="img-fluid" alt=""/>
            </div>
          </div>
        
        </div>
      </div>
    </section>

    <section style={{backgroundColor:'#000',padding:'3%'}}>
      <div className="connect-sec-next-3   mx-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="connect-center text-center  mb-5 text-white">GROUPS</h4>
              <p className="connect-contain  text-white">
                Create or join groups based on your interests, preferences, or fandoms. You can chat with group members, share media, and organize events.
              </p>
              
            </div>
            <div className="col-md-8 text-center">
              <img src={AppImages.g12} style={{width:'95%'}} className="img-fluid" alt=""/>
            </div>
          </div>
        
        </div>
      </div>
    </section>
    <section style={{backgroundColor:'#000',padding:'3%'}}>
      <div className="connect-sec-next-4   mx-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="connect-center text-center  mb-5 text-white">NEWS</h4>
              <p className="connect-contain  text-white">
              Stay updated on the latest news and announcements from the entertainment and sports industry. You can also comment on the news and share your thoughts.
              </p>
              
            </div>
            <div className="col-md-8 text-center">
              <img src={AppImages.news} style={{width:'95%'}} className="img-fluid" alt=""/>
            </div>
          </div>
        
        </div>
      </div>
    </section>

    <section className="offer-sec">
      {/* <div className="container">
        <p className="connect-offer text-center">TRENDING  CONVERSATIONS</p>
        <div className="row">
          <div className="col-md-6 text-center" >
            <img src={AppImages.asd} style={{width:'95%'}} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-6 text-center">
            <img src={AppImages.asd} style={{width:'95%'}} className="img-fluid" alt=""/>
          </div>
        </div>
      </div> */}
    </section>
    
  </div>
  )
}
export default Clubbox

{/* <html lang="en">
  <head>
    {/* <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
    {/* <link rel="stylesheet" href="style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    /> */}
//     <title>clubbox</title>
//   </head>
//   <body>
//     <div className="main">
//       <section>
//         <div className="navvar">
//           <div className="container-fluid">
//             <div className="py-2">
//               <div className="row">
//                 <div className="col-2">
//                   <img
//                     src="./clubboxx logo 1.png"
//                     className="img-fluid logo-clubbox"
//                     alt=""
//                   />
//                 </div>
//                 <div className="col-6 d-flex align-items-center">
//                   <form className=" " role="search" style="width: 100%">
//                     <input
//                       className="form-control me-2 border-rounded"
//                       type="search"
//                       placeholder="Search"
//                       aria-label="Search"
//                     />
//                   </form>
//                 </div>
//                 <div className="col-2 d-flex justify-content-center align-items-center"
//                 >
//                   <img src="./brost..png" className="img-fluid" alt="" />
//                 </div>
//                 <div className="col-2 d-flex justify-content-center align-items-center"
//                 >
//                   <img src="./icon 1.png" className="img-fluid" alt="" />
//                 </div>
//               </div>
//             </div>
//             <!-- <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
                     
                       
//                     <form className="d-flex" role="search">
//                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                         
//                       </form>
                      
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#"><img src="./brost..png" className="img-fluid" alt=""></a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#"><img src="./icon 1.png" className="img-fluid" alt=""></a>
//                   </li>
                  
//                 </ul> -->
//           </div>
//         </div>
//       </section>

//       <section className="gif-sec">
//         <div className="text-center">
//           <img src="./brost gif.gif" className="img-fluid banner-giff" alt="" />
//         </div>
//       </section>
//       <section className="vibract-img">
//         <div className="container">
//           <p className="mb-0 text-center text-vibract">
//             Vibrant community for entertainment industry
//           </p>
//         </div>
//       </section>

//       <section style="background-color: #000">
//         <div className="connect-sec">
//           <div className="container">
//             <p className="connect-center text-center">
//               We connect across the entertainment world for professionals,
//               enthusiasts, and fans.
//             </p>
//             <p className="connect-contain text-center mt-5">
//               Whether you're an actor, filmmaker, musician, writer, or simply
//               someone who loves to be entertained, this is the perfect place for
//               you
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="offer-sec">
//         <div className="container">
//           <p className="connect-offer text-center">WHAT WE OFFER</p>
//         </div>
//       </section>

//       <section style="background-color: #000;padding: 3% 0%;">
//         <div className="connect-sec-next mx-4">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-4">
//                 <h4 className="connect-center-next mb-5 text-white">Forums</h4>
//                 <p className="connect-center-next  text-white">
//                    Join discussions on various topics related to entertainment and sports. You can also create your own threads and invite others to join., and fans.
//                 </p>
                
//               </div>
//               <div className="col-md-8 text-center">
//                 <img src={AppImages.asd} style="width: 95%;" className="img-fluid" alt="">
//               </div>
//             </div>
          
//           </div>
//         </div>
//       </section>
//       <section style="background-color: #000;padding: 3% 0%;">
//         <div className="connect-sec-next-2   mx-4">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-4">
//                 <h4 className="connect-center-next mb-5 text-white">Reviews</h4>
//                 <p className="connect-center-next  text-white">
//                   Write reviews on the content you watch, listen to, or play. You can also read reviews from other users and rate them.
//                 </p>
                
//               </div>
//               <div className="col-md-8">
//                 <img src={AppImages.asd} style="width: 95%;" className="img-fluid" alt="">
//               </div>
//             </div>
          
//           </div>
//         </div>
//       </section>

//       <section style="background-color: #000;padding: 3% 0%;">
//         <div className="connect-sec-next-3   mx-4">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-4">
//                 <h4 className="connect-center-next mb-5 text-white">GROUPS</h4>
//                 <p className="connect-center-next  text-white">
//                   Create or join groups based on your interests, preferences, or fandoms. You can chat with group members, share media, and organize events.
//                 </p>
                
//               </div>
//               <div className="col-md-8 text-center">
//                 <img src={AppImages.asd} style="width: 95%;" className="img-fluid" alt="">
//               </div>
//             </div>
          
//           </div>
//         </div>
//       </section>

//       <section className="offer-sec">
//         <div className="container">
//           <p className="connect-offer text-center">TRENDING  CONVERSATIONS</p>
//           <div className="row">
//             <div className="col-md-6 text-center" >
//               <img src={AppImages.asd} style="width: 95%;" className="img-fluid" alt="">
//             </div>
//             <div className="col-md-6 text-center">
//               <img src={AppImages.asd} style="width: 95%;" className="img-fluid" alt="">
//             </div>
//           </div>
//         </div>
//       </section>
      
//     </div>

   
//   </body>
// </html> */}
