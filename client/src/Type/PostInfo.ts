export interface CommentInfo {
  id: number;
  user: string;
  text: string;
}

export interface PostInfo {
  nickName: string;
  postText: string;
  likeAmount: number;
  commentList: CommentInfo[];
}