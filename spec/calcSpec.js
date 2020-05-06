describe("whatCanIDrink", function(){
    
     beforeEach(function() {
        drink = new whatCanIDrink();
    });
   
    describe("Checks age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        }); 

                
        it("should drink toddy when called as whatCanIDrink(13)", function(){
            var result =  whatCanIDrink(13);
            expect(result).toBe("Drink Toddy!");
        });
        it("should drink coke when called as whatCanIDrink(17)", function(){
            var result =  whatCanIDrink(17);
            expect(result).toBe("Drink Coke!");
        });
        it("should drink beer when called as whatCanIDrink(20)", function(){
            var result =  whatCanIDrink(20);
            expect(result).toBe("Drink Beer!");
        });
        it("should drink whisky when called as whatCanIDrink(129)", function(){
            var result =  whatCanIDrink(129);
            expect(result).toBe("Drink Whisky!");
        });

        
        
    });

});