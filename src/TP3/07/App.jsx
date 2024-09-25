import './main.css'

export default function App() {
    return (
      <Card
        image="./assets/image.jpeg"
        title="Instituto Infnet"
        description="O Infnet é um Instituto de Tecnologia fundado em 1994 que tornou-se referência na formação de profissionais em Tecnologia da Informação, Négocios e para a Indústria Criativa."
        footer="Rua São José, 90 - Centro, Rio de Janeiro - RJ, 20010-020"
      />
    );
  }
  
  function Card({ image, title, description, footer }) {
    return (
      <div className="card">
        <img src={image} alt="Laboratório de Informática" className="card-image" />
        <div className="card-content">
          <h1 className="card-title">{title}</h1>
          <p className="card-description">{description}</p>
          <footer className="card-footer">{footer}</footer>
        </div>
      </div>
    );
  }