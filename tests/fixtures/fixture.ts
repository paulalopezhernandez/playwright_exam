import { test as base } from '@playwright/test'
import { createUser, User } from '../model/user'
import { PageManager } from '../pageobjects/pagemanager'


export type TestOptions = {
    pageManager: PageManager
    user: User;
}

export const test = base.extend<TestOptions>({
    pageManager: async ({ page }, use) => {
        let pm = new PageManager(page)         
        await use(pm)
    }, 
     user: async ({}, use) => {
     const user = createUser();
         await use(user)
     } 
})

export { expect } from '@playwright/test';