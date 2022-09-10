const crypto = require("crypto");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
//Doesnt need to be modified
exports.register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  console.log("flag");
  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    console.log("flag3");

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }
    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }
    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorResponse("Email could not be sent", 404));
    }
    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    const message = `
     <h1> You have requested a password reset</h1>
     <p> Please go to this link to reset your password </p>
     <a  href ${resetUrl} clicktracking=off>${resetUrl}</a>
     `;
    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset",
        text: message,
      });
      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (error) {
      user.getResetPasswordToken = undefined;
      user.getResetPasswordExpire = undefined;

      await user.save();
      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (error) {
    next(error);
  }
};

exports.resetpassword = async (req, res, next) => {
  // Compare token in URL params to hashed token
  console.log('reset fired')
  console.log(req.params.resetToken)
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getSignedToken(),
    });
  } catch (err) {
    next(err);
  }
}


const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ sucess: true, token });
};
