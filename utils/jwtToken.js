export const sendToken = (user, statusCode, message, res) => {
  const token = user.getJWTToken();
  const options = {
    // expires: new Date(
    //   Date.now() + 1 * 24 * 3600000
    // ),
    httpOnly: true,
    maxAge: 24 * 60 * 60,
  };
  res.status(statusCode).cookie("token", token, { expires: new Date(Date.now() + (30*24*3600000)) }).json({
    success: true,
    user,
    message,
    token,
  });
};
