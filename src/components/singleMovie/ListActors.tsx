import React, {FC} from 'react';
import Link from "next/link";
import {IStaffByMovie} from "#/staffTypes";

interface ListActorsProps {
  actors: IStaffByMovie[]
}

const ListActors: FC<ListActorsProps> = ({actors}) => {
  return (
    <div className="inline">
      <span className="font-medium mr-1">Актеры: </span>
      {
        actors.map((actor, idx) => (
          <React.Fragment key={actor.staffId}>
            <Link
              href={`/search?actor=${actor.staffId}`}
            >
              <a className="text-blue-400 underline">
                {actor.nameRu}
              </a>
            </Link>
            <span>{idx === actors.length - 1 ? `` : ' , '}</span>
          </React.Fragment>
        ))
      }
    </div>
  );
};

export default ListActors;