const path = require('path');
const fs = require('fs');

const AppError = require("../../../shared/AppError");

const uploadConfig = require('../../../config/upload');

class UpdateFactoryPictureService {
  constructor(factoryRepository) {
    this.factoryRepository = factoryRepository;
  }

  async execute({ id, fileName }) {
    const factory = await this.factoryRepository.listFactory(id);
    if (!factory) throw new AppError('Factory not found');

    if (factory.avatar) {
      const factoryPicturePath = path.join(uploadConfig.directory, factory.avatar);

      const factoryPictureExists = await fs.promises.stat(factoryPicturePath);
      if (factoryPictureExists) {
        await fs.promises.unlink(factoryPicturePath);
      }
    }

    return this.factoryRepository.updateFactory({
      id,
      avatar: fileName,
    });
  }
}

module.exports = UpdateFactoryPictureService;
