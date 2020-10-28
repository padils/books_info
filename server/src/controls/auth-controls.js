const User = require('../models/user-model')

const login = async (req, res) => {
  const body = req.body
  try {
    if (!body) {
      return res.status(400).json({success: false, error: 'not Data'})
    }

    const user = await User.findOne({email: body.email})
    if (!user) {
      return res.status(400).json({message: 'Пользователь не найден эхх'})
    }

    if (user.password !== body.password) {
      return res.status(400).json({message: 'не тот пароль'})
    }

    user.login = true
    return res
      .status(200)
      .json({userId: user.id, message: 'ok', isAuth: user.login})
  } catch (e) {
    res.status(400).json({message: 'error'})
  }
}
const isAuth = async (req, res) => {
  const id = req.body.id
  try {
    if (!id) {
      return res.status(400).json({success: false, error: 'not Data'})
    }
    const user = await User.findOne({_id: id})
    if (!user) {
      return res
        .status(400)
        .json({message: 'Пользователь не найден ', isAuth: false})
    }
    return res.status(200).json({userId: user._id, message: 'ok', isAuth: true})
  } catch (e) {
    res.status(400).json({message: 'error'})
  }
}
const logout = async (req, res) => {
  const body = req.body
  try {
    if (!body) {
      return res.status(400).json({success: false, error: 'not Data'})
    }

    const user = await User.findOne({_id: body.userId})
    user.login = false
    return res.status(200).json({message: 'logout', isAuth: user.login})
  } catch (e) {
    res.status(400).json({message: 'errors'})
  }
}

const register = async (req, res) => {
  try {
    const {email, password} = req.body
    const candidate = await User.findOne({email})
    if (candidate) {
      return res
        .status(400)
        .json({message: 'Такой пользователь уже существует'})
    }

    const user = new User(req.body)
    user.login = true

    await user.save()
    return res.status(200).json({
      message: 'Пользователь создан',
      isAuth: user.login,
      userId: user.id,
    })
  } catch (e) {
    user.login = false
    return res
      .status(400)
      .json({message: 'Что-то пошло не так, попробуйте снова'})
  }
}

module.exports = {login, logout, register, isAuth}
