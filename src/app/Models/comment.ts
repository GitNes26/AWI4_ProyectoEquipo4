export class Comment {
    // id: Number
    comment: String
    user:    Number
    product: Number
    date:    Date

    public setComment(comment:Comment){
        this.comment = comment.comment
        this.user = comment.user
        this.product = comment.product
        this.date = comment.date
    }

    public getComment(){
        return Comment
    }
}
