const { expect } = require('chai');
const APIClient = require('../tests/utils/apiClient');
const DataGenerator = require('../tests/utils/dataGenerator');

describe('Позитивные сценарии API', function() {
  let adId;
  let sellerId;

  beforeEach(async function() {
    const adData = DataGenerator.generateValidAdData();
    sellerId = adData.sellerId;
    const response = await APIClient.createAd(adData);
    adId = response.data.id;
  });

  it('TC-01: Создание объявления (успешный сценарий)', async function() {
    const adData = DataGenerator.generateValidAdData();
    const response = await APIClient.createAd(adData);

    expect(response.status).to.equal(201);
    expect(response.data).to.have.property('id');
    expect(response.data.name).to.equal(adData.name);
  });

  it('TC-02: Получение объявления по ID', async function() {
    const response = await APIClient.getAdById(adId);

    expect(response.status).to.equal(200);
    expect(response.data.id).to.equal(adId);
  });

  it('TC-03: Получение объявлений по sellerId', async function() {
    const response = await APIClient.getAdsBySellerId(sellerId);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
    const foundAd = response.data.find(ad => ad.id === adId);
    expect(foundAd).to.not.be.undefined;
  });

  it('TC-04: Получение статистики по itemId', async function() {
    const response = await APIClient.getStatisticsByItemId(adId);

    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('object');
  });
});
