import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: '🚀',
    title: 'Entrega Rápida',
    description: 'Receba seu pedido em até 30 minutos. Nossos entregadores estão sempre prontos para levar o melhor da gastronomia até você.'
  },
  {
    icon: '🍽️',
    title: 'Variedade de Restaurantes',
    description: 'Mais de 500 restaurantes parceiros oferecendo desde comida caseira até alta gastronomia. Sempre há algo novo para descobrir.'
  },
  {
    icon: '💳',
    title: 'Pagamento Fácil',
    description: 'Pague com cartão, PIX, dinheiro ou vale-refeição. Sem complicações, sem filas, apenas praticidade.'
  },
  {
    icon: '⭐',
    title: 'Qualidade Garantida',
    description: 'Todos os nossos parceiros são cuidadosamente selecionados. Avaliações reais de clientes garantem sua satisfação.'
  },
  {
    icon: '📱',
    title: 'App Intuitivo',
    description: 'Interface simples e elegante. Faça seu pedido em poucos toques e acompanhe a entrega em tempo real.'
  },
  {
    icon: '🎯',
    title: 'Ofertas Exclusivas',
    description: 'Descontos especiais, cupons personalizados e promoções que você só encontra no GourmetOn.'
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher o GourmetOn?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformamos a forma como você experimenta a gastronomia. 
            Descubra os benefícios que tornam nossa plataforma única.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0"
              style={{ background: 'var(--gradient-card)', boxShadow: 'var(--shadow-elegant)' }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;