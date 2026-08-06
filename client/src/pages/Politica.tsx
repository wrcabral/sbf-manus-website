import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Politica() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', 'Montserrat', sans-serif", background: "#060d18" }}>
      <Navbar />

      <section style={{ paddingTop: 150, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="sbf-badge sbf-badge-gold-dark" style={{ marginBottom: 16, display: "inline-flex" }}>
            <i className="fas fa-shield-alt" style={{ fontSize: 10 }}></i>
            Legal
          </span>
          <h1 style={{ color: "white", fontWeight: 900, letterSpacing: "-0.02em", margin: "0 0 32px", fontSize: "clamp(28px,4vw,42px)" }}>
            Política de Privacidade
          </h1>

          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.85 }}>
            <h2 style={{ color: "white", fontWeight: 800, fontSize: "1.25rem", margin: "32px 0 12px" }}>
              SEÇÃO 1 – O que faremos com esta informação?
            </h2>
            <p>
              Quando você pede para falar com um dos nossos consultores, como parte do processo você preenche um formulário
              onde coletamos as informações pessoais que você nos dá, tais como: nome, telefone, e-mail, etc. Também coletamos
              seus dados quando você faz download de um conteúdo ou se inscreve para receber algum conteúdo.
            </p>
            <p>
              Quando você acessa nosso site, também coletamos dados automaticamente como o protocolo de internet do seu
              computador e endereço de IP, a fim de obter informações que nos ajudam a aprender sobre seu navegador e sistema
              operacional. Isso acontece mesmo que você não faça login ou preencha um formulário com seus dados. Além disso,
              usamos cookies, que são arquivos de texto pequenos que armazenam algumas informações e preferências salvas em
              seu dispositivo ("Cookies"), e podem auxiliar na personalização de publicidade.
            </p>
            <p>
              E-mail marketing será realizado apenas caso você permita. Nestes e-mails você poderá receber notícias sobre
              nossos serviços, novidades e outras atualizações.
            </p>
            <p>
              Essas informações são usadas para realizarmos um contato com a sua empresa; além disso, podemos usá-las para
              enviar comunicações via e-mail em nome da SBF Contabilidade.
            </p>

            <h2 style={{ color: "white", fontWeight: 800, fontSize: "1.25rem", margin: "32px 0 12px" }}>
              SEÇÃO 2 – Consentimento
            </h2>
            <p>
              <strong style={{ color: "white" }}>Como vocês obtêm meu consentimento?</strong><br />
              Quando você fornece informações pessoais como nome, telefone e endereço para solicitar o atendimento de um
              consultor, ao clicar em "Agendar sua Avaliação", ao fazer o download ou se inscrever em um evento, entendemos
              que você está de acordo com a coleta de dados para serem utilizados pela nossa empresa.
            </p>
            <p>
              Se pedirmos suas informações pessoais por uma razão secundária, como marketing, vamos lhe pedir diretamente por
              seu consentimento, ou lhe fornecer a oportunidade de dizer não.
            </p>
            <p>
              <strong style={{ color: "white" }}>E caso você queira retirar seu consentimento, como proceder?</strong><br />
              Se após nos fornecer seus dados você mudar de ideia, pode retirar o seu consentimento para a coleta, uso ou
              divulgação contínua de suas informações a qualquer momento, entrando em contato conosco em{" "}
              <a href="mailto:contato@sbfcontabilidade.com.br" style={{ color: "#ba9863" }}>
                contato@sbfcontabilidade.com.br
              </a>.
            </p>

            <h2 style={{ color: "white", fontWeight: 800, fontSize: "1.25rem", margin: "32px 0 12px" }}>
              SEÇÃO 3 – Divulgação
            </h2>
            <p>
              Podemos divulgar suas informações pessoais caso sejamos obrigados pela lei a fazê-lo, ou se você violar nossos
              Termos de Serviço, ou para fornecedores terceirizados conforme a Seção 4.
            </p>

            <h2 style={{ color: "white", fontWeight: 800, fontSize: "1.25rem", margin: "32px 0 12px" }}>
              SEÇÃO 4 – Serviços de Terceiros
            </h2>
            <p>
              No geral, os fornecedores terceirizados usados por nós irão apenas coletar, usar e divulgar suas informações na
              medida do necessário para permitir que eles realizem os serviços que nos fornecem.
            </p>
            <p>
              Entretanto, certos fornecedores de serviços terceirizados têm suas próprias políticas de privacidade com
              respeito à informação que somos obrigados a fornecer a eles. Para esses fornecedores, recomendamos que você
              leia suas políticas de privacidade para entender como suas informações pessoais serão usadas.
            </p>
            <p>
              Em particular, lembre-se de que certos fornecedores podem estar localizados em jurisdições diferentes da sua ou
              da nossa. Assim, se você continuar com uma transação que envolve os serviços de um fornecedor terceirizado,
              suas informações podem tornar-se sujeitas às leis da(s) jurisdição(ões) em que esse fornecedor está localizado.
            </p>
            <p>
              Uma vez que você deixe o nosso site ou seja redirecionado para um aplicativo ou site de terceiros, você não
              será mais regido por esta Política de Privacidade.
            </p>
            <p>
              <strong style={{ color: "white" }}>Links</strong><br />
              Quando você clica em links no nosso site, eles podem lhe direcionar para fora dele. Não somos responsáveis
              pelas práticas de privacidade de outros sites e incentivamos você a ler as declarações de privacidade deles.
            </p>

            <h2 style={{ color: "white", fontWeight: 800, fontSize: "1.25rem", margin: "32px 0 12px" }}>
              SEÇÃO 5 – Segurança
            </h2>
            <p>
              Para proteger suas informações pessoais, tomamos precauções razoáveis e seguimos as melhores práticas da
              indústria para nos certificar de que elas não serão perdidas inadequadamente, usurpadas, acessadas, divulgadas,
              alteradas ou destruídas.
            </p>
            <p>
              Embora nenhum método de transmissão pela internet ou armazenamento eletrônico seja 100% seguro, seguimos os
              padrões geralmente aceitos pela indústria para proteger suas informações.
            </p>

            <h2 style={{ color: "white", fontWeight: 800, fontSize: "1.25rem", margin: "32px 0 12px" }}>
              SEÇÃO 6 – Alterações a esta Política de Privacidade
            </h2>
            <p>
              Reservamos o direito de modificar esta política de privacidade a qualquer momento — por favor, revise-a com
              frequência. Alterações e esclarecimentos surtirão efeito imediatamente após sua publicação no site. Se
              fizermos alterações materiais, iremos notificá-lo aqui para que você tenha ciência sobre quais informações
              coletamos, como as usamos e sob que circunstâncias.
            </p>
            <p style={{ marginBottom: 0 }}>
              Dúvidas sobre esta política? Fale conosco em{" "}
              <a href="mailto:contato@sbfcontabilidade.com.br" style={{ color: "#ba9863" }}>
                contato@sbfcontabilidade.com.br
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
