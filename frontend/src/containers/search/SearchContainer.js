import { useParams } from 'react-router-dom';
import SearchBox from '../../components/search/SearchBox';

export function SearchContainer() {
  const { keyword } = useParams();
  return <SearchBox keyword={keyword} />;
}
