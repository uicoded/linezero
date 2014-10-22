describe('linezero index page', function() {
  it('should have a title', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8000/index.html');
    expect(browser.getTitle()).toEqual('LineZero');
  });
});
