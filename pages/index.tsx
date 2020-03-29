import items from '../api/items.js';
import Search from '../components/Search';
import ItemsViewer from '../components/ItemsViewer';
import { NextPage } from 'next';

type HomeProps = {
    items: IItems[];
};

const Home: NextPage<HomeProps> = ({ items }) => {
    const searchres = '';
    return (
        <>
            <Search value={searchres} />
            <ItemsViewer items={items} />
        </>
    );
};

Home.getInitialProps = async () => {
    return {
        items,
    };
};

export default Home;
