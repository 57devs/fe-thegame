const API = "http://localhost:8000/"

export const request = function (method, path, data, callback) {
    if (!method || !path) return

    let requestInfo = {
        method: method,
    }

    if (method === "POST") {
        requestInfo["headers"] = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }

        requestInfo["body"] = JSON.stringify(data)
    }

    fetch(API + path, requestInfo).then(response => {
        if (response.status === 200)
            return response.json()
    }).then(result => {
        if (callback && typeof callback === "function") {
            callback(result)
        } else return result
    }).catch(error => {
        console.error(error)
    })
}