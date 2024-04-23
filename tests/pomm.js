import { Page } from "@playwright/test";

export class MainPage {
    constructor(page,browser) {
        this.page = page;
    }

    async goToHomePage() {
        await this.page.goto('https://google.com');
        await this.page.waitForLoadState('load');
        // await this.page.locator("//button[@id='L2AGLb']").click();
        const acceptButton = await this.page.locator("//button[@id='L2AGLb']").first();
        if (await acceptButton.isVisible()) {
            // Clique sur le bouton s'il est visible
            await acceptButton.click();
        }
    }
}

