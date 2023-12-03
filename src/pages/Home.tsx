import { ITableValues, TableForm } from '../interfaces';
import Table from '../components/Table/Table';
import { useSelector } from 'react-redux';

const Home = () => {
  const store = useSelector((state: ITableValues) => state);

  return (
    <div className="homePage">
      <div className="tables">
        {store.uncontrForm.isInitialised && <Table form={TableForm.UNC} />}
        {store.hookData.isInitialised && <Table form={TableForm.HOOK} />}
      </div>
    </div>
  );
};

export default Home;
