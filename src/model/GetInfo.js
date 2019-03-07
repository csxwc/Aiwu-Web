const GetInfo = {
  getUserIDByLocalStorage(){
    return localStorage.getItem("userid");
  },

  getUserIDByRouter(){
    return this.$route.params.userid;
  },

};

export default GetInfo;
