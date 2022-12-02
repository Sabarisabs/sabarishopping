/*const [sc1,sc2,sc3,sc4,sc5] = [96,108,89,200,116];

const calAverageScore = function(sc1,sc2,sc3,sc4,sc5){
    const sum = sc1 + sc2 + sc3 + sc4 + sc5
    const avg = sum/5
    return avg
}
console.log(calAverageScore(sc1,sc2,sc3,sc4,sc5))

  
*/

/*const temp = [9,-3,-2,-1,'error',17,8,16,27,19];

const max=o;
const min=0;
const tempo=0;
for(let i = 0; i<temp.length; i++){
 console.log(temp[i],typeof temp[i]);
}*/

const amount = [200,500,-120,700,3000,-500];
for(i=0; i<amount.length; i++){
    if(i>0)
        console.log('amount credited')
amount.foreach(function(value,index){
    console.log(value+' : '+index)
})
    }