(function(root){
  const data=root.XiangyuData||(typeof require!=='undefined'?require('./questions.js'):null);
  const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
  const answerOption=(id,a)=>{const q=data.questions.find(q=>q.id===id);return q?.options?.[a[id]];};
  const value=(id,a)=>answerOption(id,a)?.value;
  const label=(id,a)=>answerOption(id,a)?.label||'未填写';
  function itemScore(id,a){
    if(id==='height'){
      const ref={female:165,male:175,other:170}[value('gender',a)]||170;
      return Math.round(clamp(75+(a.height-ref)*2,35,95));
    }
    if(id==='income'){
      const ratios={high:1,middle:1.1,normal:1.2,county:1.3};
      return Math.round(clamp(answerOption(id,a).score*(ratios[value('city',a)]||1),0,100));
    }
    return answerOption(id,a)?.score;
  }
  const importance={appearance:{height:.3,look:.45,style:.25},career:{job:.35,stable:.45,schedule:.2},assets:{savings:.3,home:.35,debt:.3,car:.05},family:{parents:.25,familyDebt:.3,support:.15,familyAtmosphere:.3},relationship:{emotion:.4,communication:.35,lifestyle:.25}};
  function validate(a){
    const errors=[];
    for(const q of data.questions){
      const x=a[q.id];
      if(q.type==='number'){if(!Number.isFinite(x)||x<q.min||x>q.max||!Number.isInteger(x))errors.push({id:q.id,message:`请输入${q.min}—${q.max}之间的整数`});}
      else if(q.type==='range'){if(!Array.isArray(x)||x.length!==2||x.some(n=>!Number.isInteger(n)||n<q.min||n>q.max)||x[0]>x[1])errors.push({id:q.id,message:'请填写有效的年龄范围，下限不能大于上限'});}
      else if(!Number.isInteger(x)||!q.options[x])errors.push({id:q.id,message:'请选择一个选项'});
    }
    if(errors.length)return errors;
    for(const [floor,ideal] of [['incomeFloor','incomeIdeal'],['heightFloor','heightIdeal'],['eduFloor','eduIdeal'],['homeFloor','homeIdeal']])if(value(floor,a)>value(ideal,a))errors.push({id:floor,message:'底线要求不能高于理想要求，请检查这两项'});
    if(a.ageFloor[0]>a.ageIdeal[0]||a.ageFloor[1]<a.ageIdeal[1])errors.push({id:'ageFloor',message:'可接受年龄范围应包含理想年龄范围'});
    return errors;
  }
  function compute(a,weights){
    const errors=validate(a);if(errors.length)throw new Error(errors[0].message);
    const rows=data.dimensions.map(d=>{
      const items=d.keys.map(id=>({id,name:data.questions.find(q=>q.id===id).title,score:itemScore(id,a)}));
      const score=Math.round(items.reduce((s,i)=>s+i.score*(importance[d.id]?.[i.id]||1/d.keys.length),0));
      return {...d,items,score,weight:weights?.[d.id]??d.weight};
    });
    const sum=rows.reduce((s,d)=>s+d.weight,0);if(sum<=0)throw new Error('至少保留一项非零权重');
    const score=Math.round(rows.reduce((s,d)=>s+d.score*d.weight,0)/sum);
    const ranked=[...rows].sort((a,b)=>b.score-a.score);
    const strengths=ranked.slice(0,3);const focus=[...ranked].reverse().slice(0,3);
    const gaps=[];
    const ownIncome=value('income',a);
    if(value('incomeIdeal',a)>ownIncome*1.5)gaps.push({name:'收入跨度',text:'理想收入门槛高于你当前收入档的演示中点约1.5倍。可保留这个偏好，并明确你能提供的共同生活价值；这不是匹配人数预测。'});
    if(value('eduIdeal',a)>value('edu',a))gaps.push({name:'学历跨度',text:'你期待对方的学历高于自己的当前学历。可以继续保留，建议同时看专业、工作与沟通是否契合。'});
    if(value('homeIdeal',a)>=3&&value('home',a)<3)gaps.push({name:'住房期待',text:'理想型要求个人名下有房，而你的当前住房安排不同。见面时把产权、房贷和共同投入方式问清。'});
    if(value('cityPref',a)==='same')gaps.push({name:'城市范围',text:'只接受同城会限制接触范围。优先使用本地渠道；本版没有真实候选人数据库，不估算剩余人数。'});
    if(value('carePref',a)===0&&itemScore('care',a)<=60)gaps.push({name:'照护安排',text:'你希望对方照护责任较轻，而自己已有固定照护任务。提前沟通分工，比只看家庭标签更有帮助。'});
    const narrow=[value('incomeFloor',a)>=15000,value('heightFloor',a)>=180,value('eduFloor',a)>=3,value('homeFloor',a)>=3,value('cityPref',a)==='same',value('carePref',a)===0].filter(Boolean).length;
    const tier=score>=85?'综合条件较突出':score>=70?'综合条件较稳健':score>=55?'条件有亮点，也有待补齐项':'建议优先梳理现实基础';
    return {score,rows,strengths,focus,gaps,narrow,tier,weightSum:sum,version:data.version};
  }
  function profile(a,kind){
    const ideal=kind==='ideal', suffix=ideal?'Ideal':'Floor';
    const age=a['age'+suffix];
    const city={same:'同城，长期生活地点一致',plan:'可短期异地，有明确同城计划',flex:'城市可协商，先确认共同生活安排'}[value('cityPref',a)];
    const care=['家庭照护责任较轻','中等照护责任可接受，分工明确','可接受较多照护责任，安排透明'][value('carePref',a)];
    const future={soon:'有1年内结婚的意愿，节奏一致',later:'接受1—3年婚姻规划',slow:'愿意认真交往，不催促结婚',none:'尊重不进入婚姻的选择',unsure:'愿意一起讨论婚恋计划'}[value('future',a)];
    const kids={yes:'希望有孩子，时间与分工需协商',no:'不计划生育，双方想法一致',unsure:'生育想法可讨论，不提前承诺'}[value('kids',a)];
    return [
      ['年龄区间',age[0]+'—'+age[1]+'岁'],
      ['月收入参考',label('income'+suffix,a)],
      ['资产 / 房产',label('home'+suffix,a)],
      ['家庭背景',ideal?'生活保障与家庭责任清楚，边界可协商':'家庭情况如实说明，责任与支出可讨论'],
      ['学历要求',label('edu'+suffix,a)],
      ['职业方向',ideal?'工作与收入可持续，有清晰生活规划':'能维持基本生活，职业安排如实说明'],
      ['城市',city],
      ['外形要求',label('height'+suffix,a)+'；'+(ideal?'符合你的审美，形象得体':'有眼缘，基本整洁得体')],
      ['照护责任',care],
      ['婚育计划',future+'；'+kids]
    ];
  }
  const api={validate,compute,profile,itemScore,label,value};root.XiangyuScore=api;
  if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
