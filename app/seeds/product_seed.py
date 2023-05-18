from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text

def seed_products(seeded_users):
    product1 = Product(
        name = 'Gateron CJ Linear Switches',
        price = 42.00,
        description = "Ultra smooth linear switch. Gateron CJ Linear Switches offer unreveiled smoothness right out of the box!",
        product_img1 = 'https://keebsy.s3.us-west-1.amazonaws.com/f4459c9cdd834604bf611423ee8c5941.png',
        product_img2 = 'https://keebsy.s3.us-west-1.amazonaws.com/1f5427c2a24a46e29b8d5b69955af59e.png',
        product_img3 = 'https://keebsy.s3.us-west-1.amazonaws.com/54be0f5dd63842a4a7fdaa810900fad8.png',
        product_img4 = 'https://keebsy.s3.us-west-1.amazonaws.com/7fd3fc04254f4fd99069dbcc2ce408c0.png',
        product_img5 = 'https://keebsy.s3.us-west-1.amazonaws.com/428b3ecb6bbc4d0bbe13b51300d8fbe0.png',
        user = seeded_users[0]
    )
    product2 = Product(
        name = 'Gateron Box Ink V2 Switches',
        price = 59.99,
        description = "Gateron has updated their ink v2 molds with a box stem that helps with wobble. With the longer 20mm spring, the new Box Ink's provide a snappier return when typing. The semi-smokey housing makes them ideal for RGB setups, allowing for the light of the keyboard to shine through.",
        product_img1 = 'https://keebsy.s3.us-west-1.amazonaws.com/f45668eb2661478d85b4b1fe99171b4e.png',
        product_img2 = 'https://keebsy.s3.us-west-1.amazonaws.com/eb716ace9e7a4c9fa5e310e6f14ada76.png',
        product_img3 = 'https://keebsy.s3.us-west-1.amazonaws.com/3a1cf272614b4a4c838d04edddabaa9b.png',
        product_img4 = 'https://keebsy.s3.us-west-1.amazonaws.com/abf6d842441e4e9d81774abf7b7a4da1.png',
        product_img5 = 'https://keebsy.s3.us-west-1.amazonaws.com/0dc0e3a71bb148848e748b9b0feb7476.png',
        user = seeded_users[1]
    )
    product3 = Product(
        name = 'Gateron Luciola Linear Switches',
        price = 52.50,
        description = "Luciola switches use the same materials as Ink V2, but they also glow in the dark! Factory lubrication",
        product_img1 = 'https://keebsy.s3.us-west-1.amazonaws.com/6b7022559e2744268543eb4c131ada9d.png',
        product_img2 = 'https://keebsy.s3.us-west-1.amazonaws.com/973cdab81df24ecbb62a15d7b9049e2f.png',
        product_img3 = 'https://keebsy.s3.us-west-1.amazonaws.com/8b2e1947fc3b4939bac9dbf2cb651d20.png',
        product_img4 = 'https://keebsy.s3.us-west-1.amazonaws.com/f5545eca8c5c40dbb7c8003651cbd7c0.png',
        product_img5 = 'https://keebsy.s3.us-west-1.amazonaws.com/dab8372c183642a8a40533214ca56091.png',
        user = seeded_users[2]
    )

    all_products = [product1, product2, product3]
    add_products = [db.session.add(product) for product in all_products]
    db.session.commit()

    return all_products


def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(
            text('DELETE FROM products')
        )
    db.session.commit()
