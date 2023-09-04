import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";

const CommentCard = ({ comment }) => {
  const [showMore, setShowMore] = useState(false);
  // console.log(comment);
  const timeAgo = formatDistanceToNow(
    new Date(comment?.topLevelComment?.snippet?.publishedAt),
    { addSuffix: true }
  );
  const comments =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum explicabo assumenda numquam eius necessitatibus temporibus, non magnam nobis ratione officiis reprehenderit nihil enim blanditiis quam rem. Consequuntur incidunt autem debitis. Unde eius doloribus, quibusdam, perferendis inventore et dolores, pariatur consequuntur quos voluptates ipsam. Amet minima totam praesentium sint placeat accusantium veritatis ex vero illo, soluta aut eaque officiis labore laboriosam dicta in temporibus quod debitis dolores facere. Ipsum, sunt dignissimos doloremque perspiciatis nihil quae esse nostrum repudiandae quam quasi ex magni! Laborum eos obcaecati quasi voluptate doloribus rem debitis, quaerat illum adipisci neque quam provident at esse velit dolorem. Cum pariatur voluptatum sunt sint repudiandae voluptates quae sequi fuga non beatae repellendus consectetur numquam soluta libero magnam error minus natus illo, maiores quibusdam ab tempore impedit dolores. Nesciunt dolor repellat molestias distinctio perferendis ab facilis, quos reiciendis doloribus itaque labore, amet, suscipit maiores velit. Laborum voluptatem perspiciatis voluptate? Voluptates deserunt sint, dolorum quasi dignissimos in alias placeat. Autem fugiat sapiente incidunt aliquid saepe rem delectus neque quaerat, quibusdam velit nemo, minima modi pariatur voluptatum iste ex nulla impedit. Nesciunt provident porro error quae debitis accusamus officia sint veniam, alias quis culpa rem eaque illo itaque adipisci, nobis amet commodi doloremque?";

  return (
    <div>
      <div className="detils flex gap-3 items-start">
        <img
          src={comment?.topLevelComment?.snippet?.authorProfileImageUrl}
          alt=""
          className="w-10 h-10 rounded-full object-contain"
        />
        <div className="gap-3 ">
          <div className="gap-3 items-center flex">
            <h2 className="text-sm font-bold">
              {comment?.topLevelComment?.snippet?.authorDisplayName}
            </h2>
            <h5 className="text-gray-400 text-sm font-medium">{timeAgo}</h5>
          </div>

          {!showMore ? (
            <>
              <p className="bg-transparent text-sm font-medium leading-7">
                {comment?.topLevelComment?.snippet?.textOriginal.slice(0, 200)}
              </p>

              {comment?.topLevelComment?.snippet?.textOriginal?.length >
                200 && (
                <button
                  className="hover:underline"
                  onClick={() => {
                    setShowMore(true);
                  }}
                >
                  Show More
                </button>
              )}
            </>
          ) : (
            <>
              <p className="bg-transparent text-sm font-medium leading-7">
                {comment?.topLevelComment?.snippet?.textOriginal}
              </p>
              <button
                className="hover:underline"
                onClick={() => {
                  setShowMore(false);
                }}
              >
                Show Less
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
