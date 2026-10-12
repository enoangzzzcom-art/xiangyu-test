(() => {
  'use strict';
  const D=window.XiangyuData, S=window.XiangyuScore, main=document.querySelector('#main');

  document.documentElement.classList.add('motion-ready');
  document.documentElement.classList.toggle('reduce-motion',window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const storageKey='xiangyu-sparkle-v31';
  let answers={}, index=0, weights=Object.fromEntries(D.dimensions.map(d=>[d.id,d.weight])), sample=false;
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  try{const old=JSON.parse(sessionStorage.getItem(storageKey)||'null');if(old?.version===D.version){answers=old.answers||{};index=Math.min(Math.max(old.index||0,0),D.questions.length-1);if(old.weights&&D.dimensions.every(d=>Number.isFinite(old.weights[d.id])&&old.weights[d.id]>=0&&old.weights[d.id]<=100))weights=old.weights;sample=!!old.sample;}}catch{}
  const persist=()=>{if(sample)return;try{sessionStorage.setItem(storageKey,JSON.stringify({version:D.version,answers,index,weights,sample}));}catch{}};
  const completed=()=>S.validate(answers).length===0;
  const notify=text=>{const el=document.querySelector('#toast');el.textContent=text;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2600);};
  document.querySelector('.brand').onclick=e=>{e.preventDefault();location.hash='';home();window.scrollTo(0,0);};
  const ring=(score)=>`<div class="score-ring" style="--score:${score}"><div><strong>${score}</strong><small>趣味亮点分</small></div></div>`;
  function home(){
    main.innerHTML=`<section class="hero"><div><h1>先看见自己，<br>再遇见<em>心动的人。</em></h1><div class="actions"><button class="primary" id="start">${Object.keys(answers).length&&!sample?'继续我的测评':'开始条件测评'} <span aria-hidden="true">↗</span></button></div></div><div class="hero-visual watercolor-art" aria-label="原创水彩心动花园"><div class="garden-glow"></div><img class="garden-illustration" src="watercolor-garden.webp" alt="月亮、植物和溪流组成的手绘浮空花园" width="1024" height="1024" fetchpriority="high"><span class="garden-cloud garden-cloud-one" aria-hidden="true"><img src="cloud-watercolor.svg" alt=""></span><span class="garden-cloud garden-cloud-two" aria-hidden="true"><img src="cloud-watercolor.svg" alt=""></span><span class="garden-sparkle" aria-hidden="true">✧</span></div></section>`;
    document.querySelector('#start').onclick=()=>{if(sample){restoreDraft();}location.hash='quiz';quiz();window.scrollTo(0,0);};
  }
  function restoreDraft(){try{const saved=JSON.parse(sessionStorage.getItem(storageKey)||'null');answers=saved?.answers||{};index=saved?.index||0;weights=saved?.weights||Object.fromEntries(D.dimensions.map(d=>[d.id,d.weight]));}catch{answers={};index=0;}sample=false;}
  function example(){
    answers=Object.fromEntries(D.questions.map(q=>[q.id,q.type==='number'?q.default:q.type==='range'?[...q.default]:Math.min(2,q.options.length-1)]));
    Object.assign(answers,{gender:0,target:0,age:29,city:0,height:162,weight:55.5,body:1,marital:0,children:0,maritalIdeal:1,maritalFloor:2,bodyIdeal:2,bodyFloor:0,smoke:0,smokePref:0,drink:1,drinkPref:1,pet:1,petPref:1,childPref:0,conflictRepair:2,look:1,edu:2,job:3,income:3,stable:2,schedule:2,savings:2,home:1,debt:0,car:0,parents:2,familyDebt:0,support:1,care:1,familyAtmosphere:0,style:2,emotion:2,communication:2,lifestyle:2,future:1,kids:0,ageIdeal:[27,33],ageFloor:[25,36],incomeIdeal:4,incomeFloor:2,heightIdeal:5,heightFloor:3,eduIdeal:3,eduFloor:2,homeIdeal:3,homeFloor:1,cityPref:0,carePref:1});
    weights=Object.fromEntries(D.dimensions.map(d=>[d.id,d.weight]));sample=true;persist();location.hash='report';report();window.scrollTo(0,0);
  }
  function quiz(){
    const q=D.questions[index],x=answers[q.id];
    let inputs=q.type==='number'?`<div class="number-wrap"><input id="num" type="number" inputmode="${q.step?'decimal':'numeric'}" min="${q.min}" max="${q.max}" step="${q.step||1}" aria-label="${q.title}" value="${x??''}" placeholder="${q.default}"><label for="num">${q.unit}<br>${q.min}—${q.max}${q.unit}</label></div>`:q.type==='range'?`<div class="number-wrap"><input id="range-min" type="number" inputmode="numeric" min="${q.min}" max="${q.max}" step="1" aria-label="最低年龄" value="${x?.[0]??''}" placeholder="${q.default[0]}"><span>—</span><input id="range-max" type="number" inputmode="numeric" min="${q.min}" max="${q.max}" step="1" aria-label="最高年龄" value="${x?.[1]??''}" placeholder="${q.default[1]}"><span>${q.unit}</span></div>`:`<div class="options" role="group" aria-label="${q.title}">${q.options.map((o,i)=>`<button class="option ${x===i?'selected':''}" data-option="${i}" aria-pressed="${x===i}"><span class="radio" aria-hidden="true"></span>${esc(o.label)}</button>`).join('')}</div>`;
    main.innerHTML=`<div class="quiz-wrap"><div class="quiz-meta"><span>${String(index+1).padStart(2,'0')} / ${D.questions.length}</span></div><div class="progress" role="progressbar" aria-valuenow="${index+1}" aria-valuemin="0" aria-valuemax="${D.questions.length}" aria-label="答题进度"><span style="width:${(index+1)/D.questions.length*100}%"></span></div><section class="question-card"><span class="quiz-cloud quiz-cloud-left" aria-hidden="true"><img src="cloud-watercolor.svg" alt=""></span><span class="quiz-cloud quiz-cloud-right" aria-hidden="true"><img src="cloud-watercolor.svg" alt=""></span><span class="quiz-cloud-star" aria-hidden="true">✦</span><h1>${q.title}</h1>${inputs}${q.optional?'<button class="text-button" id="skip">暂不填写，跳过这一项 →</button>':''}<div class="error" id="error" role="alert"></div><div class="quiz-bottom"><button class="secondary" id="prev" ${index===0?'disabled':''}>← 上一题</button><button class="primary" id="next">${index===D.questions.length-1?'生成我的报告':'下一题 →'}</button></div></section></div>`;
    if(q.optional)document.querySelector('#skip').onclick=()=>{answers[q.id]=null;index++;persist();quiz();};
    document.querySelectorAll('[data-option]').forEach(btn=>btn.onclick=()=>{answers[q.id]=Number(btn.dataset.option);persist();document.querySelectorAll('[data-option]').forEach(option=>{const selected=option===btn;option.classList.toggle('selected',selected);option.setAttribute('aria-pressed',String(selected));});document.querySelector('#error').textContent='';});
    document.querySelectorAll('[data-group]').forEach(btn=>btn.onclick=()=>{readNumbers(q);index=D.questions.findIndex(x=>x.group===Number(btn.dataset.group));persist();quiz();});
    document.querySelector('#prev').onclick=()=>{readNumbers(q);index--;persist();quiz();};
    document.querySelector('#next').onclick=()=>{
      readNumbers(q);
      const err=S.validate(answers).find(e=>e.id===q.id);
      if(err){document.querySelector('#error').textContent=err.message;return;}
      if(index===D.questions.length-1){const errors=S.validate(answers);if(errors.length){index=D.questions.findIndex(q=>q.id===errors[0].id);quiz();document.querySelector('#error').textContent=errors[0].message;return;}sample=false;persist();location.hash='report';report();window.scrollTo(0,0);}
      else{index++;persist();quiz();}
    };
    document.querySelectorAll('input').forEach(input=>input.addEventListener('input',()=>{readNumbers(q);persist();}));
  }
  function readNumbers(q){
    const number=id=>{const raw=document.getElementById(id)?.value;return raw===''||raw===undefined?null:Number(raw);};
    if(q.type==='number')answers[q.id]=number('num');
    if(q.type==='range')answers[q.id]=[number('range-min'),number('range-max')];
  }
  const descriptions={stage:'婚恋计划较明确，便于找到节奏一致的人。',appearance:'你有自己的外形特点与眼缘感，舒服自然也是魅力。',education:'学历信息清楚，可在同背景或相近圈层中建立沟通。',career:'你有自己的生活方向，愿意认真经营事业与未来。',income:'当前收入档在所选生活成本场景中形成一定支撑。',assets:'你对生活有自己的安排，踏实的日子也是一种吸引力。',family:'家庭支持是一份温暖，也让你更有余地经营自己的生活。',care:'当前照护安排有余地，时间与支出压力较轻。',relationship:'愿意表达、也愿意倾听，让彼此靠近得更舒服。'};
  const focusDescriptions={stage:'先明确想认真交往、结婚还是保持现状，再讨论双方节奏。',appearance:'从整洁、穿着和仪态入手；外貌自评不能替代真实眼缘。',education:'用专业、经历和表达补充学历信息，不必只看文凭标签。',career:'明确工作的可持续性、现金流与见面时间安排。',income:'按真实到手收入讨论生活预算，避免把未来预期当现有收入。',assets:'把产权、积蓄与债务分开说明，优先稳定现金流。',family:'将父母保障、家庭责任和伴侣边界分别说清楚。',care:'提前说明固定照护任务，并讨论可执行的时间与资金分工。',relationship:'把不满说成具体事件与请求，看看双方能否协商落实。'};
  function report(){
    if(!completed()){index=D.questions.findIndex(q=>S.validate(answers).some(e=>e.id===q.id));if(index<0)index=0;location.hash='quiz';quiz();return;}
    const r=S.compute(answers,weights);const own=`${answers.age}岁 · ${answers.height}cm · ${S.display('weight',answers)} · ${S.label('edu',answers)} · 月均税后${S.label('income',answers)}`;
    const cards=kind=>S.profile(answers,kind).map(([k,v])=>`<div class="profile-row"><div class="label">${esc(k)}</div><div class="content">${esc(v)}</div></div>`).join('');
    main.innerHTML=`<div class="report-heading"><div><h1>${sample?'闪光名片示例':'你的闪光名片'}</h1><p>${esc(own)}${sample?' · 虚构样例':''}</p></div><div class="actions"><button class="secondary" id="edit">${sample?'开始我的测评':'修改答案'}</button><button class="primary" id="share">保存报告</button></div></div><section class="share-card" id="share-card"><img class="report-garden" src="watercolor-garden.webp" alt="" aria-hidden="true" width="160" height="160"><div class="share-score"><strong>${r.score}</strong><span>/ 100<br>趣味亮点分</span></div><h2>${r.tier}</h2><div class="share-tags">${r.tags.map(t=>`<span>✦ ${esc(t)}</span>`).join('')}</div></section><section class="scores short-scores">${r.rows.map(d=>`<div><div class="dim-name">${d.name}</div><div class="dim-value">${d.score}<small>/ 100</small></div><div class="bar"><span style="width:${d.score}%"></span></div></div>`).join('')}</section><div class="section-title"><h2>你的三张优势牌</h2></div><section class="strength-cards">${r.strengths.map((d,i)=>`<article class="analysis-card"><h3>${r.tags[i]}</h3></article>`).join('')}</section><div class="section-title"><h2>你期待怎样的对象</h2></div><section class="profiles"><article class="profile-card"><div class="profile-head"><h3>心中理想对象</h3></div>${cards('ideal')}</article><article class="profile-card"><div class="profile-head"><h3>现在的你</h3></div>${cards('own')}</article></section><details class="archive"><summary>查看我的条件名片 </summary><dl class="archive-grid">${D.questions.filter(q=>q.group<2).map(q=>`<div><dt>${esc(q.title)}</dt><dd>${esc(S.display(q.id,answers))}</dd></div>`).join('')}</dl></details>`;
    document.querySelector('#edit').onclick=()=>{if(sample)restoreDraft();index=0;persist();location.hash='quiz';quiz();window.scrollTo(0,0);};
    document.querySelector('#share').onclick=()=>saveShare(r);
  }
  async function saveShare(r){
    const button=document.querySelector('#share');button.disabled=true;try{if(document.fonts)await document.fonts.ready;const c=document.createElement('canvas');c.width=1080;c.height=1440;const ctx=c.getContext('2d');const bg=ctx.createLinearGradient(0,0,1080,1440);bg.addColorStop(0,'#fcf8f2');bg.addColorStop(1,'#eadff1');ctx.fillStyle=bg;ctx.fillRect(0,0,1080,1440);const garden=document.querySelector('.report-garden');if(garden){try{await garden.decode();ctx.globalAlpha=.72;ctx.drawImage(garden,810,20,240,240);ctx.globalAlpha=1;}catch{}}ctx.textAlign='center';const text=(v,y,size,color,weight=500)=>{ctx.fillStyle=color;ctx.font=`${weight} ${size}px XiangyuSans, sans-serif`;ctx.fillText(v,540,y);};text('相遇',150,36,'#7a608e');text(String(r.score),500,210,'#543276',650);text('趣味亮点分 / 100',580,34,'#92759f');text(r.tier,710,49,'#543276',600);r.tags.forEach((t,i)=>text('✦  '+t,850+i*90,34,'#7d608c'));const blob=await new Promise(resolve=>c.toBlob(resolve,'image/png'));if(!blob)throw Error('image export');const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='相遇-我的闪光名片.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('分享卡已保存');}catch{notify('保存失败，可截图保存卡片');}finally{button.disabled=false;}
  }

  function download(r){
    const profile=kind=>S.profile(answers,kind).map(([k,v])=>`${k}：${v}`).join('\n');
    const text=`相遇 · 婚恋条件报告${sample?'（虚构样例）':''}\n规则版本：${D.version}\n趣味亮点分：${r.score}/100\n${r.tier}\n\n分项评分\n${r.rows.map(d=>`${d.name}：${d.score}，权重${d.weight}`).join('\n')}\n\n理想型\n${profile('ideal')}\n\n我的条件\n${profile('own')}\n\n条件跨度提醒\n${r.gaps.map(g=>g.name+'：'+g.text).join('\n')}\n\n个人答卷\n${D.questions.map(q=>q.title+'：'+S.display(q.id,answers)).join('\n')}\n\n说明：原创规则参考，非人群排名、心理量表或婚姻成功率。报告包含个人条件信息，请自行决定是否分享。\n`;
    const url=URL.createObjectURL(new Blob(['\ufeff'+text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='相遇-婚恋条件报告.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('已下载文字报告');
  }
  window.addEventListener('hashchange',()=>{if(location.hash==='#quiz')quiz();else if(location.hash==='#report')report();else home();});
  if(location.hash==='#quiz')quiz();else if(location.hash==='#report')report();else home();
})();
