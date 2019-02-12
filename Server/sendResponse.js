const sendResponse = {
  sendJSON: (req, res) => {
    const body = JSON.stringify(res.locals);
    res.set({
      'Content-Type': 'application/json'
    });
    res.send(body);
  }
};

module.exports = sendResponse;
