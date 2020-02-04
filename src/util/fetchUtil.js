const doFetch = ({url, requestObject, actionCreator, errorText}) =>
    async dispatch => {
        try {
            // TODO: dispatch action loading -> true
            const response = await fetch(url, requestObject);
            if (response.ok) {
                const json = response.status !== 204 ? await response.json() : null;
                dispatch(actionCreator(json));

            } else {
                throw new Error(`${errorText}: ${response.status}`)
            }
        } catch (e) {
            console.error(e);
        }
        // TODO: dispatch action loading -> false
    };

export default doFetch;
