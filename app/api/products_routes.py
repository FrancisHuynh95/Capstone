from flask import Blueprint, jsonify, redirect, request
from app.models import Product, db, User
from flask_login import login_required
from app.api.aws_helpers import get_unique_filename, upload_file_to_s3, remove_file_from_s3
from app.forms import ProductForm, UpdateProductForm


product_routes = Blueprint('product', __name__)

@product_routes.route('/')
def get_all_products():
    products = Product.query.all()
    product_list = [product.to_dict() for product in products]
    return jsonify(product_list)


@product_routes.route('/<int:id>')
def get_product_by_id(id):
    products = Product.query.get(id)
    return products.to_dict()

@product_routes.route('/new', methods=['POST'])
@login_required
def create_product():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        product1 = form.data['product_img1']
        product2 = form.data['product_img2']
        product3 = form.data['product_img3']


        product1.filename = get_unique_filename(product1.filename)
        product2.filename = get_unique_filename(product2.filename)
        product3.filename = get_unique_filename(product3.filename)


        upload1 = upload_file_to_s3(product1)
        upload2 = upload_file_to_s3(product2)
        upload3 = upload_file_to_s3(product3)


        upload = [upload1, upload2, upload3]

        for isUpload in upload:
            if 'url' not in isUpload:
                return isUpload['errors']

        aws_product_img1 = upload1['url']
        aws_product_img2 = upload2['url']
        aws_product_img3 = upload3['url']


        new_product = Product(
            name = form.data['name'],
            price = form.data['price'],
            description = form.data['description'],
            product_img1 = aws_product_img1,
            product_img2 = aws_product_img2,
            product_img3 = aws_product_img3,
            user_id = form.data['uploader_id']
        )

        if form.data['product_img4']:
            image = form.data['product_img4']
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)

            if 'url' not in upload:
                return upload['errors']
            product_image4 = upload['url']

            new_product.product_img4 = product_image4

        if form.data['product_img5']:
            image = form.data['product_img5']
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)

            if 'url' not in upload:
                return upload['errors']
            product_image5 = upload['url']

            new_product.product_img5 = product_image5

        print('new_product ========>', new_product)
        db.session.add(new_product)
        db.session.commit()
        return jsonify(new_product.to_dict())
    else:
        return "Bad Data"


@product_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_product(id):
    product = Product.query.get(id)
    db.session.delete(product)
    db.session.commit()

    return jsonify({
        'message': "Product has been deleted"
    })


@product_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_product(id):
    product = Product.query.get(id)
    form = UpdateProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print(form.data)
        if form.data['product_img1']:
            image = form.data['product_img1']
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)

            if 'url' not in upload:
                return upload['errors']
            product_image1 = upload['url']

            product.product_img1 = product_image1

        if form.data['product_img2']:
            image = form.data['product_img2']
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)

            if 'url' not in upload:
                return upload['errors']
            product_image2 = upload['url']

            product.product_img2 = product_image2

        if form.data['product_img3']:
            image = form.data['product_img3']
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)

            if 'url' not in upload:
                return upload['errors']
            product_image3 = upload['url']

            product.product_img3 = product_image3

        if form.data['product_img4']:
            image = form.data['product_img4']
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)

            if 'url' not in upload:
                return upload['errors']
            product_image4 = upload['url']

            product.product_img4 = product_image4

        if form.data['product_img5']:
            image = form.data['product_img5']
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)

            if 'url' not in upload:
                return upload['errors']
            product_image5 = upload['url']

            product.product_img5 = product_image5

        if form.data['name']:
            product.name = form.data['name']
        if form.data['price']:
            product.price = form.data['price']
        if form.data['description']:
            product.description = form.data['description']

        db.session.commit()
        return product.to_dict()
    else:
        print('BAD DATA WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
        return form.errors
