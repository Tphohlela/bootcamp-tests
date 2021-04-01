describe('This unit test is for the mostProfitableDepartment function' , function(){
    it('should return most profitable department' , function(){
        

        assert.deepEqual(mostProfitableDepartment([{department: 'hardware', sales: 4500, day: 'Monday'},
        {department: 'outdoor', sales: 1500, day: 'Monday'},
        {department: 'carpentry', sales: 5500, day: 'Monday'},
        {department: 'hardware', sales: 7500, day: 'Tuesday'},
        {department: 'outdoor', sales: 2505, day: 'Tuesday'},
        {department: 'carpentry', sales: 1540, day: 'Tuesday'},
        {department: 'hardware', sales: 1500, day: 'Wednesday'},
        {department: 'outdoor', sales: 8507, day: 'Wednesday'},
        {department: 'carpentry', sales: 8009, day: 'Wednesday'},
        {department: 'hardware', sales: 12000, day: 'Thursday'},
        {department: 'outdoor', sales: 18007, day: 'Thursday'},
        {department: 'carpentry', sales: 6109, day: 'Thursday'},
        {department: 'hardware', sales: 7005, day: 'Friday'},
        {department: 'outdoor', sales: 12006, day: 'Friday'},
        {department: 'carpentry', sales: 16109, day: 'Friday'}]), 'outdoor');

    }); 


   /* it('should return least profitable department' , function(){
        

        assert.deepEqual(mostProfitableDepartment([{department: 'hardware', sales: 4500, day: 'Monday'},
        {department: 'outdoor', sales: 1500, day: 'Monday'},
        {department: 'carpentry', sales: 5500, day: 'Monday'},
        {department: 'hardware', sales: 757800, day: 'Tuesday'},
        {department: 'outdoor', sales: 2505, day: 'Tuesday'},
        {department: 'carpentry', sales: 1540, day: 'Tuesday'},
        {department: 'hardware', sales: 1500, day: 'Wednesday'},
        {department: 'outdoor', sales: 8507, day: 'Wednesday'},
        {department: 'carpentry', sales: 8009, day: 'Wednesday'},
        {department: 'hardware', sales: 1267000, day: 'Thursday'},
        {department: 'outdoor', sales: 18007, day: 'Thursday'},
        {department: 'carpentry', sales: 6109, day: 'Thursday'},
        {department: 'hardware', sales: 7005, day: 'Friday'},
        {department: 'outdoor', sales: 12006, day: 'Friday'},
        {department: 'carpentry', sales: 16109, day: 'Friday'}]), 'hardware');

    }); */

    it('should return most profitable day' , function(){
        

        assert.deepEqual(mostProfitableDay([{department: 'hardware', sales: 4500, day: 'Monday'},
        {department: 'outdoor', sales: 1500, day: 'Monday'},
        {department: 'carpentry', sales: 5500, day: 'Monday'},
        {department: 'hardware', sales: 757800, day: 'Tuesday'},
        {department: 'outdoor', sales: 2505, day: 'Tuesday'},
        {department: 'carpentry', sales: 1540, day: 'Tuesday'},
        {department: 'hardware', sales: 1500, day: 'Wednesday'},
        {department: 'outdoor', sales: 2828507, day: 'Wednesday'},
        {department: 'carpentry', sales: 8009, day: 'Wednesday'},
        {department: 'hardware', sales: 1267000, day: 'Thursday'},
        {department: 'outdoor', sales: 18007, day: 'Thursday'},
        {department: 'carpentry', sales: 6109, day: 'Thursday'},
        {department: 'hardware', sales: 7005, day: 'Friday'},
        {department: 'outdoor', sales: 12006, day: 'Friday'},
        {department: 'carpentry', sales: 16109, day: 'Friday'}]), 'Wednesday');

    }); 

})