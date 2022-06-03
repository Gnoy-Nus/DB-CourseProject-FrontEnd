//对API进行统一管理

import requests from './request';  //此处requests等于axios

//查询当前系统选课状态
export const sysMode = () => {
  return requests({
    method: 'get',
    url: `/admin/mode`,

  });
}
//改变当前系统选课状态
export const altMode = () => {
  return requests({
    method: 'post',
    url: `/admin/mode`,

  });
}

//用户登录
export const reqStuLogin = (params) => {
  return requests({
    method: 'post',
    url: `/student/login`,
    data: params
  });
}
export const reqTeaLogin = (params) => {
  return requests({
    method: 'post',
    url: `/teacher/login`,
    data: params
  });
}
//获取学生用户信息
export const reqStuInfo = (params) => {
  return requests({
    method: 'get',
    url: `/student/info`,
  });
}
//查询本学期所有开设课程
export const reqCourseInfo = (params) => {
  return requests({
    method: 'get',
    url: `/course/info`,
    params:params,
  });
}
//查询学生某个学期选课
export const reqStuCourse = (params) => {
  return requests({
    method: 'get',
    url: `/student/course`,
    params:params
  });
}
//查询学生某个学期成绩
export const reqStuScore = (params) => {
  return requests({
    method: 'get',
    url: `/student/score`,
    params:params
  });
}

//删除选课
export const delCourse = (params) => {
  return requests({
    method: 'delete',
    url: `/student/course`,
    data: params,
  });
}

//新增选课
export const putCourse = (params) => {
  return requests({
    method: 'put',
    url: `/student/course`,
    data: params,
  });
}

//修改学生用户信息**
export const modStuInfo = (params) => {
  return requests({
    method: 'post',
    url: `/student/info`,
    params: params,
  });
}

//修改学生账户密码**
export const changeStudentAccount = (params) => {
  return requests({
    method: 'post',
    url: `/student/account`,
    params: params,
  });
}
/*--------------------教师api分割线---------------- */
//获取教师用户信息
export const reqTeaInfo = (params) => {
  return requests({
    method: 'get',
    url: `/teacher/info`,
    params:params,
  });
}
//查询授课班级
export const reqClassInfo = (params) => {
  return requests({
    method: 'get',
    url: `/teacher/course`,
    params:params,
  });
}
//查询班级学生
export const reqClassMember = (params) => {
  return requests({
    method: 'get',
    url: `/teacher/class`,
    params:params,
  });
}
//查询班级学生
export const uploadScore = (params) => {
  return requests({
    method: 'post',
    url: `/teacher/score`,
    data:params,
  });
}








