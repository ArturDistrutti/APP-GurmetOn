import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Advogada',
    avatar: '👩‍💼',
    rating: 5,
    comment: 'O GourmetOn mudou completamente minha relação com delivery. A qualidade dos restaurantes e a rapidez da entrega são incomparáveis!'
  },
  {
    name: 'João Santos',
    role: 'Desenvolvedor',
    avatar: '👨‍💻',
    rating: 5,
    comment: 'Como alguém que trabalha muito, o GourmetOn é uma salvação. Sempre consigo encontrar algo delicioso e saudável com poucos cliques.'
  },
  {
    name: 'Ana Costa',
    role: 'Professora',
    avatar: '👩‍🏫',
    rating: 5,
    comment: 'O app é super fácil de usar e as opções são incríveis. Meus filhos adoram escolher os pratos pelas fotos!'
  },
  {
    name: 'Carlos Mendes',
    role: 'Empresário',
    avatar: '👨‍💼',
    rating: 5,
    comment: 'Uso o GourmetOn para reuniões de trabalho. A pontualidade e qualidade sempre impressionam meus clientes.'
  },
  {
    name: 'Lucia Oliveira',
    role: 'Médica',
    avatar: '👩‍⚕️',
    rating: 5,
    comment: 'Mesmo com a correria do hospital, sempre consigo pedir uma refeição saudável. O filtro por tipo de dieta é perfeito!'
  },
  {
    name: 'Pedro Almeida',
    role: 'Estudante',
    avatar: '👨‍🎓',
    rating: 5,
    comment: 'As promoções para estudantes são ótimas! Consigo comer bem gastando pouco, e a entrega é sempre rápida na universidade.'
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-secondary' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 100.000 clientes satisfeitos já descobriram por que o GourmetOn 
            é a melhor escolha para delivery de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0"
              style={{ background: 'var(--gradient-card)', boxShadow: 'var(--shadow-elegant)' }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Junte-se a milhares de clientes satisfeitos!
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Faça seu primeiro pedido hoje e descubra por que somos a escolha número 1 em delivery gourmet.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.8</div>
                <div>Avaliação média</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100k+</div>
                <div>Clientes ativos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div>Restaurantes parceiros</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;