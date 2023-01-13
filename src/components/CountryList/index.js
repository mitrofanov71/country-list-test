import ListHeader from "./Header";
import List from "./List";
import { Layout } from 'antd';

const CountryList = () => {
    return (
        <Layout style={{ minHeight: '100vh', padding: 10 }}>
            <ListHeader/>
            <List/>
        </Layout>
    )
}

export default CountryList