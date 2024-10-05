import React from 'react';

type Props = {
  name: string;
  date: string;
  text: string;
  like: string;
  dislike: string;
};

const CommentCadrd = ({ date, dislike, like, name, text }: Props) => {
  return (
    <div className="py-12 px-6">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <h5>{name}</h5>
          <div className="">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentCadrd;
