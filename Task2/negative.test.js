const { expect } = require('chai');
const APIClient = require('../tests/utils/apiClient');
const DataGenerator = require('../tests/utils/dataGenerator');

describe('Негативные сценарии API', function() {
  it('TC-05: Создание объявления без обязательных полей', async function() {
    try {
      await APIClient.createAd({ name: 'Test' });
      expect.fail('Запрос должен был вернуть ошибку 400');
    } catch (error) {
      expect(error.response.status).to.equal(400);
    }
  });

  it('TC-06: Получение объявления с несуществующим ID', async function() {
    try {
      await APIClient.getAdById(999999999);
      expect.fail('Запрос должен был вернуть ошибку 404');
    } catch (error) {
      expect(error.response.status).to.equal(404);
    }
  });

  it('TC-07: Получение объявлений с несуществующим sellerId', async function() {
    const sellerId = DataGenerator.generateSellerId();
    const response = await APIClient.getAdsBySellerId(sellerId);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array').that.is.empty;
  });

  it('TC-09: Создание объявления с некорректным типом данных', async function() {
    const invalidData = {
      name: 'Test',
      price: DataGenerator.generateInvalidPrice(),
      sellerId: 'invalid_seller'
    };

    try {
      await APIClient.createAd(invalidData);
      expect.fail('Запрос должен был вернуть ошибку 400');
    } catch (error) {
      expect(error.response.status).to.equal(400);
    }
  });
});
