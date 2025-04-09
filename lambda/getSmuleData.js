const axios = require("axios");

async function getSmuleData({ offset, limit }) {
  const { SMULE_API, SMULE_ID } = process.env;
  const axiosClient = new axios.Axios({
    baseURL: `${SMULE_API}/profile/performances`,
  });
  try {
    const response = await axiosClient.get(
      `?accountId=${SMULE_ID}&appUid=sing&offset=${offset}&limit=${limit}`
    );
    const { data } = response;
    return data;
  } catch (ex) {
    console.error(ex);
    return new Error(ex.message);
  }
}

module.exports = {
  getSmuleData,
};
