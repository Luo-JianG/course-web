// es6语法引入mock模块
import Mock from 'mockjs'
const Random = Mock.Random

// 测试数据
Mock.mock('/api/data', (_req, _res) => { // 当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  const list = []
  for (let i = 0; i < 30; i++) {
    const listObject = {
      title: Random.csentence(5, 10), // 随机生成一段中文文本。
      company: Random.csentence(5, 10),
      attention_degree: Random.integer(100, 9999), // 返回一个随机的整数。
      photo: Random.image('114x83', '#00405d', '#FFF', 'Mock.js'),
    }
    list.push(listObject)
  }
  return {
    data: list,
  }
})

// 侧边栏数据
Mock.mock('/api/menuInfo', (_req, _res) => {
  const menuList = [
    {
      authName: '教师双选管理',
      id: 1,
      icon: 'el-icon-s-home',
      children: [
        {
          authName: '教师申报题目',
          id: 2,
          path: 'addSubject',
          children: [
          ],
        },
        {
          authName: '教师题目审核',
          id: 4,
          path: 'review',
        },
      ],
    },
  ]
  // console.log('_req', _req)  // {url: '/api/menuInfo', type: 'GET', body: null}body: nulltype: "GET"url: "/api/menuInfo"[[Prototype]]: Object
  // console.log('_res', _res)   // {url: '/api/menuInfo', type: 'GET', body: null}
  return {
    menuList,
    isCollapse: true,

  }
})

// 侧边栏数据 - 学生端
Mock.mock('/api/student/menuInfo', (_req, _res) => {
  const menuList = [
    {
      menuName: '首页',
      id: 1,
      icon: 'el-icon-s-home',
      path: 'welcome',

    },
    {
      menuName: '选题分析',
      id: 2,
      icon: 'el-icon-document',
      path: 'test',
    },
    {
      menuName: '学生选题',
      id: 3,
      icon: 'el-icon-reading',
      path: 'studentSubject',
    },
    {
      menuName: '任务书',
      id: 4,
      icon: 'el-icon-edit-outline',
      path: 'studentReview',
    },
  ]
  return {
    menuList,
    isCollapse: true,
  }
})

// 已选题列表
Mock.mock('/api/subjectInfo', (_req, _res) => {
  const tableData = [
    {
      subject: '基于舆论分析的信息安全系统', // 题目
      subjectType: '实验研究', // 题目类型
      subjectFrom: '教师自选题', // 题目来源
      mentor: '于子涵 (11111)', // 教师编号
      subjectState: '确认通过', // 是否确认通过
      reportTime: '2020-12-12 19:16:10', // 申报时间
      operate: '题目详情', // 操作
      profession: '计算机科学与技术', // 所属院系
    },
    {
      subject: '基于舆论分析的信息安全系统',
      subjectType: '软件开发',
      subjectFrom: '教师自选题',
      mentor: '于子涵',
      reportTime: '2020-12-12 19:16:10', // 申报时间
      subjectState: '不通过',
      profession: '设计系', // 所属院系
      operate: '题目详情',
    },
    {
      subject: '基于舆论分析的信息安全系统',
      subjectType: '工程设计',
      subjectFrom: '教师自选题',
      reportTime: '2020-12-12 19:16:10', // 申报时间
      mentor: '于子涵 (11111)',
      subjectState: '确认通过',
      profession: '电子信息工程系', // 所属院系
      operate: '题目详情',
    },
  ]
  return {
    tableData,
  }
})

// 学生题目详情
Mock.mock('/api/topicDetails', (_req, _res) => {
  const topicParticularData = [{
    submitTime: Random.datetime(), // 随机一个日期+时间
    titleName: Random.ctitle(10, 20), // 随机产生一个中文标题
    specialityClasses: '计算机类', // 选择其中一个
    declarationTime: Random.date(), // 随机产生一个日期
    hours: Random.natural(150, 250), // 随机产生一个150-250
    difficulty: 'A',
    identifier: Random.natural(100000000, 1000000000),
    source: '教师自选题',
    direction: '横向',
    occupation: '教授',
    guidanceTeacher: Random.cname(), // 随机生成一个常见的中文姓名
    staffRoom: '信息工程学院计算机网络教研室',
    Teachermail: `${Random.natural(1000000000, 10000000000)}@qq.com`,
    studentName: Random.cname(),
    classStudentNumber: Random.natural(1951000000, 1952000000),
    type: '工程设计',
    taskDescription: Random.csentence(30, 40),
    requireDescription: Random.csentence(30, 40),
    needskill: Random.csentence(30, 40),
    requireEquipment: Random.csentence(30, 40),
  }]
  return {
    topicParticularData,
  }
})
