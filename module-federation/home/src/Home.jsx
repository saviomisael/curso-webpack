import { Button } from 'reactstrap';

const Home = () => {
  return (
    <div>
      <section className="p-5">
        <h1 className="display-3">Ola Module Federation</h1>
        <hr className="my-2" />
        <p>Este component e de outro app!</p>
        <p class="lead">
          <Button color="primary">Botão</Button>
        </p>
      </section>
    </div>
  );
};

export default Home;
