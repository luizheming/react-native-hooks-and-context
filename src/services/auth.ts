interface Response {
    token: string,
    user: {
        name: string,
        email: string
    }
}
export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'fken29ihje8092308run20fy3u904-094',
                user: {
                    name: 'Luiz',
                    email: 'lg.luizh@gmail.com'
                },
            })
        }, 2000)
    })
}
