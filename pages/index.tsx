import type { NextPage } from 'next'
import Head from 'next/head'
import Alert, { AlertType } from '../components/alert';
import Button, { ButtonType } from '../components/button';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
        <Button title={'Masuk'} type={ButtonType.primary} />
        <Button title={'Batal'} type={ButtonType.secondary} />
      </div>
      <Alert message={'Hello'} type={AlertType.success} />
    </div>
  )
}

export default Home;