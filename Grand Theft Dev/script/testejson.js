var array1 =[1,2,3,4];
var array2 =[5,6,7,8];

function somaArray(arr1,arr2)
{
    let resultado =[];
    for(let i = 0; i < arr1.length; i++)
    {
        resultado.push(arr1[i]);
    }
    for(let i = 0; i < arr2.length; i++)
    {
        resultado.push(arr2[i]);
    }
    return resultado;
}
console.log(somaArray(array1,array2));
