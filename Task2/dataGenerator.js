class DataGenerator {
  static generateSellerId() {
    return Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;
  }

  static generateUniqueName() {
    return `Test Ad ${Date.now()} ${Math.random().toString(36).substr(2, 5)}`;
  }

  static generateValidAdData() {
    return {
      name: this.generateUniqueName(),
      price: Math.floor(Math.random() * 10000) + 1,
      sellerId: this.generateSellerId()
    };
  }

  static generateInvalidPrice() {
    return "invalid_price";
  }

  static generateLongName(length = 10000) {
    return 'A'.repeat(length);
  }
}

module.exports = DataGenerator;
