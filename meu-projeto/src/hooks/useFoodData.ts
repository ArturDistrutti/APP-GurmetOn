import { useState, useEffect } from 'react';

interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  cuisines: string[];
}

interface FoodData {
  featuredDishes: Recipe[];
  cuisineTypes: string[];
  isLoading: boolean;
  error: string | null;
}

const SPOONACULAR_API_KEY = 'demo-key'; // Em produção, usar variável de ambiente

export const useFoodData = (): FoodData => {
  const [foodData, setFoodData] = useState<FoodData>({
    featuredDishes: [],
    cuisineTypes: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        setFoodData(prev => ({ ...prev, isLoading: true }));

        // Para demo, usando dados mockados já que a API Spoonacular requer chave válida
        const mockRecipes: Recipe[] = [
          {
            id: 1,
            title: "Pasta Carbonara Gourmet",
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
            readyInMinutes: 20,
            cuisines: ["Italian"]
          },
          {
            id: 2,
            title: "Salmão Grelhado com Legumes",
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
            readyInMinutes: 25,
            cuisines: ["Mediterranean"]
          },
          {
            id: 3,
            title: "Hambúrguer Artesanal Premium",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
            readyInMinutes: 15,
            cuisines: ["American"]
          },
          {
            id: 4,
            title: "Sushi Tradicional",
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
            readyInMinutes: 30,
            cuisines: ["Japanese"]
          },
          {
            id: 5,
            title: "Paella Valenciana",
            image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop",
            readyInMinutes: 35,
            cuisines: ["Spanish"]
          },
          {
            id: 6,
            title: "Pad Thai Autêntico",
            image: "https://images.unsplash.com/photo-1559847844-d720000b3244?w=400&h=300&fit=crop",
            readyInMinutes: 20,
            cuisines: ["Thai"]
          }
        ];

        const mockCuisines = [
          "Italiana", "Japonesa", "Brasileira", "Mexicana", "Chinesa", "Tailandesa",
          "Indiana", "Francesa", "Mediterrânea", "Americana", "Árabe", "Espanhola",
          "Peruana", "Coreana", "Grega", "Turca", "Vegetariana", "Vegana"
        ];

        // Simular delay da API
        await new Promise(resolve => setTimeout(resolve, 1000));

        setFoodData({
          featuredDishes: mockRecipes,
          cuisineTypes: mockCuisines,
          isLoading: false,
          error: null
        });

      } catch (error) {
        setFoodData(prev => ({
          ...prev,
          isLoading: false,
          error: 'Erro ao carregar dados dos pratos'
        }));
      }
    };

    fetchFoodData();
  }, []);

  return foodData;
};

// Função para buscar receitas da API Spoonacular (para uso futuro com chave válida)
export const searchRecipes = async (query: string, apiKey: string) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=12&addRecipeInformation=true`
  );
  
  if (!response.ok) {
    throw new Error('Erro ao buscar receitas');
  }
  
  return response.json();
};

// Função para obter receitas aleatórias
export const getRandomRecipes = async (apiKey: string, number: number = 6) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${number}`
  );
  
  if (!response.ok) {
    throw new Error('Erro ao buscar receitas aleatórias');
  }
  
  return response.json();
};