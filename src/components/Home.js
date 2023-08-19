import Nav from '../components/Nav';

function Home({ setPage }) {
    return (
        <main className='home-page'>
            <Nav setPage={setPage} />
        </main>
    )
}

export default Home;