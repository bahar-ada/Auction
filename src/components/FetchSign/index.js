import React, {useEffect} from "react";
import axios from "axios";


function handleGlobalErrors(response) {
    function notifyErrorMessages(resData) {
        if (resData.message && resData.message.length > 0) {
            console.error(`Error: ${resData.message}`);
        }
    }

    if (response && response.data && typeof response.data === 'object') {

        switch (response.status) {
            case 401://UNAUTHORIZED
                notifyErrorMessages(response.data);
                break;

            case 417://EXPECTATION_FAILED
                notifyErrorMessages(response.data);
                break;
        }
    }
};

async function SignToken(requestObject) {
    if (localStorage.getItem('access_token')) {
        if (requestObject.url.includes('?'))
            return (requestObject.url + "&access_token=" + localStorage.getItem('access_token'));
        else
            return (requestObject.url + "?&access_token=" + localStorage.getItem('access_token'));

    } else {

        return requestObject.url;
    }

}
export function readApi(requestObject) {
    return SignToken(requestObject).then(res => {
        return axios({
            method: "GET",
            url: res
        }).then(res => {
            return res;
        }).catch(error => {
            handleGlobalErrors(error.response);
            return error;
        });
    });
}

export function createApi(requestObject) {
    return SignToken(requestObject).then(res => {
        return axios({
            method: "POST",
            url: res,
            data: requestObject.data
        }).then(res => {
            return res;
        }).catch(error => {
            handleGlobalErrors(error.response);
            return error;
        });
    });
}

 export function updateApi(requestObject) {
    return SignToken(requestObject).then(res => {
        return axios({
            method: "PUT",
            url: res,
            data: requestObject.data
        }).then(res => {
            return res;
        }).catch(error => {
            handleGlobalErrors(error.response);
            return error;
        });
    });

}

 export function deleteApi(requestObject) {
    return SignToken(requestObject).then(res => {
        return axios({
            method: "DELETE",
            url: res,
            data: requestObject.data
        }).then(res => {
            return res;
        }).catch(error => {
            handleGlobalErrors(error.response);
            return error;
        });
    });

}

export function uploadApi(requestObject) {
    return SignToken(requestObject).then(res => {
        return axios({
            method: "POST",
            url: res,
            data: requestObject.data,
            config: requestObject.config
        }).then(res => {
            return res;
        }).catch(error => {
            handleGlobalErrors(error.response);
            return error;
        });
    });
}