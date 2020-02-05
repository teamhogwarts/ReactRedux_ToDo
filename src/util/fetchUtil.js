const doFetch = ({url, requestObject, actionType, errorText}) =>
    async dispatch => {
        try {
            const response = await fetch(url, requestObject);
            if (response.ok) {
                const json = response.status !== 204 ? await response.json() : null;
                dispatch({type: actionType, data: json})
            } else {
                throw new Error(`${errorText}: ${response.status}`)
            }
        } catch (e) {
            console.error(e);
        }
    };

export default doFetch;
