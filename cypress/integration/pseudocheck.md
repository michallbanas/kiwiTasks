# Pseudocode check

BEFORE: 
- I would use setCookie
- I would use baseUrl in cypress.json file

IT: 
- I would change a descripiton because it is not clear what should code do
- I would save filters as alias use cy.each and cy.wrap method to check multiple elements/filters and check if they are visible at least
- Instead of should exist I would use should be.visible because element can exist but can be hidden for example
- .eq should be used cy.get(").eq(0) 

IT2: 
- I suppose there is missing find(element) => cy.get("").find(div)... 
- cy.contains is not enought, there should be get, find and then contains "Book", because there can be a lot of elements contain "Book"