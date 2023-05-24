from app.models import db, Review, environment, SCHEMA
from sqlalchemy import text


def seeded_review(seeded_users, seeded_product):
    review1 = Review(
        user_id =  seeded_users[0].id,
        review = 'These switches are amazing! They definitey live up to their hype!',
        star_rating = 5,
        product_id = seeded_product[1].id
    )
    review2 = Review(
        user_id =  seeded_users[1].id,
        review = 'These switches look so nice! I really enjoy the green color.',
        star_rating = 5,
        product_id = seeded_product[3].id
    )
    review3 = Review(
        user_id =  seeded_users[2].id,
        review = 'These Gateron CJ switches definitey live up to the hype.. Extremely smooth from the factory. They are just way too clacky for me..',
        star_rating = 3,
        product_id = seeded_product[0].id
    )
    review4 = Review(
        user_id =  seeded_users[3].id,
        review = 'These gateron Oil Kings are great.. Extremely smooth from the factory. Highly Recommend.',
        star_rating = 5,
        product_id = seeded_product[3].id
    )
    review5 = Review(
        user_id =  seeded_users[4].id,
        review = 'These Hippo switches are okay.. not as great as the youtuber said',
        star_rating = 3,
        product_id = seeded_product[4].id
    )
    review6 = Review(
        user_id =  seeded_users[5].id,
        review = 'These tecsee Ruby switches are pretty cool! The color is a nice red color, butt he stem is yellow, which makes it seem like a mcdonalds switch',
        star_rating = 3,
        product_id = seeded_product[5].id
    )
    review7 = Review(
        user_id =  seeded_users[7].id,
        review = 'These Tangerine switches are worth it. Reviews online are on point',
        star_rating = 5,
        product_id = seeded_product[6].id
    )
    review8 = Review(
        user_id =  seeded_users[8].id,
        review = 'This tofu60 is great. Easy to build and the sound signature is great. Highly recommend!',
        star_rating = 5,
        product_id = seeded_product[7].id
    )
    review9 = Review(
        user_id =  seeded_users[5].id,
        review = 'This luna WKL kit is a great kit. I really enjoyed building this kit.',
        star_rating = 5,
        product_id = seeded_product[8].id
    )
    review10 = Review(
        user_id =  seeded_users[6].id,
        review = 'This fully assembled tofu kit is great. They did a great job assembling it. Great shipping times!',
        star_rating = 3,
        product_id = seeded_product[9].id
    )
    review11 = Review(
        user_id =  seeded_users[5].id,
        review = 'Keychron is a really big brand. I can also see why its so popular',
        star_rating = 4,
        product_id = seeded_product[10].id
    )
    review12 = Review(
        user_id =  seeded_users[4].id,
        review = 'The white on this cable is really white. The cable is really high quality.',
        star_rating = 5,
        product_id = seeded_product[11].id
    )
    review13 = Review(
        user_id =  seeded_users[5].id,
        review = 'The black color of this cable is really deep. I really like itm and im sure everyone else who will buy it will also enjoy.',
        star_rating = 5,
        product_id = seeded_product[12].id
    )
    review14 = Review(
        user_id =  seeded_users[6].id,
        review = 'The deep reds of this cable is nice.',
        star_rating = 4,
        product_id = seeded_product[13].id
    )
    review15 = Review(
        user_id =  seeded_users[7].id,
        review = 'The grey of this color seems like it goes with more colors. I like it',
        star_rating = 5,
        product_id = seeded_product[14].id
    )
    review16 = Review(
        user_id =  seeded_users[8].id,
        review = 'The rainbow color is really bright and vibrant.',
        star_rating = 4,
        product_id = seeded_product[15].id
    )
    review17 = Review(
        user_id =  seeded_users[7].id,
        review = 'This desk mat is really nice. I really enjoy the print',
        star_rating = 5,
        product_id = seeded_product[16].id
    )
    review18 = Review(
        user_id =  seeded_users[6].id,
        review = 'This yosmite desk mat has a great print. I also really like the deep blues and purples of this.',
        star_rating = 5,
        product_id = seeded_product[17].id
    )
    review19 = Review(
        user_id =  seeded_users[5].id,
        review = 'This coffee shop deskmat really sets the mood for my work area. The material is nice and large.',
        star_rating = 5,
        product_id = seeded_product[18].id
    )
    review20 = Review(
        user_id =  seeded_users[4].id,
        review = 'I really like cats.',
        star_rating = 5,
        product_id = seeded_product[19].id
    )
    review21 = Review(
        user_id =  seeded_users[5].id,
        review = 'Reminds me of my doge',
        star_rating = 5,
        product_id = seeded_product[20].id
    )
    review22 = Review(
        user_id =  seeded_users[6].id,
        review = 'I got this desk mat because the seal looked chubby. 5 stars for a chubby seal',
        star_rating = 5,
        product_id = seeded_product[21].id
    )
    review23 = Review(
        user_id =  seeded_users[7].id,
        review = 'The scenary on this deskmat looks nice. Gives me warm summer night vibe',
        star_rating = 5,
        product_id = seeded_product[22].id
    )
    review24 = Review(
        user_id =  seeded_users[8].id,
        review = 'The sunny day deskmat is a cool contrast from sunny to cloudy. it even has floating keycaps',
        star_rating = 5,
        product_id = seeded_product[23].id
    )
    review25 = Review(
        user_id =  seeded_users[8].id,
        review = 'I got this for my brother because he really likes space. The details on this keycap is really good',
        star_rating = 3,
        product_id = seeded_product[24].id
    )
    review26 = Review(
        user_id =  seeded_users[4].id,
        review = 'This fuji mountain keycap really fits my Japan asthetic keyboard build. I really like it',
        star_rating = 5,
        product_id = seeded_product[25].id
    )
    review27 = Review(
        user_id =  seeded_users[5].id,
        review = 'I like cats. I like boxes. I like this',
        star_rating = 5,
        product_id = seeded_product[26].id
    )
    review28 = Review(
        user_id =  seeded_users[8].id,
        review = 'Awesome. Fits my cat theme',
        star_rating = 5,
        product_id = seeded_product[26].id
    )
    next1 = Review(
        user_id =  seeded_users[0].id,
        review = 'These switches are amazing! They definitey live up to their hype!',
        star_rating = 5,
        product_id = seeded_product[2].id
    )
    next2 = Review(
        user_id =  seeded_users[1].id,
        review = 'These switches look so nice! I really enjoy the green color.',
        star_rating = 5,
        product_id = seeded_product[1].id
    )
    next3 = Review(
        user_id =  seeded_users[2].id,
        review = 'These Gateron CJ switches definitey live up to the hype.. Extremely smooth from the factory. They are just way too clacky for me..',
        star_rating = 3,
        product_id = seeded_product[1].id
    )
    next4 = Review(
        user_id =  seeded_users[5].id,
        review = 'Awesome Switches!',
        star_rating = 5,
        product_id = seeded_product[3].id
    )
    next5 = Review(
        user_id =  seeded_users[7].id,
        review = 'A youtuber switch... not great',
        star_rating = 2,
        product_id = seeded_product[4].id
    )
    next6 = Review(
        user_id =  seeded_users[4].id,
        review = 'Great switch, a little scratchy',
        star_rating = 3,
        product_id = seeded_product[5].id
    )
    next7 = Review(
        user_id =  seeded_users[6].id,
        review = 'The famous tangerine switches... do I need to say more?',
        star_rating = 5,
        product_id = seeded_product[6].id
    )
    next8 = Review(
        user_id =  seeded_users[5].id,
        review = 'The legendary tofu strikes again',
        star_rating = 5,
        product_id = seeded_product[7].id
    )
    next9 = Review(
        user_id =  seeded_users[8].id,
        review = 'A great TKL kit from KBD fans',
        star_rating = 5,
        product_id = seeded_product[8].id
    )
    next10 = Review(
        user_id =  seeded_users[2].id,
        review = 'Fully assembled. I didnt have to do a thing to it.',
        star_rating = 5,
        product_id = seeded_product[9].id
    )
    next11 = Review(
        user_id =  seeded_users[6].id,
        review = 'Keyboard is ok',
        star_rating = 3,
        product_id = seeded_product[10].id
    )
    next12 = Review(
        user_id =  seeded_users[5].id,
        review = 'Good white cable.',
        star_rating = 5,
        product_id = seeded_product[11].id
    )
    next13 = Review(
        user_id =  seeded_users[6].id,
        review = 'A quality cable that will go with almost any keyboard',
        star_rating = 5,
        product_id = seeded_product[12].id
    )
    next14 = Review(
        user_id =  seeded_users[7].id,
        review = 'A quality cable that will go with almost any keyboard',
        star_rating = 4,
        product_id = seeded_product[13].id
    )
    next15 = Review(
        user_id =  seeded_users[8].id,
        review = 'A quality cable that will go with almost any keyboard',
        star_rating = 5,
        product_id = seeded_product[14].id
    )
    next16 = Review(
        user_id =  seeded_users[1].id,
        review = 'Great color scheme',
        star_rating = 5,
        product_id = seeded_product[15].id
    )
    next17 = Review(
        user_id =  seeded_users[5].id,
        review = 'Nice size, and thickness',
        star_rating = 5,
        product_id = seeded_product[16].id
    )
    next18 = Review(
        user_id =  seeded_users[3].id,
        review = 'I really like the print',
        star_rating = 5,
        product_id = seeded_product[17].id
    )
    next19 = Review(
        user_id =  seeded_users[4].id,
        review = 'Great drawing',
        star_rating = 5,
        product_id = seeded_product[18].id
    )
    next20 = Review(
        user_id =  seeded_users[7].id,
        review = 'I dont like cats.. why did i get this???',
        star_rating = 2,
        product_id = seeded_product[19].id
    )
    next21 = Review(
        user_id =  seeded_users[8].id,
        review = 'Who doesnt like a doge',
        star_rating = 5,
        product_id = seeded_product[20].id
    )
    next22 = Review(
        user_id =  seeded_users[4].id,
        review = 'I thought this was a whale',
        star_rating = 2,
        product_id = seeded_product[21].id
    )
    next23 = Review(
        user_id =  seeded_users[5].id,
        review = 'Awesome deskmat',
        star_rating = 5,
        product_id = seeded_product[22].id
    )
    next24 = Review(
        user_id =  seeded_users[1].id,
        review = 'Cute',
        star_rating = 4,
        product_id = seeded_product[23].id
    )
    next25 = Review(
        user_id =  seeded_users[3].id,
        review = 'I got this as a present. I like space',
        star_rating = 3,
        product_id = seeded_product[24].id
    )
    next26 = Review(
        user_id =  seeded_users[5].id,
        review = 'I got this because it reminds me of my japan trip',
        star_rating = 5,
        product_id = seeded_product[25].id
    )
    next27 = Review(
        user_id =  seeded_users[6].id,
        review = 'I also like cats',
        star_rating = 5,
        product_id = seeded_product[26].id
    )
    next28 = Review(
        user_id =  seeded_users[7].id,
        review = 'Cool a cat!',
        star_rating = 5,
        product_id = seeded_product[26].id
    )

    all_reviews = [review1, review2, review3, review4, review5, review6, review7, review8, review9, review10, review11, review12, review13, review14, review15, review16, review17, review18, review19, review20, review21, review22, review23, review24, review25, review26, review27, review28, next1, next2, next3, next4, next5, next6, next7, next8, next9, next10, next11, next12, next13, next14, next15, next16, next17, next18, next19, next20, next21, next22, next23, next24, next25, next26, next27, next28]
    add_review = [db.session.add(review) for review in all_reviews]
    db.session.commit()

    return all_reviews


def undo_review():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(
            text('DELETE FROM reviews')
        )
    db.session.commit()
