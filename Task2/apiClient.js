const axios = require('axios');
require('dotenv').config();

class APIClient {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.BASE_URL || 'https://qa-internship.avito.com',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async createAd(adData) {
    return this.client.post('/api/ads', adData);
  }

  async getAdById(id) {
    return this.client.get(`/api/ads/${id}`);
  }

  async getAdsBySellerId(sellerId) {
    return this.client.get(`/api/sellers/${sellerId}/ads`);
  }

  async getStatisticsByItemId(itemId) {
    return this.client.get(`/api/ads/${itemId}/statistics`);
  }
}

module.exports = new APIClient();
