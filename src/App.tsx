import './App.css';
import {
  container,
  headerLinkLeft,
  headerLinkRight,
  headerLogo, headerLogoImage,
  headerMenu,
  headerMenuNav,
  highlightBranding,
  highlightSocialMedia,
  highlightWebsites,
  landingContainer,
  landingCta,
  landingDetail,
  landingMain,
  sectionBrands,
  sectionBrandsContainer,
  sectionBrandsHeadline,
  sectionBrandsWrapper,
  sectionDescription,
  sectionDescriptionContainer,
  sectionDescriptionCTA,
  sectionDescriptionHeadline,
  sectionDescriptionText,
  sectionExpertise,
  sectionExpertiseHeadline,
  sectionExpertiseServiceDescription,
  sectionExpertiseServices,
  sectionExpertiseServicesDescriptionBorder,
  sectionExpertiseServicesService,
  sectionIntroduce,
  sectionIntroduceHeadline,
  sectionIntroducePeople,
  sectionIntroducePeoplePhoto, sectionIntroducePeoplePhotoImage,
  sectionIntroducePerson, sectionIntroducePersonFlex,
  sectionIntroducePersonName,
  sectionNourish,
  sectionNourishCTA,
  sectionNourishHeadline,
  sectionNourishSentence,
} from './App.css.ts';

function App() {
  return (
    <div>
      <header className={headerMenu}>
        <nav className={headerMenuNav}>
          <div className={headerLinkLeft}></div>
          <div className={headerLogo}>
            <img className={headerLogoImage} src="/raizes-logo.svg" alt="Raízes" />
          </div>
          <a className={headerLinkRight} target="_blank" href="https://raizesbranding.substack.com">
            BLOG
          </a>
        </nav>
      </header>

      <section className={landingCta}>
        <div className={container}>
          <div className={landingContainer}>
            <div className={landingMain}>
              somos um
              <br />
              estúdio criativo
              <br />& de branding
            </div>
            <div className={landingDetail}>
              que cria marcas que
              <br />
              se destacam.
            </div>
          </div>
        </div>
      </section>

      {/*<section className="flex-center">*/}
      {/*  <div className={container}>DESLIZE PARA EXPLORAR</div>*/}
      {/*</section>*/}

      <section className={sectionNourish}>
        <div className={container}>
          <div className={sectionNourishHeadline}>
            <img src="/nourishtogrow.svg" />
          </div>

          <div className={sectionNourishSentence}>
            <div>
              Para nós, o primeiro passo é <span className="text-underline">nutrir</span> e
              <span className="text-underline">fortalecer</span> as raízes de cada marca para que possam crescer fundamentadas e colher os
              frutos.
              <br />
              <br />A atenção e a empatia que temos com os clientes é o que traz sentido para consolidar marcas e comunicá-las ao público de
              maneira inesquecível, a partir de posicionamentos reais e expansão dos horizontes.
            </div>
            <div>
              Por isso, trabalhamos em cada serviço oferecido com <span className="text-underline">cuidado</span>,{' '}
              <span className="text-underline">efeito</span> e <span className="text-underline">afeto</span>.
              <br />
              <br />
              <strong>Que tal começar a nutrir sua marca para um crescimento saudável e resultados reais?</strong>
              <br />
              <br />
              <a className={sectionNourishCTA} href="mailto:contato@raizesbranding.com">
                <div>vamos</div>
                <div>conversar!</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionBrands}>
        <div className={sectionBrandsContainer}>
          <div className={sectionBrandsHeadline}>Marcas que deixam marcas</div>

          <div>
            Soluções personalizadas e cuidadosamente pensadas com <br /> profissionalismo, paciência, cuidado, efeito e afeto.
          </div>

          <div className={sectionBrandsWrapper}>
            <img src="/brands/eusoupintor.svg" alt="Eu Sou Pintor" />
            <img src="/brands/quitaPay.png" alt="Quita Pay" />
            <img src="/brands/woodlie.png" alt="Woodlie" />
          </div>
        </div>
      </section>

      <section className={sectionIntroduce}>
        <div className={container}>
          <div className={sectionIntroduceHeadline}>OIE, DEIXE-NOS NOS APRESENTAR! 👋🏻</div>
          <div className={sectionIntroducePeople}>
            <div className={sectionIntroducePeoplePhoto}>
              <img className={sectionIntroducePeoplePhotoImage} src="/partners.png" alt="Daniela & Carolina" />
            </div>
            <div className={sectionIntroducePersonFlex}>
              <div className={sectionIntroducePerson}>
                <div className={sectionIntroducePersonName}>DANIELA TREIN</div>
                <div>
                  <strong>Brand Designer | Estrategista | Diretora de Criação</strong>
                </div>
                <div>
                  Graduada em Design Gráfico, Daniela gosta de expandir o seu conhecimento técnico e nutrir o seu potencial criativo,
                  ressignificando o papel do design dentro das organizações.
                </div>
              </div>

              <div className={sectionIntroducePerson}>
                <div className={sectionIntroducePersonName}>CAROLINA BARRETT</div>
                <div>
                  <strong>Estrategista | Analista de Conteúdo | Copywriter</strong>
                </div>
                <div>
                  Com um amor inerente pelas palavras e graduação em Comunicação Social, Carolina se dedica a contar histórias com
                  propósito, criando conexões autênticas e comunicando o que as marcas têm a dizer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionDescription}>
        <div className={sectionDescriptionContainer}>
          <div className={sectionDescriptionHeadline}>
            Nós acreditamos que se não gostamos do caminho que estamos trilhando, quer dizer que é hora de começar a traçar um caminho{' '}
            <strong>diferente</strong>.
          </div>
          <div className={sectionDescriptionText}>
            Após anos de experiência profissional em diferentes agências de publicidade, entendemos que era o momento de nos desprender dos
            padrões corporativos como o conhecemos e unir nosso conhecimento para fornecer mais autenticidade em cada projeto.
          </div>

          <div className={sectionDescriptionCTA}>
            A sua marca se destaca.
            <br />
            <strong>É hora de apresentá-la ao mundo.</strong>
          </div>
        </div>
      </section>

      <section id="services" className={sectionExpertise}>
        <div className={container}>
          <div className={sectionExpertiseHeadline}>Somos especialistas em</div>
          <div className={sectionExpertiseServices}>
            <div className={sectionExpertiseServicesService}>
              <div className={highlightBranding}>
                BRANDING
                <br />
                REBRANDING
              </div>
              DNA da Marca, Identidade Visual, Estratégia de Conteúdo, Estratégia de Lançamento de Marca.
            </div>
            <div className={sectionExpertiseServicesService}>
              <div className={highlightSocialMedia}>SOCIAL MEDIA</div>
              Estratégia de Conteúdo, Redação & Copywriting, Design & Campanhas para Redes Sociais, Gerenciamento de Redes Sociais.
            </div>
            <div className={sectionExpertiseServicesService}>
              <div className={highlightWebsites}>
                WEBSITES
                <br />& APPS
              </div>
              Redação UX,
              <br />
              UX | UI Design.
            </div>
          </div>
          <div className={sectionExpertiseServiceDescription}>
            Os serviços listados acima são apenas um resumo dos pacotes que oferecemos.
            <br />
            Se você está a procurar por outro serviço da área, por favor, não hesite em entrar em contato.
            <div className={sectionExpertiseServicesDescriptionBorder} />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-logo">
          <img src="/raizes-logo-footer.svg" />
        </div>
      </footer>
    </div>
  );
}

export default App;
