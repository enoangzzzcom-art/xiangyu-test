(function(root){
  const opt=(label,score,value)=>({label,score,value:value===undefined?score:value});
  const q=(id,group,title,description,options,extra={})=>({id,group,title,description,options,...extra});
  const income=[opt('5千以下',35,3500),opt('5千—8千',50,6500),opt('8千—1.2万',65,10000),opt('1.2万—2万',80,16000),opt('2万—3万',90,25000),opt('3万以上',100,40000)];
  const edu=[opt('高中 / 中专及以下',40,0),opt('大专',55,1),opt('本科',75,2),opt('硕士',90,3),opt('博士',100,4)];
  const pIncome=[opt('不设收入门槛',null,0),opt('5千以上',null,5000),opt('8千以上',null,8000),opt('1万以上',null,10000),opt('1.5万以上',null,15000),opt('2万以上',null,20000),opt('3万以上',null,30000)];
  const pEdu=[opt('不设学历门槛',null,-1),...edu.map(o=>({...o,label:o.label+'及以上',score:null}))];
  const pHeight=[opt('不设身高门槛',null,0),... [155,160,165,170,175,180,185].map(n=>opt(n+'cm以上',null,n))];
  const pHome=[opt('不设住房门槛',null,0),opt('能独立承担租住',null,1),opt('有共同购房计划',null,2),opt('有房，可接受合理房贷',null,3),opt('有房且无房贷',null,4)];
  const questions=[
    q('gender',0,'你的性别','用于个人画像，不参与加减分。',[opt('女性',null,'female'),opt('男性',null,'male'),opt('不填写',null,'other')]),
    q('target',0,'你希望了解的对象','仅用于报告称呼，不改变评分规则。',[opt('男性',null,'male'),opt('女性',null,'female'),opt('不限 / 暂不确定',null,'any')]),
    q('age',0,'你的年龄','年龄用于生成生活阶段和对象年龄范围，不按年龄直接扣分。',null,{type:'number',min:18,max:80,unit:'岁',default:29}),
    q('city',0,'你的主要生活城市','收入参考分会按你选择的生活成本场景调整；这不是城市收入统计。',[opt('一线 / 高生活成本城市',null,'high'),opt('省会 / 新一线城市',null,'middle'),opt('普通地级市',null,'normal'),opt('县城 / 乡镇',null,'county')]),
    q('height',0,'你的身高','用于外形分项。男女使用不同的演示身高参照，规则可在报告中查看。',null,{type:'number',min:130,max:210,unit:'cm',default:165}),
    q('look',0,'你的外貌自评更接近哪一项？','不上传照片，以你自己的判断为准。',[opt('外貌普通，不太突出',55),opt('比较耐看，有个人特点',70),opt('常被评价为好看',85),opt('外形很突出',95)]),
    q('edu',1,'你的最高学历','学历和院校标签分开；本版只按学历计分。',edu),
    q('job',1,'你的职业状态','不按职业名称高低排序，关注是否有可持续工作。',[opt('暂未就业 / 正在转换方向',40),opt('在校，尚未进入职场',55),opt('灵活就业 / 自由职业',70),opt('有正式工作',85),opt('经营稳定的事业 / 企业',95)]),
    q('income',1,'你的月均税后收入','按近12个月平均到手收入选，奖金折算，公积金不计入。',income),
    q('stable',1,'收入的稳定程度','与收入水平分别计算。',[opt('波动较大，暂难预测',35),opt('有一定波动，基本能覆盖生活',60),opt('相对稳定，有应急缓冲',85),opt('稳定，且有多元收入来源',95)]),
    q('schedule',1,'工作与生活的时间安排','衡量安排见面与共同生活的便利程度。',[opt('长期异地 / 长期出差',40),opt('经常加班或轮班',60),opt('大部分时间可提前安排',80),opt('时间规律，可持续陪伴',95)]),
    q('savings',2,'你的个人可用积蓄','只算你能自主使用的储蓄与投资，不含父母资产。',[opt('不足1万元',30,5000),opt('1万—5万元',50,30000),opt('5万—20万元',70,100000),opt('20万—50万元',85,350000),opt('50万元以上',100,700000)]),
    q('home',2,'你的住房情况','区分所有权、父母住房与租住安排。',[opt('暂无稳定居住安排',30,0),opt('稳定租住 / 与家人同住',55,1),opt('有明确购房计划和资金准备',70,2),opt('个人名下有房，有合理房贷',85,3),opt('个人名下有房，无房贷',100,4)]),
    q('debt',2,'你的个人负债压力','本题不含住房按揭；住房按揭已在上一题体现。',[opt('无其他负债',100,0),opt('还款不超过月收入20%',80,1),opt('还款占月收入20%—40%',55,2),opt('超过40% / 存在逾期',25,3)]),
    q('car',2,'你的出行条件','车的权重较低，也认可稳定可用的公共交通。',[opt('公共交通便利，不需要车',80),opt('暂无方便的出行安排',45),opt('有代步车，负担可控',85),opt('有代步车，无相关负债',95)]),
    q('parents',2,'父母的经济保障情况','关注日常生活保障，不收集单位、收入或健康信息。',[opt('主要需要我持续提供生活费',40),opt('基本自给，偶尔需要支持',70),opt('有稳定养老金 / 收入保障',90),opt('保障充足，有一定积蓄',100)]),
    q('familyDebt',2,'家庭的重大负债情况','只选负担程度，不需要填写具体金额。',[opt('无明显负债',100),opt('有负债，但家庭可独立承担',80),opt('需要我共同偿还，压力可控',55),opt('需要我长期承担较大压力',25)]),
    q('support',2,'家庭能提供的婚后支持','不把父母资产直接算成你的资产。',[opt('主要靠自己建立生活',50),opt('能提供照护 / 生活方面支持',65),opt('能提供一定资金支持',80),opt('资金与生活支持都较充足',95)]),
    q('care',2,'你承担的家庭照护责任','这是生活安排压力，不评价家庭成员的价值。',[opt('当前无固定照护责任',95),opt('偶尔协助，时间与支出较轻',80),opt('固定承担部分照护，安排可控',60),opt('需要长期投入较多时间与支出',35)]),
    q('familyAtmosphere',2,'家庭对你婚恋决定的参与程度','重点是边界能否被尊重。',[opt('尊重我的决定，能沟通',95),opt('有意见，但最后能协商',80),opt('经常干预，沟通有难度',50),opt('强烈干预，边界难以建立',25)]),
    q('style',3,'你的日常形象管理','穿着、整洁和仪态均可形成外形优势。',[opt('较少打理，随意为主',45),opt('基本整洁得体',70),opt('重视穿着与仪态',85),opt('有稳定的个人风格',95)]),
    q('emotion',3,'发生矛盾时，你通常怎样处理？','按实际表现选择，不是人格诊断。',[opt('容易失控，事后也较难修复',30),opt('容易激动，但愿意回头沟通',55),opt('能暂停并重新沟通',80),opt('多数时候能稳定表达与解决',95)]),
    q('communication',3,'表达需求与处理分歧的方式','沟通表现进入相处分项。',[opt('常靠对方猜，或长期回避',35),opt('愿意沟通，但经常说不具体',60),opt('能说清需求，也能听对方解释',85),opt('能一起协商并落实到行动',95)]),
    q('lifestyle',3,'你的消费与日常生活习惯','按可持续程度评分，不以兴趣爱好高低排序。',[opt('经常超支，生活安排较混乱',35),opt('偶尔超支，仍在调整',60),opt('支出可控，生活较规律',85),opt('有规划，也能灵活协商',95)]),
    q('future',3,'你目前的婚恋计划','各个明确选择同分；没有结婚意愿不会直接扣分。',[opt('希望1年内进入婚姻',90,'soon'),opt('希望1—3年内进入婚姻',90,'later'),opt('先认真交往，不急着结婚',90,'slow'),opt('明确不计划结婚',90,'none'),opt('暂未确定，需要继续梳理',65,'unsure')]),
    q('kids',3,'你的生育想法','不参与条件评分，仅进入婚育一致性提醒。',[opt('希望有孩子',null,'yes'),opt('不希望有孩子',null,'no'),opt('尚未决定',null,'unsure')]),
    q('ageIdeal',4,'理想型：你希望对方的年龄范围','这里填写你的偏好，不由个人分数推算。',null,{type:'range',min:18,max:80,default:[27,33],unit:'岁'}),
    q('ageFloor',4,'底线型：你可接受的年龄范围','通常比理想范围更宽；可与理想范围相同。',null,{type:'range',min:18,max:80,default:[25,36],unit:'岁'}),
    q('incomeIdeal',4,'理想型：对方月均税后收入','与自己的收入采用相同口径。',pIncome),
    q('incomeFloor',4,'底线型：对方最低收入要求','填写真实可接受的门槛，不代表建议你降低要求。',pIncome),
    q('heightIdeal',4,'理想型：对方身高要求','只用于对象画像与条件跨度分析。',pHeight),
    q('heightFloor',4,'底线型：对方最低身高要求','可以选择不设门槛。',pHeight),
    q('eduIdeal',4,'理想型：对方学历要求','不根据你的学历强制设定。',pEdu),
    q('eduFloor',4,'底线型：对方最低学历要求','可以选择不设门槛。',pEdu),
    q('homeIdeal',4,'理想型：对方住房条件','共同购房与租住均可以作为有效选择。',pHome),
    q('homeFloor',4,'底线型：对方最低住房条件','不会推断对方的房产价格。',pHome),
    q('cityPref',4,'你对共同生活城市的要求','同城偏好进入两种对象画像。',[opt('只接受同城，不打算迁居',null,'same'),opt('可短期异地，需有同城计划',null,'plan'),opt('可协商迁居或异地',null,'flex')]),
    q('carePref',4,'你能接受对方多少家庭照护责任？','结合双方实际时间与资金安排讨论。',[opt('希望照护负担较轻',null,0),opt('中等负担可接受，需有分工',null,1),opt('可接受较多责任，需提前说明',null,2)])
  ];
  const dimensions=[
    {id:'stage',name:'婚育节奏',weight:5,keys:['future']},
    {id:'appearance',name:'外形条件',weight:13,keys:['height','look','style']},
    {id:'education',name:'教育背景',weight:10,keys:['edu']},
    {id:'career',name:'职业稳定',weight:12,keys:['job','stable','schedule']},
    {id:'income',name:'收入条件',weight:17,keys:['income']},
    {id:'assets',name:'个人资产',weight:15,keys:['savings','home','debt','car']},
    {id:'family',name:'家庭支持',weight:10,keys:['parents','familyDebt','support','familyAtmosphere']},
    {id:'care',name:'照护压力',weight:8,keys:['care']},
    {id:'relationship',name:'相处表现',weight:10,keys:['emotion','communication','lifestyle']}
  ];
  const data={questions,dimensions,groups:['基础画像','教育与事业','资产与家庭','相处与婚育','理想型与底线型'],version:'1.0.0'};
  root.XiangyuData=data;
  if(typeof module!=='undefined') module.exports=data;
})(typeof window!=='undefined'?window:globalThis);
