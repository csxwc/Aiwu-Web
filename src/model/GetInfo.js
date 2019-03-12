const GetInfo = {
  getUserIDByLocalStorage(){
    return parseInt(localStorage.getItem("userid"));
  },
};

export default GetInfo;
