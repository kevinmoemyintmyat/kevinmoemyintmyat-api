async function getSmuleData({ offset, limit }) {
  const { SMULE_API, SMULE_ID } = process.env;
  try {
    const response = await fetch(
      `${SMULE_API}/profile/performances?accountId=${SMULE_ID}&appUid=sing&offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    return data;
  } catch (ex) {
    console.error(ex);
    return new Error(ex.message);
  }
}

module.exports = {
  getSmuleData,
};
