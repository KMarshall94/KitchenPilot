(function () {
  'use strict';
  function calculate(kind, values) {
    if (!Array.isArray(values) || values.some(v => typeof v !== 'number' || !Number.isFinite(v) || v < 0)) throw new Error('Enter a finite, non-negative number in every field.');
    const [a,b,c,d]=values;
    const positive=(v,label)=>{if (!(v>0)) throw new Error(label+' must be greater than zero.');};
    let result;
    if(kind==='prime'){positive(a,'Net sales');result={cost:b+c,percent:(b+c)/a*100};}
    else if(kind==='food'){positive(d,'Net food sales');if(c>a+b)throw new Error('Closing inventory exceeds opening inventory plus purchases. Check counts, purchases and transfers.');result={cost:a+b-c,percent:(a+b-c)/d*100};}
    else if(kind==='labour'){positive(b,'Net sales');positive(c,'Worked hours');result={percent:a/b*100,perHour:b/c};}
    else if(kind==='break-even'){if(b>=100)throw new Error('Variable cost percentage must be below 100% for a finite break-even result.');result={sales:a/(1-b/100)};}
    else if(kind==='menu'){positive(b,'Target food cost percentage');if(b>100)throw new Error('Target food cost percentage must be no more than 100%.');result={price:a/(b/100),contribution:a/(b/100)-a};}
    else throw new Error('Unknown calculator.');
    if(Object.values(result).some(v=>!Number.isFinite(v)))throw new Error('These inputs exceed the calculation range. Use smaller values.');
    return result;
  }
  if(typeof module!=='undefined' && module.exports)module.exports=calculate;
  if(typeof document==='undefined')return;
  const n=v=>v.toLocaleString('en-CA',{minimumFractionDigits:2,maximumFractionDigits:2});
  document.querySelectorAll('[data-calculator]').forEach(form=>{
    const output=form.querySelector('[role="status"]');
    form.addEventListener('input',()=>{output.textContent='';});
    form.addEventListener('submit',event=>{
      event.preventDefault();
      try{
        const inputs=[...form.querySelectorAll('input')];
        if(inputs.some(i=>i.value.trim()===''))throw new Error('Complete every field.');
        const r=calculate(form.dataset.calculator,inputs.map(i=>Number(i.value)));
        const kind=form.dataset.calculator;
        output.textContent=kind==='prime'?`Prime cost: $${n(r.cost)} (${n(r.percent)}% of net sales).`:kind==='food'?`Food used: $${n(r.cost)}. Food cost: ${n(r.percent)}%.`:kind==='labour'?`Labour cost: ${n(r.percent)}%. Sales per labour hour: $${n(r.perHour)}.`:kind==='break-even'?`Break-even sales: $${n(r.sales)} for the period entered.`:`Ingredient-based selling price: $${n(r.price)}. Remaining after ingredients: $${n(r.contribution)} per item, before other costs.`;
      }catch(error){output.textContent=error.message;}
    });
  });
})();
