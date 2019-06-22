export default class UserService {

    static instance;

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserService();
        }
        return this.instance;
    }
    endpoint = "http://localhost:3000/api"
    checkLogin=()=>fetch(`${this.endpoint}/checkLogin`, {
        credentials:'include'
    }).then(
        response=> response.status
    )
    try_register=(state)=>fetch(`${this.endpoint}/user`, {
        method:'post',
        body:JSON.stringify({
            username:state.username,
            password:state.password,
            phone:state.phone,
            zip:state.zip,
            userType:state.role
        }),
        headers:{
            'content-type':'application/json'
        }
    }).then(response=>response.json())
    try_login=(username, password)=>fetch(`${this.endpoint}/login`,{
        method:"post",
        body:JSON.stringify({username:username,
            password:password}),
        headers:{
            'content-type':'application/json'
        }
    }).then(res=>res.status)

    logout=()=>fetch(`${this.endpoint}/logout`, {
        method:"post",
        headers:{
            'content-type':'application/json'
        }
    }).then(response => response.json())
}
