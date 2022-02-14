# 项目说明
## 项目创建
本前端项目框架使用vue-cli自动创建
## 运行方式
```
删除node_modules文件夹
npm install
npm run serve
```


# API设计
## 1. login

### 1.1 登录页面

#### (1) 描述

- 登录(输入学号/工号+密码)

#### (2) 请求方式

- url: `/login`
- method: `GET`
- 服务端ip地址: `124.222.25.150`

#### (3) json格式

- 无，后端发页面就行



## 2. student

### 1.1 主页

#### (1) 描述

- 登录(输入学号/工号+密码)
- 登录成功转到student/teacher页面，失败则提示对应信息

#### (2) 请求方式

- url: `/student`
- method: `POST`
- 服务端ip地址: `124.222.25.150`

#### (3) json格式

- 前端json

  ```json
  {
  	"usr": "...",
  	"pwd": "...",
    	// 登录类型 s代表学生，t代表老师
  	"type": "s/t"
  }
  ```

- 后端json

  ```json
  {
  	// 0代表登录失败，1代表登录成功
  	"status": "0/1",
      // 请求后的失败/成功的具体信息(如"密码错误"，可以直接用来在网页显示)
  	"message": "...",
      // 只有status为1的时候后端才会附带token，status为0的时候只有上面两行
  	"token": "..."
  }
  ```

### 1.2 查看个人信息

#### (1) 描述

- 查看个人信息(姓名、学号等)
- 一些可选项一开始可以为空(邮箱，手机号，住址)

#### (2) 请求方式

- url: `/student/info`
- method: `GET`
- 服务端ip地址: `124.222.25.150`

#### (3) json格式

- 后端json

  ```json
  {
  	// 0代表请求失败，1代表请求成功
  	"status": "0/1",
      // 请求后的失败/成功的具体信息(如"token过期")
  	"message": "...",
      // data为object类型，没有则为null
  	"data": {
          "name": "...",
          "gender": "...",
          "birth": "...",
          "college": "...",
          "major": "...",
          "telephone": "..."/null,
          "email": "..."/null,
          "addr": "..."/null,
      }
  }
  ```

### 1.3 更改个人信息

#### (1) 描述

- 更改一些可选项(邮箱、手机号、住址)，学号等信息不可更改(即数据库中not null的数据)

#### (2) 请求方式

- url: `/student/info`
- method: `POST`
- 服务端ip地址: `124.222.25.150`

#### (3) json格式

- 前端json

  ```json
  {
      // data为object类型，没有则为null
  	"data": {
          "telephone": "..."/null,
          "email": "..."/null,
          "addr": "..."/null,
      }
  }
  ```

- 后端json

  ```json
  {
  	// 0代表请求失败，1代表请求成功
  	"status": "0/1",
      // 请求后的失败/成功的具体信息(如"token过期")
  	"message": "...",
  }
  ```

  

### 1.4 检索页面

#### (1) 描述

- 类似选课系统的那种页面

#### (2) 请求方式

- url: `/student/search`
- method: `GET`
- 服务端ip地址: `124.222.25.150`

#### (3) json格式

- 后端json

  ```json
  {
  	// 0代表请求失败，1代表请求成功
  	"status": "0/1",
      // 请求后的失败/成功的具体信息(如"token过期")
  	"message": "...",
  }
  ```

### 1.5 检索导师

#### (1) 描述

- 按关键字筛选(keyword)和排序(sort)

#### (2) 请求方式

- url: `/student/search`
- method: `POST`
- 服务端ip地址: `124.222.25.150`

#### (3) json格式

- 前端json

  ```json
  {
      "keyword": {
          // 没选这个关键字就发null,具体名字见数据库设计
          // 目前来看好像就只有按学院/职称检索
          "college": "..."/null,
          "title": "..."/null,
      },
      "sort": {
          // 没选这个关键字就发null,具体名字见数据库设计
          "tid": "..."/null,
          "college": "..."/null,
          "title": "..."/null,
      }
  }
  ```

- 后端json

  ```json
  {
  	// 0代表请求失败，1代表请求成功
  	"status": "0/1",
      // 请求后的失败/成功的具体信息(如"token过期")
  	"message": "...",
      // data为object类型，具体名字见数据库设计
  	"data": {
          "name": "...",
          "gender": "...",
          "title": "...",
          "college": "...",
          "telephone": "..."/null,
          "email": "..."/null,
          "addr": "..."/null,
      }
  }
  ```

### 1.6 选择导师

#### (1) 描述

- 类似选课系统的那种页面

#### (2) 请求方式

- url: `/student/select`
- method: `POST`
- 服务端ip地址: `124.222.25.150`

#### (3) json格式

- 前端json

  ```json
  {
    	// 所选导师的tid(教师号)
      "tid": "..."
  }
  ```

- 后端json

  ```json
  {
  	// 0代表请求失败，1代表请求成功
  	"status": "0/1",
      // 请求后的失败/成功的具体信息(如"token过期")
  	"message": "...",
  }
  ```

### 1.7 同学院导师信息
#### (1) 描述
- 返回同学院的导师信息，包括导师详细个人信息以及导师目前招生状况，例如：几个人正在申请，几个人已被导师接收

#### (2) 请求方式

- url: `/student/getTutors`
- method: `get`
- 服务端ip地址: `124.222.25.150`

#### (3) json格式

- 后端json

  ```json
  {
     待补充
  }
  ```
  
### 1.8 已选导师信息
#### (1) 描述
- 返回当前学生已经申请过的导师详细信息以及申请状态的信息（申请状态：未处理|被拒绝|被接受）

#### (2) 请求方式

- url: `/student/selectedTutors`
- method: `get`
- 服务端ip地址: `124.222.25.150`

#### (3) json格式

- 后端json

  ```json
  {
     待补充
  }
  ```

## 3. teacher

- 和学生端类似，等学生端搞完了再说



# 数据库设计

## student

```sql
create table student(
    -- 学号，姓名，性别，出生年月，院系号，专业号，手机号，邮箱，地址
    id int primary key auto_increment,
    name varchar(10) not null,
    gender varchar(10) not null,
    birth date not null,
    college_id int not null references college(id),
    major_id int not null references major(id),
    telephone varchar(20),
    email varchar(20),
    addr varchar(20)
)
```

## teacher

```sql
create table teacher(
    -- 工号，教师号(检索页面不显示工号而显示教师号)，姓名，职称，院系号，手机号，邮箱，地址
    id int primary key auto_increment,
    tid int not null auto_increment,
    gender varchar(10) not null,
    name varchar(20) not null,
    title varchar(20) not null,
    college_id int not null references college(id),
    telephone varchar(20),
    email varchar(20),
    addr varchar(20)
)
```

## college

```sql
create table college(
    -- 院系号，名字
    id int primary key auto_increment,
    name varchar(20) not null
)
```

## major

```sql
create table major(
    -- 专业号，名字，所属院系号
    id int primary key auto_increment,
    name varchar(20) not null,
    college_id int not null references college(id)
)
```

## selection

```sql
create table selection(
    -- 选择id，学号，教师号
    id int primary key auto_increment,
    student_id int not null references student(id),
    teacher_id int not null references teacher(tid)
)
```

## user_t

```sql
create table user_s(
    -- 学号，密码
    usr int references student(id),
    pwd varchar(20) not null
)
```

## user_s

```sql
create table user_t(
    -- 工号，密码
    usr int references teacher(id),
    pwd varchar(20) not null
)
```



