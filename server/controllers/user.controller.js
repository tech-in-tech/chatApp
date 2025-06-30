import User from "../models/user.model.js"
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"
export const register = async (req, res) => {
  try {
    const { fullName, username, password, gender } = req.body;
    if (!fullName || !username || !password || !gender) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required"
      })
    }


    const user = await User.findOne({ username });
    if (user) {
      return res.status(409).json({
        success: false,
        message: "User Already Exist"
      })
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const avatarType = gender === 'male' ? 'boy' : 'girl';
    const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`
    const newUser = await User.create({
      username,
      fullName,
      password: hashedPassword,
      gender,
      avatar,
    })


    const tokenData = {
      _id: newUser?._id
    }
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })


    return res.status(200).cookie("token", token, {
      expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',  // Use secure cookies in production
      sameSite: 'None' // Helps prevent CSRF attacks
    }).json({
      success: true,
      message: "User Created Successfully",
      newUser,
      token
    })
  } catch (error) {
    console.log(error)
  }
}


// Login Controller 
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        message: "Please enter valid username or password",
        success: false
      })
    }


    // find user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        message: "Please enter valid username or password",
        success: false
      })
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Please enter valid username or password",
        success: false
      });
    }


    const tokenData = {
      _id: user?._id
    }
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })


    res.status(200)
    .cookie("token", token, {
      expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',  // Use secure cookies in production
      sameSite: 'None' // Helps prevent CSRF attacks
    })
    .json({
      responseData: {
        user
      },
      token:token,
      success: true
    });


  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}


// Get my profile
export const getMyProfile = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming user ID is stored in req.user by auth middleware
    console.log(userId)
    const profile = await User.findById(userId).select("-password");

    return res.status(200).json({
      success: true,
      responseData: {
        profile
      }
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
}


// Logout Controller
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',  // Use secure cookies in production
      sameSite: 'None' // Helps prevent CSRF attacks
    });
    return res.status(200).json({
      success: true,
      message: "Logout Successfully"
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    })
  }
} 


// get Other users controller
export const getOtherUsers = async (req, res) => {
  try {
    const otherUser = await User.find({_id:{$ne: req.user._id }})
    return res.status(200).json({
      success: true,
      responseData: {
        otherUser
      }
    });

    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false
    });
  }
}

