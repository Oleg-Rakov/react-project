import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error
    // delay for test loading
    setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
}))
