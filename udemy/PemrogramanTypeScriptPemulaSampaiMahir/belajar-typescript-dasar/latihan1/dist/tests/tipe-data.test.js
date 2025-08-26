"use strict";
describe('Data Type', () => {
    it('should must declare', () => {
        let name = "Muhamad Yasir Noval";
        let balance = 100000;
        let isVip = true;
        console.info(name);
        console.info(balance);
        console.info(isVip);
        // Error if you using npx tsc
        // name = 100;
        // balance = "yan";
        // isVip = 100;
    });
});
