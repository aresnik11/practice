class Deck < ApplicationRecord
    has_many :cards

    after_create do
        # cards have suit, value, deck_id
        makeCards(self.id)
    end

    def makeCards(id)
        suits = ["diamonds", "hearts", "spades", "clubs"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        for i in suits do
            for j in values do
                Card.create(suit: i, value: j, deck_id: id)
            end
        end
    end
end
