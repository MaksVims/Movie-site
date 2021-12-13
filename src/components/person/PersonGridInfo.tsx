import React, {FC} from 'react';
import {ISpecificStaff} from "#/staffTypes";
import getFormatBirthdayDate from "+/getFormatBirthdayDate";

interface PersonGridInfoProps {
  person: ISpecificStaff,
  countMovies: number
}

const PersonGridInfo: FC<PersonGridInfoProps> = ({countMovies, person}) => {
  return (
    <div className="md:mr-6 space-y-2 text-sm grid grid-cols-info">
      <span className="font-medium">
        Карьера:
      </span>
      <span className="text-gray-color">
        {person.profession}
      </span>
      <span className="font-medium">
        Рост:
      </span>
      <span className="text-gray-color">
        {person.growth || '-'}
      </span>
      <span className="font-medium">
        Дата рождения:
      </span>
      <span className="text-gray-color">
        {getFormatBirthdayDate(person.birthday) || '-'}
      </span>
      <span className="font-medium">
        Возвраст:
      </span>
      <span className="text-gray-color">
        {person.age || '-'}
      </span>
      <span className="font-medium">
        Место рождения:
      </span>
      <span className="text-gray-color">
        {person.birthplace || '-'}
      </span>
      <span className="font-medium">
        Всего фильмов:
      </span>
      <span className="text-gray-color">
        {countMovies}
      </span>
    </div>
  );
};

export default PersonGridInfo;