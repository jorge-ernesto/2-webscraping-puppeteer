/****************** Abriendo una página web ******************/

/*
import puppeteer from "puppeteer";

async function openWebPage() {

    // Configuracion de pupeeteer
    const browser = await puppeteer.launch({
        headless: false, // Si quieres que Puppeteer se ejecute en modo con cabeza (es decir, puedes ver y observar lo que está sucediendo en la interfaz del navegador).
        slowMo: 200,
    });
    const page = await browser.newPage();
    await page.goto('https://www.example.com');

    // Cerrar navegador de pupeeteer
    await browser.close();
}
openWebPage();
*/

/****************** Captura de Pantalla con Puppeteer ******************/

/*
import puppeteer from "puppeteer";

async function captureScreenshot() {

    // Configuracion de pupeeteer
    const browser = await puppeteer.launch({
        headless: 'true' // Si quieres que Puppeteer se ejecute en modo sin cabeza (es decir, sin interfaz del navegador).
    });
    const page = await browser.newPage();
    await page.goto('https://www.example.com');

    // Tomar captura de pantalla
    await page.screenshot({ path: 'example.png' });

    // Cerrar navegador de pupeeteer
    await browser.close();
}
captureScreenshot();
*/

/****************** Navegando a través de una página web ******************/

/*
import puppeteer from "puppeteer";

async function getDataFromWebPage() {

    // Configuracion de pupeeteer
    const browser = await puppeteer.launch({
        headless: 'true' // Si quieres que Puppeteer se ejecute en modo sin cabeza (es decir, sin interfaz del navegador).
    });
    const page = await browser.newPage();
    await page.goto('https://www.example.com');

    // Recorrer pagina
    const data = await page.evaluate(() => {
        // Obtener datos
        let title = document.querySelector('h1').innerText;
        let description = document.querySelector('p').innerText;

        // Retornar datos de pagina
        return {
            title,
            description,
        }
    });
    console.log('data', data);
    // Cerrar Recorrer pagina

    // Cerrar navegador de pupeeteer
    await browser.close();
}
getDataFromWebPage();
*/

/****************** Manejo de páginas dinámicas ******************/

import puppeteer from "puppeteer";

async function handleDynamicWebPage() {

    // Configuracion de pupeeteer
    const browser = await puppeteer.launch({
        headless: false, // Si quieres que Puppeteer se ejecute en modo con cabeza (es decir, puedes ver y observar lo que está sucediendo en la interfaz del navegador).
        slowMo: 200,
    });
    const page = await browser.newPage();
    await page.goto("https://quotes.toscrape.com");
    // await page.waitForSelector('div[data-loaded="true"]'); // Asegúrate de reemplazar esto con el selector de CSS correcto.

    // Recorrer pagina
    const data = await page.evaluate(() => {
        // Obtener datos
        const quotes = document.querySelectorAll(".quote");

        // Convertir NodeList en Array, para recorrerlo con map. Mencionar que forEach si puede recorrer un NodeList.
        const data = [...quotes].map((quote) => {
            // Obtener datos
            const quoteText = quote.querySelector(".text").innerText;
            const author = quote.querySelector(".author").innerText;
            const tagsNodeList = quote.querySelectorAll(".tag");
            const tags = [...tagsNodeList].map(
                (tag) => tag.innerText
            );

            // Map, crea un nuevo array transformado con los elementos retornados por la función de mapeo.
            return {
                quoteText,
                author,
                tags,
            }
        });

        // Retornar datos de pagina
        return data;
    });
    console.log('data', data);
    // Cerrar Recorrer pagina

    // Cerrar navegador de pupeeteer
    await browser.close();
}
handleDynamicWebPage();
