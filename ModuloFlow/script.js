document.addEventListener("DOMContentLoaded",function(){
  const calculate = document.querySelector('.calculate');
  const inpNumerator = document.getElementById('numerator');
  const inpDenominator = document.getElementById('denominator');
  inpNumerator.addEventListener('input', function(e){
    const numerator = Number(e.target.value);
    const denominator = Number(document.getElementById('denominator').value);
    math(numerator,denominator);
  });
  inpDenominator.addEventListener('input',function(e){
    const numerator = Number(document.getElementById('numerator').value);
    const denominator = Number(e.target.value);
    math(numerator,denominator);
  });
  calculate.addEventListener('click', function(){
    const numerator = Number(document.getElementById('numerator').value);
    const denominator = Number(document.getElementById('denominator').value);
    math(numerator,denominator);
  });
});

function math(numerator,denominator){
  if(denominator===0){
    alert("ERROR: Division by zero");
    return;
  }
  let division = Math.floor(numerator/denominator);
  let multiple = division*denominator;
  let modulo = numerator - multiple;
  document.getElementById('result').value = modulo;
}