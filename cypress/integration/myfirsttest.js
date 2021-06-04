describe('My First Test', () => {

    it('open the Y combinator website', () => {
        // open the home page

        cy.visit('https://www.ycombinator.com/');

        // Get the press link and  click on it
        cy.get('body > footer.normalwidth:nth-child(3) > nav > ul.clearfix:nth-child(2) > li:nth-child(3) > a').click();

        // get the Hacker news and click on it to have the url as https://news.ycombintor.com
        cy.get("body > div.content:nth-child(2) > section:nth-child(3) > a.biglink:nth-child(2) > figure > figcaption:nth-child(2) > h2").click();
        

        // // asserts the url
        // cy.url().should('https://news.ycombinator.com', 'news')
        // // cy.wait(10000);

    });    
  });