const Fixtures = require('node-mongodb-fixtures');
 
const fixtures = new Fixtures();
 
fixtures
  .connect(process.env.MONGO_URL)
  .then(() => fixtures.unload())
  .then(() => fixtures.load())
  .catch(e => console.error(e))
  .finally(() => fixtures.disconnect());