const AppError = require("../../../shared/AppError")
const path = require('path')

const fs = require("fs")
const {directory} = require('../../../config/upload')

class UpdateAvatarService {
  constructor (usersRepository) {
    this.usersRepository = usersRepository
  }
  async execute(payload) {
    
    const { file, user } = payload

    const existsUser = await this.usersRepository.findById(user.id)
    if(!existsUser) {
      throw new AppError('user not found', 404)
    }

    if(existsUser.avatar) {
const fileCompletePath = path.join(directory, existsUser.avatar)

const fileExists = fs.existsSync(fileCompletePath)
if(fileExists) {
  fs.unlinkSync(fileCompletePath)
}
    }
    

    const updatedUser = await this.usersRepository.update({
      id:user.id,
      avatar:file.filename,
    })

    delete updatedUser[0].password

    return updatedUser[0]
  }
}

module.exports = UpdateAvatarService