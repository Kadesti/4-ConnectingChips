import { styled } from "styled-components";
import 기본프로필 from "../../image/예시사진모음/default_profile.svg";

/** 2023-08-25 Comment.tsx - 그룹페이지 댓글 */
const Comment = () => {
  const commentname = "칩스1234";
  const replyname = "커넥팅칩스";
  const date = "1일 전";
  const text = ["대박대박 대단합니다!!! 저도 칩스님처럼 작심삼칩 열심히 해야겠어요ㅜㅜ", "ㅎㅎㅎㅎ 감사합니다~! 칩스님도 득근한 하루 보내세요! :-)"];

  return (
    <CommentS>
      <h2>댓글</h2>
      <CommentListS>
        <CommentContainer sort="comment" commentname={commentname} date={date} text={text[0]} />
        <CommentContainer sort="reply" commentname={commentname} date={date} replyname={replyname} text={text[1]} />
      </CommentListS>
      <CommentFormS>
        <label htmlFor="comment">
          <input id="comment" />
          <button>전</button>
        </label>
      </CommentFormS>
    </CommentS>
  );
};

export default Comment;

type CommentType = "comment" | "reply";

/** 2023-08-26 Comment.tsx - 댓글 타입 - 종류 / 댓글 작성자 / 답글 작성자 / 기간 / 내용 */
interface CommentProps {
  sort: CommentType;
  commentname: string;
  replyname?: string;
  date: string;
  text: string;
}

/** 2023-08-25 Comment.tsx - 그룹페이지 댓글 항목 */
const CommentContainer = ({ sort, commentname, replyname, date, text }: CommentProps) => {
  return (
    <CommentContainerS sort={sort}>
      <img src={기본프로필} alt="기본프로필" />
      <CommentContentS sort={sort}>
        <div className="profile">
          <h2>{sort === "comment" ? commentname : replyname}</h2>
          <p>{date}</p>
        </div>
        <p className="text">
          {sort === "reply" && <p className="call">@{commentname}</p>} {text}
        </p>
        <div className="reply">
          <h2>답글</h2>
          <p>삭제</p>
        </div>
      </CommentContentS>
    </CommentContainerS>
  );
};

/** 2023-08-25 Comment.tsx - 그룹페이지 댓글 */
const CommentS = styled.article`
  margin: 0 1rem;
`;

/** 2023-08-25 Comment.tsx - 그룹페이지 댓글 리스트 */
const CommentListS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.69rem;
`;

/** 2023-08-25 Comment.tsx - 그룹페이지 댓글 전체 내용 */
const CommentContainerS = styled.div<{ sort: CommentType }>`
  display: flex;
  align-items: start;
  height: 6.375rem;

  background-color: ${(props) => (props.sort === "reply" ? "var(--color-bg)" : "")};
  padding: ${(props) => (props.sort === "reply" ? "1rem" : "")};

  img {
    width: 1.875rem;
  }
`;

/** 2023-08-25 Comment.tsx - 그룹페이지 댓글 내용, 답글 탭 */
const CommentContentS = styled.div<{ sort: CommentType }>`
  margin-left: 0.5rem;

  margin-top: 0.31rem;
  width: ${(props) => (props.sort === "comment" ? "19.0625rem" : "18.0625rem")};
  /* height: 100%; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.37rem;

    h2 {
      font-size: 0.875rem;
    }
  }

  p.text {
    font-size: 0.875rem;
    color: var(--font-color2);

    p.call {
      font-size: 0.875rem;
      color: #000;
      font-weight: 500;
      display: inline;
    }
    margin-bottom: 0.5rem;
  }

  .reply {
    display: flex;
    gap: 1.5rem;

    h2 {
      font-size: 0.875rem;
    }
    p {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--font-color3);
    }
  }
`;

/** 2023-08-25 Comment.tsx - 그룹페이지 댓글 입력 창 */
const CommentFormS = styled.form`
  label {
    height: 4.5rem;
    margin: 0 1rem;
    border: 1px #e3e3e3;
  }

  input {
    display: none;
  }
`;
