const ob = {
    counter: 0,
    showText: function() {
        const interval = setInterval(() => {
            this.counter++;
            const tekst = `Dzisiaj zjadłem ${this.counter} placków!`;
            console.log(tekst);
            if(this.counter >= 5) clearInterval(interval);
        }, 100);
    }
}
ob.showText();