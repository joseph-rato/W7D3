class Api::PokemonsController < ApplicationController
  def index
    @pokemons = Pokemon.all
  end
  # def create
  #   @pokemon = Pokemon.new(pokemon_params)
  #   if @pokemon.save
  #     render :show
  #   else
  #     render
  #   end
  # end
  def show
    @pokemon = Pokemon.find(params[:id])
  end
end
