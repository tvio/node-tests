const expect  = require('expect');
const utils = require('./utils');
it('should add two numbers', () =>{
  var res = utils.add(33,11);

//   if (res !== 44) 
//   {  throw new Error(`Očekávalo se 44, ale dostalo se ${res}`)
// }
     expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers',(done)=>{
   utils.asyncAdd(4,3,(sum)=>{
       expect(sum).toBe(7).toBeA('number');
       done();
   });
});

it('should async square',(done)=>{
    utils.asyncSquare(3,(square)=>{
        expect(square).toBe(9).toBeA('number');
        done();
    });
 });


it('melo by udelat kvadrat', ()=>{
    var res = utils.square(3);
 
//     if (res !== 9) 
//     {  throw new Error(`Očekávalo se 3 na druhou=9, ale dostalo se ${res}`)
//   }
      expect(res).toBe(9).toBeA('number');
});

// it('Je to tam',()=>{
//    // expect(12).toNotBe(12);   
//   // expect({name:'Tom'}).toNotEqual({name:'tom'});
//   //expect([2,3,4]).toInclude (2);
//   expect({
//       name: 'Tom',
//       age: 25,
//       location: 'Praha'
//   }).toInclude({age:23})
// });


// verfiy first and last names are set
it ('Je nastaveno jmeno a prijmeni',()=>{
    var user = {lokace:'Praha',vek:999}; 
    var res = utils.setName(user, 'Franta Pepik');
 // javasript updateuje take puvodni objekt o nove atribury, protoze funguje na bazi refenrenci
// user z funkce goes to user global   
    expect(user).toInclude({
        firstName:'Franta',
        lastName:'Pepik'

    });
    
});
