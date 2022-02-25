//对API进行统一管理

import requests from './request';  //此处requests等于axios

let weatherQueryURL = 'http://wthrcdn.etouch.cn/weather_mini?city='

//测试用api
export const LoginRequest = (params) => {
  return requests({
    method: 'post',
    url: `/login`,
    data: params
  });
}

//用户登录
export const reqUserLogin = (params) => {
  return requests({
    method: 'post',
    url: `/login`,
    data: params
  });
}

//获取学生用户信息
export const reqStuInfo = () => {
  return requests({
    method: 'post',
    url: `/student/info`,
    data: {
      type: "show"
    }
  });
}

//以下未完成
//获取教师用户信息
export const reqTeaInfo = () => {
  return requests({
    method: 'get',
    url: `/teacher/info`,
  });
}


//修改学生用户信息
export const alterStuInfo = (params) => {
  return requests({
    method: 'post',
    url: `/student/info`,
    data: params
  });
}

//按关键字检索一位导师  //params:包含keyword对象和sort对象
export const selectTutorKeyword = (params) => {
  return requests({
    method: 'post',
    url: `/student/search`,
    data: params,
  });
}

//向某个导师发送申请
export const TutorRequest = (params) => {
  return requests({
    method: 'post',
    url: `/student/select`,
    tid: params
  });
}




