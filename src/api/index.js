//对API进行统一管理

import requests from './request';  //此处requests等于axios

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

//修改学生用户信息
export const modStuInfo = (params) => {
  return requests({
    method: 'post',
    url: `/student/info`,
    data: params,
  });
}

//按关键字检索导师 
export const selectTutorKeyword = (params) => {
  return requests({
    method: 'post',
    url: `/student/search`,
    data: params,
  });
}

//向某个导师递交申请
export const submitApply = (params) => {
  return requests({
    method: 'post',
    url: `/student/search`,
    data: params,
  });
}
//向某个导师撤销申请
export const cancelApply = (params) => {
  return requests({
    method: 'post',
    url: `/student/show`,
    data: params,
  });
}
//查看已经申请的导师
export const checkApplyingTutors = (params) => {
  return requests({
    method: 'post',
    url: `/student/show`,
    data: {
      type: "show"
    }
  });
}

//修改学生账户密码
export const changeStudentAccount = (params) => {
  return requests({
    method: 'post',
    url: `/student/account`,
    data: params,
  });
}



//以下未完成
//获取教师用户信息
export const reqTeaInfo = () => {
  return requests({
    method: 'post',
    url: `/teacher/info`,
    data: {
      type: "show"
    }
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



//向某个导师发送申请
export const TutorRequest = (params) => {
  return requests({
    method: 'post',
    url: `/student/select`,
    tid: params
  });
}




