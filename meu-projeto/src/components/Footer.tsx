const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Gourmet<span className="text-primary">On</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              A melhor plataforma de delivery gourmet do Brasil. 
              Conectando você aos sabores mais incríveis da sua cidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                📱 iOS
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                🤖 Android
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/80 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-background/80 hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="text-background/80 hover:text-primary transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-background/80 hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/80 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Para Restaurantes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Para Restaurantes</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Cadastre seu Restaurante
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Portal do Parceiro
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Suporte Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* Contato e Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>contato@gourmeton.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>São Paulo, SP</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-background/80 hover:text-primary transition-colors text-xl"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a 
                  href="#" 
                  className="text-background/80 hover:text-primary transition-colors text-xl"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a 
                  href="#" 
                  className="text-background/80 hover:text-primary transition-colors text-xl"
                  aria-label="Twitter"
                >
                  🐦
                </a>
                <a 
                  href="#" 
                  className="text-background/80 hover:text-primary transition-colors text-xl"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} GourmetOn. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6 text-sm text-background/60">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;