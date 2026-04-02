const { expect } = require('chai');
const APIClient = require('../tests/utils/apiClient');
const DataGenerator = require('../tests/utils/dataGenerator');

describe('Корнер-кейсы API', function() {
  this.timeout(10000);

  it('TC-10: Идемпотентность создания объявления', async function() {
    const adData = DataGenerator.generateValidAdData();
    const responses = await Promise.all([
      APIClient.createAd(adData),
      APIClient.createAd(adData)
    ]);

    expect(responses[0].status).to.equal(201);
    expect(responses[1].status).to.equal(201);
    expect(responses[0].data.id).to.not.equal(responses[1].data.id);
  });