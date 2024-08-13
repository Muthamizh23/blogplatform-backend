export const sendToken = (user, statusCode, message, res) => {
  const token = user.getJWTToken();
  const options = {
    // expires: new Date(
    //   Date.now() + 1 * 24 * 3600000
    // ),
    httpOnly: true,
    maxAge: 24 * 60 * 60,
    sameSite: 'none',
    domain: 'blogplatform-backend.onrender.com',
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
