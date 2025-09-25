import { useFoodData } from '@/hooks/useFoodData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: '🔍',
    title: 'Busca Inteligente',
    description: 'Encontre exatamente o que deseja com nossa busca avançada por ingredientes, tipo de cozinha ou pratos específicos.'
  },
  {
    icon: '🏷️',
    title: 'Filtros Personalizados',
    description: 'Filtre por preço, tempo de entrega, avaliação, tipo de cozinha e muito mais para encontrar a opção perfeita.'
  },
  {
    icon: '📍',
    title: 'Rastreamento em Tempo Real',
    description: 'Acompanhe seu pedido desde a confirmação até a entrega com nosso sistema de rastreamento ao vivo.'
  },
  {
    icon: '🎨',
    title: 'Cardápios Visuais',
    description: 'Fotos profissionais de todos os pratos para você escolher não só pelo sabor, mas também com os olhos.'
  }
];

const FeaturesSection = () => {
  const { cuisineTypes, isLoading } = useFoodData();

  return (
    <section id="funcionalidades" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Funcionalidades que fazem a diferença
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos cada recurso pensando na sua experiência. 
            Descubra como tornamos o delivery mais inteligente e prático.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:bg-muted/30 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {!isLoading && cuisineTypes.length > 0 && (
          <div className="bg-muted/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Explore nossos tipos de cozinha
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {cuisineTypes.slice(0, 12).map((cuisine, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">🍴</div>
                    <p className="text-sm font-medium text-foreground">{cuisine}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg">Ver todos os tipos de cozinha</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;