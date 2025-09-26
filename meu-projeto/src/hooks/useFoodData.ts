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

const SPOONACULAR_API_KEY = '9b7d7acc85d3471dba3f2c0066a2b8e6';

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

        // Buscar receitas aleatórias da API Spoonacular
        const randomRecipesResponse = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${SPOONACULAR_API_KEY}&number=6&addRecipeInformation=true`
        );

        if (!randomRecipesResponse.ok) {
          throw new Error('Erro ao buscar receitas');
        }

        const randomRecipesData = await randomRecipesResponse.json();
        
        // Mapear dados da API para o formato esperado
        const featuredDishes: Recipe[] = randomRecipesData.recipes.map((recipe: any) => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          readyInMinutes: recipe.readyInMinutes,
          cuisines: recipe.cuisines || []
        }));

        // Lista de tipos de cozinha populares
        const cuisineTypes = [
          "Italiana", "Japonesa", "Brasileira", "Mexicana", "Chinesa", "Tailandesa",
          "Indiana", "Francesa", "Mediterrânea", "Americana", "Árabe", "Espanhola",
          "Peruana", "Coreana", "Grega", "Turca", "Vegetariana", "Vegana"
        ];

        setFoodData({
          featuredDishes,
          cuisineTypes,
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