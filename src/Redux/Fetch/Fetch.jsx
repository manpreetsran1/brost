export const baseUrl="http://62.72.26.28:3000/v1/api"
// export const baseUrl="https://api.clubboxx.in/v1/api"
const tmdbapikey='a8fc0d618edd7cd23dda672bec966ed4'

const tmdb_base_url = 'https://api.themoviedb.org/3'
const search_endpoint = '/search/movie'


const Fetch={

  searchMoviewsFromTmdb(payload){
    let params = {
      'api_key': tmdbapikey,
      'query': payload,
      'per_page':50
  }
  let url=tmdb_base_url+ search_endpoint+'?'+"api_key=a8fc0d618edd7cd23dda672bec966ed4&&"+'query='+ payload

  return Method.dataGet(url,params)
  },

loginApi(payload) {
    console.log(payload, 'dataa')
   let url=baseUrl+ "/user/appLogin"
    return Method.dataPost(payload,url) 
  },

movieListApi(payload) {
  
   let url=baseUrl+ "/movie/list"
    return Method.dataPost(payload,url) 
  },

  createPaymentApi(payload) {
  
   let url=baseUrl+ "/stripe/payment"
    return Method.dataPost(payload,url) 
  },


signupApi(payload) {
    console.log(payload, 'dataa')
   let url=baseUrl+ "/user/signUp"
    return Method.dataPost(payload,url)
  },
  forgotApi(payload) {
    console.log(payload, 'dataa')
   let url=baseUrl+ "/web/forgotPassword"
    return Method.dataPost(payload,url)
  },
  postGet(text,isSingle,viewType) {
    // console.log(payload, 'dataa')
    // {userId:JSON.parse(localStorage?.userInfo)?._id}
    let obj={search:text,type:viewType}
    if(isSingle){
      obj={userId:JSON.parse(localStorage?.userInfo)?._id}
    }
   let url=baseUrl+ "/user/getPost"
    return Method.dataPost(obj,url)
  },
  dashboardApi() {
    // console.log(payload, 'dataa')
   let url=baseUrl+ "/web/dashboard"
    return Method.dataGet(url)
  },
  contactApi(payload) {
    console.log(payload, 'dataa')
   let url=baseUrl+ "/web/contactUs"
    return Method.dataPost(payload,url)
  },
  
  setPassApi(userId,payload) {
   let url=baseUrl+ `/web/setPassword?userId=${userId}`
    return Method.dataPost(payload,url)
  },
  createPost(payload) {
   let url=baseUrl+ `/user/createPost`

    return Method.dataPost(payload,url,true)
  },
  follow(payload) {
   let url=baseUrl+ `/user/followUnfollow?userIdToUnfollow=${payload}`

    return Method.dataPost(null,url,true)
  },
   updateUser(payload) {
   let url=baseUrl+ `/user/update`

    return Method.dataPost(payload,url,false)
  },
  postAComment(payload) {
   let url=baseUrl+ `/user/postComment`

    return Method.dataPost(payload,url,true)
  },
  ResetPassApi(userId) {
    let body =JSON.stringify({
      "userId":userId
    })
    let url=baseUrl+ "/web/forgotPasswordValidation"
     return Method.dataPostLink(body,url)
   },
  categoryApi() {
   let url=baseUrl+ " "
    return Method.dataGet(url)
  },
}
 
const Method = {
    dataPost(body, newurl,isForm=false) {
      const internetStatus = true
      const accessToken = ""
      console.log(body, 'url', newurl,   accessToken);
      const url = newurl;
  
      const data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // 'Authorization': 'Bearer ',
          'x-access-token' :localStorage.token
        },
        body:body? JSON.stringify(body):null,
      };
      // console.log('Bearer ' + accessToken);
      return new Promise((resolve, reject) => {
        fetch(url, data)
          .then(responseData => {
            console.log(responseData.status)
            if (internetStatus === true) {
              if (responseData.status == 200||responseData.status == 201) {
                return responseData.json().then(result => {
                  console.log(result, 'result success');
                  if (result) {
                    return resolve({
                      status: 1,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 400) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 2,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 401) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 3,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 403) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 4,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (
                responseData.status == 500 ||
                responseData.status === 504
              ) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 5,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              }
              else if (responseData.status === 409) {
                return responseData.json().then(result => {
                  console.log(result, 'resultresult')
                  if (result) {
                    return resolve({
                      status: 6,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              }
            }
            else {
              return reject({
                result: 'Please check your internet connection.',
                status: 0,
              });
            }
          })
          .catch(error => {
            if (internetStatus == true) {
              console.log('responseData');
              console.log(error);
              return reject({
                result: 'Something went wrong.',
                status: 0,
              });
            } else {
              return reject({
                result: 'Please check your internet connection.',
                status: 0,
              });
            }
          });
      });
    },
    dataPostLink(body, newurl) {
      const internetStatus = true
      const accessToken = ""
      console.log(body, 'url', newurl, 'Bearer ' + accessToken);
      const url = newurl;
  
      const data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Accept': 'application/json',
          // 'Authorization': 'Bearer ',
          'x-access-token' :"Bearer "+ localStorage.token
        },
        body: body,
      };
      // console.log('Bearer ' + accessToken);
      return new Promise((resolve, reject) => {
        fetch(url, data)
          .then(responseData => {
            console.log(responseData.status)
            if (internetStatus === true) {
              if (responseData.status == 200) {
                return responseData.json().then(result => {
                  console.log(result, 'result success');
                  if (result) {
                    return resolve({
                      status: 1,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 400) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 2,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 401) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 3,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 403) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 4,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (
                responseData.status == 500 ||
                responseData.status === 504
              ) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 5,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              }
              else if (responseData.status === 409) {
                return responseData.json().then(result => {
                  console.log(result, 'resultresult')
                  if (result) {
                    return resolve({
                      status: 6,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              }
            }
            else {
              return reject({
                result: 'Please check your internet connection.',
                status: 0,
              });
            }
          })
          .catch(error => {
            if (internetStatus == true) {
              console.log('responseData');
              console.log(error);
              return reject({
                result: 'Something went wrong.',
                status: 0,
              });
            } else {
              return reject({
                result: 'Please check your internet connection.',
                status: 0,
              });
            }
          });
      });
    },
  
    dataGet(newurl,params) {
      const internetStatus = true
      console.log(newurl)
      const url = newurl;
      const data = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-access-token' :"Bearer "+ localStorage.token,
          'api_key': tmdbapikey,
        }
        
      };
      return new Promise((resolve, reject) => {
        fetch(url,params, data)
          .then(responseData => {
            console.log('ffkk')
            if (internetStatus === true) {
              if (responseData.status == 200) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 1,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 400) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 2,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 401) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 3,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 403) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 4,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (
                responseData.status == 500 ||
                responseData.status === 504
              ) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 5,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              }
            } else {
              return reject({
                result: 'Please check your internet connection.',
                status: 0,
              });
            }
          })
          .catch(error => {
            if (internetStatus == true) {
              console.log('error' + JSON.stringify(error));
              return reject({
                result: 'Something went wrong.',
                status: 0,
              });
            } else {
              return reject({
                result: 'Please check your internet connection.',
                status: 0,
              });
            }
          });
      });
    },
  
    dataPut(body, newurl) {
      const internetStatus = true
      const accessToken = ""
      console.log(body, 'url', newurl, 'Bearer ' + accessToken);
      const url = newurl;
      const data = {
        method: 'PUT',
        headers: {
          // 'Content-Type': 'application/json',
          // 'Accept': 'application/json',
          // 'Authorization': 'Bearer ',
          'x-access-token' :"Bearer "+ localStorage.token
        },
        body:body,
      };
      // console.log('Bearer ' + accessToken);
      return new Promise((resolve, reject) => {
        console.log("nishtha",url,data)
        fetch(url, data)
          .then(responseData => {
            console.log(responseData.status)
            if (internetStatus === true) {
              if (responseData.status == 200) {
                return responseData.json().then(result => {
                  console.log(result, 'result success');
                  if (result) {
                    return resolve({
                      status: 1,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 400) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 2,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 401) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 3,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 403) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 4,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (
                responseData.status == 500 ||
                responseData.status === 504
              ) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 5,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              }
              else if (responseData.status === 409) {
                return responseData.json().then(result => {
                  console.log(result, 'resultresult')
                  if (result) {
                    return resolve({
                      status: 6,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              }
            }
            else {
              return reject({
                result: 'Please check your internet connection.',
                status: 0,
              });
            }
          })
          .catch(error => {
            if (internetStatus == true) {
              console.log('responseData');
              console.log(error);
              return reject({
                result: 'Something went wrong.',
                status: 0,
              });
            } else {
              return reject({
                result: 'Please check your internet connection.',
                status: 0,
              });
            }
          });
      });
    },
    dataDelete(newurl) {
      const internetStatus = true
      console.log(newurl)
      const url = newurl;
      const data = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-access-token' :"Bearer "+ localStorage.token

          // 'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAyYjZlOTBiNGUzYmEyMDllNzZjY2Q5IiwiZW1haWwiOiJhZG1pbm5AeW9wbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NiJ9LCJpYXQiOjE2MjIxODQwNzV9.9LW_2_RLBrJLnNafwhiYv2xCbJ0Qxb6j_Sthtz_vFjU"
        },
      };
      return new Promise((resolve, reject) => {
        fetch(url, data)
          .then(responseData => {
            console.log('ffkk')
            if (internetStatus === true) {
              if (responseData.status == 200) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 1,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 400) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 2,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 401) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 3,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (responseData.status == 403) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 4,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              } else if (
                responseData.status == 500 ||
                responseData.status === 504
              ) {
                return responseData.json().then(result => {
                  if (result) {
                    return resolve({
                      status: 5,
                      result: result,
                    });
                  } else {
                    return reject({
                      status: 0,
                      result: 'Something went wrong.',
                    });
                  }
                });
              }
            } else {
              return reject({
                result: 'Please check your internet connection.',
                status: 0,
              });
            }
          })
          .catch(error => {
            if (internetStatus == true) {
              console.log('error' + JSON.stringify(error));
              return reject({
                result: 'Something went wrong.',
                status: 0,
              });
            } else {
              return reject({
                result: 'Please check your internet connection.',
                status: 0,
              });
            }
          });
      });
    },
  
  
  }
  export default Fetch;