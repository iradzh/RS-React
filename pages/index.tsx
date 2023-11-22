import CharacterList from '@/components/CharacterList/CharacterList';
import SearchBar from '@/components/SearchBar/SearchBar';
import Settings from '@/components/Settings/Settings';
import { IApiResponse } from '@/interfaces/interfaces';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import './main.css';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export const getServerSideProps: GetServerSideProps<{
  repo: IApiResponse;
}> = async (context) => {
  const baseUrl = 'https://swapi.dev/api/people';
  try {
    const res = await fetch(baseUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch data from API: ${res.status}`);
    }
    const repo = await res.json();
    return { props: { repo } };
  } catch (error) {
    console.error('Error fetching characters:', error);
    return { props: { repo: null } };
  }
};

export default function Home({
  repo
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!repo) {
    return <div>Error loading data</div>;
  }

  return (
    <main>
      <Provider store={store}>
        <SearchBar />
        <Settings />
        <CharacterList repo={repo} />
      </Provider>
    </main>
  );
}
