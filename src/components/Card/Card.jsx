import { Container, BoxCard, BoxDetalhes, BoxImagem, Type } from "./styles";
import { ImgType } from "../../utils/ImgType";

export default function Card(props) {
  const { name, type, id, image } = props;
  return (
    <>
      <Container className="card" key={id}>
        <BoxCard className="cardColor" id={type[0]}>
          <BoxDetalhes>
            <div id="detals">
              <p>#{id}</p>
              <h2>{name}</h2>

              <div id="type">
                {type.slice(0, 2).map((type) => {
                  return (
                    <Type key={type}>
                      <div id={type}>
                        {ImgType(type)}
                        <p>{type}</p>
                      </div>
                    </Type>
                  );
                })}
              </div>
            </div>

            <button>Detalhes</button>
          </BoxDetalhes>

          <BoxImagem>
            <img src={image} alt={name} />
            <button>Capturar!</button>
          </BoxImagem>
        </BoxCard>
      </Container>
    </>
  );
}
