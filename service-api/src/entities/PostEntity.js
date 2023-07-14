var PostEntity = /** @class */ (function () {
    function PostEntity(item) {
        this.id = item.id;
        this.title = item.title;
        this.description = item.body;
        this.authorId = item.userId;
    }
    return PostEntity;
}());
export { PostEntity };
