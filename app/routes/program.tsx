import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Program() {
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-bold text-gray-200 mb-4'>Program</h1>

      <h2 className='text-xl text-gray-400 mb-4'>
        Nuestro Compromiso y Valores
      </h2>

      <p className='text-gray-100 mb-6'>
        Somos una empresa dedicada a proporcionar soluciones innovadoras.
        Nuestro objetivo principal es la satisfacción de nuestros clientes y el
        desarrollo sostenible.
      </p>

      <div className='text-sm text-gray-200 mb-6'>
        <p>
          Escrito por: <span className='font-semibold'>Juan Pérez</span>
        </p>
        <p>Fecha: 22 de Septiembre de 2024</p>
      </div>

      <div className='space-y-4'>
        <p className='text-gray-100'>
          En <span className='font-semibold'>Nuestra Empresa</span>, creemos
          firmemente en la innovación continua para ofrecer soluciones que
          realmente mejoren la vida de las personas. Nuestra misión es ayudar a
          las empresas a transformar sus procesos, aumentar su eficiencia y
          lograr un impacto positivo en la sociedad.
        </p>
        <p className='text-gray-100'>
          A lo largo de los años, hemos trabajado con diversas industrias, desde
          tecnología hasta educación, brindando productos y servicios que se
          ajustan a las necesidades de cada cliente. Nuestro equipo está
          compuesto por expertos en diversas áreas que colaboran para lograr
          resultados excepcionales.
        </p>
        <p className='text-gray-100'>
          El futuro es brillante y estamos comprometidos a seguir construyendo
          soluciones innovadoras que empoderen a nuestros clientes a ser líderes
          en sus campos.
        </p>
      </div>
    </div>
  );
}
