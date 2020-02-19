class CardsController < ApplicationController
  def index
    deck_id = params[:deck_id]

    wanted_cards = Card.all.where(deck_id: deck_id)

    # wanted_cards = Card.all.filter do |card|
    #   card.deck_id == deck_id.to_i
    # end

    render json: wanted_cards
  end
end
