const Mock = require('mockjs')

const Random = Mock.Random

let adminInfo = [
    {
        name:"admin",
        password:"123456"
    },
    {
        name:"yang",
        password:"123456"
    }
]

const productUseInfo = function () {
    let Users = [];
    let type = ['游客', '会员', '管理员'];
    for (let i = 0; i < 100; i++) {
        let obj = Mock.mock({
            userId: i + 1,
            userName: Random.cname(),
            userEmail: Random.email(),
            'userType|+1': type
        })
        Users.push(obj);
    }
    return {
        Users: Users
      }
};

Mock.mock('/api/login', 'put',(req) => {
    let obj = {}
    if(req.body) {
        let str = req.body.replace(/"/g,"")
        let name = str.split(',')[0]
        let password = str.split(',')[1]
        name = name.split(':')[1]
        password = password.split(':')[1]
        password = password.split('}')[0]
        
        adminInfo.forEach(item => {
            if(item.name == name || item.email == name){
                console.log("jgakfjgasdfhg")
                if(item.password == password){
                    obj.name = item.name
                    obj.auto_token = Random.string(50,52)
                }
            }
        });
    }
    return obj
})

Mock.mock('/api/user', 'post', productUseInfo)