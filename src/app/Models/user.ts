export class User {
    // id:       Number
    username: String
    password: String
    email:    String

    public setUser(user:User){
        this.username = user.username
        this.password = user.password
        this.email = user.email
    }

    public getUser(){
        return User
    }

    // public setUsername(username:String){
    //     this.username = username
    // }

    // public getUsername(){
    //     return this.username
    // }

    // public setPassword(password:String){
    //     this.password = password
    // }

    // public getPassword(){
    //     return this.password
    // }

    // public setEmail(email:String){
    //     this.email = email
    // }

    // public getEmail(){
    //     return this.email
    // }

    // public updateUser(username:String, password:String, email:String){
        
    // }
}
