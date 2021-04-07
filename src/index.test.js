const makePromiseResolving = (data) => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 0))
}

const makePromiseRejecting = (error) => {
    return new Promise((resolve, reject) => setTimeout(() => reject(error), 0))
}

