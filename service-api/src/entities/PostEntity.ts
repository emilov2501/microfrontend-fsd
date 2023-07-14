export class PostEntity {
  id: number;
  title: string;
  description: string;
  authorId: number;

  constructor(item: any) {
    this.id = item.id;
    this.title = item.title;
    this.description = item.body;
    this.authorId = item.userId;
  }
}
