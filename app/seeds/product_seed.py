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
        description = "Gateron has updated their ink v2 molds with a box stem that helps with wobble. With the longer 20mm spring, the new Box Ink's provide a snappier return when typing. The semi-smokey housing makes them ideal for RGB setups.",
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
        description = "Aluminum case PC/ Aluminum/ Fiberglass/ Carbon fiber plateHot-swappable PCB, QMK firmware, VIA support, Brass weight (transparent E-coating after sandblasting)Top mount, silicone socks, silicone bowl, Flex cut PCB, USB-C daughterboard.",
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
    product11 = Product(
        name = 'Keychron Q10 75 Kit',
        price = 195.00,
        description = "The Keychron Q10 is a 75% Alice aluminum keyboard that is hot-swappable and works with VIA/QMK.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/ca81ed4aa5744085beffa44981b1875f.png',
        product_img2 = 'http://keebsy.s3.amazonaws.com/6f5494201a174af5b47f746fc13f6d86.png',
        product_img3 = 'http://keebsy.s3.amazonaws.com/5a908a0563d54028a156c8cda83abc14.png',
        product_img4 = 'http://keebsy.s3.amazonaws.com/9281983601af4fdeae3117f34f36f1a6.png',
        product_img5 = 'http://keebsy.s3.amazonaws.com/f643087022c94e8fad2489bfcf9aa2e6.png',
        user = seeded_users[2]
    )
    product12 = Product(
        name = 'White Coiled Cable',
        price = 49.99,
        description = "Elevate your keyboard setup to the next level with the CableMod Pro Keyboard Cable. Made for keyboards with a USB-C port, this hand-made keyboard cable is sleeved with both ModFlex and ModMesh sleeving",
        product_img1 = 'http://keebsy.s3.amazonaws.com/b5ae07e24e984610991a3abc54889e5a.jpg',
        product_img2 = 'http://keebsy.s3.amazonaws.com/478ce31803cd481f9cbd332bc0f3ef75.jpg',
        product_img3 = 'http://keebsy.s3.amazonaws.com/8db0c20e279b4c4090a5d6c6668e2905.jpg',
        user = seeded_users[2]
    )
    product13 = Product(
        name = 'Black Coiled Cable',
        price = 49.99,
        description = "Elevate your keyboard setup to the next level with the CableMod Pro Keyboard Cable. Made for keyboards with a USB-C port, this hand-made keyboard cable is sleeved with both ModFlex and ModMesh sleeving",
        product_img1 = 'http://keebsy.s3.amazonaws.com/850287cb7ee5486890c946a3a5a0fb5c.jpg',
        product_img2 = 'http://keebsy.s3.amazonaws.com/11d186b04dcd4f13a3db1874205414b9.jpg',
        product_img3 = 'http://keebsy.s3.amazonaws.com/e11418280cf54a2b8ae0006c1c21ba39.jpg',
        user = seeded_users[2]
    )
    product14 = Product(
        name = 'Red Coiled Cable',
        price = 49.99,
        description = "Elevate your keyboard setup to the next level with the CableMod Pro Keyboard Cable. Made for keyboards with a USB-C port, this hand-made keyboard cable is sleeved with both ModFlex and ModMesh sleeving",
        product_img1 = 'http://keebsy.s3.amazonaws.com/7b2f93ae5c6c48bda15885c64703b793.jpg',
        product_img2 = 'http://keebsy.s3.amazonaws.com/77e5c70763f945178f20d51ce82c063b.jpg',
        product_img3 = 'http://keebsy.s3.amazonaws.com/d6911ab0b015429cb09ac5f1cad54d65.jpg',
        user = seeded_users[2]
    )
    product15 = Product(
        name = 'Grey Coiled Cable',
        price = 49.99,
        description = "Elevate your keyboard setup to the next level with the CableMod Pro Keyboard Cable. Made for keyboards with a USB-C port, this hand-made keyboard cable is sleeved with both ModFlex and ModMesh sleeving",
        product_img1 = 'http://keebsy.s3.amazonaws.com/a56d610010b944a8801774de5fd4acda.jpg',
        product_img2 = 'http://keebsy.s3.amazonaws.com/3ee9821af31e4ee19763e180fc363434.jpg',
        product_img3 = 'http://keebsy.s3.amazonaws.com/fa4c4287a2954ce584da2514e832ca0d.jpg',
        user = seeded_users[2]
    )
    product16 = Product(
        name = 'Rainbow Coiled Cable',
        price = 49.99,
        description = "Elevate your keyboard setup to the next level with the CableMod Pro Keyboard Cable. Made for keyboards with a USB-C port, this hand-made keyboard cable is sleeved with both ModFlex and ModMesh sleeving",
        product_img1 = 'http://keebsy.s3.amazonaws.com/0c5ed8b082b045fe8cd2da0634bdabba.jpg',
        product_img2 = 'http://keebsy.s3.amazonaws.com/6cabaadd61c64ad7b5093888ba8cfc88.jpg',
        product_img3 = 'http://keebsy.s3.amazonaws.com/4879d0bf285f404c93605b51e3776f91.jpg',
        user = seeded_users[2]
    )
    product17 = Product(
        name = 'Spring Time Desk Mat',
        price = 23.99,
        description = "Made in collaboration with Hipyo Tech, the Spring Time mat brings life and color to any setup. Art by Eager Sprout.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/fa6955645bf04641a4610c944276dfb6.png',
        product_img2 = 'http://keebsy.s3.amazonaws.com/c9a31ad69dc84f60b470a2c7cfc26b92.png',
        product_img3 = 'http://keebsy.s3.amazonaws.com/199e698d6bb24f718298964e39172225.png',
        user = seeded_users[1]
    )
    product18 = Product(
        name = 'Yosemite Desk Mat',
        price = 23.99,
        description = "An abstract design on the mountains surrounding Yosemite, this vibrant desk mat looks great with all setups. Dimensions: 900x400x4mm",
        product_img1 = 'http://keebsy.s3.amazonaws.com/0d95c8d3dd354db487cf11a9ebddff49.png',
        product_img2 = 'http://keebsy.s3.amazonaws.com/a980d5291e414c44a6f12cfc4fff0a9d.png',
        product_img3 = 'http://keebsy.s3.amazonaws.com/9e539f306ce44ab18a4343e527889072.png',
        user = seeded_users[1]
    )
    product19 = Product(
        name = 'Coffee Shop Desk Mat',
        price = 23.99,
        description = "Up your productivity with a sip of inspiration—the Coffee Shop desk mat by Hipyo Tech! 900x400x4mm.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/24a06816b0a848848e4ef205ec627881.png',
        product_img2 = 'http://keebsy.s3.amazonaws.com/25455de2d7734f45a6fabcaec1e607e1.png',
        product_img3 = 'http://keebsy.s3.amazonaws.com/f03a3b9d92504bc1aedeed296c1edf41.png',
        user = seeded_users[1]
    )
    product20 = Product(
        name = 'Sleeping Kitty Desk Mat',
        price = 23.99,
        description = "Napping and kittens, what's better than that? Add this colorful desk mat to complete your purr-fect setup! Dimensions: 900 x 400 x 4mm.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/cc015616e1a74aed84caaa2fb03054ca.png',
        product_img2 = 'http://keebsy.s3.amazonaws.com/a7e13566ab7b43c0a8c0054779b136d6.png',
        product_img3 = 'http://keebsy.s3.amazonaws.com/7735d9033d0b45e387b6b7e6d216a0f7.png',
        user = seeded_users[1]
    )
    product21 = Product(
        name = 'Shibe Desk Mat',
        price = 23.99,
        description = "Designed by the multi-talented Apiary Keyboards, this desk mat features an adorable shiba that will make your setup stand out. Dimensions: 900 x 400 x 4mm.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/69afccef95494d6e8a9fcf262413b09d.png',
        product_img2 = 'http://keebsy.s3.amazonaws.com/c54d5e5db49541b7ab3a2f244a6b05dc.png',
        product_img3 = 'http://keebsy.s3.amazonaws.com/15698032561444338b1dc704a5ce0b7a.png',
        user = seeded_users[0]
    )
    product22 = Product(
        name = 'Seal Desk Mat',
        price = 23.99,
        description = "Designed by the multi-talented Apiary Keyboards, this desk mat features an adorable seal that will make your setup stand out. Dimensions: 900 x 400 x 4mm.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/a83f855c0887413a8c47ddc2b01b1f19.png',
        product_img2 = 'http://keebsy.s3.amazonaws.com/ffa3e18024f042bfbfcf88ffeba13d4c.png',
        product_img3 = 'http://keebsy.s3.amazonaws.com/3dc475ee158e4d4f9d9561fad6dff2f0.png',
        user = seeded_users[0]
    )
    product23 = Product(
        name = 'Pixel Comet Desk Mat',
        price = 23.99,
        description = "Made in collaboration with Hipyo Tech and pixel artist Eager Sprout, the Pixel Comet desk mat features a pixelated purple sky that will make your set up stand out! Dimensions: 900 x 400 x 4mm.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/a30c5e002ff74b339a79396d94cb2594.png',
        product_img2 = 'http://keebsy.s3.amazonaws.com/1d2fc32744e046fa9b6cdebc9f41a15d.png',
        product_img3 = 'http://keebsy.s3.amazonaws.com/60825b1f328c401aa08f1b2bd77cfefb.png',
        user = seeded_users[0]
    )
    product24 = Product(
        name = 'Sunny Day Desk Mat',
        price = 23.99,
        description = "Large desk mat, featuring a Sunny Day theme with pink and blue hues. The perfect combination for your RGB desk set up! Designed by Addmeonebay. Dimensions: 900 x 400 x 4mm.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/b785272dc2704888b32478c2a7cc0e58.png',
        product_img2 = 'http://keebsy.s3.amazonaws.com/256d46e60ccb4d43994ace6f5a3f2c4e.png',
        product_img3 = 'http://keebsy.s3.amazonaws.com/15403a10c0b14071b1a90c866040da21.png',
        user = seeded_users[0]
    )
    product25 = Product(
        name = 'Interstellar Artisan Keycap',
        price = 40.99,
        description = "Interstellar Artisan KeycapIs there anything more beautiful and awe-inspiring than the great cosmos? Despite the advancements in space science, what lies beyond the confines of our planet continues to be a mystery.",
        product_img1 = 'http://keebsy.s3.amazonaws.com/a359248b93554ad1a1f4cdec613bab09.jpg',
        product_img2 = 'http://keebsy.s3.amazonaws.com/93da94b21e244b76be94f0f75b06b445.jpg',
        product_img3 = 'http://keebsy.s3.amazonaws.com/c673ae28bd16494b992d33af9ec7bc9f.jpg',
        user = seeded_users[1]
    )
    product26 = Product(
        name = 'Fuji Mountain Artistan keycap',
        price = 20.99,
        description = "Fuji Mountain keycap for cherry MX keyboard, Custom keycap SA profile keycap for gaming keyboard, Custom mechanical keyboard,Christmas Gifts",
        product_img1 = 'http://keebsy.s3.amazonaws.com/ea90f4598cb741839b169bd63cc7df73.jpg',
        product_img2 = 'http://keebsy.s3.amazonaws.com/ea5de5004ce14cf08fd2fd598c5f5ad9.jpg',
        product_img3 = 'http://keebsy.s3.amazonaws.com/602b9000820b46d48e5bb90e5aa21149.jpg',
        user = seeded_users[2]
    )
    product27 = Product(
        name = 'White Cat Artistan Keycap',
        price = 9.99,
        description = "White Cat Keycaps Keycap set Esc Keycap Handmade SA and OEM Keycaps Custom Kitty Resin Artisan Keycap For Cherry MX Mechanical Keyboard cap",
        product_img1 = 'http://keebsy.s3.amazonaws.com/28e0f9634c1245eeac0c766d6ad19d56.jpg',
        product_img2 = 'http://keebsy.s3.amazonaws.com/f4b1b2c524b34f5d82371b1d70e2e327.jpg',
        product_img3 = 'http://keebsy.s3.amazonaws.com/ec909bdfb45a48c2871453a4e57e71d4.jpg',
        user = seeded_users[0]
    )

    all_products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25, product26, product27]
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
