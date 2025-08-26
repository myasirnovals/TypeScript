describe('Data Type', () => {
    it('should must declare', () => {
        let name: string = "Muhamad Yasir Noval";
        let balance: number = 100000;
        let isVip: boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isVip);

        // Error if you using npx tsc
        // name = 100;
        // balance = "yan";
        // isVip = 100;
    });
});