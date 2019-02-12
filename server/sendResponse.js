const sendResponse = {
  sendJSON: (req, res) => {
    // console.log(res.locals);
    const body = JSON.stringify(res.locals.body.body);
    res.set({
      'Content-Type': 'application/json'
    });
    res.send(body);
  }
};

module.exports = sendResponse;
