export default function App() {
    return (
      <div>
        <h2>Desenvolvimento Front-End com Frameworks</h2>
  
        <h3>Mobile-First UI com React</h3>
  
        <h4>Diferença entre responsividade e adaptabilidade</h4>
  
        <p>
        A responsividade refere-se a um design que se ajusta fluidamente a diferentes tamanhos de tela, utilizando unidades relativas e media queries. Assim, responsividade é sobre flexibilidade em um único design, enquanto adaptabilidade considera múltiplas versões.
        </p>
        <p>
        Em contraste, a adaptabilidade envolve a criação de layouts distintos para dispositivos específicos, permitindo que o site carregue versões diferentes de acordo com as características do dispositivo do usuário, como indicado pela W3C no link de referência.
        </p>
        <p>
          Adaptabilidade, por outro lado, envolve a personalização em larguras
          específicas.
        </p>
        <p>
          Ou seja, ao contrário do responsivo que sempre se adequa
          automaticamente a todos os tamanhos, o adaptativo deve se ajustar somente
          quando o dispositivo do usuário chegar na largura almejada.
        </p>
  
        <a href="https://www.w3.org/TR/mobile-bp/#adaptable">
          W3C - Mobile Web Best Practices
        </a>
      </div>
    );
  }