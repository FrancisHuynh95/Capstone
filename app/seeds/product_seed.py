from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text

def seed_products(seeded_users):
    product1: Product(
        name = 'Switches',
        price = 15.99,
        description = "great switches",
        product_image1 = 'Test imgURL',
        product_image2 = 'Test imgURL',
        product_image3 = 'Test imgURL',
        product_image4 = 'Test imgURL',
        product_image5 = 'Test imgURL',
        user_id = seeded_users[0]
    )
    product2: Product(
        name = 'Key Caps',
        price = 54.99,
        description = "great keycaps",
        product_image1 = 'Test2 imgURL',
        product_image2 = 'Test2 imgURL',
        product_image3 = 'Test2 imgURL',
        product_image4 = 'Test2 imgURL',
        product_image5 = 'Test2 imgURL',
        user_id = seeded_users[1]
    )
    product3: Product(
        name = 'Stabilizer',
        price = 24.99,
        description = "great stabs",
        product_image1 = 'Test3 imgURL',
        product_image2 = 'Test3 imgURL',
        product_image3 = 'Test3 imgURL',
        product_image4 = 'Test3 imgURL',
        product_image5 = 'Test3 imgURL',
        user_id = seeded_users[2]
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
