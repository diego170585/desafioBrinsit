
import Layout from '../../components/layout';
import Title from '../../components/title';
import Head from 'next/head';

export default function user1({user}) {
    
    return(
        <Layout>
            <Head>
                <title> Pagina de datos de usuario</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
                </link>

            </Head>
            <Title>User details</Title>
            <div className='card'>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>City: {user.address.city}</p>
                <p>Phone:{user.phone}</p>
                <p>Website:{user.website}</p>
            </div>
            <style jsx>
                {`
                    .card {
                        width:300px;
                        margin: auto;
                        flex-basis: 45%;
                        padding: 1.5rem;
                        text-align: left;
                        color: black;
                        text-decoration: none;
                        border: 1px solid #eaeaea;
                        border-radius: 10px;
                        transition: color 0.15s ease, border-color 0.15s ease;
                    }
                    .card:hover,
                    .card:focus,
                    .card:active {
                        color: #0070f3;
                        border-color: #0070f3;
                    }
                    .card p {
                        margin: 0;
                        font-size: 1.25rem;
                        line-height: 1.5;
                    }
                `}
            </style>
        </Layout>
    ) 
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
    return {
      props: {
        user
      }
    }
  }
