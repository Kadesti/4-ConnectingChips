import { PostInfo } from "../Type/PostInfo";

const postInfo: PostInfo = {
  nickName: "커넥팅칩스",
  postText: "오늘도 2일째 운동 조지고 왔습니다!!!\n작심삼일도 꾸준히 하면 계속 할 수 있다",
  likeAmount: 30,
  commentList: [
    {
      commnet_id: 0,
      user: "칩스1234",
      text: "대박대박 대단합니다!!! 저도 칩스님처럼 작심삼칩 열심히 해야겠어요ㅜㅜ",
      reply: [
        {
          reply_id: 0,
          user: "커넥팅칩스",
          text: "ㅎㅎㅎㅎ 감사합니다~! 칩스님도 득근한 하루 보내세요! :-)",
        },
        {
          reply_id: 1,
          user: "커넥팅스윙스",
          text: "1234님도 화이팅입니다!",
        },
      ],
    },
    {
      commnet_id: 1,
      user: "4567칩스",
      text: "엄청난 노고에 박수를!",
      reply: [],
    },
  ],
};

export default postInfo;
