//それぞれvalidateEmail 関数から引数持ってきた

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .trim()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (password) => {
  //小文字チェック用
  if (password.trim().match(/[a-z]/g)) {
    return "Password requures lowercase letters";
  }
  //validate uppers case
  if (!password.trim().match(/[A-Z]/g)) {
    return "Password requires uppercase letters";
  }
  //validate numbers
  if (!password.trim().match(/[0-9]/g)) {
    return "Password requires numerical values";
  }
  //validate special characters
  if (
    !password
      .trim()
      .match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
  ) {
    return "Password requires special character(s)";
  }
  //validate password length
  if (password.trim().length < 8) {
    return "Password requires minimum length of 8 characters";
  }

  //上のやつに当てはまらなかったらnullで返す
  return null;
};
