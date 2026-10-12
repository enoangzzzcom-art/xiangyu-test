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
          "label": "灵活就业 / 自由职业",
          "score": 70,
          "value": 70
        },
        {
          "label": "有正式工作",
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
      "id": "ageIdeal",
      "group": 2,
      "title": "理想型：你希望对方的年龄范围",
      "description": "这里填写你的偏好，不由个人分数推算。",
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
      "id": "ageFloor",
      "group": 2,
      "title": "底线型：你可接受的年龄范围",
      "description": "通常比理想范围更宽；可与理想范围相同。",
      "options": null,
      "type": "range",
      "min": 18,
      "max": 80,
      "default": [
        25,
        36
      ],
      "unit": "岁"
    },
    {
      "id": "incomeIdeal",
      "group": 2,
      "title": "理想型：对方月均税后收入",
      "description": "与自己的收入采用相同口径。",
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
      "id": "incomeFloor",
      "group": 2,
      "title": "底线型：对方最低收入要求",
      "description": "填写真实可接受的门槛，不代表建议你降低要求。",
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
      "title": "理想型：对方身高要求",
      "description": "只用于对象画像与条件跨度分析。",
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
      "id": "heightFloor",
      "group": 2,
      "title": "底线型：对方最低身高要求",
      "description": "可以选择不设门槛。",
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
      "title": "理想型：对方学历要求",
      "description": "不根据你的学历强制设定。",
      "options": [
        {
          "label": "不设学历门槛",
          "score": null,
          "value": -1
        },
        {
          "label": "高中 / 中专及以下及以上",
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
      "id": "eduFloor",
      "group": 2,
      "title": "底线型：对方最低学历要求",
      "description": "可以选择不设门槛。",
      "options": [
        {
          "label": "不设学历门槛",
          "score": null,
          "value": -1
        },
        {
          "label": "高中 / 中专及以下及以上",
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
      "title": "理想型：对方住房条件",
      "description": "共同购房与租住均可以作为有效选择。",
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
      "id": "homeFloor",
      "group": 2,
      "title": "底线型：对方最低住房条件",
      "description": "不会推断对方的房产价格。",
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
    }
  ],
  "dimensions": [
    {
      "id": "appearance",
      "name": "外形亮点",
      "weight": 15,
      "keys": [
        "height",
        "look"
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
        "job"
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
        "support"
      ]
    },
    {
      "id": "relationship",
      "name": "相处魅力",
      "weight": 20,
      "keys": [
        "communication"
      ]
    }
  ],
  "groups": [
    "基础名片",
    "实力与魅力",
    "理想与底线"
  ],
  "version": "3.0.0"
};root.XiangyuData=data;if(typeof module!=="undefined")module.exports=data;})(typeof window!=="undefined"?window:globalThis);
