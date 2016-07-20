/* global describe */
/* global before */
/* global after  */
/* global beforeEach */
/* global afterEach */
/* global it */

describe('Terms of Service', function() {
  before(function(client, done) {
    done();
  });

  after(function(client, done) {
    client.end(function() {
      done();
    });
  });

  afterEach(function(client, done) {
    done();
  });

  beforeEach(function(client, done) {
    done();
  });

  it('Should show the terms on the terms route', function(client) {
    client
      .url('http://localhost:3000/terms')
      .expect.element('#app > div > div > div.terms.js-terms > div.terms-content.terms-box > div > .iframe-holder > iframe.terms-iframe-terms')
      .to.be.present.before(1000)
      .and.to.be.an('iframe')
      .and.to.be.visible
      .and.to.have.attribute('src').equals('https://tidepool.org/terms-of-use-summary');
  });

  it('Should show the privacy policy', function(client) {
    client.expect.element('#app > div > div > div.terms.js-terms > div.terms-content.terms-box > div > .iframe-holder > iframe.terms-iframe-privacy')
      .to.be.present.before(1000)
      .and.to.be.an('iframe')
      .and.to.be.visible
      .and.to.have.attribute('src').equals('https://tidepool.org/privacy-policy-summary');
  });
});
