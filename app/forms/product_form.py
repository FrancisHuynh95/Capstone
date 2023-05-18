from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.api.aws_helpers import ALLOWED_IMAGES

class ProductForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    product_img1 = FileField("product image", validators=[FileRequired(), FileAllowed(list(ALLOWED_IMAGES))])
    product_img2 = FileField("product image", validators=[FileRequired(), FileAllowed(list( ALLOWED_IMAGES))])
    product_img3 = FileField("product image", validators=[FileRequired(), FileAllowed(list( ALLOWED_IMAGES))])
    product_img4 = FileField("product image", validators=[FileRequired(), FileAllowed(list( ALLOWED_IMAGES))])
    product_img5 = FileField("product image", validators=[FileRequired(), FileAllowed(list( ALLOWED_IMAGES))])
    uploader_id = IntegerField('Uploader Id', validators=[DataRequired()])
