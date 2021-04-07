const makePromiseResolving = (data) => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 0))
}

const makePromiseRejecting = (error) => {
    return new Promise((resolve, reject) => setTimeout(() => reject(error), 0))
}

it('should pass for multiple promises resolved v1', () => {
    expect.assertions(3)

    const promise1 = makePromiseResolving('data-1')
    const promise2 = makePromiseResolving('data-2')
    const promise3 = makePromiseResolving('data-3')

    promise1.then((data) => expect(data).toBe('data-1'))
    promise2.then((data) => expect(data).toBe('data-2'))
    promise3.then((data) => expect(data).toBe('data-3'))

    return Promise.all([
        promise1,
        promise2,
        promise3,
    ])
})

it('should pass for multiple promises resolved v2', () => {
    expect.assertions(3)

    const promise1 = makePromiseResolving('data-1')
    const promise2 = makePromiseResolving('data-2')
    const promise3 = makePromiseResolving('data-3')

    const promiseAll = Promise.all([
        promise1,
        promise2,
        promise3,
    ])

    return promiseAll.then((allData) => {
        expect(allData[0]).toBe('data-1')
        expect(allData[1]).toBe('data-2')
        expect(allData[2]).toBe('data-3')
    })
})

it('should pass for multiple promises resolved v3', () => {
    expect.assertions(1)

    const promise1 = makePromiseResolving('data-1')
    const promise2 = makePromiseResolving('data-2')
    const promise3 = makePromiseResolving('data-3')

    const promiseAll = Promise.all([
        promise1,
        promise2,
        promise3,
    ])

    return promiseAll.then((allData) => {
        expect(allData).toStrictEqual([
            'data-1',
            'data-2',
            'data-3',
        ])
    })
})