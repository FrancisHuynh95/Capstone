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
    product4 = Product(
        name = 'Gateron Oil King',
        price = 45.50,
        description = "With Nylon PA66 top housing and an Ink V2 bottom housings, Oil King linear switches from Gateron are supremely smooth and thocky.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/c593fa10437e42db91cc3b456f25cc07.png',
        product_img2 = 'http://keebsy.s3.amazonaws.com/2bb24bddedfb4be5a6066bd96d6d729e.png',
        product_img3 = 'http://keebsy.s3.amazonaws.com/0ba2a483598b48ceb88c3d923561bc9f.png',
        product_img4 = 'http://keebsy.s3.amazonaws.com/05bbb0262e2d4e8d9077a2beeb7e8e61.png',
        product_img5 = 'http://keebsy.s3.amazonaws.com/6357b3304e914d7fa5cc292557219a44.png',
        user = seeded_users[2]
    )
    product5 = Product(
        name = 'Hippo Linear Switches',
        price = 36.40,
        description = "This linear features the first UHMWPE stem produced by Gateron. Unlubed from factory and very smooth.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/2b564b1d9c4b42ba8c1f2630ea46ae45.png',
        product_img2 = 'http://keebsy.s3.amazonaws.com/fc8a147ffe014c618250400810a7929b.png',
        product_img3 = 'http://keebsy.s3.amazonaws.com/6c1518a6a6814bea9a789963fb246ab8.png',
        product_img4 = 'http://keebsy.s3.amazonaws.com/f17df3c1bd7248daa5f04b8e673a2d8b.png',
        product_img5 = 'http://keebsy.s3.amazonaws.com/7561df412502453bb211135b8994331f.png',
        user = seeded_users[1]
    )
    product6 = Product(
        name = 'Tecsee Ruby V2 Linear Switches',
        price = 37.80,
        description = "Ruby V2 linear switches from Tecsee feature an improved UHMWPE stem with a smoother feel and satisfying sound.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/a75e0ae7c6ec49da885a65c68c4c3ec0.png',
        product_img2 = 'http://keebsy.s3.amazonaws.com/59c547cb209e4927ab895ae3fe78df55.png',
        product_img3 = 'http://keebsy.s3.amazonaws.com/77c0b2f6ea264a459774da0665c77422.png',
        product_img4 = 'http://keebsy.s3.amazonaws.com/86c9b71d61de46b5b705b8d009d4a07a.png',
        product_img5 = 'http://keebsy.s3.amazonaws.com/2eb0912dfe30479f813354cfc904679f.png',
        user = seeded_users[0]
    )
    product7 = Product(
        name = 'C³Equalz X TKC Tangerine Linear Switches',
        price = 50.00,
        description = "TKC Tangerine switches are linear switches made in collaboration with C³Equalz. Popular for its unique and distinguishable color design without compromising its smooth keypress. Also known as tangies.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/060b2c970890486f810b696faa4b7265.jpg',
        product_img2 = 'http://keebsy.s3.amazonaws.com/c8b2f48685f94c0f9c0251d64ace46e6.jpg',
        product_img3 = 'http://keebsy.s3.amazonaws.com/5088cae39015499e9b4d86bc3fcc72fe.jpg',
        product_img4 = 'http://keebsy.s3.amazonaws.com/edb40aa460be478b8797614fa455944b.jpg',
        product_img5 = 'http://keebsy.s3.amazonaws.com/6b3fc8abc7f847f0b7fa20c0ee3e8806.jpg',
        user = seeded_users[0]
    )
    product8 = Product(
        name = 'TOFU60 2.0 KIT',
        price = 159.00,
        description = "Aluminum case (anodized and electrostatically coated)PC/ Aluminum/ Fiberglass/ Carbon fiber plateHot-swappable PCB, QMK firmware, VIA support, without per-key RGBBrass weight (transparent E-coating after sandblasting)Top mount, silicone socks, silicone bowl, 3 types of structural supportFlex cut PCB, thickness 1.2 mmUSB-C daughterboard support≈1.4 kg before assemblyLength: 294.7 mm, width: 115.7 mm, front: 18.5 mm, back: 32.5 mm, typing angle: 7°Design by KBDfans",
        product_img1 = 'http://keebsy.s3.amazonaws.com/862b598944874a6297b79c3d87476ed1.jpg',
        product_img2 = 'http://keebsy.s3.amazonaws.com/9c1bba1d239b441bb2f937f6569d9355.jpg',
        product_img3 = 'http://keebsy.s3.amazonaws.com/a36a9398e2c84f379523016243ad983d.jpg',
        product_img4 = 'http://keebsy.s3.amazonaws.com/d1de132f1bfb48528559d8306bf771f2.jpg',
        product_img5 = 'http://keebsy.s3.amazonaws.com/d187a88f8fa444f591549506a850b494.jpg',
        user = seeded_users[0]
    )
    product9 = Product(
        name = 'Luna 80 WKL',
        price = 435.00,
        description = "Screwless design. The Luna 80 WKL is a gasket mounted keyboard. The windows-less design keeps it so you don't need to worry about pressing that pesky button during a long gaming session!",
        product_img1 = 'http://keebsy.s3.amazonaws.com/25f1e7d825a14e24975b98ecb2051d23.jpg',
        product_img2 = 'http://keebsy.s3.amazonaws.com/3f926b5d48fb46afbac9fb2b91837d0d.jpg',
        product_img3 = 'http://keebsy.s3.amazonaws.com/106d5892b10541aa9d811578a66afa3f.jpg',
        product_img4 = 'http://keebsy.s3.amazonaws.com/5c25a23da7c5440e8d95f37a8c917241.jpg',
        product_img5 = 'http://keebsy.s3.amazonaws.com/d9c37b9b08894b35b815dc620dab0650.jpg',
        user = seeded_users[2]
    )
    product10 = Product(
        name = 'Tofu 65 Fully Assembled',
        price = 210.00,
        description = "This fully assembled TOFU 65 comes with a hotswappable PCB with VIA support. Full ANSI layout. Plate is a polycarbonate. This also includes cherry-profile cement grey Japanese PBT Dye-Sub keycaps, as well as cherry screw in stabilizers.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/71c5ed639fa64947ba60cd61f6e7483c.jpg',
        product_img2 = 'http://keebsy.s3.amazonaws.com/1d0c45461ae0453eb29b6206ba50969c.jpg',
        product_img3 = 'http://keebsy.s3.amazonaws.com/d250553a4776439f88b71d527a4545e4.jpg',
        product_img4 = 'http://keebsy.s3.amazonaws.com/0d6b135f51ca4fd0b461f92e8a434eff.jpg',
        product_img5 = 'http://keebsy.s3.amazonaws.com/24dad646cdf444428f6635ed9668d602.jpg',
        user = seeded_users[1]
    )

    all_products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10]
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
