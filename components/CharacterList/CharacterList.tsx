import './CharacterList.scss';

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { getServerSideProps } from '@/pages';
import { ICharacter } from '@/interfaces/interfaces';
import Character from '../Character/Charachter';
import Link from 'next/link';

export default function CharacterList({
  repo
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const data = repo;
  if (!repo) {
    return <div>Error loading data</div>;
  }
  return (
    <div className='char_list'>
      {data.results.map((char: ICharacter, key: number) => (
        <Link href={`./details`} key={key}>
          <Character char={char} key={key} />
        </Link>
      ))}
    </div>
  );
}
