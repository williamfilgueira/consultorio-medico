import styled from "styled-components";

export const DivFotoTextoComponent = styled.div`
  .centralizer {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  `;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const DivFotoTexto = () => {
  return (
    <DivFotoTextoComponent>
      <div className="centralizer">
        <h2>Sobre a clínica</h2>
        <p />
        <p>
          Nossa cliníca está prontapara receber nossos pacientes através de uma
          excelente estrutura, comodidade e com segurança de que você precisa.
        </p>
        <ImgContainer>
          <img id="medico" src="/assets/medico.jpg" alt="imagem-medico" />
          <div>
            <h3>Aqui na nossa cliníca você vai encontrar</h3>
            <ul>
              <li>Horário flexível.Atendemos de segunda à sábado.</li>
              <li>Estacionamento amplo com 600 vagas.</li>
              <li>Sala de espera com tv e wifi.</li>
              <li>Agendamento pelo telefone ou Whatsapp</li>
              <li>Excelente localização</li>
              <li>Entrega de exames na resindência</li>
            </ul>
          </div>
        </ImgContainer>
        <h3>Uma clínica de multiespecialidades</h3>
        <p>
          Nossa clínica possui diversas especialidades.Como pediatria,
          ortopedia, geriátrica,psicologia, fisioterapia e outros.
        </p>
      </div>
    </DivFotoTextoComponent>
  );
};
