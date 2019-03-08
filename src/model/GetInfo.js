const GetInfo = {
  getUserIDByLocalStorage(){
    return localStorage.getItem("userid");
  },
};

export default GetInfo;
