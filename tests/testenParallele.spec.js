
// j'ai ajouté ce commentaire afin de test le push via vscod directement 

// @ts-check
import { MainPage } from "../tests/pomm";
const donnees = require('..//données/données.json');


const { test, expect } = require('@playwright/test');
test('has title', async ({ browser}) => {
const promises = donnees.recherches.map( async(donnee) =>{
       const page = await browser.newPage();
       const mainPage = new MainPage(page);

  await mainPage.goToHomePage();
  await page.locator("//textarea[@id='APjFqb']").fill(donnee);
  await page.locator("(//input[@value='Recherche Google'])[1]").click();
  await page.waitForSelector('body', { state: 'attached' });

  const pageTitle = await page.title();
    console.log(`Terme de recherche : ${donnee}, Titre de la page : ${pageTitle}`);
    await page.waitForTimeout(2000);


await page.close()});
await Promise.all(promises);
});