const axios = require("axios");

async function getSmuleData({ offset, limit }) {
  const { SMULE_API, SMULE_ID } = process.env;
  try {
    const response = await axios.get(
      `${SMULE_API}/profile/performances?accountId=${SMULE_ID}&appUid=sing&offset=${offset}&limit=${limit}`
    );
    const { data } = response;
    return data;
  } catch (ex) {
    console.error(ex);
  }
}

module.exports = {
  getSmuleData
};
