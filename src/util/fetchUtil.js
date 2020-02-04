const doFetch = async ({url, requestObject, dataHandler, errorText}) => {
    try {
        const response = await fetch(url, requestObject);
        if (response.ok) {
            const json = response.status !== 204 ? await response.json() : null;
            dataHandler(json);
        } else {
            throw new Error(`${errorText}: ${response.status}`)
        }
    } catch (e) {
        console.error(e);
    }
};

export default doFetch;
