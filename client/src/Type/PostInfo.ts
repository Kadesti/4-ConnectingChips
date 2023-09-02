type ReplyInfo = {
  reply_id: number;
  user: string;
  text: string;
  // createdAt : number;
  // updatedAt : number;
}

export type CommentInfo = Omit<ReplyInfo, "reply_id"> & {
  commnet_id: number;
  reply: ReplyInfo[];
};

export interface PostInfo {
  nickName: string;
  postText: string;
  likeAmount: number;
  commentList: CommentInfo[];
}
