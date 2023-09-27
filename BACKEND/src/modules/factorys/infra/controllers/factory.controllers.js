const CreateFactoryService = require('../../services/CreateFactoryService')
const ListFactoryService = require('../../services/ListFactoryService')
const ListAllFactoryService = require('../../services/ListAllfactorysService')
const DeleteFactoryService = require('../../services/DeleteFactoryService')

const factoryRepository = require('../../repositories/factory.repository')

module.exports = {
  async factoryCreate(request, response) {
    const { name, city, contact, email } = request.body
    const { id } = request.user

    const createFactory = new CreateFactoryService(factoryRepository)

    const factory = await createFactory.execute({
      name,
      city,
      contact,
      email,
      user_id: id,
    })

    return response.json({ data: factory })
  },

  async factoryList(request, response) {
    const { id } = request.params

    const listFactory = new ListFactoryService(factoryRepository)

    const factory = await listFactory.execute(id)

    return response.json({ data: factory })
  },

  async factoryListAll(request, response) {
    const listAllFactory = new ListAllFactoryService(factoryRepository)

    const factorys = await listAllFactory.execute()

    return response.json({ data: factorys })
  },

  async factoryDeleted(request, response) {
    const { id } = request.params

    const deleteFactory = new DeleteFactoryService(factoryRepository)

    await deleteFactory.execute(id)

    return response.json({ message: 'deleted factory' })
  },

  async factoryPatch(request, response) {
    return response.json({ message: 'factoryPatch' })
  },

  async factoryPut(request, response) {
    return response.json({ message: 'factoryPut' })
  },
}
