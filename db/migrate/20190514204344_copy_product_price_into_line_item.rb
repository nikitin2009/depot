class CopyProductPriceIntoLineItem < ActiveRecord::Migration[5.2]
  def up
    LineItem.all.each do |item|
      item.price = item.product.price
      item.save!
    end
  end

  def down
    LineItem.all.each do |item|
      item.price = nil
      item.save!
    end
  end
end
