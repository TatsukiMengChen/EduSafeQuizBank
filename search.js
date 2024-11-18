// 安装 fuse.js: npm install fuse.js
//import Fuse from 'fuse.js'

// 示例数据
const questions = [
  {
    "question": "在课堂上，当老师正在讲解时，以下做法正确的是：（）　\nA 在课堂上睡觉\nB 与同学小声讨论\n认真听讲，不做与课堂无关的事　\n玩手机或看其他书籍正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225022_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在图书馆借阅书籍后，以下做法正确的是： A 随意放置归还\n归还到指定的还书处\n转借给其他同学而不进行登记忘记归还，长期占用\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225029_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "31473单选题\n在食堂排队打饭时，以下做法正确的是：\n插队以节省时间\nA\nB 让熟悉的人代打\n与他人争抢位置\n按照顺序排队，耐心等待　\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225112_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在校园内遇到老师时，以下做法正确的是：\nA 假装没看见。快速走过\n主动打招呼并问好\n等老师先主动与自己说话与同学大声谈笑，无视老师　\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225115_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在宿舍与室友相处时，以下哪种行为是不恰当的？\nA 尊重室友的作息时间\nB 与室友友好沟通，解决矛盾　\n保持公共区域的整洁卫生\n未经允许使用室友的私人物品\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225118_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在参加学术讲座或报告会时，以下哪种行为是恰当的？\nA 迟到早退，不尊重演讲者 B　随意走动或大声交谈\n提前到场，关闭手机或调至静音　模式\n在会场内吃东西或喝饮料\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_225121_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "以下哪种着装仪表是不符合校园文明礼仪的？\n在教室、自习室、图书馆等学习　场所穿着短裤、拖鞋\nB穿着得体、整洁\nC 遵守学校的着装规定\n根据天气变化适时增减衣物\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225124_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在与他人交谈时，以下哪种行为是不礼貌的？ A　认真倾听对方的讲话\n随意打断对方的发言用礼貌的语言回应对方保持适当的眼神交流\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225126_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "参加学校组织的活动时，以下哪种行为是不恰当的？\nA 提前到场，做好准备\nB 积极参与活动，遵守规则　\n迟到早退，不尊重活动安排　与他人友好交流，分享经验　\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225128_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在校园内行走时，以下哪种行为是不文明的？\n随地吐痰或乱扔垃圾\nB 遵守交通规则，走人行道和斑马\n线\n礼让行人，注意安全　\n爱护校园内的绿化和公共设施\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225131_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "请假批准权限中，三天以内由（）批准。 A　不用批准\nB 班长\n辅导员\nD 学校领导\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_225133_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "未请假连续（）未参加学校规定的教学活动的，予以退学。\nA 5天\nB 一周\nC 10天\n两周正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225137_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生应征参加中国人民解放军（含中国人民武装警察部队），学校保留其学籍至退役后（\nＡ　半年　\n年一年半　两年\nD\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225139_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "休学学生必须在接到休学通知之日起（）办理离校手续，往返路费自理，学校保留其学籍休学期间不得擅自跟班上课和参加考核。\n两周内\nB 三周内\n四周内五周内\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225142_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "对完成本专业学业同时辅修其他专业并达到该专业辅修要求者，发给（）\nA 学历证书\nB 学位证书\n肆业证书\n辅修专业证书\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225145_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "缺交作业累计超过某门课程作业总数的（）或缺课累计超过某门课程学时数（）的学生（被批准免听的除外），任课教师可以取消该生该课程考核资格，并（）。\nA　1/3、1/5、不予安排补考　\n8 1/4、1/3、不予安排补考　\n1/3、1/3、不予安排补考\nD 1/4、1/4、可参加补考　\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_225148_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生如对某门课程的成绩有疑问，可在考试成绩公布后（）内（寒暑假顺延）提出成绩复查申请。复查成绩，应填写《南昌大学学生成绩复查申请表》，经学生所在学院分管本科教学的院领导同意并报教务处批准，再由开课学院\n组织教师（3人以上）代为查阅试卷成绩。 A一周\nB 二周\n三周 C\n10日",
    "answer": null,
    "title": " Screenshot_20241117_225150_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "18/473单选题\n学生在结业后（）可以申请补考、重修或者重做毕业设计、论文、答辩，成绩达到毕业要求，颁发毕业证书。\n一年内\nB 两年内\n三年内四年内\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225152_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在校学习（）退学的学生，发给业证书\n一学年以上 B一学期以上\n两学年以上\nC\nD 三学年以上\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225154_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "20 /473单选题\n受到处分学生对复查决定有异议的，在接到学校申诉处理决定书之日起（）个工作日内，可\n以向省级教育行政部门提出书面申诉。Ａ5\nB 10\n15\nD 20\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225157_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生休学期满后申请复学的，应于（），提出书面复学申请。\n开学前\nB开学后3个工作日 C　开学后5个工作日\n开学后7个工作日\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225159_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "22 /473单选题\n一学期请事假、病假缺课累计超过该学期总学时（）以上者，应予以休学。\nA 四分之\nB 二分之一 C三分之二\n三分之正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225201_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "因病停课治疗、休养时间占该学期总学时（以上者，应予以休学\nA 二分之\n三分之\nC 三分之二\nD 四分之\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225203_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "24 /473 选\n未请假连续（）未参加学校规定的教学活动的学生，应予以退学，\nA 三天\n两周一周\nC\n一月\nD\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225205_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "25 /473 单选题\n各消防责任单位应经常开展多种形式的消防安全宣传教育。重点单位每年至少进行（）次消防安全培训，学院每年至少要开展（）消防应\n急疏散演练，并结合实际不断完善预案。 A1次、1次\nB 1次、2次　\nC 2次、1次\n2次、2次　正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225207_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "26/1473单选题\n火灾发生后，最佳的灭火时间是\n火灾燃烧的初起阶段\nB　火灾发展阶段 C　火灾猛烈阶段\nD火灾下降阶段和熄灭阶段\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225209_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "逃离火灾现场正确的做法是（\nA超光线亮，看得清的地方迅速撤\n离\nB　朝人多的方向逃离现场　\n沉着冷静明辨方向，用毛巾、口\n罩蒙鼻匍匐贴近地面撤离乘坐电梯迅速撤离现场\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225211_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "28/473单选题\n手提式ABC干粉灭火器适合扑灭以下着火物资：（）\nA　液体、气体、金属\n固体、液体、气体 C　固体、气体、金属\n都可以\nD\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225213_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "接到陌生电话，对方让你猜猜我是谁，你会怎么办？\nA　自我回忆、猜测　\n挂断相信\nC\n自报姓名帮助对方回忆\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225215_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "30/473单选题\n接到电话，称你的亲戚或朋友遭遇车祸，你会怎么办？\nA不知所措，赶紧汇钱\n向亲属或朋友打电话核实，并向　辅导员报告\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225217_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "请假批准权限中，三天以上由辅导员审核同意，由学院学生工作负责人批准\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225219_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "32 /473单选题\n学生在结业后一年内可以申请重修或补修有关课程，并缴纳学分学费，达到毕业要求，可申请换发毕业证书。但不可电请学位证书\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225221_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "33/473单选题\n在结业后的重修或补修考试中作弊者，不得再次申请重修或补修\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225223_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "34/473单选题\n在结业后的重修或补修考试中作弊者，应再次\n申请重修或补修。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225225_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "35/473单选题\n从2016级学生开始，学生学习成绩以等级制方式记入学生成绩单，等级包括A+、A、A-、B +、B、B-、C+、C、C-、D、D-、F和P十三种形式，除P以外，其他等级形式均对应一个绩点\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225227_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "依据考核方式的不同，学生成绩可以选择百分制、十级制、五级制或者通过制形式录入。百分制成绩只允许录入整数分数。百分制成绩最终转换为等级制形式记入成绩单，但保留原始录入的百分制分数。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225230_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生成绩只允许以百分制和通过制形式录入Ａ是　\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225234_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "38/473单选题\n以通过制形式录入成绩时，是否通过以P和F记载，但不对应绩点。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225236_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "以通过制形式录入成绩时，如通过，则对应的\n绩点为3.0。Ａ是　\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225238_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "40/473单选题\n计算平均学分绩点的学期及课程性质由各学院自行确定，学校不作统一要求　\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225241_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "区\n对患有疾病保留入学资格的新生，应当在一个\n月内办理离校手续，回家疗养。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225243_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "对患有疾病保留入学资格的新生，无故不办理离校手续者，取消其保留的入学资格\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225245_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "保留入学资格者不具有学籍，不享受在校生待遇\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225247_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "44/473单选题\n每学期开学时，未按学校规定缴纳学费或者其他不符合注册条件的不予注册，并按学校有关规定处理。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225249_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "45 /473单选题\n学生因病或特殊情况不能参加考核，必须事先持校医院证明或相关证明向学院申请缓考\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225251_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生缓考申请由学校主管老师审批后报学工处备案。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225253_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "因健康原因。不能正常参加体育课的学生，可转修保健体育课：考核合格者可以取得体育课\n的成绩和学分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225255_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "48/473单选\n因严重违反考核纪律或者作弊的，而受到留校察看以下纪律处分的学生，经教育表现良好，在毕业前对该课程可以基于补考或者重修的机会\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225257_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "确有特殊困难，不转学科、专业就无法继续学习者可以转往校内其他专业。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225259_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "休学学生在休学期间可以跟班上课和参加考\n核，享受在校生待遇。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225301_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "超过学校规定期限未注册而又无正当事由的应予以退学。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225304_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生退学后必须在退学决定书送达三周内办理离校手续，档案、户口退回其家庭户籍所在地。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225306_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生在学校规定年限内，修完教育教学计划规定内容，德智体美劳达到毕业要求，准予毕\n业，发给结业证书。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225309_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "54/473单选题\n学生在学校规定年限内，修完教育教学计划规定内容，成绩未达到毕业要求，准予毕业，发\n给毕业证书。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225311_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "55/473单选题\n学生在结业后一年内可以申请补考、重修或者重做毕业设计、论文、答辩，成绩达到毕业要求，颁发毕业证书。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225313_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在校学习一学期以上退学的学生，发给肆业证书。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225315_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "未请假连续一周未参加学校规定的教学活动的\n学生，应予以退学，Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225318_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "58/473单选题\n在旅途中，不能随意将手机号码、家庭电话等个人信息透露给刚结识的陌生人。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225321_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "为防止入室盗窃，学生公寓（宿舍）窗户上可\n设置防盗网防止盗窃。Ａ是　\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225352_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "60/473单选题\n消防安全“四个能力”建设是指“检查和消除火灾隐患的能力；扑灭初期火灾的能力，应急疏散逃生的能力，宣传教育和培训的能力\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225354_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生自用的学习生活电器（充电器、台灯、录音机等）应使用合格产品，不准使用“三无”电器。学生离开寝室或就寝时应关闭饮水机、充电器等一切用电设备。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225357_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "手提式ABC千粉灭火器的扑救面积和能力是有限的，只能适应扑救初起火灾，喷射灭火时间\n在一分钟内，有效灭火时间仅10至20秒钟Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225359_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "银行卡最好使用自己的学号、生日等易记的数\n字作为密码。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225401_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "64/473单选越\n学生可以随意举行大型集会、游行、示威等活动。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225403_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "寝室内有其他同学正在睡觉的情况下，外出时\n无需关门。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225405_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "去学校图书馆看书时可以将手机、现金等物品\n放在包内寄放在寄包柜。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225407_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生不得参加非法传销和进行邪教、封建迷信活动。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225409_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "68/473单选题\n组织外出旅游时可以根据校外张贴的小广告信\n息，随意找个车辆。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225411_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在公交车上被扒后，应立即赶到学校保卫处报案。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225413_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "70/473单选题\n在校外可以随便搭乘陌生人的车辆，只要对方\n的车辆挂有牌照。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225415_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在学生公寓发现有盗窃嫌疑人时，应立即报告保卫处或宿管员。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225417_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "72.473单选题\n大学生纠纷激化会酿成治安、刑事案件的发生\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225419_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "73/473单选题\n我校校医院电话是83969120吗？\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225421_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "74/473单选题我校保卫处报警电话是（\n83969110\nB 83968110\n83966110\nD 83666110\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225423_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "反电信网络诈骗专用号码是\n96110\nB 95110\n86110\nD 83969\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225425_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "761473单选题\n我校心理咨询热线是18970987605吗？\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225428_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "属于大学生城镇居民医保参保范围的是（\n取得学籍的全日制普通本、专科生（含港澳台学生）\nB 取得学籍的全日制普通本、专科\n生（不含港澳台学生） C　成人教育学生\n在职研究生\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225430_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "781473单选题\n大学生城镇居民医保参保主要过程及参保关键信息字段是（）\nA学生直接向南昌市医保提交参保\n数据，个人需确保姓名准确无误 B　学生直接向学校提交参保数据，\n个人需确保身份证号码准确无误 C学校组织，学生向学院提交参保\n数据，个人需确保姓名、身份证号码准确无误，参保信息无需向学生公示\n学校组织，学生向学院提交参保数据，个人需确保姓名、性别，自公证品码民光笙位自定段住",
    "answer": null,
    "title": " Screenshot_20241117_225432_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "大学生城镇居民医保年度参保时间段是（\nA　每年1月1日至12月31日　\nB 每年3月1日至次年2月底\n每年6月1日至次年5月31日　每年9月1日至次年8月31日　\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225435_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "现行大学生城镇居民医保参保费用出资主体是\n国家\nB 学校\n学院 C\nD 个人\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225437_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "现行大学生城镇居民医保大病补充保险个人是如何参保的？\nA已参加大学生城镇居民医保的学\n生，个人付款参保。\nB已参加大学生城镇居民医保的学\n生，学院付款参保。\nC　已参加大学生城镇居民医保的学\n生，学校付款参保。\n已参加大学生城镇居民医保的学生，国家付款参保。　\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225439_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "大学生城镇居民医保普通门诊负责报销的单位是（）。\nＡ　学院\nB校公费医疗办\n校医院（南昌大学医院）\n市医保正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225441_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "大学生城镇居民医保普通门诊额度校内使用方式是（）。\n在校医院（南昌大学医院）使用。使用时刷校园一卡通\nB在校医院（南昌大学医院）使\n用，使用时刷大学生城镇居民医保卡\n在校公费医疗办使用，使用时刷　校园一卡通\n在校公费医疗办使用，使用时刷　大学生城镇居民医保卡",
    "answer": null,
    "title": " Screenshot_20241117_225443_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "84 /473单选题\n不属于大学生城镇居民医保普通门诊报销的内容是（）\nA发热\nB 胃肠炎\n流感 C\n牙齿整形正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225445_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "大学生城镇居民医保特殊病种门诊校内负责申报的单位是（）\nA 学院\n校公费医疗办\n校医院（南昌大学医院） D　一站式学生社区服务中心　\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225449_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "大学生城镇居民医保可申报特殊病种包括 A 慢性病毒性肝炎等13种\n慢性病毒性肝炎等23种\n消化、泌尿系统结石等13种消化、泌尿系统结石等14种\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225452_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "本科生综合素质测评中对未履行请假手续，无故不参加校院组织的党团理论学习、安全主题教育、知识竞赛、班团会和其他集体活动者\n每缺勤一次扣多少分？Ａ　1分　\nB 2分\nc 3分\n5分\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225454_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "88/473单选题\n优秀学生奖学金主以什么为依据评定的？\n学生综合素质 B学生成绩\nC　社会工作情况\nD 学生思想道德\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225456_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "优秀学生奖学金获得者综合素质测评总分原则\n上应排列在本班级前（）%？Ａ5\nB 10\nc 15\n30\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225458_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "90/473单选题\n优秀学生奖学金的等级和金额是\n特等奖学金每人每年4000元，\n等奖学金每人每年2000元，二等奖学金每人每年1000元\nB特等奖学金每人每学期2000元\n一等奖学金每人每学期1000元，二等奖学金每人每学期500元\nC特等奖学金每人每学期1000元\n一等奖学金每人每学期500元，二等奖学金每人学期200元\n特等奖学金每人每学期500元，等奖学金每人每学期300元，二等奖学全每人每学期200元",
    "answer": null,
    "title": " Screenshot_20241117_225500_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考评期间，学生如对考评结果有异议，最规范的做法是应（）\nA 随时向所在学院反映 B　直接向校学工处反映　\n随时向考评小组或辅导员反映应在公示期内以书面形式实名向\n学院反映，学院在3天内处理，并向学生反馈结果\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225502_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "多久开展一次班级建设的考核评比？ A每个月\n每年\nC　每个学期\n每季度 D\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225503_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "班级考核成绩优秀的班级授予什么荣誉称号？ A优秀班级\nB 先进集体 C先进班委\n先进班级正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225505_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "94 /473 单选题\n下列对班级民主建设说法不正确的是：\nA班委会在辅导员的指导下经全体\n同学民主选举产生\nB新生班级。第一学期可由辅导员　\n在阅看学生档案后指定临时班委会组成人员\n班委会成员连续任同职不超过两年\n班费收支情况公开，但是千部加　\n分、班级奖励处分不公开正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225507_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "95/473单选题\n学生先进班级评选工作中，学院审核后，将学年内两学期考评总分列学院前（）的班级作为候选“先进班级”\nA 0.05\nB 0.1\n0.15 0.2\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225509_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "本科生综合素质测评是以学期为单位进行的吗？\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225511_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "本科生综合素质测评办法是采取本学年评上学年的吗？\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225514_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "981473单选题\n本科生综合素质测评办法是采取本学年评本学\n年的吗？Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225516_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "本科生综合素质测评结果不需要进行班级张榜公示。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225518_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "本科生综合素质测评结果作为学生评定各类奖学金的重要依据之一的说法对吗？\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225520_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "本科生综合素质测评中对因违反学术道德规范、违反校内各级各类考试规定和旷课违纪且被处分的，减20分说法对吗？\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225522_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "本科生综合素质测评中学生如有异议可以随时以书面形式向所在学院学生工作办公室反映\n是吗？Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225523_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "本科生综合素质测评过程中，若学生在公示期内对考评结果有异议反映到学院，学院必须在三个工作日及时处理并回复，是吗？\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225526_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "104/473 选越\n本科生综合素质测评中的基本素质包括思想政治表现、道德品质修养、学习态度状况、身心　健康素质、日常行为规范等五项测评指标，对吗？\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225527_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "奖学金实际初评金额超出计划总金额的学院应将获奖学生按综合素质测评成绩排名，综合素质测评相同的按学分绩点排名，不允许将奖学金平均发放，这种说法对吗？\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225529_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "凡隐購错误或采取弄虚作假等不正当手段骗取奖学金者，一经发现，取消其“优秀学生奖学金获得者”荣誉称号，是吗？　\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225531_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "凡隐購错误或采取弄虚作假等不正当手段骗取奖学金者，一经发现，追回已发放奖学金，是吗？\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225533_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "凡隐瞒错误或采取弄虚作假等不正当手段骗取奖学金者，一经发现，取消下一年评奖评优资　格，是吗？　\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225536_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "凡隐瞒错误或采取弄虚作假等不正当手段骗取奖学金者，一经发现，给予记过以上处分，是吗？\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225546_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "优秀学生奖学金学院在各自核定的计划总金额之内统筹评定，不得突破\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225548_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学院应结合本单位实际情况制定出本单位优秀学生奖学金评选细则，在一定范围内征求学生意见，经学院党政联席会通过后报学工委办学工处审核备案。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225550_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "假设2022级某同学其他条件都符合评定优秀学生奖学金的前提下，但是他在上一学年因打架　受记过处分，本学年该同学是否能参评奖学金？\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225552_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "班级考核的内容分为：班团委建设及基本制度、安全稳定、学风建设、寝室建设、团建工　作、党建工作，是吗？\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225554_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "114/473单选题\n班级考核的内容分为：班级学习成绩、安全稳定、学风建设、寝室建设、团建工作、党建工\n作，是吗？Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225556_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "本科生综合素质测评中规定课程学习成绩得分根据平均学分绩点进行折算，对吗？\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225558_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "本科生综合素质测评总分二基本素质得分×15% +课程学习成绩得分×（60%～75%）+实践与创新能力得分×（25%～10%），对吗？　\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225600_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "下列哪些情形不应从重处罚：\nA编造、掩盖、隐螨违纪事实\nB 胁迫他人实施违法违纪的在处分期内再次违纪\n集体违纪事件的非主要参与者\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225602_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "留校察看期限为（）Ａ　一学期　\n一年两年\nC\n三年 D\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225604_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "受到开除学籍处分的学生，学校发给学习证明，档案、户口退回其家庭所在地。学生应当\n自处分决定送达起（）内离校。 A一个月\n7天 15天\nD 4天\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225606_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "下列哪些情形可视情节减轻或免除处罚（\nA　当学年获得奖学金者 B 有立功表现者\n确系受他人胁迫者\nB和C 正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225608_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "下列哪些行为应给予记过以上处分（\nA严重损坏他人名誉 B参与非法传销活动\nC　多次参与赌博或赌资在1000元以　\n上者\n以上全是正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225610_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在国家教育考试中，有以下哪种情形的，给予开除学籍处分（）。\nA　代替考生或由他人代替参加考试　\n的，组织团伙作弊的\nB为作弊组织者提供试题信息、答　\n案及相应设备等参与团伙作弊行为的\n向他人出售试题或答案牟取利益的\n以上全是正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225612_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "造成结伙斗殿为首者，给予（）以上处分 A严重警告\nB 记过\n留校察看\nD 开除学籍\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_225615_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "124/473单选题\n故意破坏公物，致使学校教学、工作、生活秩\n序受到影响者，给予（）以上处分。Ａ警告\nB 严重警告\n记过\n留校察看\nD\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225616_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "周同学无意发现同寝室同学将钱包放在柜子里：并且未将柜子锁上：于是盗取现金共计100\n0元，应给予（）处分。　Ａ警告\nB 严重警告\n记过\nD 留校察看\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_225618_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "盗窃财物，价值500元以下的，给予（）处分。\nA 通报批评 B警告\n严重警告以下\nD 记过以上\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225620_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "故意损坏公共财物，价值在100元以上者，给予（）处分。\n警告以上\nB 严重警告以上\nC 记过以上\n留校察看以上\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225622_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "故意破坏消防设施和消防标志者，给予（）处分。\nＡ警告\nB 严重警告\n记过\n留校察看\nD\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225625_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "处分决定书应当包括（） A　处分种类\nB 处分种类、处分事实\n处分种类、理由及依据\n学生基本信息、处分种类、处分事实、理由及依据、申诉的途径\n和期限正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225627_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "代考、请人代考或留校察看期内再次舞弊者\n给予（）处分。Ａ警告\nB 严重警告\n开除学籍留校察看\nD\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225629_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "有下列哪些情形，应给予警告以上处分（ A 两次无正当理由晚间不按时回公\n寓者\nB 在公寓养宠物屡教不改者 C未请假，夜不归宿者　\nA和B 正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225631_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "初次参与赌博者，给予（）处分 A　警告以上\n严重警告\nC 记过以上\nD 留校察看以上\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225632_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "为赌博提供场所或赌具者，给予（）处分。 A警告以上　\nB 严重警告以上\n记过以上\nD 留校察看以上\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225634_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "134/473单选题\n悔辱、诽或以其他形式严重损害他人名誉的，给予（）处分。\nA 警告以上\nB 严重警告以上\n记过以上\n留校察看以上\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225636_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "解除处分不适用于哪个类型？\n开除学籍\nB 记过\nC 留校察看\n严重警告\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225638_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "受警告、严重警告处分的学生申请解除处分从处分决定书送达之日起至少经过（）以上的考核。\nA3个月\n6个月 9个月 12个月\nD\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225640_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "申请人所在学院应在收到解除处分申请表后的（）个工作日内决定是否受理，并将结果告知\n申请人，不予受理的应说明理由。Ａ3\nB 区\nD 6\n正确答案 C\nO",
    "answer": "C",
    "title": " Screenshot_20241117_225642_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "以下哪些行为受到纪律处分者，不予解除处分：（）。\nA危害国家安全，破坏安定团结，\n扰乱社会秩序\nB策划、组织、参与群体性恶性事\n件\n触犯刑法、严重违反治安管理处罚法\n以上都是正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225646_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "纪律处分的种类不包括以下哪种？Ａ警告\nB 严重警告\n勒令退学开除学籍\nD\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_225648_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "下列哪些情形应从重处罚？\nA在群体违纪事件其主要作用的 B　造成严重后果的\n两种以上违纪行为以上全是\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225650_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在留校察看期内又发生违纪行为，按规定应当给予处分的。应当给予什么处分？\n开除学籍\nB 严重警告以上\n记过以上\n留校察看以上\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225652_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "曾经两次违纪受到处分，第三次违纪应当处分的，视为屡次违纪。在这三次处分（包含第三　次违纪应当给予的处分）中有一次记过及以上处分的，第三次违纪给予什么处分？\n开除学籍\nB 严重警告\nC 记过\nD 留校察看\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225654_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "违反宪法的给予何种处分？Ａ警告\nB 严重警告\n留校察看\nC\n开除学籍正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225656_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "144/473单选题\n破坏安定团结、扰乱社会秩序的，给予什么处分？\n开除学籍 B警告\n严重警告 c\n留校察看\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225657_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "组织未经批准的游行活动，视情节轻重，给予\n（）以上处分。 A严重警告\nB 留校察看\n记过 D警告正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225659_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "参与未经批准的游行活动，视情节轻重，给予（）以上处分。\n严重警告\nB 留校察看\nC 记过\n警告 D\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225701_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "组织、成立、加入非法社会团体或组织，从事非法活动的，视情节轻重，给予（）以上处分，\nＡ警告\n记过\n留校察看开除学籍\nD\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225704_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "散发非法刊物和宣传品，给予（）以上处分Ａ警告\nB 严重警告\n记过\nD 留校察看\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_225706_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "旷课10至19学时，给予何种处分？\n警告\nB 严重警告\nC 记过\nD 留校察看\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225708_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "擅自离校，视情节给予（）以上处分Ａ警告\n严重警告\nC 记过\nD 留校察看\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225711_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "违反课堂纪律、千扰教师正常上课，给予何种处分？\n警告\nB 严重警告\nC 记过\n留校察看\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225713_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "使用器械斗殴者，给予（）以上处分。Ａ警告\nB 严重警告\nC 记过\n留校察看正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225715_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "盗窃财物，价值500元以上的，给予（）处分。\n警告 A\nB 严重警告\n记过\nO 留校察看\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225718_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "154/473单选题\n弄虚作假骗取助学金和困难学生补助，给予（\n以上处分。Ａ警告\n严重警告记过\n留校察看\nD\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225720_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "通过伪造证件、证明、档案及其他材料获得考试资格、加分资格和考试成绩者，给予（）处分\nＡ警告\nB 严重警告\n记过\n留校察看正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225722_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "拒绝学校管理人员或学生纪律检查人员依学校的规定执行公务者，情节严重的，给予（）以上处分。\nＡ警告\nB 严重警告\n记过\nD 留校察看\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225724_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "酒后滋事给予（）以上处分。Ａ警告\n严重警告\nC 记过\nD 留校察看\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225726_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "组织、策划、参与非法传销活动的，给予（）\n以上处分。Ａ警告\nB 严重警告\n记过\n留校察看\nD\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225728_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "散布谣言者视情节轻重，给予（）以上处分Ａ警告\n严重警告\nC 记过\nD 留校察看\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225730_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "参与赌博，金额达到1000元以上，给予何种处分？\nＡ警告\n严重警告 B\n记过以上留校察看\nD\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_225732_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "利用网络传播具有明显反动政治倾向的言论\n给予（）以上处分。Ａ警告\nB 严重警告\nC 记过\n留校察看正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225734_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "被司法机关判处刑罚者，给予何种处理？ A 记过\nB 留校察看 C　退学\n开除学籍正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225736_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "解除纪律处分的决定书由（）统一印发。 A学工处\nB 教务处\n党政办 C\n学校正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225738_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "164/473单选题\n利用计算机网络、移动电话等手段散布不实信息，对学校和他人名誉及利益造成损害者，视\n情节给予（）处分。 A警告以上　\n严重警告以上记过以上\nD 留校察看以上\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225740_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在校园内实施组织、传播宗教行为的，视情节轻重，给予（）以上处分\n警告\nB 严重警告\nC 记过\n留校察看\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225742_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在校内非海报张贴、悬挂区域内组织、参与张贴、涂写、悬挂、刻画小广告和在公寓楼内、教学区域散发小广告的，责令其恢复原状并进行批评教育或公益劳动，对拒不接受批评教育和再犯的，给予（）处分。　\n警告以上\nB严重警告以上\n记过以上\n留校察看以上\nD\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225744_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "煽动、引诱、介绍他人向网络平台贷款的，给予（）以上处分；骗取、盗用他人信息实施网络平台贷款的，给予（）以上处分。\nA　警告、严重警告\n严重警告、记过记过、留校察看\n留校察看、开除学籍\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225747_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "代替考生或者由他人代替参加考试或者二次作\n弊者，是本校学生的，给予（）处分。Ａ警告\nB 严重警告\nC 留校察看\n开除学籍正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_225749_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生不遵守考场纪律，不服从考试工作人员的安排与要求，应当认定为考试违纪，给予严重　警告处分，下列哪项不属于此处分范围的：\n考试迟到要求进入考场但服从监考人员安排管理的\nB将试卷、答卷（含答题卡、答题\n纸等）、草稿纸等考试用纸带出考场的\n用规定以外的笔或者纸答题或者在试卷规定以外的地方书写姓名、考号",
    "answer": null,
    "title": " Screenshot_20241117_225751_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生及其他人员应当自觉维护考试秩序，服从考试工作人员的管理，有下列行为之一的，应当终止其继续考试，给予留校察看处分。考生及其他人员的行为违反《中华人民共和国治安管理处罚法》的，由公安机关进行处理；构成犯罪的，由司法机关依法追究刑事责任。下列哪项不属于此处分范围的：（）\nA　故意扰乱考场秩序　\nB　拒绝、妨碍考试工作人员履行管　\n理职责\nC威胁、侮辱、诽谤、诬陷考试工　\n作人员或其他考生",
    "answer": null,
    "title": " Screenshot_20241117_225753_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生及其他人员应当自觉维护考试秩序，服从考试工作人员的安排管理，发生部分行为时应　当终止其继续考试，并给予留校察看处分。下列哪项不属于此类行为：\nA故意损坏考场设施设备\n考试结束后确因本人忘记未在试卷规定范围内写好姓名的\nC　串通考试工作人员协助实施作　\n行为的\nD 存在集体作弊行为，影响恶劣的　正确签安",
    "answer": null,
    "title": " Screenshot_20241117_225755_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生不遵守考场纪律，不服从考试工作人员的安排与要求，应当认定为考试违纪，给予严重警告处分，下列哪项不属于此处分范围的：\nA携带规定以外的物品（书籍、资　\n料、笔记本等纸质材料以及草稿纸、手机、有储存或者传递信息功能的电子设备等）进入考场未放在指定位置的\nB未在规定的座位参加考试的\n考试开始信号发出前答题或者考试结束信号发出后继续答题的",
    "answer": null,
    "title": " Screenshot_20241117_225757_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生不遵守考场纪律，不服从考试工作人员的安排与要求，应当认定为考试违纪，给予严重警告处分，下列哪些属于此处分范围的：（） ①携带管制刀具等各类可能伤害他人的凶器进入考场的；②携带具有传递信息功能的电子设备，并且已接收或者发送了与考试内容相关信　息，或者拒绝监考人员检查是否已接收或者发送了信息的；③未经监考人员允许，相互借用　计算器、文具或者其他物品的：④不服从监考　人员的监督管理。\nA ①②?\nB ②3④\n①③④",
    "answer": null,
    "title": " Screenshot_20241117_225759_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "174/473单选题\n考生违背考试公平、公正原则，以不正当手段获得或者试图获得试题答案、考试成绩，应当认定为考试作弊，给予留校察看处分，下列哪项不属于此处分范围的：（）。\nA考生违纪后，经监考人员警告纠\n正无效而再次违纪的\nB抢夺、窃取他人试卷、答卷或者　\n胁迫他人为自己抄袭提供方便的未经监考人员允许，相互借用计算器、文具或者其他物品的　\nD携带具有传递信息功能的电子设\n备，并且已接收或者发送了与考",
    "answer": null,
    "title": " Screenshot_20241117_225801_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生违背考试公平、公正原则，以不正当手段　获得或者试图获得试题答案、考试成绩，应当　认定为考试作弊，给予记过处分，下列哪项不属于此处分范围的：（）\nA 以不正当手段获得或者试图获得\n试题答案、考试成绩的\n不服从监考人员的监督管理\nC抄袭或者协助他人抄袭试题答案\n或者与考试内容相关的资料的 D将与考试内容相关的资料放在考\n生所在座位周边（含桌椅、地面等），或者写在身体任意部位",
    "answer": null,
    "title": " Screenshot_20241117_225803_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生违背考试公平、公正原则，以不正当手段获得或者试图获得试题答案、考试成绩，应当认定为考试作弊，给予记过处分，下列哪些属于此处分范围的：（）①事先将与考试内容相关的资料放在抽屉（含旁边抽屉）内或者写在手掌或者身体其他部位的；②未经考试工作人员同意在考试过程中擅自离开考场的；③携带具有传递信息功能的电子设备，并且已接收或者发送了与考试内容相关信息，或者拒绝监考人员检查是否已接收或者发送了信息的；④以　不正当手段获得或者试图获得试题答案、考试　成绩的。\nA ①②③\nB ②3④\nO",
    "answer": null,
    "title": " Screenshot_20241117_225805_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "员同意在考试过程中擅自离开考场的；③携带具有传递信息功能的电子设备，并且已接收或　者发送了与考试内容相关信息，或者拒绝监考人员检查是否已接收或者发送了信息的；④以不正当手段获得或者试图获得试题答案、考试成绩的。\n①??\nB ②?④\n①??\nD?? 正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225814_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "下列哪项不属于应当认定为考试作弊，给予留校察看处分的。\nA 通过伪造证件、证明、档案及其　\n他材料获得考试资格、加分资格和考试成绩的\n考生不服从监考人员监督管理的串通考试工作人员协助实施作弊行为的\n存在集体作弊等行为，影响恶劣　的\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225827_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "下列哪项不属于应当认定为考试作弊，给予留校察看处分的。\nA　存在集体作弊等行为，影响恶劣　\n的\nB　考试工作人员协助实施作弊的\n所坐桌椅、墙壁上写有与考试内容有关的字迹，未及时报告监考人员的\n拒绝、妨碍考试工作人员履行管\n理职责正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225830_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在考试过程中或者在考试结束后发现下列哪些行为，应认定相关的考生实施了考试作弊，给予留校察看处分：（）①通过伪造证件、证明、档案及其他材料获得考试资格、加分资格和考试成绩的；②拒绝、妨碍考试工作人员履行管理职责；③存在集体作弊等行为，影响恶劣的；④未在规定的座位参加考试的。\n①? ②? B\nC?③④\n??④\nD",
    "answer": null,
    "title": " Screenshot_20241117_225832_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "下列哪项行为不属于给予留校察看处分的：\n考生将试卷、答卷（含答题卡、答题纸等）、草稿纸等考试用纸带出考场的\nB 拒绝、妨碍考试工作人员履行管\n理职责的\n威胁、侮辱、诽谤、诬陷或者以其他方式侵害考试工作人员、考生合法权益行为的\nD故意损坏考察设施设备",
    "answer": null,
    "title": " Screenshot_20241117_225835_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "纪律处分的种类分为：通报批评、警告、严重\n警告、记过、留校察看。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225839_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学校对学生作出处分，应当出具处分决定书并加盖学校印章。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225841_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "处分决定书包括学生基本信息、作出处分的事实和证据、处分的种类、依据、期限，并告知学生可以提出申诉及申诉的期限。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225843_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "184/473单选题\n受到开除学籍处分的处分学生在申诉期间，停止处分决定的执行。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225845_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生考试违规、违纪类纪律处分的解除统一由教学管理部门负责\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_225847_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生考试迟到要求进入考场但服从监考人员安排管理的，应当认定为考试违纪，给予严重警\n告处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225848_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生将试卷、答卷（含答题卡、答题纸等）\n草稿纸等考试用纸带出考场的，应当认定为考试违纪，给予严重警告处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225850_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生用规定以外的笔、纸答题或者在试卷规定以外的地方书写姓名、考号，应当认定为考试　违纪，给予严重警告处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225852_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生在考场或者教育考试机构禁止的范围内喧华、吸烟或者实施其他影响考场秩序的行为\n的，应当认定为考试违纪，给予记过处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225854_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生携带规定以外的物品（书籍、资料、笔记　本等纸质材料以及草稿纸、手机、有储存或者传递信息功能的电子设备等）进入考场，未放在指定位置的，应当认定为考试违纪，给予严　重警告处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225856_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生未在规定的座位参加考试的，应当认定为\n考试违纪，给予留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225857_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生在考试开始信号发出前答题或者考试结束信号发出后继续答题的，应当认定为考试违　纪，给予严重警告处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225859_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生在考试过程中吸烟、旁窥、交头接耳、互打暗号或者手势的，应当认定为考试违纪，给予严重警告处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225900_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "194/473单边题\n考生未经考试工作人员同意在考试过程中擅自离开考场的，应当认定为考试违纪：给予严重警告处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225902_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生所坐桌椅、墙壁上写有与考试内容有关的字迹，未及时报告监考人员的，应当认定为考试违纪，给予严重警告处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225904_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生携带管制刀具等各类可能伤害他人的凶器进入考场的。应当认定为考试违纪给予记过处分。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225905_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生未经监考人员允许，相互借用计算器、文具或者其他物品的，应当认定为考试违纪，给予严重警告处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225907_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生不服从监考人员的监督管理，应当认定为\n考试违纪，给予记过处分。Ａ是　\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225910_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生违纪后，经监考人员警告纠正无效而再次违纪的，应当认定为考试作弊，给予留校察看处分。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225912_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "故意销毁试卷、答卷或者其他考试材料的，应\n当认定为考试作弊。给予留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225913_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "传、接物品或者交换试卷、答卷、草稿纸的\n应当认定为考试作弊，给予开除学籍处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225915_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生违纪后，经监考人员警告纠正无效而再次违纪的，应当认定为考试作弊，给予开除学籍处分。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225917_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "以不正当手段获得或者试图获得试题答案、考试成绩的，应当认定为考试作弊，给予留校察　\n看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225918_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "204 /473单选题\n通过伪造证件、证明、档案及其他材料获得考试资格、加分资格和考试成绩的，应当认定为　考试作弊。给予留校察看处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225920_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "评卷过程中被认定为答案雷同的，应当认定为\n考试作弊。给予留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225922_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考场纪律混乱、考试秩序失控，出现大面积考试作弊现象的，应当认定为考试作弊，给予留校察看处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225923_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考试工作人员协助实施作行为的，应当认定为考试作弊，给予留校察看处分\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225925_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "通过监控录像认定为作弊行为的。应当认定为\n考试作弊，给予留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225927_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生考试迟到要求进入考场但服从监考人员安排管理的。不属于考试违纪。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225928_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生将试卷、答卷（含答题卡、答题纸等）\n草稿纸等考试用纸带出考场的。应当认定为考\n试作弊，给予留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225930_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生用规定以外的笔、纸答题或者在试卷规定以外的地方书写姓名、考号，应当认定为考试\n作弊，给予留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225932_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生未经考试工作人员同意在考试过程中擅自离开考场的。应当认定为考试作整。给予留校\n察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225933_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生所坐桌椅、墙壁上写有与考试内容有关的字迹。未及时报告监考人员的，应当认定为考\n试作弊，给予留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225935_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "214/473单选题\n考生携带管制刀具等各类可能伤害他人的凶器进入考场的，应当认定为考试作弊，给予留校\n察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225937_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生未经监考人员允许，相互借用计算器、文具或者其他物品的，应当认定为考试作弊，给\n予留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225939_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生不服从监考人员的监督管理，应当认定为\n考试作弊，给予留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225940_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "携带与考试内容相关的文字材料或者存储有与考试内容相关资料的电子设备参加考试的，应\n当认定为考试违纪，给予严重警告处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225944_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "开卷考试携带规定以外的资料或者物品参加考试的，应当认定为考试违纪，给予严重警告处分\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_225947_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "抄袭或者协助他人抄袭试题答案或者与考试内容相关的资料的，应当认定为考试违纪，给予　\n严重警告处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225949_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "抢夺、窃取他人试卷、答卷或者胁迫他人为自己抄袭提供方便的，应当认定为考试违纪，给\n予严重警告处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225951_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "携带具有传递信息功能的电子设备，并且已接收或者发送了与考试内容相关信息，或者拒绝监考人员检查是否已接收或者发送了信息的\n应当认定为考试违纪，给予严重警告处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225953_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "故意销毁试卷、答卷或者其他考试材料的，应\n当认定为考试违纪。给予严重警告处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225955_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在答卷上填写与本人身份不符的姓名、考号等信息的，应当认定为考试违纪，给予严重警告处分。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225956_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "224/473单选题\n传、接物品或者交换试卷、答卷、草稿纸的\n应当认定为考试违纪，给予严重警告处分。Ａ是　\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_225959_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生违纪后，经监考人员警告纠正无效而再次违纪的，应当认定为考试违纪，给予严重警告处分。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230001_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "将与考试内容相关的资料放在考生所在座位周边（含桌椅、地面等），或者写在身体任意部位，或者写在穿戴衣物上的，应当认定为考试　\n违纪，给予严重警告处分。Ａ是　\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230004_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "以不正当手段获得或者试图获得试题答案、考试成绩的，应当认定为考试违纪，给予严重警\n告处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230006_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "通过伪造证件、证明、档案及其他材料获得考试资格、加分资格和考试成绩的，应当认定为\n考试违纪，给予严重警告处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230008_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "评卷过程中被认定为答案雷同的，应当认定为\n考试违纪，给予严重警告处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230009_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考场纪律混乱、考试秩序失控，出现大面积考\n试作弊现象的，应当给予开除学籍处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230011_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考试工作人员协助实施作行为的，应当给予\n开除学籍处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230013_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "通过监控录像认定为作弊行为的，应当给予开\n除学籍处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230014_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "故意扰乱考点、考场、评卷场所等考试工作场所秩序的，应当给予留校察看处分。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230016_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "234/473选题\n拒绝、妨碍考试工作人员履行管理职责的，应当给予留校察看处分\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230018_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "威胁、侮辱、诽谤、诬陷或者以其他方式侵害考试工作人员、考生合法权益行为的。应当给予留校察看处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230019_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "故意损坏考场设施设备的，应当给予留校察看处分。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230023_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "故意扰乱考点、考场、评卷场所等考试工作场\n所秩序的，应当给予严重警告处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230025_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "拒绝、妨碍考试工作人员履行管理职责的，应\n当给予严重警告处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230026_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "威胁、侮辱、诽谤、诬陷或者以其他方式侵害考试工作人员、考生合法权益行为的，应当给\n予严重警告处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230028_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "故意损坏考场设施设备的，应当给予严重警告处分。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230030_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "携带规定以外的物品进入考场或者未放在指定位置，但尚未构成考试作弊行为的，认定为考试违纪，给予严重警告处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230032_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "携带与考试内容相关的材料或者存储有与考试内容相关资料的电子设备参加考试的，认定为\n考试作弊，给予留校察看处分Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230033_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "考生在考试过程中存在违背考试公平、公正原则的行为，在考试过程中有下列行为（）之一的，应当认定为考试作弊，给予记过处分，下列哪项不属于此处分范围。\n考试结束后在监考教师不知情的情况下学生擅自将考试专用稿纸带出考场的\nB抄袭或者协助他人抄袭试题答案\n或者与考试内容相关的资料的 C　携带具有传递信息功能的电子设　\n备，并且已接收或者发送了与考试内容相关信息，或者拒绝监考人员检查是否已接收或者发送了信息的",
    "answer": null,
    "title": " Screenshot_20241117_230035_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "244/473单选超\n考生违背考试公平、公正原则，以不正当手段获得或者试图获得试题答案、考试成绩，应当认定为考试作弊。给予记过处分。下列哪项不属于此处分范围的：（）\nA 故意销毁试卷、答卷或者其他考\n试材料的\nB在答卷上填写与本人身份不符的　\n姓名、考号等信息的　\nC　传、接物品或者交换试卷、答　\n卷、草稿纸的\n携带管制刀具等各类可能伤害他人的凶器进入考场的",
    "answer": null,
    "title": " Screenshot_20241117_230037_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在考试过程中或者在考试结束后发现下列哪些行为，应认定相关的考生实施了考试作弊，给　予留校察看处分：（）①故意损坏考场设施设备；②考生在考试开始信号发出前答题或者考试结束信号发出后继续答题的；③考试工作人员协助实施作弊行为的；④存在集体作弊等行为，影响恶劣的\nA Q②?\nB ②3④\n?③??④\nD",
    "answer": null,
    "title": " Screenshot_20241117_230039_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "下列哪些行为应当给予留校察看处分的：（） ①故意扰乱考点、考场、评卷场所等考试工作场所秩序的：②拒绝、妨碍考试工作人员履行管理职责的；③威胁、侮辱、诽谤、诬陷或者以其他方式侵害考试工作人员、考生合法权益行为的；④故意销毁试卷、答卷或者其他考试材料的\nQ??\nB ②3④\nC?③④\nD ①②③④",
    "answer": null,
    "title": " Screenshot_20241117_230041_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "从事非法的社会、政治、宗教、文化活动，下列哪个说法是不正确的？\nA 组织、成立、加入非法社会团体　\n或组织，从事非法活动的，给予记过处分。\n在学校进行宗教活动的，给予严重警告处分。\n制作、张贴、投递、散发非法刊物和宣传品。制造、散布、传播　政治谣言，给予记过处分。\n通过线上或线下组织、策划、煽　动未经批准的游行、示威、集会",
    "answer": null,
    "title": " Screenshot_20241117_230043_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "违反网络使用有关规定行为的，说法错误的是：（）。\nA　将本人持有的校内网络资源使用\n权转借、转租他人，造成不良影响或严重后果的，给予警告以上处分，涉及牟利的从重处理\n从事或协助从事危害网络安全活动，包括非法侵入他人网络、千扰他人网络正常功能、窃取网络数据等，造成严重后果的，给予警告以上处分\nC利用网络制作、复制、查阅和传\n播虚假信息、不良信息或非法信息，造成恶劣影响或严重后果",
    "answer": null,
    "title": " Screenshot_20241117_230045_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "《南昌大学学生纪律处分办法》第二十八条违反学校学生公寓（宿舍）管理规定，在公寓（宿舍）内存放热源性电器、炉灶、蜡烛或其他易燃、易爆等危险物品者，除扣留该物品　外，给予全校通报批评；使用者给予（）\n严重警告以上处分\n记过处分 B\n警告处分\n留校察看以上处分\nD\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230047_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "公安机关或司法机关认定其行为违反法律法规\n但免予处罚的，给予（）或（）处分。 A 通报评批、警告\n警告、严重警告 C　严重警告、记过\n记过、留校察看\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230049_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "对于未经批准的游行、示威、集会活动的参与者，应当给予　（）处分。　\n警告以上 A\n严重警告以上记过以上\n留校察看以上\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230051_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在学校举行宗教活动、发展教徒的，视情节轻重，给予（）处分。\nA 警告及以上\nB 严重警告及以上\n记过及以上\n留校察看及以上\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230053_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "有妨害公共安全行为的，造成严重后果者，给予记过以上处分，下列哪项属于此处分范围的：（）。\nA非法制造、贩卖、携带匕首或其　\n它管制刀具且造成严重后果者\nB故意破坏消防设施和消防标志者 C　在学校公共场所使用明火，堵　\n塞、占用消防通道，不听劝阻造\n成严重后果者以上均属于\n正确签案",
    "answer": null,
    "title": " Screenshot_20241117_230056_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "254/473单选题\n在校园内驾驶假牌（含假校园牌照）、套牌的\n非机动车，应当给予（）处分。Ａ警告\n严重警告\nC 记过\n留校察看\nD\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230058_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "利用网络进行刷单被公安机关通报造成负面影响的，应当给予（）处分，\n警告以上\nB 严重警告以上\n记过以上\n留校察看以上\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230100_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "违反学校教室管理规定，下列哪个说法是不正确的？\nA未经允许擅自使用教室进行非正\n常教学活动，经批评教育不改者，给予警告以上处分。\nB 在教室内抽烟、乱扔垃圾、破坏\n环境卫生后不进行清理，经批评　教育不改者，给予警告以上处分。\n在教室、教学楼公共空间自习区　故意占座的，给予全校通报批评。",
    "answer": null,
    "title": " Screenshot_20241117_230102_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "环境卫生后不进行清理，经批评教育不改者，给予警告以上处分。\n在教室、教学楼公共空间自习区故意占座的，给予全校通报批，评。\n在教室、教学楼公共空间自习区故意占座的，经批评教育不改者，给予记过处分。\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230111_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "携带与考试内容相关的文字材料或者存储有与考试内容相关资料的电子设备参加考试的，应\n当认定为考试作弊，给予留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230113_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "传、接物品或者交换试卷、答卷、草稿纸的应当认定为考试作弊。给予记过处分\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230115_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "抄或者协助他人抄袭试题答案或者与考试内容相关的资料的，应当认定为考试作弊，给予　\n留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230117_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "抢夺、窃取他人试卷、答卷或者胁迫他人为自己抄袭提供方便的，应当认定为考试作弊，给予记过处分。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230119_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "携带具有传递信息功能的电子设备，并且已接收或者发送了与考试内容相关信息，或者拒绝监考人员检查是否已接收或者发送了信息的应当认定为考试作弊，给予记过处分，\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230121_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在答卷上填写与本人身份不符的姓名、考号等信息的，应当认定为考试作弊，给予留校察看处分。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230123_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "将与考试内容相关的资料放在考生所在座位周边（含桌椅、地面等），或者写在身体任意部位，或者写在穿戴衣物上的，应当认定为考试\n作弊，给予留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230124_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "264/473单选题\n携带具有传递信息功能的电子设备，并且已接收或者发送了与考试内容相关信息，或者拒绝监考人员检查是否已接收或者发送了信息的\n认定为考试作弊，给予留校察看处分。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230126_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "制作、张贴、投递、散发非法刊物和宣传品制造、散布、传播政治谣言，应当给予记过处分\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230128_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "未经学校有关部门（单位）批准，参与搜集和组织、胁迫、教唆、指使他人搜集师生户籍出生年月、政治面貌、宗教信仰等信息者，给予记过以上处分\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230130_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "擅自改变教室设施，导致设施损坏者，应当进\n行全校通报批评。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230132_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "生源地信用助学贷款是指国家开发银行等金融机构向符合条件的家庭经济困难的高等普通（包括全日制普通本科高校、高等职业学校和高等专科学校）新生和在读学生发放的、在学生入学前（）所在地办理的助学贷款。\nＡ　学校 B学籍\n户籍 D　家庭正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230134_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "生源地贷款为信用贷款，主要用于解决学生在校期间的（）费。\nA　学费和生活费 B住宿费和生活费 C　学费和书本费\n学费、住宿费以及弥补生活费　\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230136_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "生源地信用助学贷款期限原则上按全日制本专科学制加（）年确定。\n15\nB 10\nc 8 5\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230137_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "贷款利率执行贷款发放时（）周期公布的人民币贷款同档次基准利率。\n中国人民银行 B农村信用社\n中国工商银行\nC\n国家开发银行\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230139_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "贷款利率每年（）月（）日调整一次，调整后的利率为调整日中国人民银行同期公布的人民币贷款同档次基准利率。\n12、21 B9、21\n6、18 1、18\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230141_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "贷款利息按年计收，起息日为经办银行发放贷款日，结息日为每年度的（）月（）日\n12、20 B9、20　 C6、18 1、18\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230143_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "274/473单选题\n国家助学贷款学生在校期间贷款利息（）%由财政补贴，毕业后由借款人自付利息\n100 B80\nc 50\n20\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230145_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生可以提前还款，每年（）月（）日和7月1 5日为固定提前还款日。\nA 12、15\nB 12、10\n1、15\nD 1、10\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230147_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "提前偿还的贷款本金需是（）元的整数倍或一次性还清。\nA 1500\nB 1000\n500\nD 100\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230149_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "对连续拖欠贷款超过（）且不与经办银行主动联系的借款学生，全国学生资助管理中心会将　其姓名、居民身份证号码、毕业学校、违约行为等在新闻媒体及全国高等学校毕业生学历查询系统网站公布。\nA 24个月\nB 18个月\n12个月 D6个月正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230150_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "生源地信用助学贷款期限原则上最长不超过年。\nＡ20\n22\nc 10\n8\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230152_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "每年的（）月（）日为固定还款日，包括利息和分期偿还的本金（最后一笔本金和利息于合\n同到期日偿还） A 12、31　\n12、21 C 1、31　\n1、21 D\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230154_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生应自毕业当年的（）月（）日起开始按年度偿还利息。\nA 10、1\n9\nC 8、1\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230156_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生在校及毕业后（）年期间为宽限期，宽限\n期后按等额本金方式分期偿还贷款本金。 A4\nB 3\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230158_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "生源地贷款为信用贷款，（）为共同贷款人　共同承担还款责任\n学生和家长（或其他法定监护人\nB　学生和家长\nC　家长　 D学生正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230159_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家生源地信用助学贷款的宽限期是到毕业第二年的（）月（）日。　\n12、20　 B9、20　\nc 6、20\nD3、20 正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230201_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "284/473选题\n国家生源地信用助学贷款办理时间一般为每年\n的（）月至（）月。　 A1、3\nB 10、12\n7、9 ４、6\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230203_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学院对首次获贷成功的学生要进行诚信建档时间为每年的（）月份。\nB 9\nc 6\n3\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230204_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学院在5月初开始至6月底举行的诚信座谈会的对象是（）\nA　首次获贷成功的学生\nB获贷成功的学生 C即将离校的毕业生\n即将离校的获贷毕业生\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230206_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "对逾期贷款，根据实际逾期金额和天数计收罚\n息，罚息利率为正常借款利率的百分之（） A 140\n130\nC 120\nD 100\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230208_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "支付宝账户是贷款专用账户，该账户的开通大\n约需要（）个工作日才能完成。 A7~9\nB 5~7\n3~5 1~3 D\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230223_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "（）是指生源地信用助学贷款合同约定的到期\n日前一次性结清贷款本息的还款行为。 Ai 逾期还款\nB提前部分还款 C正常还款\n提前还款正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230225_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "秋季开学后，学生将确认函或受理证明交至\n并由高校进行网上确认。校学生资助中心\nB•辅导员　\nc 学院\n省学生资助中心\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230227_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家助学贷款到期后逾期未还，必须尽快还清\n贷款，还款时需支付（）　Ａ　利息\n罚息 C　本金\n手续费\nD\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230229_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "借款学生在校期间国家助学贷款利息由（）全额支付。\nA省教育厅 B高校\nc 银行\n国家财政正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230230_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "支付宝账户密码默认为学生身份证号去掉前）位之后的剩余部分或随机生成，首次登录后　必须修改密码。\nA 7\n5\nD 4\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230232_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "294/473单选题\n国家助学贷款实行按（）一次申请一次审批发放的方式。\nA一季度\n一学年　 C一学期一星期 D\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230234_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在校期间提前还款的借款学生（）自付利息\n不需要 B需要\nC根据代理银行决定\nD 根据省助学工作管理中心决定\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230235_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家助学贷款的性质是（） A　政策性贷款\nB 福利性贷款\n帮扶性贷款商业性贷款\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230237_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "借款人在发生（）行为时，贷款人有权在媒体上公布借款人姓名、身份证号码、所在院校就业单位并披露其行为。\n违约\nB 成绩不及格\n打架旷课\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230239_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家助学贷款的借款人在校期间由财政补贴10 0%利息，毕业后的利息财政不再补贴，由学生还清本金和（）%利息。\n100 B80 75 C\nD 50\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230241_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家助学贷款的利息收取方式为（） A 按照月份收\nB 按照学年收\n按照年度收\nD 按照季度收\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_230242_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "为防止因少量差额导致还款失败，同学们存入还款金额时请多存（）元，多余的部分不会被扣除。\nA 100\nB 50\nC 20\n10\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230244_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家助学贷款的主要还款方式有（ A延迟还款和现金还款\nB 到期还款和延迟还款\n到期还款和提前还款 D提前还款和现金还款\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_230246_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "《南昌大学家庭经济困难学生认定工作实施办法》适用于南昌大学全日制（）\nA　本科生、硕士生、博士生　\nB本科生、专科生、第二学位学生　\n本科生、专科生本科生、研究生\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230248_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "由（）负责组织、实施和管理全校的家庭经济困难学生的认定工作。\nA　学生事务服务中心 B　勤工助学服务中心 C　学生学习服务中心\n学生资助中心\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230249_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "304/473单选题\n申请认定为家庭经济困难的学生需持有（ A《南昌大学家庭经济困难学生档\n案》\nB《南昌大学家庭经济困难学生申\n请表》\n《高等学校学生及家庭情况调查表》\nD《家庭经济困难学生认定申请\n表》正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230251_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "家庭经济困难学生认定工作每学年进行（ A 四次\nB 三次\n两次\nC\n次正确答案 D\nO",
    "answer": "D",
    "title": " Screenshot_20241117_230253_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "勤工助学岗位既要满足学生需求，又要保证学生不因参加勤工助学而（）\n影响学习 B缺乏锻炼\nc 忙碌\n有工作压力\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230255_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生参加勤工助学的时间原则上每周不超过）小时，寒暑假勤工助学时间可根据学校的具体情况适当延长。\n8\nB 10\n12\nD 14\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230257_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学校勤工助学管理服务组织统筹管理校外勤工助学活动，并注重与（）的有机结合\n学生学业\nB学生工作能力 C学生抗压能力\n学生生活需求\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230258_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "勤工助学活动是指学生在学校的组织下利用，通过劳动取得合法报酬，用于改善学习和生活的实践活动。\n课余时间\nB 假期时间\n上课时间旷课时间\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230300_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "校内固定岗位按（）计酬。\nＡ时 B天\n月 D季\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_230302_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "校内临时岗位按（）计酬。\n时 B天 C月 D季\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230303_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "校相关部门应加强对勤工助学学生的思想教育，增强学生（），充分发挥勤工助学育人功能。\nＡ　学习能力　\nB 劳动意识\n综合素质\nD 担当意识\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230305_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生参加校外勤工助学，其劳动报酬由（）支付。\n校外用人单位按协议\nB学校勤工助学管理服务组织 C学校学生资助管理机构\nD 其他单位\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230307_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "314/473单选题\n勤工助学活动的宗旨是坚持“立足（）、服务社会\n校园 B社会\nc 国家\nD城市正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230308_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生勤工助学持续一个学期以上的长期性岗位和寒假期间的连续性岗位属于（）岗位。\nA 临时岗位\nB 超过8小时\n固定岗位正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230310_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "对在勤工助学活动中违反校纪校规的，按照学\n校管理规定进行（）Ａ辞退\nB 处分\n教育\n教育和处理\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230312_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "加强对勤工助学学生的思想政治教育，帮助他们树立正确的（）\nA 世界观 B　人生观　\nc 价值观\n劳动观正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230314_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在校内开展勤工助学活动的，学生勤工助学管理服务组织必须与学生签订具有（）的协议书。\nA时间期限 B权责分明\n法律效力\n0 工作要求\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_230315_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "每年的国家助学金的款项，将由（）发放给学生\n学校学生资助中心\nB 财政厅 C省学生资助管理中心\nD 财政部\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230317_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "每年的寒假前和第二学期（）月前后将国家助\n学金分两次发给学生。Ａ6\n5 A\nC\n3\n正确答案 B\nO",
    "answer": "B",
    "title": " Screenshot_20241117_230319_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家助学金分为（）档。 A 5\n4\nB\nD\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_230322_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家奖学金每学年（）月中下旬启动评审工作。\nA 12 B11\nc 10\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230323_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "我校国家奖学金的评定每年由（）负责组织实施。\n学生资助中心\n学工委办学生工作处校长办公室\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230326_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "324/473单选题\n针对国家奖学金的评选，各学院组成推荐评选\n小组，由（）任组长。Ａ　院长\n分管学生工作的领导 C　党委书记　\n学生工作办公室主任\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230328_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家奖学金的奖励标准为每人每年（）元。 A 5000\nB 6000\n8000 10000\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230329_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家奖学金评选后，将在学院公示（）个工作\n日无异议后，上报学校审批。 A\n5\nC 4 3\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230331_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "获得国家奖学金的学生，在校期间一旦（）\n将即刻终止享受原获得的国家奖学金荣誉，追回获奖证书，并取消今后的国家奖学金评选资格。\nＡ　休学　\nB 出现考试不及格现象\n受到学校纪律处分\nD　退学正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_230333_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家励志奖学金的奖励标准为每人每年（）元。\nA 4000\nB 5000\n6000\nD 8000\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230334_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家助学金的评选，由学院（）负责本学院学生的审核、初评工作。\nA　学生工作办公室 B团委\n学生资助工作领导小组\nD党委正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230336_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家助学金的发放形式为：每年按（）季发　放：省学生资助管理中心将资助款直接划入学生银行卡账号。\n春、秋\nB春、夏、秋、冬 C春、夏、秋\nD 夏、冬　\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230337_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在同一学年内，获得国家奖学金的家庭经济困难学生，（）同时申请并获得国家助学金，同时申请并获得国家励志奖学金。\n可以、可以\nA\nB 不可以、不可以\n不可以、可以可以、不可以\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230340_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家奖学金的奖励对象为品学兼优的在校（全日制本、专科学生。\nA　一年级以上包含一年级　 B　三年级以上包含三年级　 C　一年级到三年级学生\n二年级以上包含二年级\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230341_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生临时困难补助额度每人每学期一般不超过（）元。\nA 3000\nB 2000\n6000\nD 500\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230343_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "334/473单选题申请困难补助的程序是：\nA本人直接向校学生资助中心提出\n申请\nB　本人向学工处提出申请　\n由本人向所在学院提出申请，经班级评议、学院审核后，报校资助中心审批备案。\nD本人向所在学院院办提出申请\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_230345_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "对于受助学生，各学院要加强诚信教育、（和社会责任感教育，鼓励学生积极参加公益活\n动、义务劳动和社会实践活动。 A　励志教育　\nB 积极教育\n心理健康教育感恩教育\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230346_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "减免学费学生数量控制在本学院在校学生人数的5%o以内，减学费减免金额为2500元的学生占减免学生人数的（）\n三分之\nB 三分之二\n四分之\nD 五分之·\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230348_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "减免学费学生数量控制在本学院在校学生人数的5%o以内，减免金额为1000元的学生占减免\n学生人数的（） A三分之—\n三分之二四分之·\nD 五分之一\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230350_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "本科生学费减免工作的评选时间一般为每年Ａ　3月　\nB 5月\n11月 9月\n正确答案 C\nO",
    "answer": "C",
    "title": " Screenshot_20241117_230351_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "各学院要加强对享受（）减免政策学生的教育和管理。引导他们树立正确的世界观、人生观和价值观，引导他们德、智、体、美、劳全面　发展。\nA 住宿费\nB 学费和住宿费\n学费正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230353_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "经学院学生资助工作领导小组核实后，确定减免人数、名单及金额，经（）无异议后，报校\n学生资助中心。 A学院公示\n全院公示学校公示\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230355_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生减免学费工作坚持原则是（）\n公开、公平、公正　\nB 公平、公正\n公开、公正 c\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230357_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学费减免对象为学校认定的在籍在册家庭经济特殊困难的（）\nA 研究生\n本科生专科生 C\n包含以上三项\nD\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230359_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "上学年所获各类奖助学金总金额超过（）不予减免学费。\n5000元（含5000元） B5500元（含5500元）\n6000元（含6000元） 8000元（含8000元\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230400_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "344/473单选超\n学校认定的在籍在册家庭经济符合（）条件可以减免学费。\n特殊困难\nB 困难\nC 一般困难\n不困难\nD\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230402_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "宝钢优秀学生特等奖人均（）元。 A 15000\nB 12000\n20000\nD 10000\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_230404_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学费减免办理工作一般安排在每年的（），每学年集中办理一次，每次只限中请一学年的学费减免。\n11月間\nB 10月\n9月\nD 12月\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230405_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家奖助学金包括：国家奖学金、国家助学\n金、国家励志奖学金、优秀学生奖学金。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230407_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "再次申请贷款的学生不需要重新进行资格审查并盖章。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230408_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "提前还款需一次性还清一笔合同，不接受部分提前还款。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230410_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "自付本息后，如当年12月20日未及时还款，将被视作贷款逾期，并自12月21日起产生罚息逾期罚息为当期利率的100%\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230411_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "支付宝账户是贷款专用账户，为了贷款能够顺\n利发放，账户可以进行修改。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230413_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "家庭经济困难学生认定评议小组在每学年学期\n末成立，成员名单在学院范围内公示。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230415_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "家庭经济困难学生认定评议小组在每学年学期\n末成立，成员名单在学院范围内公示。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230416_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "354/473单选题\n贫困生建档总人数原则上不得超过学生人数的4 0%。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230418_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "高校勤工助学岗位分为固定岗位和不固定岗位。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230419_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生参加勤工助学的时间原则上每天不超过8小\n时，每月不超过40小时Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230421_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "《南昌大学勤工助学管理办法》不适用于在职研究生。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230423_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "勤工助学活动是由学校在不影响正常教学秩序\n的前提下有序地开展。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230424_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "勤工助学活动是指学生在学校的组织下利用课余时间，通过劳动取得合法报酬，用于改善学习和生活条件的社会实践活动。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230426_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "校外勤工学酬金标准应低于学校当地政府或有\n关部门规定的最低工资标准。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230427_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "勤工助学是学校学生资助工作的重要组成部分，是提高学生道德素质和资助家庭经济学生\n的有效途径。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230429_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "参加勤工助学工作的学生须参加必要的岗前培训。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230430_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生参与校内非营利性单位的勤工助学活动其劳动报酬原则上由用人单位支付或从项目经\n费中开支。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230432_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "364/473单选题\n校外勤工助学活动必须由学校学生勤工助学管理服务组织统一管理，并注重学生学业的有机结合。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230433_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "勤工助学活动的宗旨是“立足社会，服务社会” Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230435_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "勤工助学活动坚持的原则是“学有余力、自愿申请、信息公开、扶困优先、竞争上岗、遵纪守法\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230436_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "校外用人单位聘用学生勤工助学不需要向学校\n学生勤工助学管理服务组织提出申请。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230438_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生在校外开展勤工助学活动，学生勤工助学管理服务组织不需要经学校授权，代表学校与用人单位和学生三方签订具有法律效力的协议书\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230439_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生参加勤工助学的时间原则上每月不超过40 人小时，寒暑假勤工助学时间可根据学校的具体情况适当延长。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230441_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "安排勤工助学岗位，应优先考虑学习成绩优秀\n的学生。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230443_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生参加勤工助学的时间原则上每周不超过10 小时，寒暑假勤工助学时间可根据学校的具体\n情况适当延长。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230444_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学校勤工助学管理服务组织统筹管理校外勤工\n助学活动，并注重学生工作能力的有机结合。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230446_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "校内固定岗位可根据工作时间、性质等实际情况原则上每人月劳酬不超过600元。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230447_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "374/473单选题\n每年的国家奖学金，将分两次打入学生银行卡账号。\nＡ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230449_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "同一学年，获得国家奖学金或国家励志奖学金的非家庭经济困难学生可以同时申请并获得国\n家助学金。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230450_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家助学金的资助对象为全日制本专科生中大一以上（含大一）的家庭经济困难学生。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230452_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "只有在家庭经济困难学生建档中列为“特困生”\n的才可以参评一等国家助学金。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230453_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "按照规定，每一位在校生最多只可以获得一次\n国家励志奖学金。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230455_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "获得国家助学金的同学将颁发学校统一印制的\n获助证书。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230456_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "获得国家助学金的同学将颁发学校统一印制的\n获助证书。Ａ是　\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230458_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "本学年已享受不需归还、无偿性质资助累计超\n过3000元者，将不可以参评国家奖学金。Ａ是　\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230501_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "获得国家奖学金的同学将颁发国家统一印制的奖励证书。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230502_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "同一学年，获得国家奖学金的家庭经济困难学生不可以同时申请并获得国家励志奖学金。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230504_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家奖学金名额以当年省学生资助管理中心下发文件为准。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230505_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "384/473单选题\n每年的国家励志奖学金，将分两次打入学生银\n行卡账号。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230507_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家励志奖学金的资助对象为全日制本专科生\n中大一以上（含大一）的家庭经济困难学生。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230509_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生无论家庭经济是否困难，只要符合规定条件，均可获得国家奖学金\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230510_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家励志奖学金是由中央和地方政府共同出资设立的。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230513_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "获得国家励志奖学金的同学将颁发省教育厅统一印制的奖励证书，\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230514_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "同一学年内，申请国家励志奖学金的学生可以\n申请并同时获得国家奖学金。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230516_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家助学金每学年11月初启动评审工作Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230518_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "同一学年内，申请并获得国家助学金的学生　不可以同时申请并获得国家奖学金或国家励志\n奖学金。Ａ是\n否\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230519_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "每年的国家助学金通过学生社保卡平均分春秋季发给学生。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230521_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "绿色通道仅限于家庭经济困难的新生\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230523_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "394/473单选题\n本人或家庭遭遇重大、急性突发性事件而导致经济困难。严重影响学习和生活的学生：可以申请特急困补助。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230525_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生减免学费工作坚持公开、公平、公正的原则。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230526_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学费减免范围仅限学校统一收取的学费，不包括住宿费和学校有关部门收取的其他费用\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230528_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "减免学费是学校对部分家庭经济特殊困难、无法缴纳学费的学生实行的一项补充资助措施\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230530_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "对获得学费减免的家庭经济困难学生，各学院应不定期地抽选一定比例，以信件、电话、实地走访等方式进行核查。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230531_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学生学费减免工作由校学生资助中心统一组织、安排，各学院具体实施。\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230533_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "经退役军人事务部门确认的烈士子女和经民政部门确认的孤儿学生，其学费金额在6000元以下的，全额减免学费；其学费金额在6000 元以上的，减免学费6000元。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230535_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "对于在学费减免评选过程中弄虚作假，用不正当手段获得减免的学生，一经发现，收回已经减免的学费。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230536_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "其他符合减免学费条件的家庭经济特殊困难学生，减免学费学生数量控制在本学院在校学生　人数的5%o以内，减免金额分2500元和1000　元两个档次。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230538_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "昱鸿助学金的资助对象是我校大二以上的家庭经济困难品学兼优的学生\n是 B否\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230540_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "404/473单边题\n2022年起昱鸿助学金的资助额度由每人每年66 00元提高到了每人每年7000元。\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230541_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "获得昱鸿助学金的学生，可连续三年获助\n是 B否\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230543_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "每位本科学生每年申请的贷款额度为（）元。 A 6000\nB 8000\n12000 16000\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230545_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "借款学生毕业后的利息及罚息由（）全额支付。\n学生本人 B高校\nc 银行\nD 国家财政\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230546_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在评定家庭经济困难学生时，班级需成立认定评议小组，由（）担任组长\n辅导员\nB 班长\nC 班主任\n学习委员正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230548_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "安排勤工助学岗位，应优先考虑（）的学生 A学习成绩优秀\nB 家庭收入高\n家庭经济困难 D　家庭收入不高\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230550_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "国家助学金平均每生每年（）元。 A 4400\n3700\nC 2200\nD 1100\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230551_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "南昌大学校庆日为每年的（Ａ　5月1日\n5月４日 8月1日\nC\nD 10月1日\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230553_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "南昌大学“双一流”建设学科是哪个？ A　食品科学与工程　\n材料科学与工程\n材料成型及控制工程机械设计制造及自动化\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230555_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "南昌大学校徽中的树是（） A橡树\nB 柳树\n樟树杨树\nD\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_230556_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "414 /473单选题南昌大学现有（）个校区。\nY\nB 4\nc 5\n6 D\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230558_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "南昌大学现有（）个学生社区。Ａ3\nB 4\nC 5\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230601_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "学校于何时成为教育部与江西省合建高校？ A 2017年\n2018年 2019年\nC\nD 2020年\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230603_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在综合实力方面，2024年南昌大学在武书连排\n行榜中，位列全国多少位？　 A48\n49 C50\nD 51\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230605_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "2008年10月，时任中央政治局常委、中央书记处书记、国家副主席的习近平同志视察南昌大学，深情寄语（）\n南昌大学前景无限 B南昌大学未来可期\n用青春铺路，让理想延伸　 D　立崇高理想，让青春飞扬　\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230607_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "2016年，习近平总书记视察南昌大学国家硅基 LED工程技术中心，勉励当代大学生珍惜韶华。（）\nA“南昌大学前景无限”\nB“核心技术是买不来的” C“我国发展必须依靠创新。掌握核　\n心技术的过程很艰难，但这条路必须走”\n用青春铺路，让理想延伸正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230608_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "南昌大学的办学源头可以追溯至1921年创办的哪所学校？（）\nA南昌医学院\n江西公立医学专门学校江西医学堂\nC\n解放军第八军医大学\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230610_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "习近平总书记在内蒙古考察时首次提出，\n）是新时代党的民族工作的主线，也是民族地区各项工作的主线。\n铸牢中华民族共同体意识 B推动经济建设\n推动中华民族伟大复兴\n推动中国特色社会主义现代化\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230612_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "习近平总书记在2021年中央民族工作会议上的讲话中指出，必须从（）战略高度把握新时代党\n的民族工作的历史方位。 A经济建设\nB 生态建设\n中华民族伟大复兴\nD 文明建设\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230613_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "铸牢中华民族共同体意识，就是要引导各族人民牢固树立休戚与共、荣辱与共、生死与共\n（）的共同体理念。 A患难与共\nB 安危与共\n甘苦与共命运与共\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230615_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "424 /473单选题\n做好民族工作要正确把握中华民族共同体意识和各民族意识的关系，引导各民族始终把（）放在首位。\n中华民族利益 B本民族利益\n经济利益\n其他民族利益\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230617_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "中华文化和各民族文化的关系：各民族优秀传统文化都是中华文化的组成部分（)是主千，各\n民族文化是枝叶，根深干壮才能枝繁叶茂。 A汉族文化\nB 外来文化\n优秀文化中华文化\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230618_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "必须坚持（）对民族工作的领导，提升解决民\n族问题、做好民族工作的能力和水平，Ａ政府\n中国共产党 C　人民代表大会\nD　人民代表大会常务委员会　\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230620_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "中华文化认同和本民族文化认同是（）的关系。\nA零和博奔\n并育而不相悸\nC 相互排斥\nD 只求其一\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230622_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "巩固和发展平等团结互助和谐的社会主义民族关系,要求我们（）　\nA　允许一定形式的民族歧视　 B　积极吸收外来文化　\n反对大汉族主义和地方民族主义反对少数民族风俗习惯\n正确答案 C",
    "answer": "C",
    "title": " Screenshot_20241117_230623_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "民族工作总目标是（\n中华民族一家亲，同心共筑中国梦\nB 推动经济建设\n推动文化建设推动生态建设\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230625_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "党的二十大报告关于宗教工作的要求为：坚持我国宗教中国化方向，积极引导宗教与（）相适应。\n社会主义社会\nB 社会主义\n经济建设\nD 文化建设\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230627_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "坚持我国宗教中国化方向，就是要引导和支持我国宗教以（）为引领。　\nA 唯物主义\nB 唯心主义\nC 历史主义\n社会主义核心价值观\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230629_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "党的宗教工作基本方针不包括：\nA全面贯彻党的宗教信仰自由政策\n促进各民族广泛交往交流交融 C　依法管理宗教事务\n坚持独立自主自办原则\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230630_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "依法管理宗教事务的基本原则不包括： A保护合法\nB 制止非法\n遇制极端 C\n欢迎渗透正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230632_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "434/473单选题\n宗教是人的异化形式，宗教的本质就是 A　意识的本质\nB，文化的本质\n人的本质（是“人创造了宗教,而不是宗教创造了人”）\nD 物质的本质\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_230634_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "邪教的本质不包括： A　反人类　\nB 反社会\n反科学\nC\n唤醒人性正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230636_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "以下能入教的人有：\nA　16岁初中生小明\n成年人张三 C党员德胜\nD 团员李四\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230637_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "未经学校有关部门（单位）批准，搜集和组织、胁迫、教唆、指使他人搜集师生户籍、出生年月、政治面貌、宗教信仰等信息者，给予（）处分；参与者，给予（）处分。\n记过以上、警告以上\nB 留校查看、警告以上\n 记过以上、开除学籍留校察看、记过以上\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230639_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "《中华人民共和国教育法》第八条规定，教育活动必须符合国家和社会公共利益，《普通高等学校学生管理规定》第四十三条规定，学校应当坚持（）。任何组织和个人不得在学校进行宗教活动。\nA　教育与宗教相结合原则　\n教育与宗教相分离原则教育与宗教相互促进原则\n以宗教推动教育正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230641_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在校园内遇到传教人员，以下做法正确的是\n不听、不信、不看、不传　 B表示支持并加入他们\nC　轻信他们的宣传，泄露个人信息　\n请他们到教室宣讲\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230643_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "我们的高校是党领导下的高校，是中国特色社会主义高校。办好我们的高校，必须坚持以（）\n为指导，全面贯彻党的教育方针。 A　有神论　\nB 宗教信仰自由\n教育与宗教相结合马克思主义\n正确答案 D",
    "answer": "D",
    "title": " Screenshot_20241117_230645_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "境外利用宗教对我国进行渗透，这是\n经济问题 A\nB 文化问题\n政治问题\nD 生态问题\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_230646_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "信教公民举行集体宗教活动一般应在（）举行。\nA高校课堂\n经国家有关部门登记的宗教活动场所内\nC 党政机关\nD 居委会\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230648_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "一百多年来，我们坚持把（）同中国民族问题具体实际相结合、同中华优秀传统文化相结合，创造性地走出了一条中国特色解决民族问题的正确道路。\n马克思主义民族理论\nB 马克思主义经济理论 C　马克思主义文化理论\nO 马克思主义社会理论\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230650_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "中华民族共同体意识是中华民族共同体这一历史客观存在在人们头脑中的反映，是在中华民族共同体建设过程中形成的中华民族共同心理意识。即对中华民族的最高认同及由此产生的\n对中华民族的（）、归属感、荣誉感。 A认同感\nB 自信心\n自豪感使命感正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230651_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "正确把握维护国家统一和实行民族区域自治的关系，坚持统一和自治相结合、民族因素和区域因素相结合，推动中华民族成为（）更高、凝聚力更强的命运共同体。\nA 可信度\nB 信任度\n认同度认可度\nD\n正确答案 c",
    "answer": null,
    "title": " Screenshot_20241117_230653_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "中华民族是有着五千多年文明史的伟大民族各民族共同开拓了祖国的辽阔疆域：共同缔造了统一的多民族国家，共同书写了辉煌的中国历史，共同创造了灿烂的中华文化，共同培育　了伟大的（）\nA中华精神\n民族精神团结精神奉献精神\nD\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230655_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "要推动各民族（）嵌入，积极促进各民族交往交流交融。\n全方位\nB 全方面\nc 全部\n全体 D\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230656_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "组织、教唆、胁迫、诱骗、煽动他人从事邪教、封建迷信等活动，或组织、拉拢他人参加非法宗教组织和宗教聚会等活动，或在学校举行宗教活动、发展教徒的，给予记过处分，情　节严重的，给予留校察看处分，参与者，给予（）处分。\nＡ开除学籍　\n严重警告以上 C　休学　\n记过 D",
    "answer": null,
    "title": " Screenshot_20241117_230658_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "中华民族是中华大地各类人群浸润数千年中华文明，经历长期（），在共同缔造统一多民族　国家历史进程中形成的、具有中华民族共同体认同的人们共同体\nA 交融互通\n交往交流交融\nC 团结互助\nD 互帮互助\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230700_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "严禁未经学校有关部门批准，搜集师生户籍政治面貌、宗教信仰等信息。\n对 B错\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230702_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "校园内可以穿戴宗教服饰、佩戴宗教标志 A对\n错\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230703_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "严禁师生参加非法的宗教组织和宗教聚会活动。\n对 B错\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230705_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "严禁在教育教学活动中传播宗教。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230706_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "454/473单选题\n严禁在学校成立宗教团体和组织。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230708_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "严禁在校园举行宗教活动。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230709_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "必须把推动各民族为全面建设社会主义现代化国家共同奋斗作为新时代党的民族工作的重要任务，促进各民族紧跟时代步伐，共同团结奋斗、共同繁荣发展\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230711_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "必须坚持正确的中华民族历史观，增强对中华民族的认同感和自豪感。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230712_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "铸牢中华民族共同体意识，就是要引导各族人民牢固树立休戚与共、荣辱与共、生死与共命运与共的共同体理念。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230714_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "中华民族与各民族之间的关系，是一个大家庭和家庭成员的关系，各民族的关系是一个大家庭里不同成员的关系。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230716_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "汉族离不开少数民族，少数民族离不开汉族各少数民族之间也相互离不开\n对 B错\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230717_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "要构建铸牢中华民族共同体意识宣传教育常态化机制，纳入千部教育、党员教育、国民教育体系，搞好社会宣传教育。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230718_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "坚持我国宗教中国化方向，就是要引导和支持我国宗教以社会主义核心价值观为引领。\n对 B错\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230720_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "校园内允许进行宗教活动Ａ对\n错\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230722_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "464/473单选题\n必须坚持党对宗教工作的集中统一领导\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230723_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "共产党员、共青团员可以信仰宗教。Ａ对\n错\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230725_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "我国实行政教分离的原则，任何宗教都没有超越宪法和法律的特权：都不能千预行政、司法和教育等国家职能的实施。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230727_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "《中华人民共和国反恐怖主义法》第四条第二款明确规定，国家反对一切形式的以歪曲宗教教义或者其他方法煽动仇恨、煽动歧视、鼓吹暴力等极端主义，消除恐怖主义的思想基础。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230728_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "《中华人民共和国宪法》第三十六条规定，国家保护正常的宗教活动。任何人不得利用宗教进行破坏社会秩序、损害公民身体健康、妨碍国家教育制度的活动。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230730_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "在互联网上，遇到不明传教人员时，应当给予\n一定的尊重，相信他们的宣传。 A对\n错\n正确答案 B",
    "answer": "B",
    "title": " Screenshot_20241117_230731_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "邪教是冒用宗教、气功或者其他名义建立，神化首要分子，利用制造、散布歪理邪说等手段蛊惑他人，发展、控制成员，骗钱敛财，危害社会的非法组织。他们的本质是反人类、反科学、反社会的。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230733_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "党的宗教工作基本方针的根本方向和目的是积极引导宗教与社会主义社会相适应。\n对 B错\n正确答案",
    "answer": null,
    "title": " Screenshot_20241117_230734_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "任何组织或者个人不得在互联网上传教，不得开展宗教教育培训、发布讲经讲道内容或者转发、链接相关内容，不得在互联网上组织开展宗教活动，不得以文字、图片、音视频等方式直播或者录播拜佛、烧香、受戒、诵经、礼拜、弥撒、受洗等宗教仪式。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230736_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "高等学校应当尊重外国留学生的民族习俗和宗教信仰，但不提供举行宗教仪式的场所，校内严禁进行传教及宗教聚会等活动。\n对 B错\n正确答案 A",
    "answer": "A",
    "title": " Screenshot_20241117_230738_com_tencent_wework_JsWebActivity.jpg "
  },
  {
    "question": "",
    "answer": null,
    "title": null
  }
];

// 创建 Fuse 实例
fuse = new Fuse(questions, {
  keys: ['question'], // 指定要搜索的字段
  includeScore: true, // 包含匹配分数
  threshold: 0.4 // 匹配阈值，越低越严格
});

// 使用 Fuse 进行模糊搜索
const searchResults = fuse.search(`"question": "高等学校应当尊重外国留学生的民族习俗和宗教信仰，但不提供举行宗教仪式的场所，校内严禁进行传教及宗教聚会等活动。\n对 B错\n正确答案 A`);

// 提取结果
const results = searchResults.map(result => result.item);

console.log("=====================================");
results.forEach(result => {
  console.log(result);
})

