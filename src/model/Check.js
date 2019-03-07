const Check = {
  isLogged() {
    const status = localStorage.getItem('logged-in');
    return status === true;
  }
};

export default Check;
