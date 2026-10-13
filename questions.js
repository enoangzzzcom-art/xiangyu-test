(function(root){const data={
  "questions": [
    {
      "id": "gender",
      "group": 0,
      "title": "你的性别",
      "description": "用于个人画像，不参与加减分。",
      "options": [
        {
          "label": "女性",
          "score": null,
          "value": "female"
        },
        {
          "label": "男性",
          "score": null,
          "value": "male"
        },
        {
          "label": "不填写",
          "score": null,
          "value": "other"
        }
      ]
    },
    {
      "id": "target",
      "group": 0,
      "title": "你希望了解的对象",
      "description": "仅用于报告称呼，不改变评分规则。",
      "options": [
        {
          "label": "男性",
          "score": null,
          "value": "male"
        },
        {
          "label": "女性",
          "score": null,
          "value": "female"
        },
        {
          "label": "不限 / 暂不确定",
          "score": null,
          "value": "any"
        }
      ]
    },
    {
      "id": "age",
      "group": 0,
      "title": "你的年龄",
      "description": "年龄用于生成生活阶段和对象年龄范围，不按年龄直接扣分。",
      "options": null,
      "type": "number",
      "min": 18,
      "max": 80,
      "unit": "岁",
      "default": 29
    },
    {
      "id": "city",
      "group": 0,
      "title": "你的主要生活城市",
      "description": "用于收入条件的生活成本场景，不采集具体城市。",
      "options": [
        {
          "label": "一线 / 高生活成本城市",
          "score": null,
          "value": "high"
        },
        {
          "label": "省会 / 新一线城市",
          "score": null,
          "value": "middle"
        },
        {
          "label": "普通地级市",
          "score": null,
          "value": "normal"
        },
        {
          "label": "县城 / 乡镇",
          "score": null,
          "value": "county"
        }
      ]
    },
    {
      "id": "height",
      "group": 0,
      "title": "你的身高",
      "description": "用于你的条件卡和外形亮点，不以身高判断一个人的价值。",
      "options": null,
      "type": "number",
      "min": 130,
      "max": 210,
      "unit": "cm",
      "default": 165
    },
    {
      "id": "weight",
      "group": 0,
      "title": "你的体重",
      "description": "按近期体重填写，可保留1位小数。仅用于个人档案，不计分、不据此判断健康。",
      "options": null,
      "type": "number",
      "min": 30,
      "max": 250,
      "step": 0.1,
      "unit": "kg",
      "default": 55,
      "optional": true
    },
    {
      "id": "look",
      "group": 0,
      "title": "你的外貌自评更接近哪一项？",
      "description": "不上传照片，以你自己的判断为准。",
      "options": [
        {
          "label": "外貌普通，不太突出",
          "score": 55,
          "value": 55
        },
        {
          "label": "比较耐看，有个人特点",
          "score": 70,
          "value": 70
        },
        {
          "label": "常被评价为好看",
          "score": 85,
          "value": 85
        },
        {
          "label": "外形很突出",
          "score": 95,
          "value": 95
        }
      ]
    },
    {
      "id": "style",
      "group": 0,
      "title": "你平时的穿搭和形象更接近哪种？",
      "description": "个人风格也可以成为别人记住你的亮点。",
      "options": [
        {
          "label": "较少打理，随意为主",
          "score": 45,
          "value": 45
        },
        {
          "label": "基本整洁得体",
          "score": 70,
          "value": 70
        },
        {
          "label": "重视穿着与仪态",
          "score": 85,
          "value": 85
        },
        {
          "label": "有稳定的个人风格",
          "score": 95,
          "value": 95
        }
      ]
    },
    {
      "id": "edu",
      "group": 1,
      "title": "你的最高学历",
      "description": "学历和院校标签分开；本版只按学历计分。",
      "options": [
        {
          "label": "高中 / 中专及以下",
          "score": 40,
          "value": 0
        },
        {
          "label": "大专",
          "score": 55,
          "value": 1
        },
        {
          "label": "本科",
          "score": 75,
          "value": 2
        },
        {
          "label": "硕士",
          "score": 90,
          "value": 3
        },
        {
          "label": "博士",
          "score": 100,
          "value": 4
        }
      ]
    },
    {
      "id": "job",
      "group": 1,
      "title": "你的职业状态",
      "description": "不按职业名称高低排序，关注是否有可持续工作。",
      "options": [
        {
          "label": "暂未就业 / 正在转换方向",
          "score": 40,
          "value": 40
        },
        {
          "label": "在校，尚未进入职场",
          "score": 55,
          "value": 55
        },
        {
          "label": "自由职业 / 灵活就业",
          "score": 70,
          "value": 70
        },
        {
          "label": "企业职员 / 合同制工作",
          "score": 85,
          "value": 85
        },
        {
          "label": "公务员 / 事业单位在编",
          "score": 85,
          "value": 85
        },
        {
          "label": "国企 / 央企正式员工",
          "score": 85,
          "value": 85
        },
        {
          "label": "经营稳定的事业 / 企业",
          "score": 95,
          "value": 95
        }
      ]
    },
    {
      "id": "income",
      "group": 1,
      "title": "你的月均税后收入",
      "description": "按近12个月平均到手收入选，奖金折算，公积金不计入。",
      "options": [
        {
          "label": "5千以下",
          "score": 35,
          "value": 3500
        },
        {
          "label": "5千—8千",
          "score": 50,
          "value": 6500
        },
        {
          "label": "8千—1.2万",
          "score": 65,
          "value": 10000
        },
        {
          "label": "1.2万—2万",
          "score": 80,
          "value": 16000
        },
        {
          "label": "2万—3万",
          "score": 90,
          "value": 25000
        },
        {
          "label": "3万以上",
          "score": 100,
          "value": 40000
        }
      ]
    },
    {
      "id": "savings",
      "group": 1,
      "title": "你的个人可用积蓄",
      "description": "只算你能自主使用的储蓄与投资，不含父母资产。",
      "options": [
        {
          "label": "不足1万元",
          "score": 30,
          "value": 5000
        },
        {
          "label": "1万—5万元",
          "score": 50,
          "value": 30000
        },
        {
          "label": "5万—20万元",
          "score": 70,
          "value": 100000
        },
        {
          "label": "20万—50万元",
          "score": 85,
          "value": 350000
        },
        {
          "label": "50万元以上",
          "score": 100,
          "value": 700000
        }
      ]
    },
    {
      "id": "home",
      "group": 1,
      "title": "你的住房情况",
      "description": "区分所有权、父母住房与租住安排。",
      "options": [
        {
          "label": "暂无稳定居住安排",
          "score": 30,
          "value": 0
        },
        {
          "label": "稳定租住 / 与家人同住",
          "score": 55,
          "value": 1
        },
        {
          "label": "有明确购房计划和资金准备",
          "score": 70,
          "value": 2
        },
        {
          "label": "个人名下有房，有合理房贷",
          "score": 85,
          "value": 3
        },
        {
          "label": "个人名下有房，无房贷",
          "score": 100,
          "value": 4
        }
      ]
    },
    {
      "id": "support",
      "group": 1,
      "title": "家庭能提供的婚后支持",
      "description": "不把父母资产直接算成你的资产。",
      "options": [
        {
          "label": "主要靠自己建立生活",
          "score": 50,
          "value": 50
        },
        {
          "label": "能提供照护 / 生活方面支持",
          "score": 65,
          "value": 65
        },
        {
          "label": "能提供一定资金支持",
          "score": 80,
          "value": 80
        },
        {
          "label": "资金与生活支持都较充足",
          "score": 95,
          "value": 95
        }
      ]
    },
    {
      "id": "familyAssets",
      "group": 1,
      "title": "你的家庭净资产（含房产、扣除债务）",
      "options": [
        {
          "label": "100万元以下",
          "score": null,
          "value": 0
        },
        {
          "label": "100万—300万元",
          "score": null,
          "value": 1
        },
        {
          "label": "300万—500万元",
          "score": null,
          "value": 2
        },
        {
          "label": "500万—1000万元",
          "score": null,
          "value": 3
        },
        {
          "label": "1000万元以上",
          "score": null,
          "value": 4
        },
        {
          "label": "暂不清楚 / 不填写",
          "score": null,
          "value": 5
        }
      ]
    },
    {
      "id": "communication",
      "group": 1,
      "title": "表达需求与处理分歧的方式",
      "description": "沟通表现进入相处分项。",
      "options": [
        {
          "label": "常靠对方猜，或长期回避",
          "score": 35,
          "value": 35
        },
        {
          "label": "愿意沟通，但经常说不具体",
          "score": 60,
          "value": 60
        },
        {
          "label": "能说清需求，也能听对方解释",
          "score": 85,
          "value": 85
        },
        {
          "label": "能一起协商并落实到行动",
          "score": 95,
          "value": 95
        }
      ]
    },
    {
      "id": "stable",
      "group": 1,
      "title": "你现在的收入状态更接近哪种？",
      "description": "收入多少之外，也看看生活的稳定感。",
      "options": [
        {
          "label": "波动较大，暂难预测",
          "score": 35,
          "value": 35
        },
        {
          "label": "有一定波动，基本能覆盖生活",
          "score": 60,
          "value": 60
        },
        {
          "label": "相对稳定，有应急缓冲",
          "score": 85,
          "value": 85
        },
        {
          "label": "稳定，且有多元收入来源",
          "score": 95,
          "value": 95
        }
      ]
    },
    {
      "id": "familyAtmosphere",
      "group": 1,
      "title": "在恋爱选择上，你的家庭边界如何？",
      "description": "看你能否按自己的意愿作决定。",
      "options": [
        {
          "label": "尊重我的决定，能沟通",
          "score": 95,
          "value": 95
        },
        {
          "label": "有意见，但最后能协商",
          "score": 80,
          "value": 80
        },
        {
          "label": "经常干预，沟通有难度",
          "score": 50,
          "value": 50
        },
        {
          "label": "强烈干预，边界难以建立",
          "score": 25,
          "value": 25
        }
      ]
    },
    {
      "id": "emotion",
      "group": 1,
      "title": "两个人意见不合时，你更常怎样处理？",
      "description": "用真实相处中的反应选择，不是人格诊断。",
      "options": [
        {
          "label": "容易失控，事后也较难修复",
          "score": 30,
          "value": 30
        },
        {
          "label": "容易激动，但愿意回头沟通",
          "score": 55,
          "value": 55
        },
        {
          "label": "能暂停并重新沟通",
          "score": 80,
          "value": 80
        },
        {
          "label": "多数时候能稳定表达与解决",
          "score": 95,
          "value": 95
        }
      ]
    },
    {
      "id": "lifestyle",
      "group": 1,
      "title": "你的日常消费和生活节奏更接近哪种？",
      "description": "轻松、有安排，也可以是很加分的个人特点。",
      "options": [
        {
          "label": "经常超支，生活安排较混乱",
          "score": 35,
          "value": 35
        },
        {
          "label": "偶尔超支，仍在调整",
          "score": 60,
          "value": 60
        },
        {
          "label": "支出可控，生活较规律",
          "score": 85,
          "value": 85
        },
        {
          "label": "有规划，也能灵活协商",
          "score": 95,
          "value": 95
        }
      ]
    },
    {
      "id": "ageIdeal",
      "group": 2,
      "title": "你希望对象的年龄范围",
      "description": "填一个你更有好感的年龄区间即可。",
      "options": null,
      "type": "range",
      "min": 18,
      "max": 80,
      "default": [
        27,
        33
      ],
      "unit": "岁"
    },
    {
      "id": "incomeIdeal",
      "group": 2,
      "title": "你希望对象的月收入条件",
      "description": "只选一次；用于理想对象画像，不影响你的亮点分。",
      "options": [
        {
          "label": "不设收入门槛",
          "score": null,
          "value": 0
        },
        {
          "label": "5千以上",
          "score": null,
          "value": 5000
        },
        {
          "label": "8千以上",
          "score": null,
          "value": 8000
        },
        {
          "label": "1万以上",
          "score": null,
          "value": 10000
        },
        {
          "label": "1.5万以上",
          "score": null,
          "value": 15000
        },
        {
          "label": "2万以上",
          "score": null,
          "value": 20000
        },
        {
          "label": "3万以上",
          "score": null,
          "value": 30000
        }
      ]
    },
    {
      "id": "heightIdeal",
      "group": 2,
      "title": "你希望对象的身高条件",
      "description": "偏好可以保留，也可以选择不设门槛。",
      "options": [
        {
          "label": "不设身高门槛",
          "score": null,
          "value": 0
        },
        {
          "label": "155cm以上",
          "score": null,
          "value": 155
        },
        {
          "label": "160cm以上",
          "score": null,
          "value": 160
        },
        {
          "label": "165cm以上",
          "score": null,
          "value": 165
        },
        {
          "label": "170cm以上",
          "score": null,
          "value": 170
        },
        {
          "label": "175cm以上",
          "score": null,
          "value": 175
        },
        {
          "label": "180cm以上",
          "score": null,
          "value": 180
        },
        {
          "label": "185cm以上",
          "score": null,
          "value": 185
        }
      ]
    },
    {
      "id": "eduIdeal",
      "group": 2,
      "title": "你希望对象的学历条件",
      "description": "只选一次；实际相处还要看表达与经历。",
      "options": [
        {
          "label": "不设学历门槛",
          "score": null,
          "value": -1
        },
        {
          "label": "高中 / 中专及以上",
          "score": null,
          "value": 0
        },
        {
          "label": "大专及以上",
          "score": null,
          "value": 1
        },
        {
          "label": "本科及以上",
          "score": null,
          "value": 2
        },
        {
          "label": "硕士及以上",
          "score": null,
          "value": 3
        },
        {
          "label": "博士及以上",
          "score": null,
          "value": 4
        }
      ]
    },
    {
      "id": "homeIdeal",
      "group": 2,
      "title": "你希望对象的住房安排",
      "description": "选择你更期待的共同生活起点。",
      "options": [
        {
          "label": "不设住房门槛",
          "score": null,
          "value": 0
        },
        {
          "label": "能独立承担租住",
          "score": null,
          "value": 1
        },
        {
          "label": "有共同购房计划",
          "score": null,
          "value": 2
        },
        {
          "label": "有房，可接受合理房贷",
          "score": null,
          "value": 3
        },
        {
          "label": "有房且无房贷",
          "score": null,
          "value": 4
        }
      ]
    },
    {
      "id": "cityIdeal",
      "group": 2,
      "title": "你希望对象在哪座城市生活？",
      "options": [
        {
          "label": "必须同城",
          "score": null,
          "value": 0
        },
        {
          "label": "可以异地，未来能到我的城市",
          "score": null,
          "value": 1
        },
        {
          "label": "可以异地，我也愿意迁居",
          "score": null,
          "value": 2
        },
        {
          "label": "可以一起选择新的城市",
          "score": null,
          "value": 3
        },
        {
          "label": "不设城市要求",
          "score": null,
          "value": 4
        }
      ]
    },
    {
      "id": "jobIdeal",
      "group": 2,
      "title": "你对对象的工作有什么期待？",
      "options": [
        {
          "label": "不设职业门槛",
          "score": null,
          "value": 0
        },
        {
          "label": "有稳定工作即可",
          "score": null,
          "value": 1
        },
        {
          "label": "更倾向公务员 / 事业单位在编",
          "score": null,
          "value": 2
        },
        {
          "label": "更倾向国企 / 央企正式员工",
          "score": null,
          "value": 3
        },
        {
          "label": "更看重企业发展与收入",
          "score": null,
          "value": 4
        },
        {
          "label": "接受自由职业 / 创业",
          "score": null,
          "value": 5
        }
      ]
    },
    {
      "id": "familyAssetsIdeal",
      "group": 2,
      "title": "你期待对象的家庭净资产",
      "options": [
        {
          "label": "不设家庭资产门槛",
          "score": null,
          "value": 0
        },
        {
          "label": "100万元以上",
          "score": null,
          "value": 1
        },
        {
          "label": "300万元以上",
          "score": null,
          "value": 2
        },
        {
          "label": "500万元以上",
          "score": null,
          "value": 3
        },
        {
          "label": "1000万元以上",
          "score": null,
          "value": 4
        }
      ]
    },
    {
      "id": "familyIdeal",
      "group": 2,
      "title": "你期待对象的家庭情况",
      "options": [
        {
          "label": "不设家庭条件门槛",
          "score": null,
          "value": 0
        },
        {
          "label": "父母能基本自给，家庭无重大负债",
          "score": null,
          "value": 1
        },
        {
          "label": "家庭和睦，尊重小家庭的边界",
          "score": null,
          "value": 2
        },
        {
          "label": "能提供一定购房 / 生活支持",
          "score": null,
          "value": 3
        },
        {
          "label": "经济条件较好，支持比较充足",
          "score": null,
          "value": 4
        }
      ]
    },
    {
      "id": "kids",
      "group": 2,
      "title": "你的生育计划",
      "options": [
        {
          "label": "希望有一个孩子",
          "score": null,
          "value": 0
        },
        {
          "label": "希望有两个或更多孩子",
          "score": null,
          "value": 1
        },
        {
          "label": "想先过二人生活，以后再决定",
          "score": null,
          "value": 2
        },
        {
          "label": "倾向不生育",
          "score": null,
          "value": 3
        },
        {
          "label": "暂未决定，愿意一起商量",
          "score": null,
          "value": 4
        }
      ]
    },
    {
      "id": "marriageFinance",
      "group": 2,
      "title": "你希望婚后的生活开支怎么安排？",
      "options": [
        {
          "label": "双方继续工作，共同承担",
          "score": null,
          "value": 0
        },
        {
          "label": "按收入比例分担",
          "score": null,
          "value": 1
        },
        {
          "label": "各自管理收入，共同开支 AA",
          "score": null,
          "value": 2
        },
        {
          "label": "希望对方主要承担生活费",
          "score": null,
          "value": 3
        },
        {
          "label": "我愿意主要承担生活费",
          "score": null,
          "value": 4
        },
        {
          "label": "一方专注家庭，另一方负责收入",
          "score": null,
          "value": 5
        }
      ]
    },
    {
      "id": "bridePrice",
      "group": 2,
      "title": "你计划给出或接受的彩礼金额",
      "options": [
        {
          "label": "不安排彩礼",
          "score": null,
          "value": 0
        },
        {
          "label": "以心意为主，5万元以内",
          "score": null,
          "value": 1
        },
        {
          "label": "5万—10万元",
          "score": null,
          "value": 2
        },
        {
          "label": "10万—20万元",
          "score": null,
          "value": 3
        },
        {
          "label": "20万—30万元",
          "score": null,
          "value": 4
        },
        {
          "label": "30万元以上",
          "score": null,
          "value": 5
        },
        {
          "label": "暂未决定，双方协商",
          "score": null,
          "value": 6
        }
      ]
    }
  ],
  "dimensions": [
    {
      "id": "appearance",
      "name": "外形亮点",
      "weight": 15,
      "keys": [
        "height",
        "look",
        "style"
      ]
    },
    {
      "id": "education",
      "name": "学历亮点",
      "weight": 15,
      "keys": [
        "edu"
      ]
    },
    {
      "id": "career",
      "name": "事业潜力",
      "weight": 10,
      "keys": [
        "job",
        "stable"
      ]
    },
    {
      "id": "income",
      "name": "收入实力",
      "weight": 15,
      "keys": [
        "income"
      ]
    },
    {
      "id": "assets",
      "name": "生活底气",
      "weight": 15,
      "keys": [
        "savings",
        "home"
      ]
    },
    {
      "id": "family",
      "name": "家庭支持",
      "weight": 10,
      "keys": [
        "support",
        "familyAtmosphere"
      ]
    },
    {
      "id": "relationship",
      "name": "相处魅力",
      "weight": 20,
      "keys": [
        "communication",
        "emotion",
        "lifestyle"
      ]
    }
  ],
  "groups": [
    "基础名片",
    "实力与相处",
    "我的理想对象"
  ],
  "version": "3.2.0"
};root.XiangyuData=data;if(typeof module!=="undefined")module.exports=data;})(typeof window!=="undefined"?window:globalThis);
